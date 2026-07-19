# MFHFBs NBA Projections

### 🔗 [Live-Seite ansehen](https://pizzaratops.github.io/MFHFBs-NBA-Projections/)

*(Link ist aktiv, sobald GitHub Pages im Repo eingeschaltet ist: Settings → Pages → Branch `main` → Root. Bis dahin führt er ggf. noch ins Leere.)*

---

Eigenständige Testseite für Beyaz' manuelle Dynasty-Projektionsmethodik:
Pro-Minute-Produktion der letzten Saison(s) hochrechnen auf projizierte
Minuten für die kommende Saison — live im Browser, ohne Excel.

## Wie die Berechnung funktioniert

1. **Rohdaten** (`data/`): Season-Per-Game-Stats-Export (z.B. aus BBM).
2. **Build-Skript** (`scripts/build-players-data.py`) rechnet jede Stat-Kategorie
   auf eine Pro-Minute-Rate runter: `Rate = Stat/Spiel ÷ Minuten/Spiel`.
3. **`players-data.js`** enthält das Ergebnis als JS-Array, das `index.html`
   direkt lädt.
4. Auf der Seite trägst du projizierte Minuten pro Spieler ein — alle Stats
   (PTS, REB, AST, STL, BLK, 3PM, FG%, FT%, TOV) werden sofort neu berechnet:
   `Projizierter Stat = Rate × projizierte Minuten`.

## Nutzung

```bash
# Rohdaten aller Saisons neu einlesen und players-data.js neu bauen
cd scripts
python3 build-players-data.py ../players-data.js \
  2018-19=../data/Player_Rankings_18-19.xls \
  2019-20=../data/Player_Rankings_19-20.xls \
  2020-21=../data/Player_Rankings_20-21.xls \
  2021-22=../data/Player_Rankings_21-22.xls \
  2022-23=../data/Player_Rankings_22-23.xls \
  2023-24=../data/Player_Rankings_23-24.xls \
  2024-25=../data/Player_Rankings_24-25.xls \
  2025-26=../data/Player_Rankings_25-26.xls
```

Neue Saison hinzufügen: einfach eine weitere `<label>=<datei.xls>`-Angabe an
den Befehl anhängen — Reihenfolge der Angaben ist egal, das Skript sortiert
selbst chronologisch anhand des Labels.

Danach `index.html` einfach im Browser öffnen oder per GitHub Pages hosten
(Settings → Pages → Branch `main`, Root-Verzeichnis).

## Struktur

```
index.html                  Testseite (Tabelle, Suche, Minuten-Eingabe)
players-data.js              generierte Pro-Minute-Raten (Output des Build-Skripts)
scripts/build-players-data.py  Konvertierungsskript Rohdaten → players-data.js
data/                        Rohdaten-Exports (Season-Stats)
```

## Aktueller Stand

- **Saisons geladen:** 2018–19 bis 2025–26, 8 Saisons durchgehend
  (1.278 Spieler gesamt, nicht jeder Spieler hat in jeder Saison Daten).
  Lücke bei 2017–18, für später vorgemerkt.
- **Gewichtung:** Zwei aktive Slider auf der Seite ("vorletztes Jahr" /
  "letztes Jahr", Stufen 1 / 1,25 / 1,5 / 1,75 / 2). Für jeden Spieler
  gelten die beiden **jüngsten Saisons, in denen er Daten hat** als
  "letztes" bzw. "vorletztes" Jahr — ältere Saisons zählen automatisch fix
  mit Gewicht 1. Damit funktioniert das auch für Spieler mit Lücken
  (z.B. Verletzungsjahr) korrekt.
- **Rookies:** noch kein automatischer Pfad — Minuten + Rate werden vorerst
  manuell eingetragen.
- **Noch nicht bei TTHQ integriert** — bewusst als eigenständiges Repo, bis
  die Methodik stabil ist.

## Changelog

### 2026-07-19 (3)
- 5 weitere Saisons eingespeist: 2018–19, 2019–20, 2020–21, 2021–22, 2022–23
  → jetzt 8 durchgehende Saisons (2018–19 bis 2025–26), 1.278 Spieler.
- Alle Rohdaten stammen aus derselben "Player Rankings"-Exportfamilie (volle
  Makes-Spalten `fg/g`/`ft/g` direkt vorhanden, kein Ableiten nötig) —
  ersetzt die vorher erwogene Nutzung der `BBM_Rankings_Redraft`-Dateien aus
  dem TTHQ-Projekt, die ein leicht anderes Spaltenschema hatten.
- Lücke bei 2017–18 bewusst offen gelassen, kommt später nach.

### 2026-07-19 (2)
- Zwei weitere Saisons eingespeist: 2023–24 und 2024–25 (zusätzlich zu
  2025–26) → jetzt 802 Spieler mit bis zu 3 Saisons Historie.
- Build-Skript auf Mehrjahres-Verarbeitung umgebaut: `players-data.js`
  speichert jetzt pro Spieler ein `seasons`-Objekt mit einer Rate pro
  Saison, statt einer einzelnen Rate.
- Gewichtungs-Slider aktiviert: "vorletztes Jahr" / "letztes Jahr" wirken
  sich jetzt live auf die Berechnung aus (Stufen 1 / 1,25 / 1,5 / 1,75 / 2),
  ältere Saisons zählen fix mit Gewicht 1.
- Live-Link ganz oben im README ergänzt.

### 2026-07-19 (1)
- Erste Testversion: `index.html` + `players-data.js` aus einer Saison
  (2025–26) gebaut.
- Build-Skript (`scripts/build-players-data.py`) erstellt, um zukünftige
  Rohdaten-Updates reproduzierbar einzulesen.
- Gewichtungs-Slider (UI) für zukünftige Mehrjahres-Gewichtung vorbereitet,
  aktuell deaktiviert (nur eine Saison an Daten vorhanden).
