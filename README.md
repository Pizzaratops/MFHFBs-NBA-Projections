# MFHFBs NBA Projections

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
# Rohdaten neu einlesen und players-data.js neu bauen
cd scripts
python3 build-players-data.py ../data/<neue-datei>.xls ../players-data.js
```

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

- **Basis-Saison:** 2025–26 (582 Spieler)
- **Gewichtung:** Zwei Slider auf der Seite ("vorletztes Jahr" / "letztes Jahr",
  Stufen 1 / 1,25 / 1,5 / 1,75 / 2) sind vorbereitet, aber noch deaktiviert —
  sie werden aktiv, sobald eine zweite Saison eingespeist wird.
- **Rookies:** noch kein automatischer Pfad — Minuten + Rate werden vorerst
  manuell eingetragen.
- **Noch nicht bei TTHQ integriert** — bewusst als eigenständiges Repo, bis
  die Methodik stabil ist.

## Changelog

### 2026-07-19
- Erste Testversion: `index.html` + `players-data.js` aus einer Saison
  (2025–26) gebaut.
- Build-Skript (`scripts/build-players-data.py`) erstellt, um zukünftige
  Rohdaten-Updates reproduzierbar einzulesen.
- Gewichtungs-Slider (UI) für zukünftige Mehrjahres-Gewichtung vorbereitet,
  aktuell deaktiviert (nur eine Saison an Daten vorhanden).
