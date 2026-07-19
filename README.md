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
   und `teams.html` laden.
4. **Roster-Skript** (`scripts/fetch-rosters.mjs`) zieht 1x täglich (via
   GitHub Action) die aktuellen Kader aller 30 Teams von ESPN und schreibt
   sie nach `rosters-data.js`.
5. Auf der **Teams-Seite** (`teams.html`) trägst du pro Spieler projizierte
   Minuten ein — landet in `localStorage`, geteilt mit `index.html`.
6. Die **Projections-Seite** (`index.html`) zeigt links deine Projektion
   (Rate × deine Minuten) und rechts die realen Season-Averages zum
   Vergleich, live sortierbar/rankbar.

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

# Aktuelle Roster von ESPN ziehen (Node >= 18, keine Abhängigkeiten)
node fetch-rosters.mjs
```

Neue Saison hinzufügen: einfach eine weitere `<label>=<datei.xls>`-Angabe an
den Befehl anhängen — Reihenfolge der Angaben ist egal, das Skript sortiert
selbst chronologisch anhand des Labels.

Danach `index.html` einfach im Browser öffnen oder per GitHub Pages hosten
(Settings → Pages → Branch `main`, Root-Verzeichnis).

### Roster-Automatisierung einrichten

Der Workflow `.github/workflows/update-rosters.yml` läuft automatisch jeden
Tag um 09:00 UTC und committet Änderungen zurück ins Repo. Nach dem
Hochladen einmal manuell testen:

**Actions-Tab → "Update NBA Rosters" → "Run workflow"**

Falls das fehlschlägt: unter **Settings → Actions → General → Workflow
permissions** muss "Read and write permissions" aktiviert sein, sonst darf
die Action nicht zurück committen.

## Struktur

```
index.html                     Projections-Seite (2 Spalten: meine Projektion vs. Realwerte)
teams.html                     NBA-Teams-Seite (Minuten-Eingabe pro Team)
assets/shared.js               gemeinsame Logik (Name-Matching, Storage, Gewichtung)
players-data.js                generierte Pro-Minute-Raten (Output von build-players-data.py)
rosters-data.js                generierte Team-Kader (Output von fetch-rosters.mjs, täglich aktualisiert)
scripts/build-players-data.py  Konvertierungsskript Rohdaten → players-data.js
scripts/fetch-rosters.mjs      Roster-Fetcher (ESPN) → rosters-data.js
.github/workflows/update-rosters.yml  tägliche GitHub Action für den Roster-Fetch
data/                          Rohdaten-Exports (Season-Stats)
```

## Aktueller Stand

- **Saisons geladen:** 2018–19 bis 2025–26, 8 Saisons durchgehend
  (1.278 Spieler gesamt, nicht jeder Spieler hat in jeder Saison Daten).
  Lücke bei 2017–18, für später vorgemerkt.
- **Gewichtung:** Zwei aktive Slider auf der Seite ("vorletztes Jahr" /
  "letztes Jahr", Stufen 1 / 1,25 / 1,5 / 1,75 / 2). Für jeden Spieler
  gelten die beiden **jüngsten Saisons, in denen er Daten hat** als
  "letztes" bzw. "vorletztes" Jahr — ältere Saisons zählen automatisch fix
  mit Gewicht 1.
- **Roster-Automatisierung:** täglicher ESPN-Fetch via GitHub Action —
  noch nicht live getestet (siehe unten, "Roster-Automatisierung
  einrichten"), da ich von hier aus nicht direkt ins Repo pushen/Actions
  auslösen kann. Erster Lauf sollte manuell über den Actions-Tab geprüft
  werden.
- **NBA-Teams-Seite:** neu, zeigt alle Spieler nach Team gruppiert, mit
  Minuten-Eingabe. Ordnet ESPN-Rosternamen den BBM-Ratennamen über einen
  normalisierten Namensabgleich zu (Akzente/Punkte/Jr.-Suffixe werden
  ignoriert) — bei Uneindeutigkeiten wird der Spieler als "keine
  Rate-Daten" markiert statt falsch gematcht.
- **Zwei-Spalten-Ansicht** auf der Projections-Seite: links deine
  Projektion (editierbar nur noch über die Teams-Seite), rechts die realen
  Season-Averages der Saison 2025–26 als Referenz. Sobald 2026-27 läuft,
  ersetzt ein Live-Stats-Fetch diese rechte Spalte täglich — dafür fehlt
  aktuell noch die Datenquelle/das Skript (folgt, sobald die Saison näher
  rückt).
- **Live-Reranking:** Minuten-Änderungen auf der Teams-Seite aktualisieren
  die Projections-Tabelle automatisch (per `storage`-Event, wenn beide
  Seiten offen sind; sonst beim nächsten Laden).
- **Rookies:** noch kein automatischer Pfad — Minuten + Rate werden vorerst
  manuell eingetragen.
- **Noch nicht bei TTHQ integriert** — bewusst als eigenständiges Repo, bis
  die Methodik stabil ist.

## Bekannte Einschränkungen

- Die ESPN-Roster-API ist inoffiziell/unbekannt und kann sich ohne
  Vorwarnung ändern. Das Fetch-Skript ist defensiv geschrieben (mehrere
  Wiederholungsversuche, Fallback-Teamliste), aber noch nicht gegen einen
  echten täglichen Lauf getestet.
- `localStorage` ist geräte-/browserweit, nicht account-weit — auf einem
  zweiten Gerät siehst du nicht automatisch dieselben Minuten-Einträge.
- Die rechte "Realwerte"-Spalte zeigt aktuell **2025-26**-Zahlen (die
  letzte abgeschlossene Saison), nicht 2026-27, da diese Saison noch
  nicht läuft.

## Changelog

### 2026-07-19 (9)
- **Projections-Seite aufgeräumt:** "MFHFB · Testseite"-Eyebrow, der lange
  Basis-Text unter der Überschrift und die Info-Box zur Teams-Seite sind
  komplett raus — die Seite wirkt jetzt deutlich schlanker.
- **Light Mode ergänzt** (zusätzlich zu Dark): Toggle-Button oben rechts
  in der Navigation auf beiden Seiten (Projections + Teams). Theme wird
  in `localStorage` gespeichert und beim Laden sofort angewendet (kein
  Flackern durch falsches Theme beim Start). Farbpalette an der
  bestehenden TTHQ-Optik orientiert (gleiche Akzentfarbe, helle statt
  dunkle Flächen).

### 2026-07-19 (8)
- **Realwerte-Spalten von der Projections-Seite entfernt** — die gehören
  ausschließlich auf die Teams-Seite (rechte Spalte pro Team). Projections
  zeigt jetzt nur noch die eigene Projektion + Z-Score, dafür wieder
  schmaler und übersichtlicher.
- **Zubac-Korrektur:** kein Datenfehler — er wurde tatsächlich für den
  #5 Pick zu den Pacers getradet. Der vorherige Hinweis dazu war falsch,
  danke für den Gegencheck.
- **Z-Score-Basis wählbar:** Top 200 / Top 400 / Alle als Ranking-
  Population für die Mittelwert-/Streuungsberechnung der Z-Scores
  (sortiert nach projizierten Punkten). Ändert sichtbar die Z-Scores und
  damit das Ranking — getestet an Jokić: 11,06 (Top 200) vs. 17,71
  (Alle). Auswahl liegt im einklappbaren Gewichtungs-Panel.
- **Bedingte Farbformatierung (Excel-Stil)** auf der Projections-Seite:
  jede Stat-Spalte einzeln von Rot (schlechtester Wert der aktuell
  angezeigten Spieler) bis Grün (bester Wert) eingefärbt, TOV invertiert.
  Neu berechnet bei jeder Sortierung/Suche.
- **Dieselbe Farbformatierung auf der Teams-Seite**, aber pro Team separat
  berechnet (nicht global) — sowohl links (aktueller Kader) als auch
  rechts (End-Rotation), damit der Vergleich innerhalb des Kaders
  aussagekräftig bleibt statt gegen die ganze Liga.

### 2026-07-19 (7)
- **Team-Seite umgebaut:** Missverständnis aus der letzten Runde korrigiert
  — das Zwei-Spalten-Layout ("meine Minuten" vs. "Realwerte") gehört auf
  die Team-Seite, nicht (nur) auf die Projections-Seite. Jedes Team zeigt
  jetzt zwei Tabellen nebeneinander:
  - **Links:** aktueller Kader (ESPN-Fetch) mit editierbaren Minuten,
    9-Cat-Stats hochgerechnet aus den Pro-Minute-Raten der letzten Saison,
    plus GP der letzten Saison als Referenz.
  - **Rechts:** tatsächliche End-Rotation der letzten Saison (aktuell
    2025-26, aus den BBM-Daten gefiltert nach Team) mit echten Minuten,
    echten 9-Cat-Stats und echtem GP — nicht editierbar, dient als
    Vergleich.
- **Team-Kürzel-Mapping ergänzt** (`ESPN_TO_BBM_TEAM`): ESPN und die
  BBM-Exportdateien nutzen teils unterschiedliche Abkürzungen (z.B. ESPN
  "GS" vs. BBM "GSW", "NO" vs. "NOR", "SA" vs. "SAS", "UTAH" vs. "UTA",
  "WSH" vs. "WAS") — ohne Mapping wäre die rechte Spalte für diese Teams
  leer geblieben.
- **Datenqualitäts-Hinweis entdeckt:** In `Player_Rankings_25-26.xls`
  steht Ivica Zubac unter Team "IND" statt "LAC" — vermutlich ein Fehler
  in der Rohdaten-Quelle, nicht im Code. Lohnt sich gegenzuchecken.

### 2026-07-19 (6)
- **Bug behoben:** Spieler, die eine ganze Saison komplett verpasst haben
  (z.B. Haliburton, Lillard 2025-26), wurden bisher so dargestellt, als
  wäre ihre letzte *gespielte* Saison automatisch die aktuellste — dadurch
  stand z.B. bei Haliburton "73 GP" da, wo eigentlich "0 GP (2025-26)"
  hingehört hätte.
- **Build-Skript** trackt jetzt explizit "missed"-Saisons (0 GP) zwischen
  dem Debüt eines Spielers und der insgesamt jüngsten geladenen Saison,
  statt Lücken einfach stillschweigend auszulassen. Saisons vor dem Debüt
  bleiben weiterhin unangetastet (kein "0 GP", weil schlicht nicht
  anwendbar).
- **GP-Kürzel** zeigt jetzt korrekt `0/73/69` statt `73/69/-` für
  Haliburton — die aktuellste (verpasste) Saison steht explizit mit 0 da.
- **Realwerte-Spalte** auf der Projections-Seite zeigt bei einer verpassten
  aktuellsten Saison jetzt "nicht gespielt (2025-26)" statt stillschweigend
  die Vorjahreszahlen unterzuschieben.
- **Team-Seite** markiert Spieler mit verpasster aktuellster Saison jetzt
  mit einem "⚠ pausiert"-Hinweis neben dem Namen.
- **Rate-/Gewichtungsberechnung unverändert korrekt:** floss schon vorher
  nur aus tatsächlich gespielten Saisons ein — eine 0-GP-Saison verzerrt
  die Projektion also nicht künstlich nach unten. Das war kein Bug, nur
  die Anzeige war irreführend.
- Referenzdokument `player-absences-2025-26.md` ergänzt: recherchierte
  Gründe (Verletzung, Rücktritt, Ligawechsel, etc.) für alle relevanten
  Spieler, die 2025-26 fehlen.

### 2026-07-19 (5)
- **Rangnummer** (1., 2., 3., …) links auf der Projections-Seite ergänzt —
  passt sich automatisch der aktuellen Sortierung an.
- **Z-Score** hinzugefügt: kategorienweise über den gesamten Datensatz
  berechnet, mit einstellbaren Kategorie-Gewichtungen kombiniert (TOV
  invertiert, da weniger besser ist), sortierbar wie jede andere Spalte.
  Standard-Sortierung der Seite ist jetzt Z-Score absteigend.
- **Season-Liste unter dem Namen entfernt**, stattdessen kompaktes
  GP-Kürzel der letzten bis zu 3 Saisons (neueste zuerst, `-` wenn eine
  Saison fehlt), z.B. `65/70/-`.
- **Neue Standard-Gewichtung:** vorletzte Saison 1,5×, letzte Saison
  1,75×; Kategorie-Gewichte PTS 0,9 / REB 1 / AST 1 / STL 0,75 / BLK 0,75
  / 3PM 0,75 / TOV 0,25 / FT% 0,9 / FG% 1 (Reset-Button stellt diese
  Werte jederzeit wieder her).
- **Gewichtungs-Panel ist jetzt einklappbar** (standardmäßig eingeklappt,
  um Platz zu sparen).
- **CSV-Export**: Button lädt die aktuell sortierte/gefilterte Tabelle
  (inkl. Rang, Z-Score, Realwerten, GP-Kürzel) als `.csv` herunter.

**Bekannte Vereinfachung:** FG%/FT% fließen als reine Prozentwerte in den
Z-Score ein, nicht volumen-gewichtet ("Impact Score" wie bei manchen
Fantasy-Tools) — ein Spieler mit wenigen, aber sehr genauen Würfen wird
dadurch etwas überbewertet. Kann bei Bedarf nachgebessert werden.

### 2026-07-19 (4)
- **NBA-Teams-Seite** (`teams.html`) hinzugefügt: alle Spieler nach den
  30 NBA-Teams gruppiert, mit Minuten-Eingabe pro Spieler.
- **Roster-Fetcher** (`scripts/fetch-rosters.mjs`) + tägliche **GitHub
  Action** (`.github/workflows/update-rosters.yml`) für automatische
  Kader-Updates von ESPN (bevorzugt, da meist am aktuellsten).
- **Gemeinsames Storage-Modul** (`assets/shared.js`): Minuten werden jetzt
  nur noch auf der Teams-Seite eingetragen und über `localStorage` mit der
  Projections-Seite geteilt (inkl. Name-Matching zwischen ESPN- und
  BBM-Namen).
- **Projections-Seite umgebaut:** zwei Spaltengruppen (meine Projektion /
  reale Season-Averages), Minuten-Felder dort nicht mehr editierbar,
  Live-Reranking bei Änderungen auf der Teams-Seite.

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
