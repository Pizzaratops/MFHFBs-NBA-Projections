// MFHFBs NBA Projections — ADP-Daten (Output von scripts/build-adp-data.py)
// Quelle: 8 Draft Result CSV(s) aus data/draft-results/
// Key = normalisierter Spielername (siehe mfhfbNormalizeName in assets/shared.js)
// NICHT MANUELL BEARBEITEN — neue CSV in data/draft-results/ legen, Skript erneut laufen lassen.
const ADP_DATA = {
 "victor wembanyama": {
  "name": "Victor Wembanyama",
  "adp": 1.2,
  "count": 8,
  "min": 1,
  "max": 2,
  "team": "SA",
  "pos": "C"
 },
 "nikola jokic": {
  "name": "Nikola Jokic",
  "adp": 1.8,
  "count": 8,
  "min": 1,
  "max": 2,
  "team": "DEN",
  "pos": "C"
 },
 "shai gilgeousalexander": {
  "name": "Shai Gilgeous-Alexander",
  "adp": 3.1,
  "count": 8,
  "min": 3,
  "max": 4,
  "team": "OKC",
  "pos": "PG"
 },
 "luka doncic": {
  "name": "Luka Doncic",
  "adp": 4.0,
  "count": 8,
  "min": 3,
  "max": 5,
  "team": "LAL",
  "pos": "PG"
 },
 "tyrese maxey": {
  "name": "Tyrese Maxey",
  "adp": 6.1,
  "count": 8,
  "min": 5,
  "max": 8,
  "team": "PHI",
  "pos": "PG"
 },
 "cade cunningham": {
  "name": "Cade Cunningham",
  "adp": 5.8,
  "count": 8,
  "min": 4,
  "max": 7,
  "team": "DET",
  "pos": "PG"
 },
 "cooper flagg": {
  "name": "Cooper Flagg",
  "adp": 12.4,
  "count": 8,
  "min": 7,
  "max": 15,
  "team": "DAL",
  "pos": "SF"
 },
 "scottie barnes": {
  "name": "Scottie Barnes",
  "adp": 10.0,
  "count": 8,
  "min": 5,
  "max": 15,
  "team": "TOR",
  "pos": "PF"
 },
 "giannis antetokounmpo": {
  "name": "Giannis Antetokounmpo",
  "adp": 8.8,
  "count": 8,
  "min": 6,
  "max": 12,
  "team": "MIA",
  "pos": "PF"
 },
 "anthony edwards": {
  "name": "Anthony Edwards",
  "adp": 11.4,
  "count": 8,
  "min": 8,
  "max": 15,
  "team": "MIN",
  "pos": "SG"
 },
 "donovan mitchell": {
  "name": "Donovan Mitchell",
  "adp": 13.5,
  "count": 8,
  "min": 11,
  "max": 17,
  "team": "CLE",
  "pos": "SG"
 },
 "jalen johnson": {
  "name": "Jalen Johnson",
  "adp": 10.2,
  "count": 8,
  "min": 7,
  "max": 14,
  "team": "ATL",
  "pos": "SF"
 },
 "alperen sengun": {
  "name": "Alperen Sengun",
  "adp": 24.1,
  "count": 8,
  "min": 13,
  "max": 37,
  "team": "HOU",
  "pos": "C"
 },
 "karlanthony towns": {
  "name": "Karl-Anthony Towns",
  "adp": 17.4,
  "count": 8,
  "min": 14,
  "max": 24,
  "team": "NY",
  "pos": "C"
 },
 "jayson tatum": {
  "name": "Jayson Tatum",
  "adp": 9.6,
  "count": 8,
  "min": 5,
  "max": 15,
  "team": "BOS",
  "pos": "PF"
 },
 "kevin durant": {
  "name": "Kevin Durant",
  "adp": 18.8,
  "count": 8,
  "min": 9,
  "max": 27,
  "team": "HOU",
  "pos": "PF"
 },
 "tyrese haliburton": {
  "name": "Tyrese Haliburton",
  "adp": 11.1,
  "count": 8,
  "min": 7,
  "max": 17,
  "team": "IND",
  "pos": "PG"
 },
 "amen thompson": {
  "name": "Amen Thompson",
  "adp": 23.1,
  "count": 8,
  "min": 16,
  "max": 33,
  "team": "HOU",
  "pos": "SF"
 },
 "kawhi leonard": {
  "name": "Kawhi Leonard",
  "adp": 30.2,
  "count": 8,
  "min": 16,
  "max": 40,
  "team": "LAC",
  "pos": "SF"
 },
 "stephen curry": {
  "name": "Stephen Curry",
  "adp": 18.5,
  "count": 8,
  "min": 12,
  "max": 28,
  "team": "GS",
  "pos": "PG"
 },
 "trae young": {
  "name": "Trae Young",
  "adp": 19.8,
  "count": 8,
  "min": 10,
  "max": 30,
  "team": "WAS",
  "pos": "PG"
 },
 "jamal murray": {
  "name": "Jamal Murray",
  "adp": 20.8,
  "count": 8,
  "min": 16,
  "max": 31,
  "team": "DEN",
  "pos": "PG"
 },
 "austin reaves": {
  "name": "Austin Reaves",
  "adp": 25.9,
  "count": 8,
  "min": 21,
  "max": 33,
  "team": "LAL",
  "pos": "SG"
 },
 "james harden": {
  "name": "James Harden",
  "adp": 25.0,
  "count": 8,
  "min": 22,
  "max": 30,
  "team": "CLE",
  "pos": "PG"
 },
 "anthony davis": {
  "name": "Anthony Davis",
  "adp": 31.2,
  "count": 8,
  "min": 19,
  "max": 40,
  "team": "WAS",
  "pos": "PF"
 },
 "devin booker": {
  "name": "Devin Booker",
  "adp": 22.5,
  "count": 8,
  "min": 16,
  "max": 31,
  "team": "PHO",
  "pos": "SG"
 },
 "chet holmgren": {
  "name": "Chet Holmgren",
  "adp": 25.6,
  "count": 8,
  "min": 19,
  "max": 32,
  "team": "OKC",
  "pos": "C"
 },
 "josh giddey": {
  "name": "Josh Giddey",
  "adp": 31.0,
  "count": 8,
  "min": 26,
  "max": 40,
  "team": "CHI",
  "pos": "PG"
 },
 "desmond bane": {
  "name": "Desmond Bane",
  "adp": 45.4,
  "count": 8,
  "min": 29,
  "max": 56,
  "team": "ORL",
  "pos": "SG"
 },
 "trey murphy": {
  "name": "Trey Murphy",
  "adp": 27.6,
  "count": 8,
  "min": 19,
  "max": 35,
  "team": "NO",
  "pos": "SF"
 },
 "evan mobley": {
  "name": "Evan Mobley",
  "adp": 27.8,
  "count": 8,
  "min": 21,
  "max": 32,
  "team": "CLE",
  "pos": "PF"
 },
 "cameron boozer": {
  "name": "Cameron Boozer",
  "adp": 53.5,
  "count": 8,
  "min": 32,
  "max": 79,
  "team": "MEM",
  "pos": "PF"
 },
 "lamelo ball": {
  "name": "LaMelo Ball",
  "adp": 25.2,
  "count": 8,
  "min": 19,
  "max": 33,
  "team": "MIN",
  "pos": "PG"
 },
 "lauri markkanen": {
  "name": "Lauri Markkanen",
  "adp": 30.4,
  "count": 8,
  "min": 26,
  "max": 36,
  "team": "UTA",
  "pos": "PF"
 },
 "jalen brunson": {
  "name": "Jalen Brunson",
  "adp": 35.4,
  "count": 8,
  "min": 17,
  "max": 48,
  "team": "NY",
  "pos": "PG"
 },
 "derrick white": {
  "name": "Derrick White",
  "adp": 26.9,
  "count": 8,
  "min": 9,
  "max": 36,
  "team": "BOS",
  "pos": "SG"
 },
 "rudy gobert": {
  "name": "Rudy Gobert",
  "adp": 62.2,
  "count": 8,
  "min": 37,
  "max": 76,
  "team": "MIN",
  "pos": "C"
 },
 "jaren jackson": {
  "name": "Jaren Jackson",
  "adp": 39.8,
  "count": 8,
  "min": 28,
  "max": 55,
  "team": "UTA",
  "pos": "C"
 },
 "walker kessler": {
  "name": "Walker Kessler",
  "adp": 42.0,
  "count": 8,
  "min": 30,
  "max": 66,
  "team": "LAL",
  "pos": "C"
 },
 "jalen duren": {
  "name": "Jalen Duren",
  "adp": 45.8,
  "count": 8,
  "min": 35,
  "max": 60,
  "team": "DET",
  "pos": "C"
 },
 "keyonte george": {
  "name": "Keyonte George",
  "adp": 53.6,
  "count": 8,
  "min": 41,
  "max": 68,
  "team": "UTA",
  "pos": "PG"
 },
 "kon knueppel": {
  "name": "Kon Knueppel",
  "adp": 45.2,
  "count": 8,
  "min": 42,
  "max": 50,
  "team": "CHA",
  "pos": "SF"
 },
 "bam adebayo": {
  "name": "Bam Adebayo",
  "adp": 37.8,
  "count": 8,
  "min": 31,
  "max": 46,
  "team": "MIA",
  "pos": "C"
 },
 "matas buzelis": {
  "name": "Matas Buzelis",
  "adp": 56.6,
  "count": 8,
  "min": 44,
  "max": 77,
  "team": "CHI",
  "pos": "SF"
 },
 "onyeka okongwu": {
  "name": "Onyeka Okongwu",
  "adp": 45.8,
  "count": 8,
  "min": 39,
  "max": 59,
  "team": "ATL",
  "pos": "C"
 },
 "mikal bridges": {
  "name": "Mikal Bridges",
  "adp": 61.2,
  "count": 8,
  "min": 46,
  "max": 89,
  "team": "NY",
  "pos": "SF"
 },
 "brandon miller": {
  "name": "Brandon Miller",
  "adp": 44.8,
  "count": 8,
  "min": 38,
  "max": 57,
  "team": "CHA",
  "pos": "SF"
 },
 "domantas sabonis": {
  "name": "Domantas Sabonis",
  "adp": 44.4,
  "count": 8,
  "min": 23,
  "max": 60,
  "team": "SAC",
  "pos": "C"
 },
 "pascal siakam": {
  "name": "Pascal Siakam",
  "adp": 56.0,
  "count": 8,
  "min": 44,
  "max": 74,
  "team": "IND",
  "pos": "PF"
 },
 "paolo banchero": {
  "name": "Paolo Banchero",
  "adp": 42.9,
  "count": 8,
  "min": 28,
  "max": 58,
  "team": "ORL",
  "pos": "PF"
 },
 "jaylen brown": {
  "name": "Jaylen Brown",
  "adp": 42.9,
  "count": 8,
  "min": 27,
  "max": 51,
  "team": "PHI",
  "pos": "SF"
 },
 "kelel ware": {
  "name": "Kel'el Ware",
  "adp": 55.8,
  "count": 8,
  "min": 38,
  "max": 68,
  "team": "MIL",
  "pos": "C"
 },
 "donovan clingan": {
  "name": "Donovan Clingan",
  "adp": 57.4,
  "count": 8,
  "min": 51,
  "max": 65,
  "team": "POR",
  "pos": "C"
 },
 "lebron james": {
  "name": "LeBron James",
  "adp": 56.6,
  "count": 8,
  "min": 40,
  "max": 76,
  "team": "(N/A)",
  "pos": "SF"
 },
 "joel embiid": {
  "name": "Joel Embiid",
  "adp": 63.6,
  "count": 8,
  "min": 34,
  "max": 88,
  "team": "PHI",
  "pos": "C"
 },
 "deni avdija": {
  "name": "Deni Avdija",
  "adp": 34.9,
  "count": 8,
  "min": 20,
  "max": 56,
  "team": "POR",
  "pos": "SF"
 },
 "jalen williams": {
  "name": "Jalen Williams",
  "adp": 44.5,
  "count": 8,
  "min": 29,
  "max": 57,
  "team": "OKC",
  "pos": "SG"
 },
 "franz wagner": {
  "name": "Franz Wagner",
  "adp": 62.4,
  "count": 8,
  "min": 41,
  "max": 77,
  "team": "ORL",
  "pos": "SF"
 },
 "julius randle": {
  "name": "Julius Randle",
  "adp": 69.6,
  "count": 8,
  "min": 59,
  "max": 83,
  "team": "BKN",
  "pos": "PF"
 },
 "nickeil alexanderwalker": {
  "name": "Nickeil Alexander-Walker",
  "adp": 49.1,
  "count": 8,
  "min": 34,
  "max": 65,
  "team": "ATL",
  "pos": "SG"
 },
 "alex sarr": {
  "name": "Alex Sarr",
  "adp": 58.2,
  "count": 8,
  "min": 45,
  "max": 74,
  "team": "WAS",
  "pos": "C"
 },
 "tyler herro": {
  "name": "Tyler Herro",
  "adp": 56.6,
  "count": 8,
  "min": 40,
  "max": 83,
  "team": "MIL",
  "pos": "SG"
 },
 "darius garland": {
  "name": "Darius Garland",
  "adp": 54.6,
  "count": 8,
  "min": 47,
  "max": 66,
  "team": "LAC",
  "pos": "PG"
 },
 "kyrie irving": {
  "name": "Kyrie Irving",
  "adp": 69.5,
  "count": 8,
  "min": 61,
  "max": 81,
  "team": "DAL",
  "pos": "SG"
 },
 "og anunoby": {
  "name": "OG Anunoby",
  "adp": 56.4,
  "count": 8,
  "min": 48,
  "max": 65,
  "team": "NY",
  "pos": "PF"
 },
 "dejounte murray": {
  "name": "Dejounte Murray",
  "adp": 61.2,
  "count": 8,
  "min": 49,
  "max": 66,
  "team": "NO",
  "pos": "PG"
 },
 "ryan rollins": {
  "name": "Ryan Rollins",
  "adp": 69.4,
  "count": 8,
  "min": 55,
  "max": 83,
  "team": "MIL",
  "pos": "PG"
 },
 "jaden mcdaniels": {
  "name": "Jaden McDaniels",
  "adp": 75.1,
  "count": 8,
  "min": 63,
  "max": 85,
  "team": "MIN",
  "pos": "PF"
 },
 "michael porter": {
  "name": "Michael Porter",
  "adp": 62.9,
  "count": 8,
  "min": 53,
  "max": 74,
  "team": "BKN",
  "pos": "SF"
 },
 "dyson daniels": {
  "name": "Dyson Daniels",
  "adp": 70.4,
  "count": 8,
  "min": 51,
  "max": 89,
  "team": "ATL",
  "pos": "SG"
 },
 "ivica zubac": {
  "name": "Ivica Zubac",
  "adp": 65.9,
  "count": 8,
  "min": 56,
  "max": 81,
  "team": "IND",
  "pos": "C"
 },
 "immanuel quickley": {
  "name": "Immanuel Quickley",
  "adp": 75.5,
  "count": 8,
  "min": 70,
  "max": 84,
  "team": "TOR",
  "pos": "PG"
 },
 "paul george": {
  "name": "Paul George",
  "adp": 86.9,
  "count": 8,
  "min": 73,
  "max": 96,
  "team": "BOS",
  "pos": "PF"
 },
 "naz reid": {
  "name": "Naz Reid",
  "adp": 73.0,
  "count": 8,
  "min": 53,
  "max": 84,
  "team": "CHA",
  "pos": "C"
 },
 "myles turner": {
  "name": "Myles Turner",
  "adp": 80.6,
  "count": 8,
  "min": 69,
  "max": 96,
  "team": "MIL",
  "pos": "C"
 },
 "brandon ingram": {
  "name": "Brandon Ingram",
  "adp": 67.1,
  "count": 8,
  "min": 49,
  "max": 82,
  "team": "TOR",
  "pos": "SF"
 },
 "vj edgecombe": {
  "name": "VJ Edgecombe",
  "adp": 77.6,
  "count": 8,
  "min": 63,
  "max": 92,
  "team": "PHI",
  "pos": "SG"
 },
 "stephon castle": {
  "name": "Stephon Castle",
  "adp": 62.2,
  "count": 8,
  "min": 45,
  "max": 84,
  "team": "SA",
  "pos": "PG"
 },
 "jarrett allen": {
  "name": "Jarrett Allen",
  "adp": 83.4,
  "count": 8,
  "min": 74,
  "max": 95,
  "team": "CLE",
  "pos": "C"
 },
 "zach edey": {
  "name": "Zach Edey",
  "adp": 74.9,
  "count": 8,
  "min": 53,
  "max": 90,
  "team": "MEM",
  "pos": "C"
 },
 "norman powell": {
  "name": "Norman Powell",
  "adp": 90.8,
  "count": 8,
  "min": 68,
  "max": 109,
  "team": "CHI",
  "pos": "SG"
 },
 "payton pritchard": {
  "name": "Payton Pritchard",
  "adp": 69.9,
  "count": 8,
  "min": 49,
  "max": 85,
  "team": "BOS",
  "pos": "PG"
 },
 "deaaron fox": {
  "name": "De'Aaron Fox",
  "adp": 76.0,
  "count": 8,
  "min": 65,
  "max": 85,
  "team": "SA",
  "pos": "PG"
 },
 "ayo dosunmu": {
  "name": "Ayo Dosunmu",
  "adp": 94.1,
  "count": 8,
  "min": 68,
  "max": 112,
  "team": "MIN",
  "pos": "SG"
 },
 "coby white": {
  "name": "Coby White",
  "adp": 89.6,
  "count": 8,
  "min": 72,
  "max": 101,
  "team": "CHA",
  "pos": "SG"
 },
 "ja morant": {
  "name": "Ja Morant",
  "adp": 88.6,
  "count": 8,
  "min": 73,
  "max": 119,
  "team": "POR",
  "pos": "PG"
 },
 "zion williamson": {
  "name": "Zion Williamson",
  "adp": 83.1,
  "count": 8,
  "min": 72,
  "max": 91,
  "team": "NO",
  "pos": "PF"
 },
 "ausar thompson": {
  "name": "Ausar Thompson",
  "adp": 85.2,
  "count": 8,
  "min": 71,
  "max": 98,
  "team": "DET",
  "pos": "SF"
 },
 "dylan harper": {
  "name": "Dylan Harper",
  "adp": 86.2,
  "count": 8,
  "min": 61,
  "max": 94,
  "team": "SA",
  "pos": "SG"
 },
 "caleb wilson": {
  "name": "Caleb Wilson",
  "adp": 95.8,
  "count": 8,
  "min": 51,
  "max": 122,
  "team": "CHI",
  "pos": "PF"
 },
 "jalen suggs": {
  "name": "Jalen Suggs",
  "adp": 92.9,
  "count": 8,
  "min": 85,
  "max": 102,
  "team": "ORL",
  "pos": "PG"
 },
 "collin murrayboyles": {
  "name": "Collin Murray-Boyles",
  "adp": 114.4,
  "count": 8,
  "min": 92,
  "max": 134,
  "team": "TOR",
  "pos": "PF"
 },
 "nicolas claxton": {
  "name": "Nicolas Claxton",
  "adp": 101.4,
  "count": 8,
  "min": 84,
  "max": 114,
  "team": "CHI",
  "pos": "C"
 },
 "andrew wiggins": {
  "name": "Andrew Wiggins",
  "adp": 98.8,
  "count": 8,
  "min": 90,
  "max": 104,
  "team": "MIA",
  "pos": "SF"
 },
 "damian lillard": {
  "name": "Damian Lillard",
  "adp": 86.8,
  "count": 8,
  "min": 63,
  "max": 112,
  "team": "POR",
  "pos": "PG"
 },
 "aj dybantsa": {
  "name": "AJ Dybantsa",
  "adp": 104.5,
  "count": 8,
  "min": 88,
  "max": 117,
  "team": "WAS",
  "pos": "SF"
 },
 "dayron sharpe": {
  "name": "Day'Ron Sharpe",
  "adp": 113.4,
  "count": 8,
  "min": 97,
  "max": 131,
  "team": "BKN",
  "pos": "C"
 },
 "isaiah hartenstein": {
  "name": "Isaiah Hartenstein",
  "adp": 98.8,
  "count": 8,
  "min": 80,
  "max": 134,
  "team": "OKC",
  "pos": "C"
 },
 "toumani camara": {
  "name": "Toumani Camara",
  "adp": 105.9,
  "count": 8,
  "min": 97,
  "max": 128,
  "team": "POR",
  "pos": "PF"
 },
 "miles bridges": {
  "name": "Miles Bridges",
  "adp": 102.9,
  "count": 8,
  "min": 86,
  "max": 119,
  "team": "PHO",
  "pos": "SF"
 },
 "peyton watson": {
  "name": "Peyton Watson",
  "adp": 109.5,
  "count": 8,
  "min": 87,
  "max": 138,
  "team": "DEN",
  "pos": "SF"
 },
 "mark williams": {
  "name": "Mark Williams",
  "adp": 112.0,
  "count": 8,
  "min": 100,
  "max": 136,
  "team": "PHO",
  "pos": "C"
 },
 "josh hart": {
  "name": "Josh Hart",
  "adp": 99.0,
  "count": 8,
  "min": 78,
  "max": 113,
  "team": "NY",
  "pos": "SG"
 },
 "derik queen": {
  "name": "Derik Queen",
  "adp": 89.4,
  "count": 8,
  "min": 67,
  "max": 107,
  "team": "NO",
  "pos": "C"
 },
 "cj mccollum": {
  "name": "CJ McCollum",
  "adp": 111.5,
  "count": 8,
  "min": 99,
  "max": 128,
  "team": "ATL",
  "pos": "PG"
 },
 "kristaps porzingis": {
  "name": "Kristaps Porzingis",
  "adp": 117.2,
  "count": 8,
  "min": 91,
  "max": 153,
  "team": "GS",
  "pos": "C"
 },
 "jabari smith": {
  "name": "Jabari Smith",
  "adp": 85.8,
  "count": 8,
  "min": 71,
  "max": 107,
  "team": "HOU",
  "pos": "PF"
 },
 "pj washington": {
  "name": "P.J. Washington",
  "adp": 122.4,
  "count": 8,
  "min": 97,
  "max": 154,
  "team": "DAL",
  "pos": "PF"
 },
 "saddiq bey": {
  "name": "Saddiq Bey",
  "adp": 127.1,
  "count": 8,
  "min": 105,
  "max": 152,
  "team": "NO",
  "pos": "SF"
 },
 "reed sheppard": {
  "name": "Reed Sheppard",
  "adp": 107.0,
  "count": 8,
  "min": 91,
  "max": 130,
  "team": "HOU",
  "pos": "PG"
 },
 "jalen green": {
  "name": "Jalen Green",
  "adp": 122.4,
  "count": 8,
  "min": 107,
  "max": 156,
  "team": "PHO",
  "pos": "SG"
 },
 "jusuf nurkic": {
  "name": "Jusuf Nurkic",
  "adp": 123.6,
  "count": 8,
  "min": 93,
  "max": 153,
  "team": "UTA",
  "pos": "C"
 },
 "ajay mitchell": {
  "name": "Ajay Mitchell",
  "adp": 123.1,
  "count": 8,
  "min": 110,
  "max": 133,
  "team": "OKC",
  "pos": "SG"
 },
 "keegan murray": {
  "name": "Keegan Murray",
  "adp": 112.1,
  "count": 8,
  "min": 107,
  "max": 119,
  "team": "SAC",
  "pos": "PF"
 },
 "kyshawn george": {
  "name": "Kyshawn George",
  "adp": 123.5,
  "count": 8,
  "min": 106,
  "max": 148,
  "team": "WAS",
  "pos": "SG"
 },
 "sandro mamukelashvili": {
  "name": "Sandro Mamukelashvili",
  "adp": 126.2,
  "count": 8,
  "min": 92,
  "max": 160,
  "team": "LAL",
  "pos": "PF"
 },
 "egor demin": {
  "name": "Egor Demin",
  "adp": 138.1,
  "count": 7,
  "min": 117,
  "max": 164,
  "team": "BKN",
  "pos": "PG"
 },
 "devin vassell": {
  "name": "Devin Vassell",
  "adp": 140.0,
  "count": 7,
  "min": 104,
  "max": 167,
  "team": "SA",
  "pos": "SG"
 },
 "john collins": {
  "name": "John Collins",
  "adp": 107.5,
  "count": 8,
  "min": 96,
  "max": 119,
  "team": "DET",
  "pos": "PF"
 },
 "fred vanvleet": {
  "name": "Fred VanVleet",
  "adp": 117.5,
  "count": 8,
  "min": 92,
  "max": 137,
  "team": "HOU",
  "pos": "PG"
 },
 "darryn peterson": {
  "name": "Darryn Peterson",
  "adp": 110.2,
  "count": 8,
  "min": 87,
  "max": 139,
  "team": "UTA",
  "pos": "SG"
 },
 "cedric coward": {
  "name": "Cedric Coward",
  "adp": 121.8,
  "count": 8,
  "min": 97,
  "max": 148,
  "team": "MEM",
  "pos": "SG"
 },
 "donte divincenzo": {
  "name": "Donte DiVincenzo",
  "adp": 130.2,
  "count": 5,
  "min": 108,
  "max": 142,
  "team": "MIN",
  "pos": "SG"
 },
 "shaedon sharpe": {
  "name": "Shaedon Sharpe",
  "adp": 127.2,
  "count": 8,
  "min": 111,
  "max": 158,
  "team": "POR",
  "pos": "SG"
 },
 "paul reed": {
  "name": "Paul Reed",
  "adp": 146.9,
  "count": 8,
  "min": 125,
  "max": 162,
  "team": "DET",
  "pos": "C"
 },
 "neemias queta": {
  "name": "Neemias Queta",
  "adp": 113.2,
  "count": 8,
  "min": 100,
  "max": 131,
  "team": "BOS",
  "pos": "C"
 },
 "jrue holiday": {
  "name": "Jrue Holiday",
  "adp": 143.3,
  "count": 3,
  "min": 127,
  "max": 166,
  "team": "POR",
  "pos": "PG"
 },
 "ace bailey": {
  "name": "Ace Bailey",
  "adp": 126.0,
  "count": 8,
  "min": 87,
  "max": 151,
  "team": "UTA",
  "pos": "SF"
 },
 "rj barrett": {
  "name": "RJ Barrett",
  "adp": 126.0,
  "count": 8,
  "min": 111,
  "max": 140,
  "team": "TOR",
  "pos": "SF"
 },
 "cason wallace": {
  "name": "Cason Wallace",
  "adp": 136.8,
  "count": 8,
  "min": 117,
  "max": 159,
  "team": "OKC",
  "pos": "SG"
 },
 "zach lavine": {
  "name": "Zach LaVine",
  "adp": 125.1,
  "count": 8,
  "min": 112,
  "max": 140,
  "team": "SAC",
  "pos": "SG"
 },
 "brandin podziemski": {
  "name": "Brandin Podziemski",
  "adp": 130.5,
  "count": 8,
  "min": 113,
  "max": 166,
  "team": "GS",
  "pos": "SG"
 },
 "jeremiah fears": {
  "name": "Jeremiah Fears",
  "adp": 136.2,
  "count": 8,
  "min": 106,
  "max": 159,
  "team": "NO",
  "pos": "PG"
 },
 "deandre ayton": {
  "name": "Deandre Ayton",
  "adp": 147.5,
  "count": 2,
  "min": 134,
  "max": 161,
  "team": "WAS",
  "pos": "C"
 },
 "jakob poeltl": {
  "name": "Jakob Poeltl",
  "adp": 125.8,
  "count": 8,
  "min": 97,
  "max": 160,
  "team": "TOR",
  "pos": "C"
 },
 "ty jerome": {
  "name": "Ty Jerome",
  "adp": 95.6,
  "count": 8,
  "min": 74,
  "max": 136,
  "team": "MEM",
  "pos": "SG"
 },
 "kevin porter": {
  "name": "Kevin Porter",
  "adp": 111.5,
  "count": 8,
  "min": 86,
  "max": 137,
  "team": "MIL",
  "pos": "SG"
 },
 "keaton wagler": {
  "name": "Keaton Wagler",
  "adp": 152.0,
  "count": 2,
  "min": 138,
  "max": 166,
  "team": "LAC",
  "pos": "SG"
 },
 "darius acuff": {
  "name": "Darius Acuff",
  "adp": 149.1,
  "count": 7,
  "min": 131,
  "max": 167,
  "team": "SAC",
  "pos": "PG"
 },
 "maxime raynaud": {
  "name": "Maxime Raynaud",
  "adp": 134.1,
  "count": 8,
  "min": 122,
  "max": 142,
  "team": "SAC",
  "pos": "C"
 },
 "davion mitchell": {
  "name": "Davion Mitchell",
  "adp": 139.0,
  "count": 6,
  "min": 116,
  "max": 151,
  "team": "MIA",
  "pos": "PG"
 },
 "draymond green": {
  "name": "Draymond Green",
  "adp": 154.6,
  "count": 5,
  "min": 142,
  "max": 165,
  "team": "(N/A)",
  "pos": "PF"
 },
 "mikel brown": {
  "name": "Mikel Brown",
  "adp": 146.3,
  "count": 7,
  "min": 124,
  "max": 168,
  "team": "BKN",
  "pos": "PG"
 },
 "demar derozan": {
  "name": "DeMar DeRozan",
  "adp": 147.8,
  "count": 8,
  "min": 129,
  "max": 167,
  "team": "(N/A)",
  "pos": "SF"
 },
 "dillon brooks": {
  "name": "Dillon Brooks",
  "adp": 146.3,
  "count": 6,
  "min": 136,
  "max": 153,
  "team": "PHO",
  "pos": "SF"
 },
 "bennedict mathurin": {
  "name": "Bennedict Mathurin",
  "adp": 145.1,
  "count": 7,
  "min": 136,
  "max": 157,
  "team": "LAC",
  "pos": "SF"
 },
 "collin gillespie": {
  "name": "Collin Gillespie",
  "adp": 143.9,
  "count": 7,
  "min": 130,
  "max": 154,
  "team": "PHO",
  "pos": "PG"
 },
 "pelle larsson": {
  "name": "Pelle Larsson",
  "adp": 154.0,
  "count": 8,
  "min": 143,
  "max": 166,
  "team": "MIA",
  "pos": "SG"
 },
 "tari eason": {
  "name": "Tari Eason",
  "adp": 144.4,
  "count": 8,
  "min": 132,
  "max": 162,
  "team": "HOU",
  "pos": "PF"
 },
 "jaime jaquez": {
  "name": "Jaime Jaquez",
  "adp": 122.2,
  "count": 8,
  "min": 92,
  "max": 156,
  "team": "MIL",
  "pos": "SF"
 },
 "aaron gordon": {
  "name": "Aaron Gordon",
  "adp": 139.2,
  "count": 6,
  "min": 100,
  "max": 165,
  "team": "DEN",
  "pos": "PF"
 },
 "khaman maluach": {
  "name": "Khaman Maluach",
  "adp": 152.0,
  "count": 1,
  "min": 152,
  "max": 152,
  "team": "PHO",
  "pos": "C"
 },
 "wendell carter": {
  "name": "Wendell Carter",
  "adp": 146.4,
  "count": 8,
  "min": 117,
  "max": 158,
  "team": "ORL",
  "pos": "C"
 },
 "quentin grimes": {
  "name": "Quentin Grimes",
  "adp": 137.4,
  "count": 8,
  "min": 120,
  "max": 154,
  "team": "LAL",
  "pos": "SG"
 },
 "nikola vucevic": {
  "name": "Nikola Vucevic",
  "adp": 121.6,
  "count": 5,
  "min": 97,
  "max": 155,
  "team": "ORL",
  "pos": "C"
 },
 "andrew nembhard": {
  "name": "Andrew Nembhard",
  "adp": 123.3,
  "count": 7,
  "min": 86,
  "max": 158,
  "team": "IND",
  "pos": "SG"
 },
 "jimmy butler": {
  "name": "Jimmy Butler",
  "adp": 134.6,
  "count": 7,
  "min": 95,
  "max": 163,
  "team": "GS",
  "pos": "SF"
 },
 "daniel gafford": {
  "name": "Daniel Gafford",
  "adp": 142.3,
  "count": 3,
  "min": 126,
  "max": 159,
  "team": "DAL",
  "pos": "C"
 },
 "anthony black": {
  "name": "Anthony Black",
  "adp": 141.9,
  "count": 7,
  "min": 125,
  "max": 156,
  "team": "ORL",
  "pos": "PG"
 },
 "bilal coulibaly": {
  "name": "Bilal Coulibaly",
  "adp": 126.0,
  "count": 5,
  "min": 111,
  "max": 140,
  "team": "WAS",
  "pos": "SF"
 },
 "moussa diabate": {
  "name": "Moussa Diabate",
  "adp": 147.5,
  "count": 2,
  "min": 133,
  "max": 162,
  "team": "CHA",
  "pos": "C"
 },
 "tre jones": {
  "name": "Tre Jones",
  "adp": 148.7,
  "count": 7,
  "min": 134,
  "max": 163,
  "team": "CHI",
  "pos": "PG"
 },
 "mitchell robinson": {
  "name": "Mitchell Robinson",
  "adp": 145.0,
  "count": 3,
  "min": 133,
  "max": 163,
  "team": "BOS",
  "pos": "C"
 },
 "grayson allen": {
  "name": "Grayson Allen",
  "adp": 143.4,
  "count": 5,
  "min": 124,
  "max": 164,
  "team": "CHA",
  "pos": "SG"
 },
 "kyle filipowski": {
  "name": "Kyle Filipowski",
  "adp": 158.3,
  "count": 6,
  "min": 142,
  "max": 165,
  "team": "UTA",
  "pos": "C"
 },
 "collin sexton": {
  "name": "Collin Sexton",
  "adp": 152.0,
  "count": 2,
  "min": 149,
  "max": 155,
  "team": "LAL",
  "pos": "SG"
 },
 "yaxel lendeborg": {
  "name": "Yaxel Lendeborg",
  "adp": 153.3,
  "count": 3,
  "min": 144,
  "max": 159,
  "team": "GS",
  "pos": "SF"
 },
 "aaron nesmith": {
  "name": "Aaron Nesmith",
  "adp": 158.0,
  "count": 1,
  "min": 158,
  "max": 158,
  "team": "IND",
  "pos": "SF"
 },
 "naji marshall": {
  "name": "Naji Marshall",
  "adp": 155.5,
  "count": 2,
  "min": 152,
  "max": 159,
  "team": "DAL",
  "pos": "SF"
 },
 "gui santos": {
  "name": "Gui Santos",
  "adp": 161.5,
  "count": 2,
  "min": 160,
  "max": 163,
  "team": "GS",
  "pos": "PF"
 },
 "herbert jones": {
  "name": "Herbert Jones",
  "adp": 163.0,
  "count": 1,
  "min": 163,
  "max": 163,
  "team": "NO",
  "pos": "SF"
 },
 "christian braun": {
  "name": "Christian Braun",
  "adp": 160.5,
  "count": 4,
  "min": 154,
  "max": 167,
  "team": "DEN",
  "pos": "SG"
 },
 "ryan kalkbrenner": {
  "name": "Ryan Kalkbrenner",
  "adp": 168.0,
  "count": 1,
  "min": 168,
  "max": 168,
  "team": "CHA",
  "pos": "C"
 },
 "yves missi": {
  "name": "Yves Missi",
  "adp": 141.5,
  "count": 6,
  "min": 106,
  "max": 164,
  "team": "NO",
  "pos": "C"
 },
 "noah clowney": {
  "name": "Noah Clowney",
  "adp": 150.5,
  "count": 2,
  "min": 147,
  "max": 154,
  "team": "BKN",
  "pos": "PF"
 },
 "kelly oubre": {
  "name": "Kelly Oubre Jr.",
  "adp": 157.5,
  "count": 2,
  "min": 148,
  "max": 167,
  "team": "IND",
  "pos": "SF"
 },
 "jonathan kuminga": {
  "name": "Jonathan Kuminga",
  "adp": 149.0,
  "count": 1,
  "min": 149,
  "max": 149,
  "team": "(N/A)",
  "pos": "PF"
 },
 "julian champagnie": {
  "name": "Julian Champagnie",
  "adp": 150.5,
  "count": 2,
  "min": 150,
  "max": 151,
  "team": "SA",
  "pos": "SF"
 },
 "ron holland": {
  "name": "Ron Holland",
  "adp": 156.0,
  "count": 2,
  "min": 152,
  "max": 160,
  "team": "DET",
  "pos": "SF"
 },
 "tobias harris": {
  "name": "Tobias Harris",
  "adp": 137.5,
  "count": 6,
  "min": 124,
  "max": 164,
  "team": "SA",
  "pos": "PF"
 },
 "scotty pippen": {
  "name": "Scotty Pippen",
  "adp": 156.3,
  "count": 6,
  "min": 147,
  "max": 168,
  "team": "MEM",
  "pos": "PG"
 },
 "tre johnson": {
  "name": "Tre Johnson",
  "adp": 145.5,
  "count": 2,
  "min": 135,
  "max": 156,
  "team": "WAS",
  "pos": "SG"
 },
 "dereck lively": {
  "name": "Dereck Lively",
  "adp": 153.0,
  "count": 1,
  "min": 153,
  "max": 153,
  "team": "DAL",
  "pos": "C"
 },
 "keon ellis": {
  "name": "Keon Ellis",
  "adp": 152.8,
  "count": 4,
  "min": 148,
  "max": 157,
  "team": "BKN",
  "pos": "SG"
 },
 "max christie": {
  "name": "Max Christie",
  "adp": 160.0,
  "count": 1,
  "min": 160,
  "max": 160,
  "team": "DAL",
  "pos": "SG"
 },
 "bobby portis": {
  "name": "Bobby Portis",
  "adp": 153.0,
  "count": 2,
  "min": 145,
  "max": 161,
  "team": "MIA",
  "pos": "PF"
 },
 "ousmane dieng": {
  "name": "Ousmane Dieng",
  "adp": 164.0,
  "count": 1,
  "min": 164,
  "max": 164,
  "team": "MIL",
  "pos": "C"
 },
 "keldon johnson": {
  "name": "Keldon Johnson",
  "adp": 144.0,
  "count": 2,
  "min": 127,
  "max": 161,
  "team": "SA",
  "pos": "SF"
 },
 "duncan robinson": {
  "name": "Duncan Robinson",
  "adp": 138.0,
  "count": 1,
  "min": 138,
  "max": 138,
  "team": "DET",
  "pos": "SF"
 },
 "isaiah stewart": {
  "name": "Isaiah Stewart",
  "adp": 157.5,
  "count": 2,
  "min": 157,
  "max": 158,
  "team": "MEM",
  "pos": "C"
 },
 "cameron johnson": {
  "name": "Cameron Johnson",
  "adp": 158.7,
  "count": 3,
  "min": 144,
  "max": 168,
  "team": "DEN",
  "pos": "PF"
 },
 "morez johnson": {
  "name": "Morez Johnson",
  "adp": 167.0,
  "count": 1,
  "min": 167,
  "max": 167,
  "team": "DAL",
  "pos": "PF"
 },
 "santi aldama": {
  "name": "Santi Aldama",
  "adp": 166.5,
  "count": 2,
  "min": 165,
  "max": 168,
  "team": "DAL",
  "pos": "PF"
 },
 "jay huff": {
  "name": "Jay Huff",
  "adp": 139.7,
  "count": 3,
  "min": 123,
  "max": 166,
  "team": "IND",
  "pos": "C"
 },
 "kyle kuzma": {
  "name": "Kyle Kuzma",
  "adp": 141.0,
  "count": 1,
  "min": 141,
  "max": 141,
  "team": "MIL",
  "pos": "PF"
 },
 "brice sensabaugh": {
  "name": "Brice Sensabaugh",
  "adp": 146.5,
  "count": 2,
  "min": 141,
  "max": 152,
  "team": "UTA",
  "pos": "SF"
 },
 "max strus": {
  "name": "Max Strus",
  "adp": 159.0,
  "count": 2,
  "min": 159,
  "max": 159,
  "team": "CLE",
  "pos": "SF"
 },
 "nique clifford": {
  "name": "Nique Clifford",
  "adp": 119.0,
  "count": 2,
  "min": 118,
  "max": 120,
  "team": "SAC",
  "pos": "SG"
 },
 "cameron carr": {
  "name": "Cameron Carr",
  "adp": 161.0,
  "count": 1,
  "min": 161,
  "max": 161,
  "team": "LAL",
  "pos": "SG"
 },
 "zaccharie risacher": {
  "name": "Zaccharie Risacher",
  "adp": 168.0,
  "count": 1,
  "min": 168,
  "max": 168,
  "team": "DAL",
  "pos": "SF"
 },
 "robert williams": {
  "name": "Robert Williams",
  "adp": 157.0,
  "count": 1,
  "min": 157,
  "max": 157,
  "team": "POR",
  "pos": "C"
 },
 "brook lopez": {
  "name": "Brook Lopez",
  "adp": 158.0,
  "count": 1,
  "min": 158,
  "max": 158,
  "team": "LAC",
  "pos": "C"
 },
 "jake laravia": {
  "name": "Jake LaRavia",
  "adp": 162.0,
  "count": 1,
  "min": 162,
  "max": 162,
  "team": "LAL",
  "pos": "PF"
 }
};
