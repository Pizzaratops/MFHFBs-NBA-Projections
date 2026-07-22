"""
MFHFBs NBA Projections — ADP Build Script
------------------------------------------------------------
Liest ALLE Fantrax "Draft Results"-CSV-Exporte aus data/draft-results/
ein (H2H, Roto, Points — Spaltenschema ist identisch, wird nicht
unterschieden) und berechnet pro Spieler den ADP (Average Draft
Position) über alle eingelesenen Ligen hinweg.

Aggregiert wird über die stabile Fantrax "Player ID" (robust gegen
Schreibweisen-Unterschiede zwischen Exporten). Der finale Key in
adp-data.js ist trotzdem der NORMALISIERTE Spielername — dieselbe
Normalisierung wie mfhfbNormalizeName() in assets/shared.js (Akzente
entfernt, lowercase, Punkte/Apostrophe/Bindestriche raus, "Jr."/"II"
am Ende ignoriert). Damit matcht draft.html jeden Spieler automatisch
gegen PLAYER_RATES, ohne Zusatz-Mapping.

Nutzung (keine Argumente nötig):
    cd scripts
    python3 build-adp-data.py

Neue Draft Results hinzufügen: CSV-Datei einfach in data/draft-results/
ablegen (Dateiname ist egal) und das Skript erneut laufen lassen.
Kein Code-Anfassen nötig — auch nicht bei mehreren neuen Results pro
Woche.

Erwartete Spalten (Fantrax "Draft Results"-Export):
    "Player ID","Round","Pick","Ov Pick","Pos","Player","Team","Fantasy Team","Time (CEST)"
"""

import csv
import glob
import json
import os
import re
import sys
import unicodedata

INPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "draft-results")
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "..", "adp-data.js")


def normalize_name(name: str) -> str:
    """Identische Regeln wie mfhfbNormalizeName() in assets/shared.js —
    NICHT unabhängig ändern, sonst matchen ADP_DATA und PLAYER_RATES
    nicht mehr gegeneinander."""
    name = name or ""
    name = unicodedata.normalize("NFD", name)
    name = "".join(c for c in name if unicodedata.category(c) != "Mn")  # Akzente entfernen
    name = name.lower()
    name = re.sub(r"[.'-]", "", name)  # Punkte, Apostrophe, Bindestriche
    name = re.sub(r"\s+jr$", "", name)  # "Jr." am Ende ignorieren
    name = re.sub(r"\s+ii+$", "", name)  # "II"/"III" am Ende ignorieren
    name = re.sub(r"\s+", " ", name).strip()
    return name


def build() -> None:
    files = sorted(glob.glob(os.path.join(INPUT_DIR, "*.csv")))
    if not files:
        print(f"Keine CSV-Dateien in {INPUT_DIR} gefunden.")
        print('Lege Fantrax "Draft Results"-Exporte dort ab und starte das Skript erneut.')
        sys.exit(1)

    print(f"Gefundene Draft-Result-Dateien: {len(files)}")

    # player_id -> {name, team, pos, picks: [ov_pick, ...]}
    players = {}
    leagues_processed = 0
    skipped_rows = 0

    for path in files:
        with open(path, encoding="utf-8-sig", newline="") as fh:
            rows = list(csv.DictReader(fh))
        if not rows:
            continue
        leagues_processed += 1

        for row in rows:
            pid = row.get("Player ID")
            name = row.get("Player")
            try:
                ov_pick = int(row.get("Ov Pick", ""))
            except (TypeError, ValueError):
                ov_pick = None

            if not pid or not name or ov_pick is None:
                skipped_rows += 1  # meist unvollständige letzte Runde eines Drafts
                continue

            entry = players.setdefault(
                pid, {"name": name, "team": row.get("Team", ""), "pos": row.get("Pos", ""), "picks": []}
            )
            # Name/Team/Pos vom jeweils NEUESTEN Datensatz übernehmen
            # (spiegelt Trades/aktuelle Teams besser wider als der erste Treffer)
            entry["name"] = name
            entry["team"] = row.get("Team") or entry["team"]
            entry["pos"] = row.get("Pos") or entry["pos"]
            entry["picks"].append(ov_pick)

    if skipped_rows:
        print(f"Warnung: {skipped_rows} Zeile(n) übersprungen (fehlende Felder, z.B. unvollständige letzte Runde).")

    adp_data = {}
    for pid, p in players.items():
        picks = p["picks"]
        adp = round(sum(picks) / len(picks), 1)
        key = normalize_name(p["name"])
        adp_data[key] = {
            "name": p["name"],
            "adp": adp,
            "count": len(picks),
            "min": min(picks),
            "max": max(picks),
            "team": p["team"],
            "pos": p["pos"],
        }

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write("// MFHFBs NBA Projections — ADP-Daten (Output von scripts/build-adp-data.py)\n")
        f.write(f"// Quelle: {leagues_processed} Draft Result CSV(s) aus data/draft-results/\n")
        f.write("// Key = normalisierter Spielername (siehe mfhfbNormalizeName in assets/shared.js)\n")
        f.write("// NICHT MANUELL BEARBEITEN — neue CSV in data/draft-results/ legen, Skript erneut laufen lassen.\n")
        f.write("const ADP_DATA = ")
        f.write(json.dumps(adp_data, indent=1, ensure_ascii=False))
        f.write(";\n")

    sorted_list = sorted(adp_data.values(), key=lambda d: d["adp"])
    print(f"\n{len(adp_data)} Spieler aggregiert aus {leagues_processed} Ligen -> {OUTPUT_PATH}")
    print("\nTop 10 nach ADP:")
    for i, p in enumerate(sorted_list[:10], 1):
        print(f"  {i}. {p['name']:<28} ADP {p['adp']:>5.1f}  (n={p['count']}, range {p['min']}-{p['max']})")


if __name__ == "__main__":
    build()
