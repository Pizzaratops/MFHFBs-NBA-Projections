// MFHFBs NBA Projections — ADP-Daten (Output von scripts/build-adp-data.py)
// Eigene Draft Results: 220 Spieler | Fantrax-ADP: 600 Spieler
// Key = normalisierter Spielername (siehe mfhfbNormalizeName in assets/shared.js)
// Felder: ownAdp/ownCount/ownMin/ownMax (aus data/draft-results/), fantraxAdp (aus data/fantrax-adp.csv)
// NICHT MANUELL BEARBEITEN — Skript erneut laufen lassen, nachdem neue CSVs abgelegt wurden.
const ADP_DATA = {
 "karlanthony towns": {
  "name": "Karl-Anthony Towns",
  "ownAdp": 16.9,
  "ownCount": 28,
  "ownMin": 13,
  "ownMax": 24,
  "fantraxAdp": 33,
  "team": "NY",
  "pos": "C"
 },
 "josh minott": {
  "name": "Josh Minott",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 291,
  "team": "BKN",
  "pos": "Flx"
 },
 "zeke nnaji": {
  "name": "Zeke Nnaji",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 358,
  "team": "DEN",
  "pos": "Flx"
 },
 "antonio reeves": {
  "name": "Antonio Reeves",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 519,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "miles bridges": {
  "name": "Miles Bridges",
  "ownAdp": 100.7,
  "ownCount": 22,
  "ownMin": 72,
  "ownMax": 126,
  "fantraxAdp": 52,
  "team": "PHO",
  "pos": "SF"
 },
 "toby okani": {
  "name": "Toby Okani",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 483,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "tre scott": {
  "name": "Tre Scott",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 471,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "rui hachimura": {
  "name": "Rui Hachimura",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 201,
  "team": "LAC",
  "pos": "Flx"
 },
 "killian hayes": {
  "name": "Killian Hayes",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 389,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "cam whitmore": {
  "name": "Cam Whitmore",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 398,
  "team": "WAS",
  "pos": "Flx"
 },
 "naz reid": {
  "name": "Naz Reid",
  "ownAdp": 73.9,
  "ownCount": 23,
  "ownMin": 53,
  "ownMax": 90,
  "fantraxAdp": 38,
  "team": "CHA",
  "pos": "C"
 },
 "dayron sharpe": {
  "name": "Day'Ron Sharpe",
  "ownAdp": 108.7,
  "ownCount": 20,
  "ownMin": 70,
  "ownMax": 131,
  "fantraxAdp": 173,
  "team": "BKN",
  "pos": "C"
 },
 "jalen johnson": {
  "name": "Jalen Johnson",
  "ownAdp": 9.1,
  "ownCount": 30,
  "ownMin": 5,
  "ownMax": 14,
  "fantraxAdp": 9,
  "team": "ATL",
  "pos": "SF"
 },
 "haywood highsmith": {
  "name": "Haywood Highsmith",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 498,
  "team": "PHO",
  "pos": "Flx"
 },
 "david kramer": {
  "name": "David Kramer",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 591,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "miles kelly": {
  "name": "Miles Kelly",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 487,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "brandon williams": {
  "name": "Brandon Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 131,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "harrison ingram": {
  "name": "Harrison Ingram",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 551,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jarace walker": {
  "name": "Jarace Walker",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 77,
  "team": "IND",
  "pos": "Flx"
 },
 "taylor hendricks": {
  "name": "Taylor Hendricks",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 251,
  "team": "MEM",
  "pos": "Flx"
 },
 "cason wallace": {
  "name": "Cason Wallace",
  "ownAdp": 122.5,
  "ownCount": 19,
  "ownMin": 92,
  "ownMax": 159,
  "fantraxAdp": 109,
  "team": "OKC",
  "pos": "SG"
 },
 "svi mykhailiuk": {
  "name": "Svi Mykhailiuk",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 300,
  "team": "UTA",
  "pos": "Flx"
 },
 "frank kaminsky": {
  "name": "Frank Kaminsky",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 597,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "cameron carr": {
  "name": "Cameron Carr",
  "ownAdp": 161.0,
  "ownCount": 1,
  "ownMin": 161,
  "ownMax": 161,
  "fantraxAdp": null,
  "team": "LAL",
  "pos": "SG"
 },
 "adama bal": {
  "name": "Adama Bal",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 457,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "drew eubanks": {
  "name": "Drew Eubanks",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 367,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "bennedict mathurin": {
  "name": "Bennedict Mathurin",
  "ownAdp": 144.4,
  "ownCount": 11,
  "ownMin": 130,
  "ownMax": 158,
  "fantraxAdp": 132,
  "team": "LAC",
  "pos": "SF"
 },
 "jamal murray": {
  "name": "Jamal Murray",
  "ownAdp": 20.2,
  "ownCount": 28,
  "ownMin": 11,
  "ownMax": 31,
  "fantraxAdp": 15,
  "team": "DEN",
  "pos": "PG"
 },
 "oliviermaxence prosper": {
  "name": "Olivier-Maxence Prosper",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 256,
  "team": "MEM",
  "pos": "Flx"
 },
 "jimmy butler": {
  "name": "Jimmy Butler",
  "ownAdp": 137.6,
  "ownCount": 8,
  "ownMin": 95,
  "ownMax": 163,
  "fantraxAdp": 170,
  "team": "GS",
  "pos": "SF"
 },
 "ron harper": {
  "name": "Ron Harper",
  "ownAdp": 103.0,
  "ownCount": 1,
  "ownMin": 103,
  "ownMax": 103,
  "fantraxAdp": 429,
  "team": "BOS",
  "pos": "SF"
 },
 "bones hyland": {
  "name": "Bones Hyland",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 197,
  "team": "MIN",
  "pos": "Flx"
 },
 "nikola jovic": {
  "name": "Nikola Jovic",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 297,
  "team": "MIA",
  "pos": "Flx"
 },
 "bam adebayo": {
  "name": "Bam Adebayo",
  "ownAdp": 35.9,
  "ownCount": 26,
  "ownMin": 23,
  "ownMax": 46,
  "fantraxAdp": 16,
  "team": "MIA",
  "pos": "C"
 },
 "julian strawther": {
  "name": "Julian Strawther",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 310,
  "team": "DEN",
  "pos": "Flx"
 },
 "marcus sasser": {
  "name": "Marcus Sasser",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 379,
  "team": "DAL",
  "pos": "Flx"
 },
 "zyon pullin": {
  "name": "Zyon Pullin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 525,
  "team": "MIN",
  "pos": "Flx"
 },
 "isaiah livers": {
  "name": "Isaiah Livers",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 441,
  "team": "PHO",
  "pos": "Flx"
 },
 "patrick baldwin": {
  "name": "Patrick Baldwin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 492,
  "team": "SAC",
  "pos": "Flx"
 },
 "josh hart": {
  "name": "Josh Hart",
  "ownAdp": 97.5,
  "ownCount": 20,
  "ownMin": 78,
  "ownMax": 114,
  "fantraxAdp": 83,
  "team": "NY",
  "pos": "SG"
 },
 "collin murrayboyles": {
  "name": "Collin Murray-Boyles",
  "ownAdp": 113.4,
  "ownCount": 19,
  "ownMin": 80,
  "ownMax": 147,
  "fantraxAdp": 203,
  "team": "TOR",
  "pos": "PF"
 },
 "coby white": {
  "name": "Coby White",
  "ownAdp": 88.2,
  "ownCount": 23,
  "ownMin": 72,
  "ownMax": 101,
  "fantraxAdp": 158,
  "team": "CHA",
  "pos": "SG"
 },
 "baylor scheierman": {
  "name": "Baylor Scheierman",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 257,
  "team": "BOS",
  "pos": "Flx"
 },
 "jordan miller": {
  "name": "Jordan Miller",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 218,
  "team": "LAC",
  "pos": "Flx"
 },
 "jordan hawkins": {
  "name": "Jordan Hawkins",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 364,
  "team": "NO",
  "pos": "Flx"
 },
 "enrique freeman": {
  "name": "Enrique Freeman",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 531,
  "team": "MIN",
  "pos": "Flx"
 },
 "landry shamet": {
  "name": "Landry Shamet",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 283,
  "team": "NY",
  "pos": "Flx"
 },
 "keyonte george": {
  "name": "Keyonte George",
  "ownAdp": 55.3,
  "ownCount": 25,
  "ownMin": 41,
  "ownMax": 76,
  "fantraxAdp": 71,
  "team": "UTA",
  "pos": "PG"
 },
 "maxime raynaud": {
  "name": "Maxime Raynaud",
  "ownAdp": 126.4,
  "ownCount": 16,
  "ownMin": 97,
  "ownMax": 142,
  "fantraxAdp": 134,
  "team": "SAC",
  "pos": "C"
 },
 "jordan clarkson": {
  "name": "Jordan Clarkson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 249,
  "team": "NY",
  "pos": "Flx"
 },
 "myron gardner": {
  "name": "Myron Gardner",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 378,
  "team": "MIA",
  "pos": "Flx"
 },
 "gradey dick": {
  "name": "Gradey Dick",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 280,
  "team": "TOR",
  "pos": "Flx"
 },
 "christian braun": {
  "name": "Christian Braun",
  "ownAdp": 159.6,
  "ownCount": 5,
  "ownMin": 154,
  "ownMax": 167,
  "fantraxAdp": 246,
  "team": "DEN",
  "pos": "SG"
 },
 "josh okogie": {
  "name": "Josh Okogie",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 269,
  "team": "UTA",
  "pos": "Flx"
 },
 "alex antetokounmpo": {
  "name": "Alex Antetokounmpo",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 528,
  "team": "MIL",
  "pos": "Flx"
 },
 "jalen green": {
  "name": "Jalen Green",
  "ownAdp": 116.4,
  "ownCount": 18,
  "ownMin": 75,
  "ownMax": 156,
  "fantraxAdp": 263,
  "team": "PHO",
  "pos": "SG"
 },
 "mychal mulder": {
  "name": "Mychal Mulder",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 583,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "rayan rupert": {
  "name": "Rayan Rupert",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 298,
  "team": "PHI",
  "pos": "Flx"
 },
 "liam mcneeley": {
  "name": "Liam McNeeley",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 410,
  "team": "CHA",
  "pos": "Flx"
 },
 "rasheer fleming": {
  "name": "Rasheer Fleming",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 353,
  "team": "PHO",
  "pos": "Flx"
 },
 "adou thiero": {
  "name": "Adou Thiero",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 475,
  "team": "LAL",
  "pos": "Flx"
 },
 "ausar thompson": {
  "name": "Ausar Thompson",
  "ownAdp": 78.7,
  "ownCount": 25,
  "ownMin": 59,
  "ownMax": 98,
  "fantraxAdp": 75,
  "team": "DET",
  "pos": "SF"
 },
 "dereck lively": {
  "name": "Dereck Lively",
  "ownAdp": 153.0,
  "ownCount": 1,
  "ownMin": 153,
  "ownMax": 153,
  "fantraxAdp": 477,
  "team": "DAL",
  "pos": "C"
 },
 "mohamed diawara": {
  "name": "Mohamed Diawara",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 365,
  "team": "NY",
  "pos": "Flx"
 },
 "deaaron fox": {
  "name": "De'Aaron Fox",
  "ownAdp": 67.8,
  "ownCount": 25,
  "ownMin": 41,
  "ownMax": 92,
  "fantraxAdp": 47,
  "team": "SA",
  "pos": "PG"
 },
 "deandre jordan": {
  "name": "DeAndre Jordan",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 455,
  "team": "NO",
  "pos": "Flx"
 },
 "malevy leons": {
  "name": "Malevy Leons",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 436,
  "team": "GS",
  "pos": "Flx"
 },
 "harrison barnes": {
  "name": "Harrison Barnes",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 148,
  "team": "SA",
  "pos": "Flx"
 },
 "jalen suggs": {
  "name": "Jalen Suggs",
  "ownAdp": 89.7,
  "ownCount": 22,
  "ownMin": 67,
  "ownMax": 116,
  "fantraxAdp": 70,
  "team": "ORL",
  "pos": "PG"
 },
 "sandro mamukelashvili": {
  "name": "Sandro Mamukelashvili",
  "ownAdp": 126.3,
  "ownCount": 11,
  "ownMin": 92,
  "ownMax": 160,
  "fantraxAdp": 78,
  "team": "LAL",
  "pos": "PF"
 },
 "jonas valanciunas": {
  "name": "Jonas Valanciunas",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 235,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "gabe vincent": {
  "name": "Gabe Vincent",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 357,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "saddiq bey": {
  "name": "Saddiq Bey",
  "ownAdp": 125.0,
  "ownCount": 14,
  "ownMin": 86,
  "ownMax": 152,
  "fantraxAdp": 63,
  "team": "NO",
  "pos": "SF"
 },
 "nickeil alexanderwalker": {
  "name": "Nickeil Alexander-Walker",
  "ownAdp": 47.8,
  "ownCount": 25,
  "ownMin": 29,
  "ownMax": 65,
  "fantraxAdp": 12,
  "team": "ATL",
  "pos": "SG"
 },
 "isaiah jackson": {
  "name": "Isaiah Jackson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 259,
  "team": "LAC",
  "pos": "Flx"
 },
 "darius brown": {
  "name": "Darius Brown",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 573,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jalen duren": {
  "name": "Jalen Duren",
  "ownAdp": 43.0,
  "ownCount": 25,
  "ownMin": 32,
  "ownMax": 60,
  "fantraxAdp": 73,
  "team": "DET",
  "pos": "C"
 },
 "bryce brown": {
  "name": "Bryce Brown",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 585,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "demar derozan": {
  "name": "DeMar DeRozan",
  "ownAdp": 143.2,
  "ownCount": 10,
  "ownMin": 122,
  "ownMax": 167,
  "fantraxAdp": 74,
  "team": "(N/A)",
  "pos": "SF"
 },
 "bilal coulibaly": {
  "name": "Bilal Coulibaly",
  "ownAdp": 128.9,
  "ownCount": 8,
  "ownMin": 111,
  "ownMax": 140,
  "fantraxAdp": null,
  "team": "WAS",
  "pos": "SF"
 },
 "mike conley": {
  "name": "Mike Conley",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 308,
  "team": "BOS",
  "pos": "Flx"
 },
 "hayden gray": {
  "name": "Hayden Gray",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 562,
  "team": "UTA",
  "pos": "Flx"
 },
 "stephen curry": {
  "name": "Stephen Curry",
  "ownAdp": 18.9,
  "ownCount": 28,
  "ownMin": 12,
  "ownMax": 28,
  "fantraxAdp": 87,
  "team": "GS",
  "pos": "PG"
 },
 "klay thompson": {
  "name": "Klay Thompson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 190,
  "team": "DAL",
  "pos": "Flx"
 },
 "nikola topic": {
  "name": "Nikola Topic",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 470,
  "team": "OKC",
  "pos": "Flx"
 },
 "kevin mccullar": {
  "name": "Kevin McCullar",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 474,
  "team": "NY",
  "pos": "Flx"
 },
 "kyle lowry": {
  "name": "Kyle Lowry",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 516,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jett howard": {
  "name": "Jett Howard",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 347,
  "team": "DAL",
  "pos": "Flx"
 },
 "andersson garcia": {
  "name": "Andersson Garcia",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 484,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "stephon castle": {
  "name": "Stephon Castle",
  "ownAdp": 59.0,
  "ownCount": 25,
  "ownMin": 38,
  "ownMax": 84,
  "fantraxAdp": 59,
  "team": "SA",
  "pos": "PG"
 },
 "jaesean tate": {
  "name": "Jae'Sean Tate",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 427,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "obi toppin": {
  "name": "Obi Toppin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 351,
  "team": "IND",
  "pos": "Flx"
 },
 "will riley": {
  "name": "Will Riley",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 166,
  "team": "WAS",
  "pos": "Flx"
 },
 "thomas bryant": {
  "name": "Thomas Bryant",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 305,
  "team": "CLE",
  "pos": "Flx"
 },
 "aj dybantsa": {
  "name": "AJ Dybantsa",
  "ownAdp": 105.8,
  "ownCount": 20,
  "ownMin": 87,
  "ownMax": 150,
  "fantraxAdp": null,
  "team": "WAS",
  "pos": "SF"
 },
 "darion atkins": {
  "name": "Darion Atkins",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 598,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "trae young": {
  "name": "Trae Young",
  "ownAdp": 22.8,
  "ownCount": 28,
  "ownMin": 10,
  "ownMax": 35,
  "fantraxAdp": 341,
  "team": "WAS",
  "pos": "PG"
 },
 "pascal siakam": {
  "name": "Pascal Siakam",
  "ownAdp": 55.3,
  "ownCount": 25,
  "ownMin": 39,
  "ownMax": 78,
  "fantraxAdp": 55,
  "team": "IND",
  "pos": "PF"
 },
 "tyler kolek": {
  "name": "Tyler Kolek",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 333,
  "team": "NY",
  "pos": "Flx"
 },
 "terry rozier": {
  "name": "Terry Rozier",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 596,
  "team": "MIA",
  "pos": "Flx"
 },
 "morez johnson": {
  "name": "Morez Johnson",
  "ownAdp": 156.5,
  "ownCount": 2,
  "ownMin": 146,
  "ownMax": 167,
  "fantraxAdp": null,
  "team": "DAL",
  "pos": "PF"
 },
 "josh green": {
  "name": "Josh Green",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 344,
  "team": "MIN",
  "pos": "Flx"
 },
 "javonte cooke": {
  "name": "Javonte Cooke",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 509,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "anthony gill": {
  "name": "Anthony Gill",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 316,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "craig porter": {
  "name": "Craig Porter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 245,
  "team": "CLE",
  "pos": "Flx"
 },
 "xavier tillman": {
  "name": "Xavier Tillman",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 469,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "maxi kleber": {
  "name": "Maxi Kleber",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 418,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "brook lopez": {
  "name": "Brook Lopez",
  "ownAdp": 156.5,
  "ownCount": 2,
  "ownMin": 155,
  "ownMax": 158,
  "fantraxAdp": 141,
  "team": "LAC",
  "pos": "C"
 },
 "isaac jones": {
  "name": "Isaac Jones",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 552,
  "team": "DET",
  "pos": "Flx"
 },
 "shai gilgeousalexander": {
  "name": "Shai Gilgeous-Alexander",
  "ownAdp": 3.5,
  "ownCount": 31,
  "ownMin": 3,
  "ownMax": 5,
  "fantraxAdp": 10,
  "team": "OKC",
  "pos": "PG"
 },
 "amen thompson": {
  "name": "Amen Thompson",
  "ownAdp": 23.6,
  "ownCount": 27,
  "ownMin": 10,
  "ownMax": 42,
  "fantraxAdp": 29,
  "team": "HOU",
  "pos": "SF"
 },
 "toumani camara": {
  "name": "Toumani Camara",
  "ownAdp": 102.6,
  "ownCount": 20,
  "ownMin": 81,
  "ownMax": 128,
  "fantraxAdp": 41,
  "team": "POR",
  "pos": "PF"
 },
 "davion mitchell": {
  "name": "Davion Mitchell",
  "ownAdp": 137.0,
  "ownCount": 12,
  "ownMin": 101,
  "ownMax": 151,
  "fantraxAdp": 159,
  "team": "MIA",
  "pos": "PG"
 },
 "scoot henderson": {
  "name": "Scoot Henderson",
  "ownAdp": 162.0,
  "ownCount": 3,
  "ownMin": 156,
  "ownMax": 168,
  "fantraxAdp": null,
  "team": "POR",
  "pos": "PG"
 },
 "ron holland": {
  "name": "Ron Holland",
  "ownAdp": 156.0,
  "ownCount": 2,
  "ownMin": 152,
  "ownMax": 160,
  "fantraxAdp": 150,
  "team": "DET",
  "pos": "SF"
 },
 "noa essengue": {
  "name": "Noa Essengue",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 571,
  "team": "CHI",
  "pos": "Flx"
 },
 "jd davison": {
  "name": "JD Davison",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 450,
  "team": "HOU",
  "pos": "Flx"
 },
 "bez mbeng": {
  "name": "Bez Mbeng",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 397,
  "team": "UTA",
  "pos": "Flx"
 },
 "sam hauser": {
  "name": "Sam Hauser",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 177,
  "team": "BOS",
  "pos": "Flx"
 },
 "kris dunn": {
  "name": "Kris Dunn",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 126,
  "team": "LAC",
  "pos": "Flx"
 },
 "luke kennard": {
  "name": "Luke Kennard",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 180,
  "team": "PHO",
  "pos": "Flx"
 },
 "guerschon yabusele": {
  "name": "Guerschon Yabusele",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 284,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jaime jaquez": {
  "name": "Jaime Jaquez",
  "ownAdp": 120.8,
  "ownCount": 16,
  "ownMin": 74,
  "ownMax": 156,
  "fantraxAdp": 81,
  "team": "MIL",
  "pos": "SF"
 },
 "jaylen wells": {
  "name": "Jaylen Wells",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 142,
  "team": "MEM",
  "pos": "Flx"
 },
 "malik monk": {
  "name": "Malik Monk",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 167,
  "team": "SAC",
  "pos": "Flx"
 },
 "tristan vukcevic": {
  "name": "Tristan Vukcevic",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 273,
  "team": "WAS",
  "pos": "Flx"
 },
 "brayden burries": {
  "name": "Brayden Burries",
  "ownAdp": 155.0,
  "ownCount": 2,
  "ownMin": 152,
  "ownMax": 158,
  "fantraxAdp": null,
  "team": "MIL",
  "pos": "SG"
 },
 "deandre hunter": {
  "name": "De'Andre Hunter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 231,
  "team": "SAC",
  "pos": "Flx"
 },
 "yuki kawamura": {
  "name": "Yuki Kawamura",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 447,
  "team": "CHI",
  "pos": "Flx"
 },
 "justin champagnie": {
  "name": "Justin Champagnie",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 169,
  "team": "WAS",
  "pos": "Flx"
 },
 "braxton key": {
  "name": "Braxton Key",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 584,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "joel embiid": {
  "name": "Joel Embiid",
  "ownAdp": 57.5,
  "ownCount": 25,
  "ownMin": 34,
  "ownMax": 88,
  "fantraxAdp": 124,
  "team": "PHI",
  "pos": "C"
 },
 "isaiah collier": {
  "name": "Isaiah Collier",
  "ownAdp": 168.0,
  "ownCount": 1,
  "ownMin": 168,
  "ownMax": 168,
  "fantraxAdp": 151,
  "team": "UTA",
  "pos": "PG"
 },
 "andre jackson": {
  "name": "Andre Jackson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 407,
  "team": "MIL",
  "pos": "Flx"
 },
 "neemias queta": {
  "name": "Neemias Queta",
  "ownAdp": 113.8,
  "ownCount": 20,
  "ownMin": 84,
  "ownMax": 139,
  "fantraxAdp": 94,
  "team": "BOS",
  "pos": "C"
 },
 "jaden mcdaniels": {
  "name": "Jaden McDaniels",
  "ownAdp": 78.2,
  "ownCount": 22,
  "ownMin": 63,
  "ownMax": 88,
  "fantraxAdp": 48,
  "team": "MIN",
  "pos": "PF"
 },
 "isaac okoro": {
  "name": "Isaac Okoro",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 210,
  "team": "CHI",
  "pos": "Flx"
 },
 "jrue holiday": {
  "name": "Jrue Holiday",
  "ownAdp": 134.2,
  "ownCount": 9,
  "ownMin": 124,
  "ownMax": 166,
  "fantraxAdp": 115,
  "team": "POR",
  "pos": "PG"
 },
 "cameron thomas": {
  "name": "Cameron Thomas",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 276,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "tyus jones": {
  "name": "Tyus Jones",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 343,
  "team": "DEN",
  "pos": "Flx"
 },
 "caleb love": {
  "name": "Caleb Love",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 275,
  "team": "PHI",
  "pos": "Flx"
 },
 "simone fontecchio": {
  "name": "Simone Fontecchio",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 209,
  "team": "MIA",
  "pos": "Flx"
 },
 "collin sexton": {
  "name": "Collin Sexton",
  "ownAdp": 132.3,
  "ownCount": 3,
  "ownMin": 93,
  "ownMax": 155,
  "fantraxAdp": 96,
  "team": "LAL",
  "pos": "SG"
 },
 "jerami grant": {
  "name": "Jerami Grant",
  "ownAdp": 148.0,
  "ownCount": 1,
  "ownMin": 148,
  "ownMax": 148,
  "fantraxAdp": 101,
  "team": "MEM",
  "pos": "PF"
 },
 "quenton jackson": {
  "name": "Quenton Jackson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 268,
  "team": "IND",
  "pos": "Flx"
 },
 "malik pope": {
  "name": "Malik Pope",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 594,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "nfaly dante": {
  "name": "N'Faly Dante",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 564,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "kelly oubre": {
  "name": "Kelly Oubre Jr.",
  "ownAdp": 157.5,
  "ownCount": 2,
  "ownMin": 148,
  "ownMax": 167,
  "fantraxAdp": 163,
  "team": "IND",
  "pos": "SF"
 },
 "jabari walker": {
  "name": "Jabari Walker",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 326,
  "team": "PHI",
  "pos": "Flx"
 },
 "grant nelson": {
  "name": "Grant Nelson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 517,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "domantas sabonis": {
  "name": "Domantas Sabonis",
  "ownAdp": 44.7,
  "ownCount": 25,
  "ownMin": 23,
  "ownMax": 61,
  "fantraxAdp": 323,
  "team": "SAC",
  "pos": "C"
 },
 "khaman maluach": {
  "name": "Khaman Maluach",
  "ownAdp": 152.0,
  "ownCount": 1,
  "ownMin": 152,
  "ownMax": 152,
  "fantraxAdp": 384,
  "team": "PHO",
  "pos": "C"
 },
 "johnny furphy": {
  "name": "Johnny Furphy",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 375,
  "team": "IND",
  "pos": "Flx"
 },
 "kam jones": {
  "name": "Kam Jones",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 385,
  "team": "MIL",
  "pos": "Flx"
 },
 "jordan walsh": {
  "name": "Jordan Walsh",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 261,
  "team": "BOS",
  "pos": "Flx"
 },
 "bruce brown": {
  "name": "Bruce Brown",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 139,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "robert franks": {
  "name": "Robert Franks",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 582,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "onyeka okongwu": {
  "name": "Onyeka Okongwu",
  "ownAdp": 49.2,
  "ownCount": 25,
  "ownMin": 32,
  "ownMax": 76,
  "fantraxAdp": 19,
  "team": "ATL",
  "pos": "C"
 },
 "moussa cisse": {
  "name": "Moussa Cisse",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 339,
  "team": "DAL",
  "pos": "Flx"
 },
 "cj mccollum": {
  "name": "CJ McCollum",
  "ownAdp": 108.5,
  "ownCount": 17,
  "ownMin": 96,
  "ownMax": 128,
  "fantraxAdp": 46,
  "team": "ATL",
  "pos": "PG"
 },
 "blake wesley": {
  "name": "Blake Wesley",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 402,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "anfernee simons": {
  "name": "Anfernee Simons",
  "ownAdp": 138.0,
  "ownCount": 1,
  "ownMin": 138,
  "ownMax": 138,
  "fantraxAdp": 196,
  "team": "PHI",
  "pos": "SG"
 },
 "payton sandfort": {
  "name": "Payton Sandfort",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 513,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ivica zubac": {
  "name": "Ivica Zubac",
  "ownAdp": 70.3,
  "ownCount": 24,
  "ownMin": 56,
  "ownMax": 90,
  "fantraxAdp": 186,
  "team": "IND",
  "pos": "C"
 },
 "alperen sengun": {
  "name": "Alperen Sengun",
  "ownAdp": 21.4,
  "ownCount": 28,
  "ownMin": 13,
  "ownMax": 37,
  "fantraxAdp": 18,
  "team": "HOU",
  "pos": "C"
 },
 "andrew wiggins": {
  "name": "Andrew Wiggins",
  "ownAdp": 104.2,
  "ownCount": 20,
  "ownMin": 90,
  "ownMax": 142,
  "fantraxAdp": 50,
  "team": "MIA",
  "pos": "SF"
 },
 "clint capela": {
  "name": "Clint Capela",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 266,
  "team": "HOU",
  "pos": "Flx"
 },
 "dillon brooks": {
  "name": "Dillon Brooks",
  "ownAdp": 138.5,
  "ownCount": 11,
  "ownMin": 111,
  "ownMax": 153,
  "fantraxAdp": 125,
  "team": "PHO",
  "pos": "SF"
 },
 "jaylon tyson": {
  "name": "Jaylon Tyson",
  "ownAdp": 152.0,
  "ownCount": 1,
  "ownMin": 152,
  "ownMax": 152,
  "fantraxAdp": 110,
  "team": "CLE",
  "pos": "SG"
 },
 "keshad johnson": {
  "name": "Keshad Johnson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 414,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ariel hukporti": {
  "name": "Ariel Hukporti",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 381,
  "team": "PHI",
  "pos": "Flx"
 },
 "jordan mclaughlin": {
  "name": "Jordan McLaughlin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 437,
  "team": "SA",
  "pos": "Flx"
 },
 "drew timme": {
  "name": "Drew Timme",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 460,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "isaiah joe": {
  "name": "Isaiah Joe",
  "ownAdp": 155.0,
  "ownCount": 1,
  "ownMin": 155,
  "ownMax": 155,
  "fantraxAdp": 162,
  "team": "DET",
  "pos": "SG"
 },
 "drew peterson": {
  "name": "Drew Peterson",
  "ownAdp": 86.0,
  "ownCount": 1,
  "ownMin": 86,
  "ownMax": 86,
  "fantraxAdp": 548,
  "team": "(N/A)",
  "pos": "PF"
 },
 "caleb houstan": {
  "name": "Caleb Houstan",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 500,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "johnny juzang": {
  "name": "Johnny Juzang",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 494,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "christian wood": {
  "name": "Christian Wood",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 592,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jaden ivey": {
  "name": "Jaden Ivey",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 327,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "rayj dennis": {
  "name": "RayJ Dennis",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 458,
  "team": "ATL",
  "pos": "Flx"
 },
 "john collins": {
  "name": "John Collins",
  "ownAdp": 108.4,
  "ownCount": 19,
  "ownMin": 96,
  "ownMax": 124,
  "fantraxAdp": 102,
  "team": "DET",
  "pos": "PF"
 },
 "buddy boeheim": {
  "name": "Buddy Boeheim",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 565,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "yaxel lendeborg": {
  "name": "Yaxel Lendeborg",
  "ownAdp": 147.5,
  "ownCount": 4,
  "ownMin": 130,
  "ownMax": 159,
  "fantraxAdp": null,
  "team": "GS",
  "pos": "SF"
 },
 "mouhamadou gueye": {
  "name": "Mouhamadou Gueye",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 530,
  "team": "CHA",
  "pos": "Flx"
 },
 "grayson allen": {
  "name": "Grayson Allen",
  "ownAdp": 143.2,
  "ownCount": 6,
  "ownMin": 124,
  "ownMax": 164,
  "fantraxAdp": 111,
  "team": "CHA",
  "pos": "SG"
 },
 "zion williamson": {
  "name": "Zion Williamson",
  "ownAdp": 82.1,
  "ownCount": 24,
  "ownMin": 54,
  "ownMax": 96,
  "fantraxAdp": 90,
  "team": "NO",
  "pos": "PF"
 },
 "jonathan mogbo": {
  "name": "Jonathan Mogbo",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 445,
  "team": "SAC",
  "pos": "Flx"
 },
 "luke travers": {
  "name": "Luke Travers",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 490,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ryan kalkbrenner": {
  "name": "Ryan Kalkbrenner",
  "ownAdp": 168.0,
  "ownCount": 1,
  "ownMin": 168,
  "ownMax": 168,
  "fantraxAdp": 194,
  "team": "CHA",
  "pos": "C"
 },
 "royce oneale": {
  "name": "Royce O'Neale",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 88,
  "team": "CHA",
  "pos": "Flx"
 },
 "markelle fultz": {
  "name": "Markelle Fultz",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 556,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "keaton wagler": {
  "name": "Keaton Wagler",
  "ownAdp": 152.0,
  "ownCount": 2,
  "ownMin": 138,
  "ownMax": 166,
  "fantraxAdp": null,
  "team": "LAC",
  "pos": "SG"
 },
 "isaiah crawford": {
  "name": "Isaiah Crawford",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 503,
  "team": "HOU",
  "pos": "Flx"
 },
 "jahmir young": {
  "name": "Jahmir Young",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 520,
  "team": "MIA",
  "pos": "Flx"
 },
 "malaki branham": {
  "name": "Malaki Branham",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 422,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jordan goodwin": {
  "name": "Jordan Goodwin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 144,
  "team": "PHO",
  "pos": "Flx"
 },
 "vj edgecombe": {
  "name": "VJ Edgecombe",
  "ownAdp": 75.7,
  "ownCount": 23,
  "ownMin": 45,
  "ownMax": 101,
  "fantraxAdp": 23,
  "team": "PHI",
  "pos": "SG"
 },
 "devin vassell": {
  "name": "Devin Vassell",
  "ownAdp": 130.8,
  "ownCount": 14,
  "ownMin": 100,
  "ownMax": 167,
  "fantraxAdp": null,
  "team": "SA",
  "pos": "SG"
 },
 "wendell carter": {
  "name": "Wendell Carter",
  "ownAdp": 136.6,
  "ownCount": 14,
  "ownMin": 102,
  "ownMax": 158,
  "fantraxAdp": 72,
  "team": "ORL",
  "pos": "C"
 },
 "josh gray": {
  "name": "Josh Gray",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 575,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "yang hansen": {
  "name": "Yang Hansen",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 428,
  "team": "POR",
  "pos": "Flx"
 },
 "tyrese maxey": {
  "name": "Tyrese Maxey",
  "ownAdp": 6.4,
  "ownCount": 31,
  "ownMin": 1,
  "ownMax": 11,
  "fantraxAdp": 2,
  "team": "PHI",
  "pos": "PG"
 },
 "daniel gafford": {
  "name": "Daniel Gafford",
  "ownAdp": 143.8,
  "ownCount": 5,
  "ownMin": 126,
  "ownMax": 159,
  "fantraxAdp": 189,
  "team": "DAL",
  "pos": "C"
 },
 "jeremiah robinsonearl": {
  "name": "Jeremiah Robinson-Earl",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 430,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "lonzo ball": {
  "name": "Lonzo Ball",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 335,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "dylan cardwell": {
  "name": "Dylan Cardwell",
  "ownAdp": 159.0,
  "ownCount": 1,
  "ownMin": 159,
  "ownMax": 159,
  "fantraxAdp": 289,
  "team": "SAC",
  "pos": "C"
 },
 "luka doncic": {
  "name": "Luka Doncic",
  "ownAdp": 3.6,
  "ownCount": 31,
  "ownMin": 1,
  "ownMax": 5,
  "fantraxAdp": 1,
  "team": "LAL",
  "pos": "PG"
 },
 "kevin durant": {
  "name": "Kevin Durant",
  "ownAdp": 17.4,
  "ownCount": 28,
  "ownMin": 7,
  "ownMax": 27,
  "fantraxAdp": 6,
  "team": "HOU",
  "pos": "PF"
 },
 "dean wade": {
  "name": "Dean Wade",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 272,
  "team": "PHI",
  "pos": "Flx"
 },
 "myles turner": {
  "name": "Myles Turner",
  "ownAdp": 83.2,
  "ownCount": 21,
  "ownMin": 66,
  "ownMax": 99,
  "fantraxAdp": 65,
  "team": "MIL",
  "pos": "C"
 },
 "jayson tatum": {
  "name": "Jayson Tatum",
  "ownAdp": 9.1,
  "ownCount": 31,
  "ownMin": 5,
  "ownMax": 15,
  "fantraxAdp": null,
  "team": "BOS",
  "pos": "PF"
 },
 "moussa diabate": {
  "name": "Moussa Diabate",
  "ownAdp": 144.0,
  "ownCount": 3,
  "ownMin": 133,
  "ownMax": 162,
  "fantraxAdp": 128,
  "team": "CHA",
  "pos": "C"
 },
 "alex sarr": {
  "name": "Alex Sarr",
  "ownAdp": 63.0,
  "ownCount": 25,
  "ownMin": 45,
  "ownMax": 81,
  "fantraxAdp": 106,
  "team": "WAS",
  "pos": "C"
 },
 "josh oduro": {
  "name": "Josh Oduro",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 514,
  "team": "NO",
  "pos": "Flx"
 },
 "olivier sarr": {
  "name": "Olivier Sarr",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 523,
  "team": "CLE",
  "pos": "Flx"
 },
 "peyton watson": {
  "name": "Peyton Watson",
  "ownAdp": 115.8,
  "ownCount": 19,
  "ownMin": 87,
  "ownMax": 138,
  "fantraxAdp": 121,
  "team": "DEN",
  "pos": "SF"
 },
 "leaky black": {
  "name": "Leaky Black",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 419,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "max strus": {
  "name": "Max Strus",
  "ownAdp": 159.0,
  "ownCount": 2,
  "ownMin": 159,
  "ownMax": 159,
  "fantraxAdp": 431,
  "team": "CLE",
  "pos": "SF"
 },
 "bobi klintman": {
  "name": "Bobi Klintman",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 515,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "anthony davis": {
  "name": "Anthony Davis",
  "ownAdp": 27.8,
  "ownCount": 26,
  "ownMin": 15,
  "ownMax": 40,
  "fantraxAdp": 292,
  "team": "WAS",
  "pos": "PF"
 },
 "micah potter": {
  "name": "Micah Potter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 258,
  "team": "POR",
  "pos": "Flx"
 },
 "jaylin williams": {
  "name": "Jaylin Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 174,
  "team": "OKC",
  "pos": "Flx"
 },
 "brooks barnhizer": {
  "name": "Brooks Barnhizer",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 443,
  "team": "OKC",
  "pos": "Flx"
 },
 "tim hardaway": {
  "name": "Tim Hardaway",
  "ownAdp": 165.0,
  "ownCount": 1,
  "ownMin": 165,
  "ownMax": 165,
  "fantraxAdp": 118,
  "team": "MIA",
  "pos": "SG"
 },
 "dario saric": {
  "name": "Dario Saric",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 563,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "justin edwards": {
  "name": "Justin Edwards",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 299,
  "team": "PHI",
  "pos": "Flx"
 },
 "daron holmes": {
  "name": "DaRon Holmes",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 451,
  "team": "DEN",
  "pos": "Flx"
 },
 "hunter tyson": {
  "name": "Hunter Tyson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 478,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "paolo banchero": {
  "name": "Paolo Banchero",
  "ownAdp": 44.2,
  "ownCount": 25,
  "ownMin": 18,
  "ownMax": 68,
  "fantraxAdp": 39,
  "team": "ORL",
  "pos": "PF"
 },
 "nigel hayesdavis": {
  "name": "Nigel Hayes-Davis",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 488,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "danny wolf": {
  "name": "Danny Wolf",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 211,
  "team": "BKN",
  "pos": "Flx"
 },
 "james wiseman": {
  "name": "James Wiseman",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 540,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "phil booth": {
  "name": "Phil Booth",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 574,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "alex caruso": {
  "name": "Alex Caruso",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 262,
  "team": "OKC",
  "pos": "Flx"
 },
 "chris boucher": {
  "name": "Chris Boucher",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 502,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "javon bess": {
  "name": "Javon Bess",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 581,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "kevon looney": {
  "name": "Kevon Looney",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 433,
  "team": "LAL",
  "pos": "Flx"
 },
 "luka garza": {
  "name": "Luka Garza",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 228,
  "team": "BOS",
  "pos": "Flx"
 },
 "tobias harris": {
  "name": "Tobias Harris",
  "ownAdp": 137.9,
  "ownCount": 8,
  "ownMin": 124,
  "ownMax": 164,
  "fantraxAdp": 120,
  "team": "SA",
  "pos": "PF"
 },
 "aj lawson": {
  "name": "A.J. Lawson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 440,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "alijah martin": {
  "name": "Alijah Martin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 468,
  "team": "TOR",
  "pos": "Flx"
 },
 "james harden": {
  "name": "James Harden",
  "ownAdp": 26.0,
  "ownCount": 28,
  "ownMin": 13,
  "ownMax": 33,
  "fantraxAdp": 13,
  "team": "CLE",
  "pos": "PG"
 },
 "santi aldama": {
  "name": "Santi Aldama",
  "ownAdp": 166.5,
  "ownCount": 2,
  "ownMin": 165,
  "ownMax": 168,
  "fantraxAdp": 185,
  "team": "DAL",
  "pos": "PF"
 },
 "jaxson hayes": {
  "name": "Jaxson Hayes",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 236,
  "team": "UTA",
  "pos": "Flx"
 },
 "larry nance": {
  "name": "Larry Nance",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 405,
  "team": "IND",
  "pos": "Flx"
 },
 "jarred vanderbilt": {
  "name": "Jarred Vanderbilt",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 285,
  "team": "LAL",
  "pos": "Flx"
 },
 "dariq whitehead": {
  "name": "Dariq Whitehead",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 464,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "tre johnson": {
  "name": "Tre Johnson",
  "ownAdp": 145.5,
  "ownCount": 2,
  "ownMin": 135,
  "ownMax": 156,
  "fantraxAdp": 192,
  "team": "WAS",
  "pos": "SG"
 },
 "scottie barnes": {
  "name": "Scottie Barnes",
  "ownAdp": 9.9,
  "ownCount": 29,
  "ownMin": 4,
  "ownMax": 15,
  "fantraxAdp": 3,
  "team": "TOR",
  "pos": "PF"
 },
 "noah penda": {
  "name": "Noah Penda",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 325,
  "team": "ORL",
  "pos": "Flx"
 },
 "brandon miller": {
  "name": "Brandon Miller",
  "ownAdp": 44.3,
  "ownCount": 25,
  "ownMin": 35,
  "ownMax": 57,
  "fantraxAdp": 35,
  "team": "CHA",
  "pos": "SF"
 },
 "sion james": {
  "name": "Sion James",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 195,
  "team": "CHA",
  "pos": "Flx"
 },
 "cody martin": {
  "name": "Cody Martin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 534,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "cormac ryan": {
  "name": "Cormac Ryan",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 415,
  "team": "MIL",
  "pos": "Flx"
 },
 "yanic konan niederhauser": {
  "name": "Yanic Konan Niederhauser",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 371,
  "team": "LAC",
  "pos": "Flx"
 },
 "scotty pippen": {
  "name": "Scotty Pippen",
  "ownAdp": 154.2,
  "ownCount": 8,
  "ownMin": 147,
  "ownMax": 168,
  "fantraxAdp": 424,
  "team": "MEM",
  "pos": "PG"
 },
 "matisse thybulle": {
  "name": "Matisse Thybulle",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 352,
  "team": "LAL",
  "pos": "Flx"
 },
 "jalen smith": {
  "name": "Jalen Smith",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 207,
  "team": "CHI",
  "pos": "Flx"
 },
 "paul reed": {
  "name": "Paul Reed",
  "ownAdp": 143.1,
  "ownCount": 15,
  "ownMin": 117,
  "ownMax": 162,
  "fantraxAdp": 200,
  "team": "DET",
  "pos": "C"
 },
 "reed sheppard": {
  "name": "Reed Sheppard",
  "ownAdp": 107.5,
  "ownCount": 17,
  "ownMin": 91,
  "ownMax": 130,
  "fantraxAdp": 37,
  "team": "HOU",
  "pos": "PG"
 },
 "hugo gonzalez": {
  "name": "Hugo Gonzalez",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 313,
  "team": "BOS",
  "pos": "Flx"
 },
 "aaron wiggins": {
  "name": "Aaron Wiggins",
  "ownAdp": 145.0,
  "ownCount": 2,
  "ownMin": 142,
  "ownMax": 148,
  "fantraxAdp": 187,
  "team": "ATL",
  "pos": "SG"
 },
 "al horford": {
  "name": "Al Horford",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 248,
  "team": "GS",
  "pos": "Flx"
 },
 "andre drummond": {
  "name": "Andre Drummond",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 221,
  "team": "NY",
  "pos": "Flx"
 },
 "shamorie ponds": {
  "name": "Shamorie Ponds",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 576,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "dalano banton": {
  "name": "Dalano Banton",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 521,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "john tonje": {
  "name": "John Tonje",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 539,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "cole anthony": {
  "name": "Cole Anthony",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 350,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "cam christie": {
  "name": "Cam Christie",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 392,
  "team": "LAC",
  "pos": "Flx"
 },
 "tristan da silva": {
  "name": "Tristan da Silva",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 129,
  "team": "ORL",
  "pos": "Flx"
 },
 "taurean prince": {
  "name": "Taurean Prince",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 374,
  "team": "DET",
  "pos": "Flx"
 },
 "gary harris": {
  "name": "Gary Harris",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 395,
  "team": "DET",
  "pos": "Flx"
 },
 "pj washington": {
  "name": "P.J. Washington",
  "ownAdp": 116.0,
  "ownCount": 17,
  "ownMin": 97,
  "ownMax": 154,
  "fantraxAdp": 103,
  "team": "DAL",
  "pos": "PF"
 },
 "ahmed hill": {
  "name": "Ahmed Hill",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 578,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "austin reaves": {
  "name": "Austin Reaves",
  "ownAdp": 25.8,
  "ownCount": 28,
  "ownMin": 16,
  "ownMax": 37,
  "fantraxAdp": 76,
  "team": "LAL",
  "pos": "SG"
 },
 "justin anderson": {
  "name": "Justin Anderson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 595,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "caleb wilson": {
  "name": "Caleb Wilson",
  "ownAdp": 99.2,
  "ownCount": 21,
  "ownMin": 51,
  "ownMax": 125,
  "fantraxAdp": null,
  "team": "CHI",
  "pos": "PF"
 },
 "trevor keels": {
  "name": "Trevor Keels",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 561,
  "team": "MIA",
  "pos": "Flx"
 },
 "asa newell": {
  "name": "Asa Newell",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 377,
  "team": "ATL",
  "pos": "Flx"
 },
 "lamelo ball": {
  "name": "LaMelo Ball",
  "ownAdp": 24.9,
  "ownCount": 28,
  "ownMin": 16,
  "ownMax": 33,
  "fantraxAdp": 25,
  "team": "MIN",
  "pos": "PG"
 },
 "precious achiuwa": {
  "name": "Precious Achiuwa",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 137,
  "team": "SAC",
  "pos": "Flx"
 },
 "javonte green": {
  "name": "Javonte Green",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 168,
  "team": "DET",
  "pos": "Flx"
 },
 "rudy gobert": {
  "name": "Rudy Gobert",
  "ownAdp": 70.6,
  "ownCount": 25,
  "ownMin": 37,
  "ownMax": 90,
  "fantraxAdp": 80,
  "team": "MIN",
  "pos": "C"
 },
 "tre mann": {
  "name": "Tre Mann",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 340,
  "team": "CHA",
  "pos": "Flx"
 },
 "vince williams": {
  "name": "Vince Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 294,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "nicolas claxton": {
  "name": "Nicolas Claxton",
  "ownAdp": 101.8,
  "ownCount": 20,
  "ownMin": 84,
  "ownMax": 120,
  "fantraxAdp": 85,
  "team": "CHI",
  "pos": "C"
 },
 "deandre ayton": {
  "name": "Deandre Ayton",
  "ownAdp": 144.4,
  "ownCount": 5,
  "ownMin": 132,
  "ownMax": 161,
  "fantraxAdp": 143,
  "team": "WAS",
  "pos": "C"
 },
 "nolan traore": {
  "name": "Nolan Traore",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 223,
  "team": "BKN",
  "pos": "Flx"
 },
 "tristen newton": {
  "name": "Tristen Newton",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 550,
  "team": "HOU",
  "pos": "Flx"
 },
 "matas buzelis": {
  "name": "Matas Buzelis",
  "ownAdp": 57.7,
  "ownCount": 25,
  "ownMin": 44,
  "ownMax": 77,
  "fantraxAdp": 26,
  "team": "CHI",
  "pos": "SF"
 },
 "aaron gordon": {
  "name": "Aaron Gordon",
  "ownAdp": 140.8,
  "ownCount": 10,
  "ownMin": 100,
  "ownMax": 165,
  "fantraxAdp": 239,
  "team": "DEN",
  "pos": "PF"
 },
 "taj gibson": {
  "name": "Taj Gibson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 497,
  "team": "MEM",
  "pos": "Flx"
 },
 "tidjane salaun": {
  "name": "Tidjane Salaun",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 366,
  "team": "CHA",
  "pos": "Flx"
 },
 "derrick white": {
  "name": "Derrick White",
  "ownAdp": 31.1,
  "ownCount": 25,
  "ownMin": 9,
  "ownMax": 48,
  "fantraxAdp": 5,
  "team": "BOS",
  "pos": "SG"
 },
 "cam spencer": {
  "name": "Cam Spencer",
  "ownAdp": 164.0,
  "ownCount": 1,
  "ownMin": 164,
  "ownMax": 164,
  "fantraxAdp": 112,
  "team": "MEM",
  "pos": "SG"
 },
 "giannis antetokounmpo": {
  "name": "Giannis Antetokounmpo",
  "ownAdp": 10.9,
  "ownCount": 31,
  "ownMin": 5,
  "ownMax": 24,
  "fantraxAdp": 130,
  "team": "MIA",
  "pos": "PF"
 },
 "elijah harkless": {
  "name": "Elijah Harkless",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 361,
  "team": "UTA",
  "pos": "Flx"
 },
 "pat connaughton": {
  "name": "Pat Connaughton",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 435,
  "team": "CHA",
  "pos": "Flx"
 },
 "alex morales": {
  "name": "Alex Morales",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 557,
  "team": "ORL",
  "pos": "Flx"
 },
 "amir coffey": {
  "name": "Amir Coffey",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 411,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "tolu smith": {
  "name": "Tolu Smith",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 461,
  "team": "DET",
  "pos": "Flx"
 },
 "stanley umude": {
  "name": "Stanley Umude",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 569,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "luguentz dort": {
  "name": "Luguentz Dort",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 184,
  "team": "ATL",
  "pos": "Flx"
 },
 "anthony edwards": {
  "name": "Anthony Edwards",
  "ownAdp": 9.8,
  "ownCount": 31,
  "ownMin": 6,
  "ownMax": 15,
  "fantraxAdp": 17,
  "team": "MIN",
  "pos": "SG"
 },
 "colin castleton": {
  "name": "Colin Castleton",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 559,
  "team": "ORL",
  "pos": "Flx"
 },
 "riley minix": {
  "name": "Riley Minix",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 508,
  "team": "CLE",
  "pos": "Flx"
 },
 "quentin grimes": {
  "name": "Quentin Grimes",
  "ownAdp": 135.8,
  "ownCount": 11,
  "ownMin": 120,
  "ownMax": 154,
  "fantraxAdp": null,
  "team": "LAL",
  "pos": "SG"
 },
 "tj mcconnell": {
  "name": "T.J. McConnell",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 254,
  "team": "IND",
  "pos": "Flx"
 },
 "rocco zikarsky": {
  "name": "Rocco Zikarsky",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 522,
  "team": "MIN",
  "pos": "Flx"
 },
 "norchad omier": {
  "name": "Norchad Omier",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 538,
  "team": "LAC",
  "pos": "Flx"
 },
 "victor wembanyama": {
  "name": "Victor Wembanyama",
  "ownAdp": 1.6,
  "ownCount": 31,
  "ownMin": 1,
  "ownMax": 3,
  "fantraxAdp": 7,
  "team": "SA",
  "pos": "C"
 },
 "christian koloko": {
  "name": "Christian Koloko",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 421,
  "team": "ATL",
  "pos": "Flx"
 },
 "jalen brunson": {
  "name": "Jalen Brunson",
  "ownAdp": 32.2,
  "ownCount": 25,
  "ownMin": 17,
  "ownMax": 48,
  "fantraxAdp": 43,
  "team": "NY",
  "pos": "PG"
 },
 "rj barrett": {
  "name": "RJ Barrett",
  "ownAdp": 113.3,
  "ownCount": 20,
  "ownMin": 65,
  "ownMax": 140,
  "fantraxAdp": 98,
  "team": "TOR",
  "pos": "SF"
 },
 "jaden hardy": {
  "name": "Jaden Hardy",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 296,
  "team": "LAL",
  "pos": "Flx"
 },
 "jamaree bouyea": {
  "name": "Jamaree Bouyea",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 342,
  "team": "PHO",
  "pos": "Flx"
 },
 "lucas williamson": {
  "name": "Lucas Williamson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 456,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jamison battle": {
  "name": "Jamison Battle",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 404,
  "team": "TOR",
  "pos": "Flx"
 },
 "jusuf nurkic": {
  "name": "Jusuf Nurkic",
  "ownAdp": 123.1,
  "ownCount": 17,
  "ownMin": 86,
  "ownMax": 153,
  "fantraxAdp": 198,
  "team": "UTA",
  "pos": "C"
 },
 "khris middleton": {
  "name": "Khris Middleton",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 183,
  "team": "WAS",
  "pos": "Flx"
 },
 "naeqwan tomlin": {
  "name": "Nae'Qwan Tomlin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 287,
  "team": "CLE",
  "pos": "Flx"
 },
 "marcus smart": {
  "name": "Marcus Smart",
  "ownAdp": 148.0,
  "ownCount": 1,
  "ownMin": 148,
  "ownMax": 148,
  "fantraxAdp": 147,
  "team": "HOU",
  "pos": "PG"
 },
 "shaedon sharpe": {
  "name": "Shaedon Sharpe",
  "ownAdp": 129.6,
  "ownCount": 12,
  "ownMin": 111,
  "ownMax": 158,
  "fantraxAdp": 123,
  "team": "POR",
  "pos": "SG"
 },
 "daniss jenkins": {
  "name": "Daniss Jenkins",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 154,
  "team": "DET",
  "pos": "Flx"
 },
 "jonathan isaac": {
  "name": "Jonathan Isaac",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 369,
  "team": "ORL",
  "pos": "Flx"
 },
 "lawson lovering": {
  "name": "Lawson Lovering",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 527,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jahmyl telfort": {
  "name": "Jahmyl Telfort",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 568,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "yves missi": {
  "name": "Yves Missi",
  "ownAdp": 142.9,
  "ownCount": 7,
  "ownMin": 106,
  "ownMax": 164,
  "fantraxAdp": 222,
  "team": "NO",
  "pos": "C"
 },
 "quinten post": {
  "name": "Quinten Post",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 232,
  "team": "MEM",
  "pos": "Flx"
 },
 "zach lavine": {
  "name": "Zach LaVine",
  "ownAdp": 121.7,
  "ownCount": 18,
  "ownMin": 94,
  "ownMax": 140,
  "fantraxAdp": 220,
  "team": "SAC",
  "pos": "SG"
 },
 "mikel brown": {
  "name": "Mikel Brown",
  "ownAdp": 147.2,
  "ownCount": 8,
  "ownMin": 124,
  "ownMax": 168,
  "fantraxAdp": null,
  "team": "BKN",
  "pos": "PG"
 },
 "kris murray": {
  "name": "Kris Murray",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 286,
  "team": "MEM",
  "pos": "Flx"
 },
 "david jones garcia": {
  "name": "David Jones Garcia",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 496,
  "team": "SA",
  "pos": "Flx"
 },
 "hunter dickinson": {
  "name": "Hunter Dickinson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 543,
  "team": "NO",
  "pos": "Flx"
 },
 "ajay mitchell": {
  "name": "Ajay Mitchell",
  "ownAdp": 114.8,
  "ownCount": 19,
  "ownMin": 95,
  "ownMax": 133,
  "fantraxAdp": 136,
  "team": "OKC",
  "pos": "SG"
 },
 "drake powell": {
  "name": "Drake Powell",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 290,
  "team": "BKN",
  "pos": "Flx"
 },
 "jamal cain": {
  "name": "Jamal Cain",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 380,
  "team": "ORL",
  "pos": "Flx"
 },
 "corey kispert": {
  "name": "Corey Kispert",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 267,
  "team": "ATL",
  "pos": "Flx"
 },
 "jeremy sochan": {
  "name": "Jeremy Sochan",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 388,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "derik queen": {
  "name": "Derik Queen",
  "ownAdp": 92.6,
  "ownCount": 21,
  "ownMin": 67,
  "ownMax": 120,
  "fantraxAdp": 49,
  "team": "NO",
  "pos": "C"
 },
 "aaron holiday": {
  "name": "Aaron Holiday",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 336,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "kawhi leonard": {
  "name": "Kawhi Leonard",
  "ownAdp": 27.6,
  "ownCount": 28,
  "ownMin": 16,
  "ownMax": 40,
  "fantraxAdp": 14,
  "team": "LAC",
  "pos": "SF"
 },
 "trendon watford": {
  "name": "Trendon Watford",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 301,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jamir watkins": {
  "name": "Jamir Watkins",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 265,
  "team": "WAS",
  "pos": "Flx"
 },
 "nikola jokic": {
  "name": "Nikola Jokic",
  "ownAdp": 1.6,
  "ownCount": 31,
  "ownMin": 1,
  "ownMax": 3,
  "fantraxAdp": 4,
  "team": "DEN",
  "pos": "C"
 },
 "duop reath": {
  "name": "Duop Reath",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 449,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "tyrese proctor": {
  "name": "Tyrese Proctor",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 348,
  "team": "CLE",
  "pos": "Flx"
 },
 "lebron james": {
  "name": "LeBron James",
  "ownAdp": 56.4,
  "ownCount": 25,
  "ownMin": 36,
  "ownMax": 77,
  "fantraxAdp": 53,
  "team": "(N/A)",
  "pos": "SF"
 },
 "amari williams": {
  "name": "Amari Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 480,
  "team": "BOS",
  "pos": "Flx"
 },
 "omer yurtseven": {
  "name": "Omer Yurtseven",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 491,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "brandin podziemski": {
  "name": "Brandin Podziemski",
  "ownAdp": 130.6,
  "ownCount": 16,
  "ownMin": 113,
  "ownMax": 166,
  "fantraxAdp": 44,
  "team": "GS",
  "pos": "SG"
 },
 "ace bailey": {
  "name": "Ace Bailey",
  "ownAdp": 124.9,
  "ownCount": 14,
  "ownMin": 87,
  "ownMax": 155,
  "fantraxAdp": 89,
  "team": "UTA",
  "pos": "SF"
 },
 "chaney johnson": {
  "name": "Chaney Johnson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 399,
  "team": "BKN",
  "pos": "Flx"
 },
 "jacob toppin": {
  "name": "Jacob Toppin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 560,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "draymond green": {
  "name": "Draymond Green",
  "ownAdp": 149.4,
  "ownCount": 7,
  "ownMin": 128,
  "ownMax": 165,
  "fantraxAdp": 107,
  "team": "(N/A)",
  "pos": "PF"
 },
 "kon knueppel": {
  "name": "Kon Knueppel",
  "ownAdp": 44.7,
  "ownCount": 25,
  "ownMin": 30,
  "ownMax": 62,
  "fantraxAdp": 36,
  "team": "CHA",
  "pos": "SF"
 },
 "spencer jones": {
  "name": "Spencer Jones",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 277,
  "team": "DEN",
  "pos": "Flx"
 },
 "pete nance": {
  "name": "Pete Nance",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 362,
  "team": "MIL",
  "pos": "Flx"
 },
 "cody williams": {
  "name": "Cody Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 213,
  "team": "UTA",
  "pos": "Flx"
 },
 "norense odiase": {
  "name": "Norense Odiase",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 590,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "sidy cissoko": {
  "name": "Sidy Cissoko",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 255,
  "team": "POR",
  "pos": "Flx"
 },
 "tyrese haliburton": {
  "name": "Tyrese Haliburton",
  "ownAdp": 11.7,
  "ownCount": 29,
  "ownMin": 7,
  "ownMax": 21,
  "fantraxAdp": null,
  "team": "IND",
  "pos": "PG"
 },
 "moses moody": {
  "name": "Moses Moody",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 145,
  "team": "GS",
  "pos": "Flx"
 },
 "grant williams": {
  "name": "Grant Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 331,
  "team": "CHA",
  "pos": "Flx"
 },
 "damian lillard": {
  "name": "Damian Lillard",
  "ownAdp": 88.6,
  "ownCount": 22,
  "ownMin": 63,
  "ownMax": 112,
  "fantraxAdp": null,
  "team": "POR",
  "pos": "PG"
 },
 "cameron payne": {
  "name": "Cameron Payne",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 383,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "stanley johnson": {
  "name": "Stanley Johnson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 600,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "deni avdija": {
  "name": "Deni Avdija",
  "ownAdp": 37.2,
  "ownCount": 25,
  "ownMin": 20,
  "ownMax": 56,
  "fantraxAdp": 31,
  "team": "POR",
  "pos": "SF"
 },
 "chaz lanier": {
  "name": "Chaz Lanier",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 465,
  "team": "DET",
  "pos": "Flx"
 },
 "cameron johnson": {
  "name": "Cameron Johnson",
  "ownAdp": 143.5,
  "ownCount": 6,
  "ownMin": 120,
  "ownMax": 168,
  "fantraxAdp": 175,
  "team": "DEN",
  "pos": "PF"
 },
 "hunter sallis": {
  "name": "Hunter Sallis",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 558,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "mark sears": {
  "name": "Mark Sears",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 532,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "fred vanvleet": {
  "name": "Fred VanVleet",
  "ownAdp": 111.4,
  "ownCount": 21,
  "ownMin": 74,
  "ownMax": 144,
  "fantraxAdp": null,
  "team": "HOU",
  "pos": "PG"
 },
 "daeqwon plowden": {
  "name": "Daeqwon Plowden",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 332,
  "team": "SAC",
  "pos": "Flx"
 },
 "ben saraf": {
  "name": "Ben Saraf",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 304,
  "team": "BKN",
  "pos": "Flx"
 },
 "marjon beauchamp": {
  "name": "MarJon Beauchamp",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 444,
  "team": "PHI",
  "pos": "Flx"
 },
 "kobe bufkin": {
  "name": "Kobe Bufkin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 486,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "bogdan bogdanovic": {
  "name": "Bogdan Bogdanovic",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 393,
  "team": "HOU",
  "pos": "Flx"
 },
 "jevon carter": {
  "name": "Jevon Carter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 314,
  "team": "ORL",
  "pos": "Flx"
 },
 "monte morris": {
  "name": "Monte Morris",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 526,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "charles bassey": {
  "name": "Charles Bassey",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 452,
  "team": "GS",
  "pos": "Flx"
 },
 "micah peavy": {
  "name": "Micah Peavy",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 338,
  "team": "NO",
  "pos": "Flx"
 },
 "nick richards": {
  "name": "Nick Richards",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 318,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "sharife cooper": {
  "name": "Sharife Cooper",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 322,
  "team": "WAS",
  "pos": "Flx"
 },
 "dennis schroder": {
  "name": "Dennis Schroder",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 133,
  "team": "CLE",
  "pos": "Flx"
 },
 "steven adams": {
  "name": "Steven Adams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 334,
  "team": "HOU",
  "pos": "Flx"
 },
 "dylan harper": {
  "name": "Dylan Harper",
  "ownAdp": 91.1,
  "ownCount": 21,
  "ownMin": 61,
  "ownMax": 121,
  "fantraxAdp": 138,
  "team": "SA",
  "pos": "SG"
 },
 "karlo matkovic": {
  "name": "Karlo Matkovic",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 282,
  "team": "NO",
  "pos": "Flx"
 },
 "jase richardson": {
  "name": "Jase Richardson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 370,
  "team": "ORL",
  "pos": "Flx"
 },
 "chet holmgren": {
  "name": "Chet Holmgren",
  "ownAdp": 26.3,
  "ownCount": 27,
  "ownMin": 14,
  "ownMax": 41,
  "fantraxAdp": 51,
  "team": "OKC",
  "pos": "C"
 },
 "jabari smith": {
  "name": "Jabari Smith",
  "ownAdp": 85.3,
  "ownCount": 23,
  "ownMin": 71,
  "ownMax": 107,
  "fantraxAdp": 34,
  "team": "HOU",
  "pos": "PF"
 },
 "pelle larsson": {
  "name": "Pelle Larsson",
  "ownAdp": 153.0,
  "ownCount": 9,
  "ownMin": 143,
  "ownMax": 166,
  "fantraxAdp": 135,
  "team": "MIA",
  "pos": "SG"
 },
 "og anunoby": {
  "name": "OG Anunoby",
  "ownAdp": 55.1,
  "ownCount": 23,
  "ownMin": 45,
  "ownMax": 65,
  "fantraxAdp": 40,
  "team": "NY",
  "pos": "PF"
 },
 "egor demin": {
  "name": "Egor Demin",
  "ownAdp": 132.4,
  "ownCount": 15,
  "ownMin": 107,
  "ownMax": 164,
  "fantraxAdp": 212,
  "team": "BKN",
  "pos": "PG"
 },
 "paul george": {
  "name": "Paul George",
  "ownAdp": 80.1,
  "ownCount": 23,
  "ownMin": 64,
  "ownMax": 96,
  "fantraxAdp": 171,
  "team": "BOS",
  "pos": "PF"
 },
 "tyrese martin": {
  "name": "Tyrese Martin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 337,
  "team": "PHI",
  "pos": "Flx"
 },
 "robert williams": {
  "name": "Robert Williams",
  "ownAdp": 157.0,
  "ownCount": 1,
  "ownMin": 157,
  "ownMax": 157,
  "fantraxAdp": 229,
  "team": "POR",
  "pos": "C"
 },
 "jakobe walter": {
  "name": "Ja'Kobe Walter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 202,
  "team": "TOR",
  "pos": "Flx"
 },
 "josh perkins": {
  "name": "Josh Perkins",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 577,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ochai agbaji": {
  "name": "Ochai Agbaji",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 330,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "dyson daniels": {
  "name": "Dyson Daniels",
  "ownAdp": 63.0,
  "ownCount": 25,
  "ownMin": 32,
  "ownMax": 89,
  "fantraxAdp": 67,
  "team": "ATL",
  "pos": "SG"
 },
 "patrick williams": {
  "name": "Patrick Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 219,
  "team": "CHI",
  "pos": "Flx"
 },
 "franz wagner": {
  "name": "Franz Wagner",
  "ownAdp": 57.8,
  "ownCount": 25,
  "ownMin": 41,
  "ownMax": 77,
  "fantraxAdp": 217,
  "team": "ORL",
  "pos": "SF"
 },
 "doug mcdermott": {
  "name": "Doug McDermott",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 417,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "mitchell robinson": {
  "name": "Mitchell Robinson",
  "ownAdp": 145.0,
  "ownCount": 3,
  "ownMin": 133,
  "ownMax": 163,
  "fantraxAdp": 226,
  "team": "BOS",
  "pos": "C"
 },
 "isaiah hartenstein": {
  "name": "Isaiah Hartenstein",
  "ownAdp": 98.3,
  "ownCount": 19,
  "ownMin": 65,
  "ownMax": 134,
  "fantraxAdp": 205,
  "team": "OKC",
  "pos": "C"
 },
 "brandon ingram": {
  "name": "Brandon Ingram",
  "ownAdp": 68.8,
  "ownCount": 25,
  "ownMin": 49,
  "ownMax": 89,
  "fantraxAdp": 24,
  "team": "TOR",
  "pos": "SF"
 },
 "ryan nembhard": {
  "name": "Ryan Nembhard",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 288,
  "team": "ATL",
  "pos": "Flx"
 },
 "buddy hield": {
  "name": "Buddy Hield",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 307,
  "team": "ATL",
  "pos": "Flx"
 },
 "miles mcbride": {
  "name": "Miles McBride",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 270,
  "team": "NY",
  "pos": "Flx"
 },
 "jalen williams": {
  "name": "Jalen Williams",
  "ownAdp": 42.0,
  "ownCount": 26,
  "ownMin": 17,
  "ownMax": 59,
  "fantraxAdp": 233,
  "team": "OKC",
  "pos": "SG"
 },
 "kennedy chandler": {
  "name": "Kennedy Chandler",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 394,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "bryce mcgowens": {
  "name": "Bryce McGowens",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 317,
  "team": "NO",
  "pos": "Flx"
 },
 "josh giddey": {
  "name": "Josh Giddey",
  "ownAdp": 27.9,
  "ownCount": 28,
  "ownMin": 16,
  "ownMax": 40,
  "fantraxAdp": 64,
  "team": "CHI",
  "pos": "PG"
 },
 "jalen wilson": {
  "name": "Jalen Wilson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 319,
  "team": "ATL",
  "pos": "Flx"
 },
 "john konchar": {
  "name": "John Konchar",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 252,
  "team": "UTA",
  "pos": "Flx"
 },
 "julian phillips": {
  "name": "Julian Phillips",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 409,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "kevin porter": {
  "name": "Kevin Porter",
  "ownAdp": 105.8,
  "ownCount": 21,
  "ownMin": 80,
  "ownMax": 137,
  "fantraxAdp": 140,
  "team": "MIL",
  "pos": "SG"
 },
 "kyshawn george": {
  "name": "Kyshawn George",
  "ownAdp": 119.9,
  "ownCount": 17,
  "ownMin": 98,
  "ownMax": 148,
  "fantraxAdp": 122,
  "team": "WAS",
  "pos": "SG"
 },
 "orlando robinson": {
  "name": "Orlando Robinson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 555,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ja morant": {
  "name": "Ja Morant",
  "ownAdp": 78.7,
  "ownCount": 22,
  "ownMin": 57,
  "ownMax": 119,
  "fantraxAdp": null,
  "team": "POR",
  "pos": "PG"
 },
 "trey alexander": {
  "name": "Trey Alexander",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 489,
  "team": "UTA",
  "pos": "Flx"
 },
 "max christie": {
  "name": "Max Christie",
  "ownAdp": 160.0,
  "ownCount": 1,
  "ownMin": 160,
  "ownMax": 160,
  "fantraxAdp": 99,
  "team": "DAL",
  "pos": "SG"
 },
 "donovan mitchell": {
  "name": "Donovan Mitchell",
  "ownAdp": 12.9,
  "ownCount": 29,
  "ownMin": 9,
  "ownMax": 19,
  "fantraxAdp": 11,
  "team": "CLE",
  "pos": "SG"
 },
 "immanuel quickley": {
  "name": "Immanuel Quickley",
  "ownAdp": 81.0,
  "ownCount": 22,
  "ownMin": 69,
  "ownMax": 96,
  "fantraxAdp": 54,
  "team": "TOR",
  "pos": "PG"
 },
 "kobe brown": {
  "name": "Kobe Brown",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 306,
  "team": "IND",
  "pos": "Flx"
 },
 "evan mobley": {
  "name": "Evan Mobley",
  "ownAdp": 28.4,
  "ownCount": 26,
  "ownMin": 21,
  "ownMax": 37,
  "fantraxAdp": 42,
  "team": "CLE",
  "pos": "PF"
 },
 "oscar tshiebwe": {
  "name": "Oscar Tshiebwe",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 376,
  "team": "UTA",
  "pos": "Flx"
 },
 "wendell moore": {
  "name": "Wendell Moore",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 542,
  "team": "DET",
  "pos": "Flx"
 },
 "jeff green": {
  "name": "Jeff Green",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 476,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "gary trent": {
  "name": "Gary Trent",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 279,
  "team": "MIL",
  "pos": "Flx"
 },
 "tyler smith": {
  "name": "Tyler Smith",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 481,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ryan rollins": {
  "name": "Ryan Rollins",
  "ownAdp": 67.2,
  "ownCount": 25,
  "ownMin": 54,
  "ownMax": 89,
  "fantraxAdp": 28,
  "team": "MIL",
  "pos": "PG"
 },
 "zaccharie risacher": {
  "name": "Zaccharie Risacher",
  "ownAdp": 153.0,
  "ownCount": 2,
  "ownMin": 138,
  "ownMax": 168,
  "fantraxAdp": 176,
  "team": "DAL",
  "pos": "SF"
 },
 "terrence shannon": {
  "name": "Terrence Shannon",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 373,
  "team": "MIN",
  "pos": "Flx"
 },
 "jock landale": {
  "name": "Jock Landale",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 160,
  "team": "ATL",
  "pos": "Flx"
 },
 "ty jerome": {
  "name": "Ty Jerome",
  "ownAdp": 91.0,
  "ownCount": 21,
  "ownMin": 62,
  "ownMax": 136,
  "fantraxAdp": 346,
  "team": "MEM",
  "pos": "SG"
 },
 "tyler herro": {
  "name": "Tyler Herro",
  "ownAdp": 61.2,
  "ownCount": 24,
  "ownMin": 40,
  "ownMax": 83,
  "fantraxAdp": 215,
  "team": "MIL",
  "pos": "SG"
 },
 "nikola vucevic": {
  "name": "Nikola Vucevic",
  "ownAdp": 121.6,
  "ownCount": 5,
  "ownMin": 97,
  "ownMax": 155,
  "fantraxAdp": 84,
  "team": "ORL",
  "pos": "C"
 },
 "duncan robinson": {
  "name": "Duncan Robinson",
  "ownAdp": 138.0,
  "ownCount": 1,
  "ownMin": 138,
  "ownMax": 138,
  "fantraxAdp": 117,
  "team": "DET",
  "pos": "SF"
 },
 "kyle filipowski": {
  "name": "Kyle Filipowski",
  "ownAdp": 152.4,
  "ownCount": 9,
  "ownMin": 135,
  "ownMax": 165,
  "fantraxAdp": 69,
  "team": "UTA",
  "pos": "C"
 },
 "darryn peterson": {
  "name": "Darryn Peterson",
  "ownAdp": 116.4,
  "ownCount": 17,
  "ownMin": 87,
  "ownMax": 144,
  "fantraxAdp": null,
  "team": "UTA",
  "pos": "SG"
 },
 "jarrett allen": {
  "name": "Jarrett Allen",
  "ownAdp": 85.0,
  "ownCount": 21,
  "ownMin": 71,
  "ownMax": 99,
  "fantraxAdp": 127,
  "team": "CLE",
  "pos": "C"
 },
 "dangelo russell": {
  "name": "D'Angelo Russell",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 349,
  "team": "MEM",
  "pos": "Flx"
 },
 "koby brea": {
  "name": "Koby Brea",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 499,
  "team": "PHO",
  "pos": "Flx"
 },
 "gg jackson": {
  "name": "GG Jackson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 179,
  "team": "MEM",
  "pos": "Flx"
 },
 "pat spencer": {
  "name": "Pat Spencer",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 241,
  "team": "PHO",
  "pos": "Flx"
 },
 "malachi smith": {
  "name": "Malachi Smith",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 420,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "trey murphy": {
  "name": "Trey Murphy",
  "ownAdp": 28.9,
  "ownCount": 27,
  "ownMin": 18,
  "ownMax": 44,
  "fantraxAdp": 27,
  "team": "NO",
  "pos": "SF"
 },
 "skal labissiere": {
  "name": "Skal Labissiere",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 536,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "isaiah stewart": {
  "name": "Isaiah Stewart",
  "ownAdp": 157.5,
  "ownCount": 2,
  "ownMin": 157,
  "ownMax": 158,
  "fantraxAdp": 182,
  "team": "MEM",
  "pos": "C"
 },
 "anthony black": {
  "name": "Anthony Black",
  "ownAdp": 135.2,
  "ownCount": 13,
  "ownMin": 107,
  "ownMax": 157,
  "fantraxAdp": 62,
  "team": "ORL",
  "pos": "PG"
 },
 "herbert jones": {
  "name": "Herbert Jones",
  "ownAdp": 148.0,
  "ownCount": 2,
  "ownMin": 133,
  "ownMax": 163,
  "fantraxAdp": 181,
  "team": "NO",
  "pos": "SF"
 },
 "devin booker": {
  "name": "Devin Booker",
  "ownAdp": 24.0,
  "ownCount": 27,
  "ownMin": 13,
  "ownMax": 39,
  "fantraxAdp": 61,
  "team": "PHO",
  "pos": "SG"
 },
 "julius randle": {
  "name": "Julius Randle",
  "ownAdp": 63.2,
  "ownCount": 25,
  "ownMin": 39,
  "ownMax": 83,
  "fantraxAdp": 30,
  "team": "BKN",
  "pos": "PF"
 },
 "blake hinson": {
  "name": "Blake Hinson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 426,
  "team": "UTA",
  "pos": "Flx"
 },
 "mac mcclung": {
  "name": "Mac McClung",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 467,
  "team": "CHI",
  "pos": "Flx"
 },
 "aj johnson": {
  "name": "AJ Johnson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 401,
  "team": "MEM",
  "pos": "Flx"
 },
 "kj simpson": {
  "name": "KJ Simpson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 438,
  "team": "DEN",
  "pos": "Flx"
 },
 "kadary richmond": {
  "name": "Kadary Richmond",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 506,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "norman powell": {
  "name": "Norman Powell",
  "ownAdp": 92.8,
  "ownCount": 22,
  "ownMin": 68,
  "ownMax": 112,
  "fantraxAdp": 82,
  "team": "CHI",
  "pos": "SG"
 },
 "kenrich williams": {
  "name": "Kenrich Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 312,
  "team": "OKC",
  "pos": "Flx"
 },
 "chris livingston": {
  "name": "Chris Livingston",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 553,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "william mcdowellwhite": {
  "name": "William McDowell-White",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 579,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "terance mann": {
  "name": "Terance Mann",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 234,
  "team": "BKN",
  "pos": "Flx"
 },
 "kyle anderson": {
  "name": "Kyle Anderson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 302,
  "team": "TOR",
  "pos": "Flx"
 },
 "garrett temple": {
  "name": "Garrett Temple",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 512,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "isaiah stevens": {
  "name": "Isaiah Stevens",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 535,
  "team": "SAC",
  "pos": "Flx"
 },
 "desmond bane": {
  "name": "Desmond Bane",
  "ownAdp": 46.3,
  "ownCount": 25,
  "ownMin": 29,
  "ownMax": 58,
  "fantraxAdp": 20,
  "team": "ORL",
  "pos": "SG"
 },
 "jake laravia": {
  "name": "Jake LaRavia",
  "ownAdp": 162.0,
  "ownCount": 1,
  "ownMin": 162,
  "ownMax": 162,
  "fantraxAdp": 100,
  "team": "LAL",
  "pos": "PF"
 },
 "caris levert": {
  "name": "Caris LeVert",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 227,
  "team": "MIL",
  "pos": "Flx"
 },
 "jalen slawson": {
  "name": "Jalen Slawson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 412,
  "team": "IND",
  "pos": "Flx"
 },
 "seth curry": {
  "name": "Seth Curry",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 473,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "john egbunu": {
  "name": "John Egbunu",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 586,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "dominick barlow": {
  "name": "Dominick Barlow",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 172,
  "team": "PHI",
  "pos": "Flx"
 },
 "cedric coward": {
  "name": "Cedric Coward",
  "ownAdp": 113.2,
  "ownCount": 18,
  "ownMin": 86,
  "ownMax": 148,
  "fantraxAdp": 116,
  "team": "MEM",
  "pos": "SG"
 },
 "andrew nembhard": {
  "name": "Andrew Nembhard",
  "ownAdp": 117.4,
  "ownCount": 16,
  "ownMin": 86,
  "ownMax": 158,
  "fantraxAdp": 104,
  "team": "IND",
  "pos": "SG"
 },
 "joan beringer": {
  "name": "Joan Beringer",
  "ownAdp": 149.0,
  "ownCount": 1,
  "ownMin": 149,
  "ownMax": 149,
  "fantraxAdp": 390,
  "team": "MIN",
  "pos": "PF"
 },
 "marvin bagley": {
  "name": "Marvin Bagley",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 193,
  "team": "DEN",
  "pos": "Flx"
 },
 "dorian finneysmith": {
  "name": "Dorian Finney-Smith",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 406,
  "team": "CHA",
  "pos": "Flx"
 },
 "simi shittu": {
  "name": "Simi Shittu",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 587,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "emanuel miller": {
  "name": "Emanuel Miller",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 541,
  "team": "SA",
  "pos": "Flx"
 },
 "caleb martin": {
  "name": "Caleb Martin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 329,
  "team": "DAL",
  "pos": "Flx"
 },
 "bismack biyombo": {
  "name": "Bismack Biyombo",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 504,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "kobe sanders": {
  "name": "Kobe Sanders",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 247,
  "team": "LAC",
  "pos": "Flx"
 },
 "jalen pickett": {
  "name": "Jalen Pickett",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 345,
  "team": "DEN",
  "pos": "Flx"
 },
 "adem bona": {
  "name": "Adem Bona",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 244,
  "team": "PHI",
  "pos": "Flx"
 },
 "tony bradley": {
  "name": "Tony Bradley",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 400,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jamal shead": {
  "name": "Jamal Shead",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 157,
  "team": "TOR",
  "pos": "Flx"
 },
 "lj cryer": {
  "name": "L.J. Cryer",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 432,
  "team": "GS",
  "pos": "Flx"
 },
 "thanasis antetokounmpo": {
  "name": "Thanasis Antetokounmpo",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 462,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "collin gillespie": {
  "name": "Collin Gillespie",
  "ownAdp": 137.0,
  "ownCount": 10,
  "ownMin": 115,
  "ownMax": 154,
  "fantraxAdp": 58,
  "team": "PHO",
  "pos": "PG"
 },
 "mikal bridges": {
  "name": "Mikal Bridges",
  "ownAdp": 67.3,
  "ownCount": 25,
  "ownMin": 46,
  "ownMax": 89,
  "fantraxAdp": 32,
  "team": "NY",
  "pos": "SF"
 },
 "rj hunter": {
  "name": "R.J. Hunter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 593,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "curtis jones": {
  "name": "Curtis Jones",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 507,
  "team": "DEN",
  "pos": "Flx"
 },
 "trentyn flowers": {
  "name": "Trentyn Flowers",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 566,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jose alvarado": {
  "name": "Jose Alvarado",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 208,
  "team": "NY",
  "pos": "Flx"
 },
 "oso ighodaro": {
  "name": "Oso Ighodaro",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 156,
  "team": "PHO",
  "pos": "Flx"
 },
 "jaylen clark": {
  "name": "Jaylen Clark",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 324,
  "team": "MIN",
  "pos": "Flx"
 },
 "michael porter": {
  "name": "Michael Porter",
  "ownAdp": 61.8,
  "ownCount": 25,
  "ownMin": 41,
  "ownMax": 86,
  "fantraxAdp": 66,
  "team": "BKN",
  "pos": "SF"
 },
 "keshon gilbert": {
  "name": "Keshon Gilbert",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 511,
  "team": "ATL",
  "pos": "Flx"
 },
 "trey jemison": {
  "name": "Trey Jemison",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 524,
  "team": "NY",
  "pos": "Flx"
 },
 "jaylen brown": {
  "name": "Jaylen Brown",
  "ownAdp": 39.6,
  "ownCount": 25,
  "ownMin": 17,
  "ownMax": 60,
  "fantraxAdp": 21,
  "team": "PHI",
  "pos": "SF"
 },
 "jared harper": {
  "name": "Jared Harper",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 589,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ryan dunn": {
  "name": "Ryan Dunn",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 240,
  "team": "PHO",
  "pos": "Flx"
 },
 "aaron nesmith": {
  "name": "Aaron Nesmith",
  "ownAdp": 158.0,
  "ownCount": 1,
  "ownMin": 158,
  "ownMax": 158,
  "fantraxAdp": 214,
  "team": "IND",
  "pos": "SF"
 },
 "ky bowman": {
  "name": "Ky Bowman",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 580,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "mouhamed gueye": {
  "name": "Mouhamed Gueye",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 250,
  "team": "ATL",
  "pos": "Flx"
 },
 "johni broome": {
  "name": "Johni Broome",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 529,
  "team": "PHI",
  "pos": "Flx"
 },
 "tyty washington": {
  "name": "TyTy Washington",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 505,
  "team": "LAC",
  "pos": "Flx"
 },
 "ben sheppard": {
  "name": "Ben Sheppard",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 260,
  "team": "IND",
  "pos": "Flx"
 },
 "kasparas jakucionis": {
  "name": "Kasparas Jakucionis",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 293,
  "team": "MIL",
  "pos": "Flx"
 },
 "luke kornet": {
  "name": "Luke Kornet",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 191,
  "team": "SA",
  "pos": "Flx"
 },
 "leonard miller": {
  "name": "Leonard Miller",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 320,
  "team": "CHI",
  "pos": "Flx"
 },
 "javon small": {
  "name": "Javon Small",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 271,
  "team": "MEM",
  "pos": "Flx"
 },
 "lachlan olbrich": {
  "name": "Lachlan Olbrich",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 416,
  "team": "CHI",
  "pos": "Flx"
 },
 "mason plumlee": {
  "name": "Mason Plumlee",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 479,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "nique clifford": {
  "name": "Nique Clifford",
  "ownAdp": 115.2,
  "ownCount": 11,
  "ownMin": 70,
  "ownMax": 144,
  "fantraxAdp": 153,
  "team": "SAC",
  "pos": "SG"
 },
 "darius garland": {
  "name": "Darius Garland",
  "ownAdp": 54.9,
  "ownCount": 25,
  "ownMin": 33,
  "ownMax": 68,
  "fantraxAdp": 152,
  "team": "LAC",
  "pos": "PG"
 },
 "justise winslow": {
  "name": "Justise Winslow",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 599,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ousmane dieng": {
  "name": "Ousmane Dieng",
  "ownAdp": 164.0,
  "ownCount": 1,
  "ownMin": 164,
  "ownMax": 164,
  "fantraxAdp": 274,
  "team": "MIL",
  "pos": "C"
 },
 "dejon jarreau": {
  "name": "DeJon Jarreau",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 434,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "ethan thompson": {
  "name": "Ethan Thompson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 359,
  "team": "IND",
  "pos": "Flx"
 },
 "bronny james": {
  "name": "Bronny James",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 423,
  "team": "LAL",
  "pos": "Flx"
 },
 "tristan enaruna": {
  "name": "Tristan Enaruna",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 501,
  "team": "CLE",
  "pos": "Flx"
 },
 "ayo dosunmu": {
  "name": "Ayo Dosunmu",
  "ownAdp": 101.4,
  "ownCount": 21,
  "ownMin": 68,
  "ownMax": 125,
  "fantraxAdp": 92,
  "team": "MIN",
  "pos": "SG"
 },
 "deanthony melton": {
  "name": "De'Anthony Melton",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 178,
  "team": "GS",
  "pos": "Flx"
 },
 "tyler burton": {
  "name": "Tyler Burton",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 425,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jay huff": {
  "name": "Jay Huff",
  "ownAdp": 139.7,
  "ownCount": 3,
  "ownMin": 123,
  "ownMax": 166,
  "fantraxAdp": 86,
  "team": "IND",
  "pos": "C"
 },
 "sean pedulla": {
  "name": "Sean Pedulla",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 545,
  "team": "LAC",
  "pos": "Flx"
 },
 "mark williams": {
  "name": "Mark Williams",
  "ownAdp": 113.4,
  "ownCount": 20,
  "ownMin": 91,
  "ownMax": 141,
  "fantraxAdp": 155,
  "team": "PHO",
  "pos": "C"
 },
 "jonathan kuminga": {
  "name": "Jonathan Kuminga",
  "ownAdp": 149.0,
  "ownCount": 1,
  "ownMin": 149,
  "ownMax": 149,
  "fantraxAdp": 278,
  "team": "(N/A)",
  "pos": "PF"
 },
 "john poulakidas": {
  "name": "John Poulakidas",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 442,
  "team": "DAL",
  "pos": "Flx"
 },
 "donte divincenzo": {
  "name": "Donte DiVincenzo",
  "ownAdp": 129.5,
  "ownCount": 6,
  "ownMin": 108,
  "ownMax": 142,
  "fantraxAdp": 45,
  "team": "MIN",
  "pos": "SG"
 },
 "kentavious caldwellpope": {
  "name": "Kentavious Caldwell-Pope",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 264,
  "team": "MEM",
  "pos": "Flx"
 },
 "kevin huerter": {
  "name": "Kevin Huerter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 146,
  "team": "DET",
  "pos": "Flx"
 },
 "jeremiah fears": {
  "name": "Jeremiah Fears",
  "ownAdp": 130.1,
  "ownCount": 15,
  "ownMin": 96,
  "ownMax": 159,
  "fantraxAdp": 56,
  "team": "NO",
  "pos": "PG"
 },
 "cj huntley": {
  "name": "CJ Huntley",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 547,
  "team": "PHO",
  "pos": "Flx"
 },
 "chris manon": {
  "name": "Chris Mañon",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 537,
  "team": "LAL",
  "pos": "Flx"
 },
 "derrick jones": {
  "name": "Derrick Jones",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 224,
  "team": "LAC",
  "pos": "Flx"
 },
 "tosan evbuomwan": {
  "name": "Tosan Evbuomwan",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 572,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "zach edey": {
  "name": "Zach Edey",
  "ownAdp": 70.9,
  "ownCount": 24,
  "ownMin": 53,
  "ownMax": 90,
  "fantraxAdp": 391,
  "team": "MEM",
  "pos": "C"
 },
 "lauri markkanen": {
  "name": "Lauri Markkanen",
  "ownAdp": 30.8,
  "ownCount": 25,
  "ownMin": 22,
  "ownMax": 40,
  "fantraxAdp": 119,
  "team": "UTA",
  "pos": "PF"
 },
 "kyle kuzma": {
  "name": "Kyle Kuzma",
  "ownAdp": 141.0,
  "ownCount": 1,
  "ownMin": 141,
  "ownMax": 141,
  "fantraxAdp": 113,
  "team": "MIL",
  "pos": "PF"
 },
 "ziaire williams": {
  "name": "Ziaire Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 204,
  "team": "LAL",
  "pos": "Flx"
 },
 "nick smith": {
  "name": "Nick Smith",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 413,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "naji marshall": {
  "name": "Naji Marshall",
  "ownAdp": 156.7,
  "ownCount": 3,
  "ownMin": 152,
  "ownMax": 159,
  "fantraxAdp": 79,
  "team": "DAL",
  "pos": "SF"
 },
 "jericho sims": {
  "name": "Jericho Sims",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 295,
  "team": "MIL",
  "pos": "Flx"
 },
 "bradley beal": {
  "name": "Bradley Beal",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 493,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "will richard": {
  "name": "Will Richard",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 243,
  "team": "GS",
  "pos": "Flx"
 },
 "cameron boozer": {
  "name": "Cameron Boozer",
  "ownAdp": 60.1,
  "ownCount": 25,
  "ownMin": 32,
  "ownMax": 83,
  "fantraxAdp": null,
  "team": "MEM",
  "pos": "PF"
 },
 "cade cunningham": {
  "name": "Cade Cunningham",
  "ownAdp": 5.5,
  "ownCount": 31,
  "ownMin": 4,
  "ownMax": 7,
  "fantraxAdp": 8,
  "team": "DET",
  "pos": "PG"
 },
 "goga bitadze": {
  "name": "Goga Bitadze",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 237,
  "team": "ORL",
  "pos": "Flx"
 },
 "dillon jones": {
  "name": "Dillon Jones",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 544,
  "team": "NY",
  "pos": "Flx"
 },
 "jaren jackson": {
  "name": "Jaren Jackson",
  "ownAdp": 44.4,
  "ownCount": 25,
  "ownMin": 28,
  "ownMax": 63,
  "fantraxAdp": 95,
  "team": "UTA",
  "pos": "C"
 },
 "gui santos": {
  "name": "Gui Santos",
  "ownAdp": 161.5,
  "ownCount": 2,
  "ownMin": 160,
  "ownMax": 163,
  "fantraxAdp": 165,
  "team": "GS",
  "pos": "PF"
 },
 "daquan jeffries": {
  "name": "DaQuan Jeffries",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 518,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "keldon johnson": {
  "name": "Keldon Johnson",
  "ownAdp": 122.0,
  "ownCount": 3,
  "ownMin": 78,
  "ownMax": 161,
  "fantraxAdp": 108,
  "team": "SA",
  "pos": "SF"
 },
 "jordan poole": {
  "name": "Jordan Poole",
  "ownAdp": 155.0,
  "ownCount": 2,
  "ownMin": 153,
  "ownMax": 157,
  "fantraxAdp": 253,
  "team": "NO",
  "pos": "SG"
 },
 "tre jones": {
  "name": "Tre Jones",
  "ownAdp": 144.5,
  "ownCount": 12,
  "ownMin": 110,
  "ownMax": 163,
  "fantraxAdp": 114,
  "team": "CHI",
  "pos": "PG"
 },
 "donovan clingan": {
  "name": "Donovan Clingan",
  "ownAdp": 52.0,
  "ownCount": 25,
  "ownMin": 39,
  "ownMax": 65,
  "fantraxAdp": 57,
  "team": "POR",
  "pos": "C"
 },
 "keon ellis": {
  "name": "Keon Ellis",
  "ownAdp": 146.3,
  "ownCount": 6,
  "ownMin": 132,
  "ownMax": 157,
  "fantraxAdp": 206,
  "team": "BKN",
  "pos": "SG"
 },
 "julian champagnie": {
  "name": "Julian Champagnie",
  "ownAdp": 151.7,
  "ownCount": 3,
  "ownMin": 150,
  "ownMax": 154,
  "fantraxAdp": 68,
  "team": "SA",
  "pos": "SF"
 },
 "nate williams": {
  "name": "Nate Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 453,
  "team": "GS",
  "pos": "Flx"
 },
 "max shulga": {
  "name": "Max Shulga",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 554,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "aj green": {
  "name": "AJ Green",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 161,
  "team": "MIL",
  "pos": "Flx"
 },
 "sam merrill": {
  "name": "Sam Merrill",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 216,
  "team": "CLE",
  "pos": "Flx"
 },
 "cooper flagg": {
  "name": "Cooper Flagg",
  "ownAdp": 12.9,
  "ownCount": 29,
  "ownMin": 7,
  "ownMax": 19,
  "fantraxAdp": 22,
  "team": "DAL",
  "pos": "SF"
 },
 "dalen terry": {
  "name": "Dalen Terry",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 368,
  "team": "PHI",
  "pos": "Flx"
 },
 "david roddy": {
  "name": "David Roddy",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 495,
  "team": "DEN",
  "pos": "Flx"
 },
 "vladislav goldin": {
  "name": "Vladislav Goldin",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 546,
  "team": "MIA",
  "pos": "Flx"
 },
 "nicolas batum": {
  "name": "Nicolas Batum",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 303,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "keaton wallace": {
  "name": "Keaton Wallace",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 372,
  "team": "ATL",
  "pos": "Flx"
 },
 "chris paul": {
  "name": "Chris Paul",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 463,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "tari eason": {
  "name": "Tari Eason",
  "ownAdp": 138.8,
  "ownCount": 15,
  "ownMin": 113,
  "ownMax": 162,
  "fantraxAdp": 164,
  "team": "HOU",
  "pos": "PF"
 },
 "pacome dadiet": {
  "name": "Pacome Dadiet",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 482,
  "team": "NY",
  "pos": "Flx"
 },
 "chucky hepburn": {
  "name": "Chucky Hepburn",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 570,
  "team": "TOR",
  "pos": "Flx"
 },
 "garrison mathews": {
  "name": "Garrison Mathews",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 459,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "dalton knecht": {
  "name": "Dalton Knecht",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 382,
  "team": "LAL",
  "pos": "Flx"
 },
 "joe ingles": {
  "name": "Joe Ingles",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 472,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "dru smith": {
  "name": "Dru Smith",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 199,
  "team": "MIA",
  "pos": "Flx"
 },
 "zach collins": {
  "name": "Zach Collins",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 448,
  "team": "CHI",
  "pos": "Flx"
 },
 "tariq owens": {
  "name": "Tariq Owens",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 588,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "carlton carrington": {
  "name": "Carlton Carrington",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 93,
  "team": "WAS",
  "pos": "Flx"
 },
 "walker kessler": {
  "name": "Walker Kessler",
  "ownAdp": 42.2,
  "ownCount": 25,
  "ownMin": 30,
  "ownMax": 66,
  "fantraxAdp": 446,
  "team": "LAL",
  "pos": "C"
 },
 "chris youngblood": {
  "name": "Chris Youngblood",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 466,
  "team": "POR",
  "pos": "Flx"
 },
 "eric gordon": {
  "name": "Eric Gordon",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 510,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "dejounte murray": {
  "name": "Dejounte Murray",
  "ownAdp": 63.1,
  "ownCount": 25,
  "ownMin": 42,
  "ownMax": 79,
  "fantraxAdp": 354,
  "team": "NO",
  "pos": "PG"
 },
 "tyson etienne": {
  "name": "Tyson Etienne",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 396,
  "team": "BKN",
  "pos": "Flx"
 },
 "kelly olynyk": {
  "name": "Kelly Olynyk",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 403,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "darius acuff": {
  "name": "Darius Acuff",
  "ownAdp": 143.1,
  "ownCount": 15,
  "ownMin": 129,
  "ownMax": 167,
  "fantraxAdp": null,
  "team": "SAC",
  "pos": "PG"
 },
 "trayce jacksondavis": {
  "name": "Trayce Jackson-Davis",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 356,
  "team": "TOR",
  "pos": "Flx"
 },
 "keegan murray": {
  "name": "Keegan Murray",
  "ownAdp": 108.5,
  "ownCount": 19,
  "ownMin": 94,
  "ownMax": 124,
  "fantraxAdp": 315,
  "team": "SAC",
  "pos": "PF"
 },
 "alondes williams": {
  "name": "Alondes Williams",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 485,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "lindy waters": {
  "name": "Lindy Waters",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 454,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "colby jones": {
  "name": "Colby Jones",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 567,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "dwight powell": {
  "name": "Dwight Powell",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 311,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "brice sensabaugh": {
  "name": "Brice Sensabaugh",
  "ownAdp": 146.5,
  "ownCount": 2,
  "ownMin": 141,
  "ownMax": 152,
  "fantraxAdp": 97,
  "team": "UTA",
  "pos": "SF"
 },
 "bobby portis": {
  "name": "Bobby Portis",
  "ownAdp": 143.5,
  "ownCount": 4,
  "ownMin": 134,
  "ownMax": 161,
  "fantraxAdp": 149,
  "team": "MIA",
  "pos": "PF"
 },
 "devin carter": {
  "name": "Devin Carter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 309,
  "team": "ATL",
  "pos": "Flx"
 },
 "ej liddell": {
  "name": "E.J. Liddell",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 408,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "jakob poeltl": {
  "name": "Jakob Poeltl",
  "ownAdp": 122.4,
  "ownCount": 17,
  "ownMin": 95,
  "ownMax": 160,
  "fantraxAdp": 242,
  "team": "TOR",
  "pos": "C"
 },
 "mo bamba": {
  "name": "Mo Bamba",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 533,
  "team": "UTA",
  "pos": "Flx"
 },
 "kristaps porzingis": {
  "name": "Kristaps Porzingis",
  "ownAdp": 117.4,
  "ownCount": 16,
  "ownMin": 91,
  "ownMax": 153,
  "fantraxAdp": 238,
  "team": "GS",
  "pos": "C"
 },
 "gary payton": {
  "name": "Gary Payton II",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 225,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "rob dillingham": {
  "name": "Rob Dillingham",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 281,
  "team": "CHI",
  "pos": "Flx"
 },
 "julian reese": {
  "name": "Julian Reese",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 386,
  "team": "WAS",
  "pos": "Flx"
 },
 "jayson kent": {
  "name": "Jayson Kent",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 549,
  "team": "POR",
  "pos": "Flx"
 },
 "kelel ware": {
  "name": "Kel'el Ware",
  "ownAdp": 60.7,
  "ownCount": 23,
  "ownMin": 38,
  "ownMax": 97,
  "fantraxAdp": 91,
  "team": "MIL",
  "pos": "C"
 },
 "payton pritchard": {
  "name": "Payton Pritchard",
  "ownAdp": 73.8,
  "ownCount": 24,
  "ownMin": 49,
  "ownMax": 89,
  "fantraxAdp": 60,
  "team": "BOS",
  "pos": "PG"
 },
 "taelon peter": {
  "name": "Taelon Peter",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 387,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "kevin love": {
  "name": "Kevin Love",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 328,
  "team": "(N/A)",
  "pos": "Flx"
 },
 "vit krejci": {
  "name": "Vit Krejci",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 230,
  "team": "POR",
  "pos": "Flx"
 },
 "carter bryant": {
  "name": "Carter Bryant",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 321,
  "team": "SA",
  "pos": "Flx"
 },
 "moritz wagner": {
  "name": "Moritz Wagner",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 360,
  "team": "BKN",
  "pos": "Flx"
 },
 "jahmai mashack": {
  "name": "Jahmai Mashack",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 355,
  "team": "MEM",
  "pos": "Flx"
 },
 "branden carlson": {
  "name": "Branden Carlson",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 363,
  "team": "POR",
  "pos": "Flx"
 },
 "noah clowney": {
  "name": "Noah Clowney",
  "ownAdp": 150.5,
  "ownCount": 2,
  "ownMin": 147,
  "ownMax": 154,
  "fantraxAdp": 105,
  "team": "BKN",
  "pos": "PF"
 },
 "kyrie irving": {
  "name": "Kyrie Irving",
  "ownAdp": 61.6,
  "ownCount": 25,
  "ownMin": 35,
  "ownMax": 81,
  "fantraxAdp": null,
  "team": "DAL",
  "pos": "SG"
 },
 "walter clayton": {
  "name": "Walter Clayton",
  "ownAdp": 154.0,
  "ownCount": 1,
  "ownMin": 154,
  "ownMax": 154,
  "fantraxAdp": 188,
  "team": "MEM",
  "pos": "PG"
 },
 "pj hall": {
  "name": "PJ Hall",
  "ownAdp": null,
  "ownCount": 0,
  "ownMin": null,
  "ownMax": null,
  "fantraxAdp": 439,
  "team": "CHA",
  "pos": "Flx"
 }
};
