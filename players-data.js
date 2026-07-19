// MFHFBs NBA Projections — per-minute rate data
// Quelle: ../data/Player_Rankings_25-26.xls
const PLAYER_RATES = [
 {
  "name": "Luka Doncic",
  "team": "LAL",
  "pos": "PG",
  "gp": 64,
  "mpg": 35.76,
  "rates": {
   "pts": 0.93636,
   "fg3m": 0.11098,
   "reb": 0.21628,
   "ast": 0.23158,
   "stl": 0.04588,
   "blk": 0.01486,
   "fgm": 0.3028,
   "fga": 0.63662,
   "ftm": 0.21978,
   "fta": 0.28183,
   "tov": 0.11142
  }
 },
 {
  "name": "Shai Gilgeous-Alexander",
  "team": "OKC",
  "pos": "PG",
  "gp": 68,
  "mpg": 33.22,
  "rates": {
   "pts": 0.93713,
   "fg3m": 0.05091,
   "reb": 0.12882,
   "ast": 0.19832,
   "stl": 0.04205,
   "blk": 0.02302,
   "fgm": 0.32359,
   "fga": 0.58477,
   "ftm": 0.23904,
   "fta": 0.2718,
   "tov": 0.06684
  }
 },
 {
  "name": "Anthony Edwards",
  "team": "MIN",
  "pos": "SG/SF",
  "gp": 61,
  "mpg": 35.03,
  "rates": {
   "pts": 0.82233,
   "fg3m": 0.09595,
   "reb": 0.14134,
   "ast": 0.10577,
   "stl": 0.03885,
   "blk": 0.02293,
   "fgm": 0.28175,
   "fga": 0.57614,
   "ftm": 0.16287,
   "fta": 0.20453,
   "tov": 0.08144
  }
 },
 {
  "name": "Jaylen Brown",
  "team": "BOS",
  "pos": "SG/SF",
  "gp": 71,
  "mpg": 34.41,
  "rates": {
   "pts": 0.83425,
   "fg3m": 0.05731,
   "reb": 0.2014,
   "ast": 0.14941,
   "stl": 0.02947,
   "blk": 0.01064,
   "fgm": 0.30128,
   "fga": 0.63163,
   "ftm": 0.17438,
   "fta": 0.21941,
   "tov": 0.10602
  }
 },
 {
  "name": "Tyrese Maxey",
  "team": "PHI",
  "pos": "PG/SG",
  "gp": 70,
  "mpg": 38.02,
  "rates": {
   "pts": 0.74403,
   "fg3m": 0.08267,
   "reb": 0.1086,
   "ast": 0.17323,
   "stl": 0.04885,
   "blk": 0.02067,
   "fgm": 0.26079,
   "fga": 0.56404,
   "ftm": 0.13979,
   "fta": 0.1567,
   "tov": 0.06426
  }
 },
 {
  "name": "Kawhi Leonard",
  "team": "LAC",
  "pos": "SF/PF",
  "gp": 65,
  "mpg": 32.07,
  "rates": {
   "pts": 0.86966,
   "fg3m": 0.08251,
   "reb": 0.19811,
   "ast": 0.11225,
   "stl": 0.05852,
   "blk": 0.01295,
   "fgm": 0.3046,
   "fga": 0.60344,
   "ftm": 0.17796,
   "fta": 0.19955,
   "tov": 0.0638
  }
 },
 {
  "name": "Donovan Mitchell",
  "team": "CLE",
  "pos": "PG/SG",
  "gp": 70,
  "mpg": 33.46,
  "rates": {
   "pts": 0.83345,
   "fg3m": 0.09564,
   "reb": 0.13492,
   "ast": 0.16994,
   "stl": 0.04441,
   "blk": 0.00854,
   "fgm": 0.28949,
   "fga": 0.59904,
   "ftm": 0.15883,
   "fta": 0.1836,
   "tov": 0.08454
  }
 },
 {
  "name": "Nikola Jokic",
  "team": "DEN",
  "pos": "C",
  "gp": 65,
  "mpg": 34.84,
  "rates": {
   "pts": 0.79431,
   "fg3m": 0.04945,
   "reb": 0.36912,
   "ast": 0.30774,
   "stl": 0.04062,
   "blk": 0.02384,
   "fgm": 0.28434,
   "fga": 0.49981,
   "ftm": 0.17617,
   "fta": 0.21193,
   "tov": 0.10729
  }
 },
 {
  "name": "Giannis Antetokounmpo",
  "team": "MIL",
  "pos": "PF/C",
  "gp": 36,
  "mpg": 28.87,
  "rates": {
   "pts": 0.95559,
   "fg3m": 0.01443,
   "reb": 0.33874,
   "ast": 0.18862,
   "stl": 0.03272,
   "blk": 0.0231,
   "fgm": 0.35895,
   "fga": 0.57547,
   "ftm": 0.22326,
   "fta": 0.34355,
   "tov": 0.11067
  }
 },
 {
  "name": "Joel Embiid",
  "team": "PHI",
  "pos": "C",
  "gp": 38,
  "mpg": 31.6,
  "rates": {
   "pts": 0.85035,
   "fg3m": 0.04414,
   "reb": 0.24403,
   "ast": 0.12493,
   "stl": 0.01749,
   "blk": 0.03831,
   "fgm": 0.284,
   "fga": 0.5805,
   "ftm": 0.2382,
   "fta": 0.27901,
   "tov": 0.09078
  }
 },
 {
  "name": "Lauri Markkanen",
  "team": "UTA",
  "pos": "SF/PF",
  "gp": 42,
  "mpg": 34.35,
  "rates": {
   "pts": 0.77846,
   "fg3m": 0.07972,
   "reb": 0.20033,
   "ast": 0.06169,
   "stl": 0.02911,
   "blk": 0.01456,
   "fgm": 0.26619,
   "fga": 0.55802,
   "ftm": 0.16637,
   "fta": 0.18578,
   "tov": 0.04367
  }
 },
 {
  "name": "Stephen Curry",
  "team": "GSW",
  "pos": "PG",
  "gp": 43,
  "mpg": 30.9,
  "rates": {
   "pts": 0.85945,
   "fg3m": 0.14299,
   "reb": 0.1159,
   "ast": 0.15278,
   "stl": 0.03688,
   "blk": 0.01279,
   "fgm": 0.28147,
   "fga": 0.60132,
   "ftm": 0.15353,
   "fta": 0.16632,
   "tov": 0.09106
  }
 },
 {
  "name": "Devin Booker",
  "team": "PHO",
  "pos": "PG/SG",
  "gp": 64,
  "mpg": 33.54,
  "rates": {
   "pts": 0.7771,
   "fg3m": 0.05684,
   "reb": 0.11554,
   "ast": 0.17937,
   "stl": 0.02376,
   "blk": 0.00839,
   "fgm": 0.25437,
   "fga": 0.55813,
   "ftm": 0.21151,
   "fta": 0.24226,
   "tov": 0.09411
  }
 },
 {
  "name": "Jalen Brunson",
  "team": "NYK",
  "pos": "PG",
  "gp": 74,
  "mpg": 35.0,
  "rates": {
   "pts": 0.74405,
   "fg3m": 0.07529,
   "reb": 0.09537,
   "ast": 0.19422,
   "stl": 0.02201,
   "blk": 0.00309,
   "fgm": 0.26604,
   "fga": 0.56952,
   "ftm": 0.13669,
   "fta": 0.16256,
   "tov": 0.06757
  }
 },
 {
  "name": "Kevin Durant",
  "team": "HOU",
  "pos": "SF/PF",
  "gp": 78,
  "mpg": 36.3,
  "rates": {
   "pts": 0.71561,
   "fg3m": 0.0657,
   "reb": 0.15047,
   "ast": 0.13139,
   "stl": 0.0219,
   "blk": 0.02508,
   "fgm": 0.2529,
   "fga": 0.48602,
   "ftm": 0.14411,
   "fta": 0.16495,
   "tov": 0.08689
  }
 },
 {
  "name": "Jamal Murray",
  "team": "DEN",
  "pos": "PG",
  "gp": 75,
  "mpg": 35.36,
  "rates": {
   "pts": 0.71835,
   "fg3m": 0.09239,
   "reb": 0.12444,
   "ast": 0.20174,
   "stl": 0.02489,
   "blk": 0.01094,
   "fgm": 0.24775,
   "fga": 0.51284,
   "ftm": 0.13047,
   "fta": 0.14706,
   "tov": 0.06448
  }
 },
 {
  "name": "Victor Wembanyama",
  "team": "SAS",
  "pos": "C",
  "gp": 64,
  "mpg": 29.15,
  "rates": {
   "pts": 0.8576,
   "fg3m": 0.06539,
   "reb": 0.3945,
   "ast": 0.10666,
   "stl": 0.03538,
   "blk": 0.10559,
   "fgm": 0.29641,
   "fga": 0.57888,
   "ftm": 0.19939,
   "fta": 0.2412,
   "tov": 0.08308
  }
 },
 {
  "name": "Michael Porter Jr.",
  "team": "BKN",
  "pos": "SF/PF",
  "gp": 52,
  "mpg": 32.47,
  "rates": {
   "pts": 0.74617,
   "fg3m": 0.10423,
   "reb": 0.21734,
   "ast": 0.09357,
   "stl": 0.03257,
   "blk": 0.0077,
   "fgm": 0.26294,
   "fga": 0.56733,
   "ftm": 0.11607,
   "fta": 0.13502,
   "tov": 0.07225
  }
 },
 {
  "name": "Deni Avdija",
  "team": "POR",
  "pos": "SG/SF/PF",
  "gp": 66,
  "mpg": 33.32,
  "rates": {
   "pts": 0.72658,
   "fg3m": 0.05684,
   "reb": 0.20643,
   "ast": 0.20097,
   "stl": 0.02319,
   "blk": 0.01864,
   "fgm": 0.2237,
   "fga": 0.48378,
   "ftm": 0.22234,
   "fta": 0.27736,
   "tov": 0.11503
  }
 },
 {
  "name": "Pascal Siakam",
  "team": "IND",
  "pos": "PF",
  "gp": 62,
  "mpg": 33.17,
  "rates": {
   "pts": 0.72204,
   "fg3m": 0.05105,
   "reb": 0.19984,
   "ast": 0.11475,
   "stl": 0.03355,
   "blk": 0.01216,
   "fgm": 0.2718,
   "fga": 0.56159,
   "ftm": 0.12739,
   "fta": 0.18379,
   "tov": 0.0671
  }
 },
 {
  "name": "Cade Cunningham",
  "team": "DET",
  "pos": "PG/SG",
  "gp": 64,
  "mpg": 33.93,
  "rates": {
   "pts": 0.70498,
   "fg3m": 0.05756,
   "reb": 0.16347,
   "ast": 0.29194,
   "stl": 0.04236,
   "blk": 0.02487,
   "fgm": 0.25234,
   "fga": 0.5475,
   "ftm": 0.14275,
   "fta": 0.1759,
   "tov": 0.10867
  }
 },
 {
  "name": "Keyonte George",
  "team": "UTA",
  "pos": "PG/SG",
  "gp": 54,
  "mpg": 33.08,
  "rates": {
   "pts": 0.71385,
   "fg3m": 0.07502,
   "reb": 0.11086,
   "ast": 0.18588,
   "stl": 0.03247,
   "blk": 0.00784,
   "fgm": 0.22507,
   "fga": 0.49326,
   "ftm": 0.18868,
   "fta": 0.21164,
   "tov": 0.09294
  }
 },
 {
  "name": "James Harden",
  "team": "CLE",
  "pos": "PG/SG",
  "gp": 70,
  "mpg": 34.84,
  "rates": {
   "pts": 0.67747,
   "fg3m": 0.08817,
   "reb": 0.13779,
   "ast": 0.22842,
   "stl": 0.0324,
   "blk": 0.01148,
   "fgm": 0.19971,
   "fga": 0.46053,
   "ftm": 0.18987,
   "fta": 0.21489,
   "tov": 0.10047
  }
 },
 {
  "name": "Austin Reaves",
  "team": "LAL",
  "pos": "PG/SG/SF",
  "gp": 51,
  "mpg": 34.54,
  "rates": {
   "pts": 0.67379,
   "fg3m": 0.06698,
   "reb": 0.13623,
   "ast": 0.15894,
   "stl": 0.03179,
   "blk": 0.01135,
   "fgm": 0.21173,
   "fga": 0.43254,
   "ftm": 0.18335,
   "fta": 0.21059,
   "tov": 0.08571
  }
 },
 {
  "name": "Jalen Johnson",
  "team": "ATL",
  "pos": "PF",
  "gp": 72,
  "mpg": 35.16,
  "rates": {
   "pts": 0.64031,
   "fg3m": 0.0474,
   "reb": 0.29231,
   "ast": 0.22358,
   "stl": 0.03516,
   "blk": 0.01225,
   "fgm": 0.23701,
   "fga": 0.48507,
   "ftm": 0.1189,
   "fta": 0.15089,
   "tov": 0.09638
  }
 },
 {
  "name": "Paolo Banchero",
  "team": "ORL",
  "pos": "SF/PF",
  "gp": 72,
  "mpg": 34.75,
  "rates": {
   "pts": 0.63917,
   "fg3m": 0.03358,
   "reb": 0.24144,
   "ast": 0.1491,
   "stl": 0.01999,
   "blk": 0.01599,
   "fgm": 0.21146,
   "fga": 0.46049,
   "ftm": 0.18268,
   "fta": 0.23584,
   "tov": 0.08874
  }
 },
 {
  "name": "Jayson Tatum",
  "team": "BOS",
  "pos": "SF/PF",
  "gp": 16,
  "mpg": 32.61,
  "rates": {
   "pts": 0.66688,
   "fg3m": 0.09007,
   "reb": 0.30661,
   "ast": 0.16289,
   "stl": 0.04216,
   "blk": 0.00575,
   "fgm": 0.22613,
   "fga": 0.54998,
   "ftm": 0.12456,
   "fta": 0.15139,
   "tov": 0.07474
  }
 },
 {
  "name": "Norman Powell",
  "team": "MIA",
  "pos": "SG/SF",
  "gp": 58,
  "mpg": 29.6,
  "rates": {
   "pts": 0.73444,
   "fg3m": 0.09086,
   "reb": 0.11823,
   "ast": 0.0827,
   "stl": 0.03728,
   "blk": 0.00815,
   "fgm": 0.2452,
   "fga": 0.52127,
   "ftm": 0.15318,
   "fta": 0.18521,
   "tov": 0.06465
  }
 },
 {
  "name": "Trey Murphy",
  "team": "NOR",
  "pos": "SG/SF",
  "gp": 66,
  "mpg": 35.46,
  "rates": {
   "pts": 0.60668,
   "fg3m": 0.09143,
   "reb": 0.16107,
   "ast": 0.10681,
   "stl": 0.0423,
   "blk": 0.01025,
   "fgm": 0.21106,
   "fga": 0.4486,
   "ftm": 0.09314,
   "fta": 0.1051,
   "tov": 0.05127
  }
 },
 {
  "name": "Brandon Ingram",
  "team": "TOR",
  "pos": "SF",
  "gp": 77,
  "mpg": 33.82,
  "rates": {
   "pts": 0.63559,
   "fg3m": 0.05185,
   "reb": 0.16514,
   "ast": 0.10907,
   "stl": 0.02227,
   "blk": 0.02112,
   "fgm": 0.2358,
   "fga": 0.49465,
   "ftm": 0.11214,
   "fta": 0.13672,
   "tov": 0.07182
  }
 },
 {
  "name": "Julius Randle",
  "team": "MIN",
  "pos": "PF",
  "gp": 79,
  "mpg": 33.04,
  "rates": {
   "pts": 0.63862,
   "fg3m": 0.04176,
   "reb": 0.20381,
   "ast": 0.15209,
   "stl": 0.03295,
   "blk": 0.0069,
   "fgm": 0.2222,
   "fga": 0.4624,
   "ftm": 0.15247,
   "fta": 0.19002,
   "tov": 0.08313
  }
 },
 {
  "name": "Cooper Flagg",
  "team": "DAL",
  "pos": "PG/SF/PF",
  "gp": 70,
  "mpg": 33.48,
  "rates": {
   "pts": 0.62847,
   "fg3m": 0.03072,
   "reb": 0.19882,
   "ast": 0.13482,
   "stl": 0.03584,
   "blk": 0.02731,
   "fgm": 0.2385,
   "fga": 0.50943,
   "ftm": 0.12074,
   "fta": 0.14592,
   "tov": 0.06869
  }
 },
 {
  "name": "Zion Williamson",
  "team": "NOR",
  "pos": "PF",
  "gp": 62,
  "mpg": 29.69,
  "rates": {
   "pts": 0.70719,
   "fg3m": 0.00054,
   "reb": 0.19173,
   "ast": 0.10809,
   "stl": 0.03259,
   "blk": 0.01847,
   "fgm": 0.26289,
   "fga": 0.43833,
   "ftm": 0.18087,
   "fta": 0.25257,
   "tov": 0.06844
  }
 },
 {
  "name": "LeBron James",
  "team": "LAL",
  "pos": "SF/PF",
  "gp": 60,
  "mpg": 33.15,
  "rates": {
   "pts": 0.63146,
   "fg3m": 0.03871,
   "reb": 0.183,
   "ast": 0.21719,
   "stl": 0.0362,
   "blk": 0.0176,
   "fgm": 0.2378,
   "fga": 0.46203,
   "ftm": 0.11714,
   "fta": 0.15887,
   "tov": 0.08999
  }
 },
 {
  "name": "Shaedon Sharpe",
  "team": "POR",
  "pos": "SG/SF",
  "gp": 50,
  "mpg": 29.43,
  "rates": {
   "pts": 0.7082,
   "fg3m": 0.07,
   "reb": 0.14749,
   "ast": 0.08971,
   "stl": 0.04758,
   "blk": 0.00408,
   "fgm": 0.26643,
   "fga": 0.58994,
   "ftm": 0.10535,
   "fta": 0.13389,
   "tov": 0.09991
  }
 },
 {
  "name": "Nickeil Alexander-Walker",
  "team": "ATL",
  "pos": "SG",
  "gp": 78,
  "mpg": 33.37,
  "rates": {
   "pts": 0.62384,
   "fg3m": 0.09642,
   "reb": 0.10295,
   "ast": 0.10948,
   "stl": 0.03918,
   "blk": 0.01613,
   "fgm": 0.21051,
   "fga": 0.45905,
   "ftm": 0.10641,
   "fta": 0.11793,
   "tov": 0.06223
  }
 },
 {
  "name": "Franz Wagner",
  "team": "ORL",
  "pos": "SF/PF",
  "gp": 34,
  "mpg": 29.97,
  "rates": {
   "pts": 0.68597,
   "fg3m": 0.04711,
   "reb": 0.1737,
   "ast": 0.11089,
   "stl": 0.0314,
   "blk": 0.01079,
   "fgm": 0.23945,
   "fga": 0.49755,
   "ftm": 0.15996,
   "fta": 0.19431,
   "tov": 0.05692
  }
 },
 {
  "name": "Tyler Herro",
  "team": "MIA",
  "pos": "PG/SG",
  "gp": 33,
  "mpg": 31.29,
  "rates": {
   "pts": 0.65558,
   "fg3m": 0.08134,
   "reb": 0.153,
   "ast": 0.1317,
   "stl": 0.02227,
   "blk": 0.01162,
   "fgm": 0.23919,
   "fga": 0.49871,
   "ftm": 0.09587,
   "fta": 0.10458,
   "tov": 0.06198
  }
 },
 {
  "name": "Anthony Davis",
  "team": "WAS",
  "pos": "PF/C",
  "gp": 20,
  "mpg": 31.28,
  "rates": {
   "pts": 0.65056,
   "fg3m": 0.01598,
   "reb": 0.35325,
   "ast": 0.08951,
   "stl": 0.03517,
   "blk": 0.05275,
   "fgm": 0.27013,
   "fga": 0.53387,
   "ftm": 0.09431,
   "fta": 0.12947,
   "tov": 0.06554
  }
 },
 {
  "name": "Alperen Sengun",
  "team": "HOU",
  "pos": "C",
  "gp": 72,
  "mpg": 33.3,
  "rates": {
   "pts": 0.61059,
   "fg3m": 0.01668,
   "reb": 0.26734,
   "ast": 0.18559,
   "stl": 0.03545,
   "blk": 0.03211,
   "fgm": 0.24273,
   "fga": 0.46795,
   "ftm": 0.10844,
   "fta": 0.15682,
   "tov": 0.09467
  }
 },
 {
  "name": "Dillon Brooks",
  "team": "PHO",
  "pos": "SG/SF",
  "gp": 56,
  "mpg": 30.39,
  "rates": {
   "pts": 0.66466,
   "fg3m": 0.07463,
   "reb": 0.1193,
   "ast": 0.05818,
   "stl": 0.0335,
   "blk": 0.00529,
   "fgm": 0.24506,
   "fga": 0.56358,
   "ftm": 0.0999,
   "fta": 0.11871,
   "tov": 0.05759
  }
 },
 {
  "name": "Brandon Miller",
  "team": "CHA",
  "pos": "SG/SF",
  "gp": 65,
  "mpg": 30.28,
  "rates": {
   "pts": 0.66604,
   "fg3m": 0.10364,
   "reb": 0.16206,
   "ast": 0.11024,
   "stl": 0.03353,
   "blk": 0.02235,
   "fgm": 0.23065,
   "fga": 0.53039,
   "ftm": 0.1011,
   "fta": 0.11329,
   "tov": 0.08281
  }
 },
 {
  "name": "Bam Adebayo",
  "team": "MIA",
  "pos": "PF/C",
  "gp": 73,
  "mpg": 32.39,
  "rates": {
   "pts": 0.62079,
   "fg3m": 0.05371,
   "reb": 0.30955,
   "ast": 0.09811,
   "stl": 0.03637,
   "blk": 0.02072,
   "fgm": 0.21398,
   "fga": 0.4842,
   "ftm": 0.13913,
   "fta": 0.17888,
   "tov": 0.05075
  }
 },
 {
  "name": "Desmond Bane",
  "team": "ORL",
  "pos": "SG/SF",
  "gp": 82,
  "mpg": 33.61,
  "rates": {
   "pts": 0.59759,
   "fg3m": 0.06059,
   "reb": 0.12264,
   "ast": 0.12264,
   "stl": 0.0312,
   "blk": 0.01343,
   "fgm": 0.21153,
   "fga": 0.43722,
   "ftm": 0.11393,
   "fta": 0.12554,
   "tov": 0.05951
  }
 },
 {
  "name": "LaMelo Ball",
  "team": "CHA",
  "pos": "PG",
  "gp": 72,
  "mpg": 28.02,
  "rates": {
   "pts": 0.71624,
   "fg3m": 0.13482,
   "reb": 0.1715,
   "ast": 0.25477,
   "stl": 0.04312,
   "blk": 0.00843,
   "fgm": 0.25081,
   "fga": 0.61661,
   "ftm": 0.0798,
   "fta": 0.08873,
   "tov": 0.10013
  }
 },
 {
  "name": "Karl-Anthony Towns",
  "team": "NYK",
  "pos": "PF/C",
  "gp": 75,
  "mpg": 30.96,
  "rates": {
   "pts": 0.64778,
   "fg3m": 0.04867,
   "reb": 0.3829,
   "ast": 0.09734,
   "stl": 0.028,
   "blk": 0.01723,
   "fgm": 0.22267,
   "fga": 0.44449,
   "ftm": 0.15376,
   "fta": 0.17917,
   "tov": 0.08054
  }
 },
 {
  "name": "Jimmy Butler",
  "team": "GSW",
  "pos": "SG/SF/PF",
  "gp": 38,
  "mpg": 31.1,
  "rates": {
   "pts": 0.64315,
   "fg3m": 0.02708,
   "reb": 0.17856,
   "ast": 0.15656,
   "stl": 0.04654,
   "blk": 0.00677,
   "fgm": 0.2031,
   "fga": 0.39012,
   "ftm": 0.20987,
   "fta": 0.24287,
   "tov": 0.05078
  }
 },
 {
  "name": "Ty Jerome",
  "team": "MEM",
  "pos": "PG",
  "gp": 15,
  "mpg": 22.58,
  "rates": {
   "pts": 0.87102,
   "fg3m": 0.12401,
   "reb": 0.12401,
   "ast": 0.25097,
   "stl": 0.04724,
   "blk": 0.01181,
   "fgm": 0.30117,
   "fga": 0.63481,
   "ftm": 0.14468,
   "fta": 0.16535,
   "tov": 0.07972
  }
 },
 {
  "name": "Jalen Duren",
  "team": "DET",
  "pos": "C",
  "gp": 70,
  "mpg": 28.23,
  "rates": {
   "pts": 0.69084,
   "fg3m": 0.0,
   "reb": 0.373,
   "ast": 0.06984,
   "stl": 0.02885,
   "blk": 0.02986,
   "fgm": 0.26419,
   "fga": 0.40641,
   "ftm": 0.16246,
   "fta": 0.21763,
   "tov": 0.06579
  }
 },
 {
  "name": "Ja Morant",
  "team": "MEM",
  "pos": "PG",
  "gp": 20,
  "mpg": 28.43,
  "rates": {
   "pts": 0.68426,
   "fg3m": 0.03518,
   "reb": 0.11434,
   "ast": 0.2832,
   "stl": 0.03518,
   "blk": 0.01055,
   "fgm": 0.23219,
   "fga": 0.5664,
   "ftm": 0.1847,
   "fta": 0.2058,
   "tov": 0.12489
  }
 },
 {
  "name": "Jaren Jackson Jr.",
  "team": "UTA",
  "pos": "PF/C",
  "gp": 48,
  "mpg": 30.31,
  "rates": {
   "pts": 0.64002,
   "fg3m": 0.05775,
   "reb": 0.18699,
   "ast": 0.06462,
   "stl": 0.03643,
   "blk": 0.04743,
   "fgm": 0.23511,
   "fga": 0.49428,
   "ftm": 0.11205,
   "fta": 0.13955,
   "tov": 0.07356
  }
 },
 {
  "name": "R.J. Barrett",
  "team": "TOR",
  "pos": "SG/SF/PF",
  "gp": 57,
  "mpg": 30.28,
  "rates": {
   "pts": 0.63624,
   "fg3m": 0.05563,
   "reb": 0.17384,
   "ast": 0.10952,
   "stl": 0.02434,
   "blk": 0.01101,
   "fgm": 0.23236,
   "fga": 0.47283,
   "ftm": 0.11589,
   "fta": 0.16167,
   "tov": 0.05737
  }
 },
 {
  "name": "Zach LaVine",
  "team": "SAC",
  "pos": "SG/SF",
  "gp": 39,
  "mpg": 31.39,
  "rates": {
   "pts": 0.61098,
   "fg3m": 0.08086,
   "reb": 0.08822,
   "ast": 0.0727,
   "stl": 0.02287,
   "blk": 0.00817,
   "fgm": 0.21401,
   "fga": 0.4468,
   "ftm": 0.1021,
   "fta": 0.11599,
   "tov": 0.06044
  }
 },
 {
  "name": "Darius Garland",
  "team": "LAC",
  "pos": "PG",
  "gp": 45,
  "mpg": 29.87,
  "rates": {
   "pts": 0.62858,
   "fg3m": 0.09075,
   "reb": 0.0796,
   "ast": 0.22391,
   "stl": 0.03199,
   "blk": 0.00595,
   "fgm": 0.22986,
   "fga": 0.49989,
   "ftm": 0.07811,
   "fta": 0.09075,
   "tov": 0.0967
  }
 },
 {
  "name": "C.J. McCollum",
  "team": "ATL",
  "pos": "PG/SG",
  "gp": 76,
  "mpg": 29.78,
  "rates": {
   "pts": 0.62914,
   "fg3m": 0.08439,
   "reb": 0.11134,
   "ast": 0.12945,
   "stl": 0.02828,
   "blk": 0.01546,
   "fgm": 0.23195,
   "fga": 0.50985,
   "ftm": 0.08085,
   "fta": 0.10471,
   "tov": 0.05964
  }
 },
 {
  "name": "Jerami Grant",
  "team": "POR",
  "pos": "PF",
  "gp": 57,
  "mpg": 29.74,
  "rates": {
   "pts": 0.62533,
   "fg3m": 0.08023,
   "reb": 0.11681,
   "ast": 0.07197,
   "stl": 0.02478,
   "blk": 0.02124,
   "fgm": 0.19527,
   "fga": 0.43065,
   "ftm": 0.15456,
   "fta": 0.18996,
   "tov": 0.0702
  }
 },
 {
  "name": "De'Aaron Fox",
  "team": "SAS",
  "pos": "PG",
  "gp": 72,
  "mpg": 30.99,
  "rates": {
   "pts": 0.59881,
   "fg3m": 0.05872,
   "reb": 0.12102,
   "ast": 0.19945,
   "stl": 0.03989,
   "blk": 0.00852,
   "fgm": 0.22814,
   "fga": 0.46928,
   "ftm": 0.08382,
   "fta": 0.11026,
   "tov": 0.07351
  }
 },
 {
  "name": "Kon Knueppel",
  "team": "CHA",
  "pos": "SG",
  "gp": 81,
  "mpg": 31.49,
  "rates": {
   "pts": 0.58734,
   "fg3m": 0.10704,
   "reb": 0.16938,
   "ast": 0.10743,
   "stl": 0.02235,
   "blk": 0.00745,
   "fgm": 0.20192,
   "fga": 0.42502,
   "ftm": 0.07646,
   "fta": 0.08861,
   "tov": 0.06313
  }
 },
 {
  "name": "DeMar DeRozan",
  "team": "SAC",
  "pos": "SF/PF",
  "gp": 77,
  "mpg": 31.24,
  "rates": {
   "pts": 0.5899,
   "fg3m": 0.01954,
   "reb": 0.09437,
   "ast": 0.13095,
   "stl": 0.03326,
   "blk": 0.00956,
   "fgm": 0.20744,
   "fga": 0.41779,
   "ftm": 0.15548,
   "fta": 0.17917,
   "tov": 0.03991
  }
 },
 {
  "name": "Amen Thompson",
  "team": "HOU",
  "pos": "SG/SF/PF",
  "gp": 79,
  "mpg": 37.38,
  "rates": {
   "pts": 0.48863,
   "fg3m": 0.00847,
   "reb": 0.20791,
   "ast": 0.14222,
   "stl": 0.0403,
   "blk": 0.01625,
   "fgm": 0.18861,
   "fga": 0.35352,
   "ftm": 0.10294,
   "fta": 0.13206,
   "tov": 0.06434
  }
 },
 {
  "name": "Evan Mobley",
  "team": "CLE",
  "pos": "PF/C",
  "gp": 65,
  "mpg": 31.91,
  "rates": {
   "pts": 0.56886,
   "fg3m": 0.02989,
   "reb": 0.2825,
   "ast": 0.11281,
   "stl": 0.02314,
   "blk": 0.05496,
   "fgm": 0.2261,
   "fga": 0.41411,
   "ftm": 0.08677,
   "fta": 0.14318,
   "tov": 0.05881
  }
 },
 {
  "name": "Scottie Barnes",
  "team": "TOR",
  "pos": "SG/SF/PF",
  "gp": 80,
  "mpg": 33.51,
  "rates": {
   "pts": 0.54013,
   "fg3m": 0.02537,
   "reb": 0.22381,
   "ast": 0.17681,
   "stl": 0.04252,
   "blk": 0.04327,
   "fgm": 0.21225,
   "fga": 0.4189,
   "ftm": 0.09027,
   "fta": 0.11079,
   "tov": 0.07833
  }
 },
 {
  "name": "Trae Young",
  "team": "WAS",
  "pos": "PG",
  "gp": 15,
  "mpg": 25.58,
  "rates": {
   "pts": 0.70098,
   "fg3m": 0.07036,
   "reb": 0.07818,
   "ast": 0.3127,
   "stl": 0.03127,
   "blk": 0.00782,
   "fgm": 0.21107,
   "fga": 0.46124,
   "ftm": 0.20847,
   "fta": 0.25277,
   "tov": 0.10163
  }
 },
 {
  "name": "Jalen Green",
  "team": "PHO",
  "pos": "SG",
  "gp": 32,
  "mpg": 25.88,
  "rates": {
   "pts": 0.68573,
   "fg3m": 0.08572,
   "reb": 0.14004,
   "ast": 0.10986,
   "stl": 0.04105,
   "blk": 0.00966,
   "fgm": 0.26077,
   "fga": 0.61812,
   "ftm": 0.07847,
   "fta": 0.10503,
   "tov": 0.08692
  }
 },
 {
  "name": "Saddiq Bey",
  "team": "NOR",
  "pos": "SF/PF",
  "gp": 72,
  "mpg": 31.19,
  "rates": {
   "pts": 0.56599,
   "fg3m": 0.06724,
   "reb": 0.17812,
   "ast": 0.08105,
   "stl": 0.03028,
   "blk": 0.00312,
   "fgm": 0.19416,
   "fga": 0.43062,
   "ftm": 0.11044,
   "fta": 0.13137,
   "tov": 0.03028
  }
 },
 {
  "name": "Bennedict Mathurin",
  "team": "LAC",
  "pos": "SG/SF",
  "gp": 54,
  "mpg": 30.0,
  "rates": {
   "pts": 0.5858,
   "fg3m": 0.0463,
   "reb": 0.18086,
   "ast": 0.07963,
   "stl": 0.02654,
   "blk": 0.00802,
   "fgm": 0.17963,
   "fga": 0.4179,
   "ftm": 0.18025,
   "fta": 0.20741,
   "tov": 0.07284
  }
 },
 {
  "name": "Kevin Porter Jr.",
  "team": "MIL",
  "pos": "PG/SG",
  "gp": 38,
  "mpg": 33.18,
  "rates": {
   "pts": 0.52418,
   "fg3m": 0.03648,
   "reb": 0.15702,
   "ast": 0.22204,
   "stl": 0.06582,
   "blk": 0.01507,
   "fgm": 0.18953,
   "fga": 0.40761,
   "ftm": 0.10864,
   "fta": 0.12371,
   "tov": 0.08723
  }
 },
 {
  "name": "Coby White",
  "team": "CHA",
  "pos": "PG/SG",
  "gp": 50,
  "mpg": 25.0,
  "rates": {
   "pts": 0.6945,
   "fg3m": 0.09201,
   "reb": 0.13602,
   "ast": 0.16002,
   "stl": 0.02,
   "blk": 0.004,
   "fgm": 0.22243,
   "fga": 0.49847,
   "ftm": 0.15762,
   "fta": 0.19283,
   "tov": 0.10242
  }
 },
 {
  "name": "Paul George",
  "team": "PHI",
  "pos": "SF/PF",
  "gp": 37,
  "mpg": 30.68,
  "rates": {
   "pts": 0.56477,
   "fg3m": 0.08811,
   "reb": 0.17357,
   "ast": 0.11718,
   "stl": 0.05463,
   "blk": 0.0141,
   "fgm": 0.19824,
   "fga": 0.45199,
   "ftm": 0.08018,
   "fta": 0.0978,
   "tov": 0.05639
  }
 },
 {
  "name": "Ryan Rollins",
  "team": "MIL",
  "pos": "PG/SG",
  "gp": 74,
  "mpg": 32.1,
  "rates": {
   "pts": 0.53925,
   "fg3m": 0.07746,
   "reb": 0.14228,
   "ast": 0.17428,
   "stl": 0.04631,
   "blk": 0.01305,
   "fgm": 0.20459,
   "fga": 0.43359,
   "ftm": 0.05262,
   "fta": 0.06609,
   "tov": 0.08461
  }
 },
 {
  "name": "Chet Holmgren",
  "team": "OKC",
  "pos": "PF/C",
  "gp": 69,
  "mpg": 28.95,
  "rates": {
   "pts": 0.5913,
   "fg3m": 0.04406,
   "reb": 0.30842,
   "ast": 0.05758,
   "stl": 0.02153,
   "blk": 0.06559,
   "fgm": 0.2173,
   "fga": 0.39003,
   "ftm": 0.11265,
   "fta": 0.14219,
   "tov": 0.05357
  }
 },
 {
  "name": "Miles Bridges",
  "team": "CHA",
  "pos": "SF/PF",
  "gp": 77,
  "mpg": 31.0,
  "rates": {
   "pts": 0.55042,
   "fg3m": 0.062,
   "reb": 0.18892,
   "ast": 0.10305,
   "stl": 0.01927,
   "blk": 0.01424,
   "fgm": 0.20065,
   "fga": 0.43649,
   "ftm": 0.08713,
   "fta": 0.10598,
   "tov": 0.04482
  }
 },
 {
  "name": "Jalen Williams",
  "team": "OKC",
  "pos": "SF/PF/C",
  "gp": 33,
  "mpg": 28.36,
  "rates": {
   "pts": 0.60152,
   "fg3m": 0.02457,
   "reb": 0.1624,
   "ast": 0.19338,
   "stl": 0.04167,
   "blk": 0.00962,
   "fgm": 0.23078,
   "fga": 0.47651,
   "ftm": 0.11539,
   "fta": 0.13783,
   "tov": 0.06731
  }
 },
 {
  "name": "Payton Pritchard",
  "team": "BOS",
  "pos": "PG",
  "gp": 79,
  "mpg": 32.35,
  "rates": {
   "pts": 0.52631,
   "fg3m": 0.08296,
   "reb": 0.12209,
   "ast": 0.15926,
   "stl": 0.0227,
   "blk": 0.00391,
   "fgm": 0.198,
   "fga": 0.42692,
   "ftm": 0.04735,
   "fta": 0.05322,
   "tov": 0.04265
  }
 },
 {
  "name": "Josh Giddey",
  "team": "CHI",
  "pos": "PG/SG/SF",
  "gp": 54,
  "mpg": 32.06,
  "rates": {
   "pts": 0.5308,
   "fg3m": 0.05949,
   "reb": 0.25934,
   "ast": 0.28533,
   "stl": 0.03177,
   "blk": 0.01559,
   "fgm": 0.1854,
   "fga": 0.41413,
   "ftm": 0.1005,
   "fta": 0.13169,
   "tov": 0.11321
  }
 },
 {
  "name": "Andrew Nembhard",
  "team": "IND",
  "pos": "PG/SG",
  "gp": 57,
  "mpg": 31.33,
  "rates": {
   "pts": 0.54098,
   "fg3m": 0.05992,
   "reb": 0.0896,
   "ast": 0.24473,
   "stl": 0.02856,
   "blk": 0.00448,
   "fgm": 0.18649,
   "fga": 0.4217,
   "ftm": 0.10808,
   "fta": 0.13104,
   "tov": 0.07672
  }
 },
 {
  "name": "Dejounte Murray",
  "team": "NOR",
  "pos": "PG/SG",
  "gp": 14,
  "mpg": 27.82,
  "rates": {
   "pts": 0.6009,
   "fg3m": 0.04879,
   "reb": 0.1926,
   "ast": 0.22855,
   "stl": 0.05906,
   "blk": 0.0077,
   "fgm": 0.22598,
   "fga": 0.46737,
   "ftm": 0.10015,
   "fta": 0.11556,
   "tov": 0.12069
  }
 },
 {
  "name": "O.G. Anunoby",
  "team": "NYK",
  "pos": "SF/PF",
  "gp": 67,
  "mpg": 33.19,
  "rates": {
   "pts": 0.50274,
   "fg3m": 0.0706,
   "reb": 0.15784,
   "ast": 0.0652,
   "stl": 0.04677,
   "blk": 0.02158,
   "fgm": 0.17492,
   "fga": 0.36154,
   "ftm": 0.08229,
   "fta": 0.09938,
   "tov": 0.05531
  }
 },
 {
  "name": "Kristaps Porzingis",
  "team": "GSW",
  "pos": "PF/C",
  "gp": 32,
  "mpg": 24.03,
  "rates": {
   "pts": 0.69314,
   "fg3m": 0.07022,
   "reb": 0.21717,
   "ast": 0.10664,
   "stl": 0.02341,
   "blk": 0.04942,
   "fgm": 0.22498,
   "fga": 0.50457,
   "ftm": 0.17296,
   "fta": 0.20547,
   "tov": 0.05332
  }
 },
 {
  "name": "Stephon Castle",
  "team": "SAS",
  "pos": "PG/SG",
  "gp": 68,
  "mpg": 29.97,
  "rates": {
   "pts": 0.55404,
   "fg3m": 0.03975,
   "reb": 0.17666,
   "ast": 0.24684,
   "stl": 0.03828,
   "blk": 0.00932,
   "fgm": 0.18795,
   "fga": 0.39995,
   "ftm": 0.13839,
   "fta": 0.18844,
   "tov": 0.106
  }
 },
 {
  "name": "Grayson Allen",
  "team": "PHO",
  "pos": "PG/SG",
  "gp": 51,
  "mpg": 28.77,
  "rates": {
   "pts": 0.57316,
   "fg3m": 0.10836,
   "reb": 0.10564,
   "ast": 0.1329,
   "stl": 0.04703,
   "blk": 0.00886,
   "fgm": 0.18333,
   "fga": 0.45458,
   "ftm": 0.09814,
   "fta": 0.1145,
   "tov": 0.05657
  }
 },
 {
  "name": "Derrick White",
  "team": "BOS",
  "pos": "PG/SG",
  "gp": 77,
  "mpg": 34.09,
  "rates": {
   "pts": 0.48267,
   "fg3m": 0.07962,
   "reb": 0.12876,
   "ast": 0.15772,
   "stl": 0.03352,
   "blk": 0.03771,
   "fgm": 0.16648,
   "fga": 0.4221,
   "ftm": 0.0701,
   "fta": 0.07771,
   "tov": 0.05105
  }
 },
 {
  "name": "Immanuel Quickley",
  "team": "TOR",
  "pos": "PG/SG",
  "gp": 70,
  "mpg": 31.88,
  "rates": {
   "pts": 0.51539,
   "fg3m": 0.07977,
   "reb": 0.12638,
   "ast": 0.18599,
   "stl": 0.04123,
   "blk": 0.00224,
   "fgm": 0.17971,
   "fga": 0.40559,
   "ftm": 0.07619,
   "fta": 0.09277,
   "tov": 0.04571
  }
 },
 {
  "name": "Dariq Whitehead",
  "team": "MEM",
  "pos": "SF",
  "gp": 6,
  "mpg": 30.47,
  "rates": {
   "pts": 0.53606,
   "fg3m": 0.10393,
   "reb": 0.13128,
   "ast": 0.04923,
   "stl": 0.02188,
   "blk": 0.0,
   "fgm": 0.20239,
   "fga": 0.50871,
   "ftm": 0.02735,
   "fta": 0.03829,
   "tov": 0.0547
  }
 },
 {
  "name": "Jrue Holiday",
  "team": "POR",
  "pos": "PG/SG",
  "gp": 53,
  "mpg": 29.44,
  "rates": {
   "pts": 0.55435,
   "fg3m": 0.0878,
   "reb": 0.15701,
   "ast": 0.20636,
   "stl": 0.03461,
   "blk": 0.00385,
   "fgm": 0.20508,
   "fga": 0.45437,
   "ftm": 0.0564,
   "fta": 0.06729,
   "tov": 0.09357
  }
 },
 {
  "name": "Alexandre Sarr",
  "team": "WAS",
  "pos": "C",
  "gp": 48,
  "mpg": 27.18,
  "rates": {
   "pts": 0.59863,
   "fg3m": 0.03832,
   "reb": 0.2721,
   "ast": 0.09964,
   "stl": 0.02989,
   "blk": 0.07282,
   "fgm": 0.24221,
   "fga": 0.50282,
   "ftm": 0.07588,
   "fta": 0.11037,
   "tov": 0.06285
  }
 },
 {
  "name": "Matas Buzelis",
  "team": "CHI",
  "pos": "SF/PF",
  "gp": 77,
  "mpg": 29.2,
  "rates": {
   "pts": 0.55687,
   "fg3m": 0.07695,
   "reb": 0.19882,
   "ast": 0.07028,
   "stl": 0.02402,
   "blk": 0.05159,
   "fgm": 0.19837,
   "fga": 0.42832,
   "ftm": 0.08317,
   "fta": 0.10586,
   "tov": 0.07072
  }
 },
 {
  "name": "Aaron Gordon",
  "team": "DEN",
  "pos": "PF",
  "gp": 36,
  "mpg": 27.92,
  "rates": {
   "pts": 0.57912,
   "fg3m": 0.0607,
   "reb": 0.20797,
   "ast": 0.09553,
   "stl": 0.0209,
   "blk": 0.00995,
   "fgm": 0.19702,
   "fga": 0.39603,
   "ftm": 0.12438,
   "fta": 0.16219,
   "tov": 0.03781
  }
 },
 {
  "name": "VJ Edgecombe",
  "team": "PHI",
  "pos": "SG",
  "gp": 75,
  "mpg": 34.98,
  "rates": {
   "pts": 0.45705,
   "fg3m": 0.0568,
   "reb": 0.16125,
   "ast": 0.12008,
   "stl": 0.04079,
   "blk": 0.01487,
   "fgm": 0.17192,
   "fga": 0.39263,
   "ftm": 0.05642,
   "fta": 0.069,
   "tov": 0.05222
  }
 },
 {
  "name": "Domantas Sabonis",
  "team": "SAC",
  "pos": "PF/C",
  "gp": 19,
  "mpg": 29.66,
  "rates": {
   "pts": 0.53408,
   "fg3m": 0.00887,
   "reb": 0.38326,
   "ast": 0.1384,
   "stl": 0.03194,
   "blk": 0.0071,
   "fgm": 0.21292,
   "fga": 0.39213,
   "ftm": 0.09936,
   "fta": 0.13663,
   "tov": 0.09049
  }
 },
 {
  "name": "Jabari Smith Jr.",
  "team": "HOU",
  "pos": "PF/C",
  "gp": 77,
  "mpg": 35.13,
  "rates": {
   "pts": 0.44911,
   "fg3m": 0.06543,
   "reb": 0.19554,
   "ast": 0.05286,
   "stl": 0.0207,
   "blk": 0.02624,
   "fgm": 0.1619,
   "fga": 0.36003,
   "ftm": 0.05988,
   "fta": 0.07725,
   "tov": 0.03881
  }
 },
 {
  "name": "Collin Sexton",
  "team": "CHI",
  "pos": "PG/SG",
  "gp": 68,
  "mpg": 23.72,
  "rates": {
   "pts": 0.65086,
   "fg3m": 0.06943,
   "reb": 0.09608,
   "ast": 0.13823,
   "stl": 0.04711,
   "blk": 0.0062,
   "fgm": 0.22315,
   "fga": 0.45994,
   "ftm": 0.13513,
   "fta": 0.15807,
   "tov": 0.0874
  }
 },
 {
  "name": "Andrew Wiggins",
  "team": "MIA",
  "pos": "SF/PF",
  "gp": 68,
  "mpg": 30.33,
  "rates": {
   "pts": 0.50664,
   "fg3m": 0.06691,
   "reb": 0.15951,
   "ast": 0.08824,
   "stl": 0.03685,
   "blk": 0.03345,
   "fgm": 0.18908,
   "fga": 0.39804,
   "ftm": 0.06157,
   "fta": 0.07854,
   "tov": 0.04994
  }
 },
 {
  "name": "Jarrett Allen",
  "team": "CLE",
  "pos": "C",
  "gp": 56,
  "mpg": 27.13,
  "rates": {
   "pts": 0.56609,
   "fg3m": 0.00066,
   "reb": 0.31267,
   "ast": 0.06582,
   "stl": 0.0362,
   "blk": 0.03094,
   "fgm": 0.22183,
   "fga": 0.34756,
   "ftm": 0.12178,
   "fta": 0.1718,
   "tov": 0.04937
  }
 },
 {
  "name": "Jaime Jaquez Jr.",
  "team": "MIA",
  "pos": "SG/SF",
  "gp": 75,
  "mpg": 28.28,
  "rates": {
   "pts": 0.54307,
   "fg3m": 0.02734,
   "reb": 0.17678,
   "ast": 0.16594,
   "stl": 0.02404,
   "blk": 0.0099,
   "fgm": 0.21874,
   "fga": 0.43134,
   "ftm": 0.07825,
   "fta": 0.10183,
   "tov": 0.07165
  }
 },
 {
  "name": "Naji Marshall",
  "team": "DAL",
  "pos": "SF/PF",
  "gp": 74,
  "mpg": 29.51,
  "rates": {
   "pts": 0.51654,
   "fg3m": 0.02839,
   "reb": 0.15936,
   "ast": 0.11036,
   "stl": 0.03755,
   "blk": 0.00275,
   "fgm": 0.19187,
   "fga": 0.37596,
   "ftm": 0.10441,
   "fta": 0.13738,
   "tov": 0.05449
  }
 },
 {
  "name": "Onyeka Okongwu",
  "team": "ATL",
  "pos": "C",
  "gp": 74,
  "mpg": 31.04,
  "rates": {
   "pts": 0.4889,
   "fg3m": 0.06269,
   "reb": 0.24467,
   "ast": 0.10057,
   "stl": 0.0357,
   "blk": 0.03439,
   "fgm": 0.1798,
   "fga": 0.3744,
   "ftm": 0.06661,
   "fta": 0.08794,
   "tov": 0.05529
  }
 },
 {
  "name": "Russell Westbrook",
  "team": "SAC",
  "pos": "PG",
  "gp": 64,
  "mpg": 28.95,
  "rates": {
   "pts": 0.52414,
   "fg3m": 0.06909,
   "reb": 0.18731,
   "ast": 0.22995,
   "stl": 0.0448,
   "blk": 0.00648,
   "fgm": 0.19325,
   "fga": 0.45289,
   "ftm": 0.06855,
   "fta": 0.09878,
   "tov": 0.11282
  }
 },
 {
  "name": "Nikola Vucevic",
  "team": "BOS",
  "pos": "C",
  "gp": 64,
  "mpg": 28.41,
  "rates": {
   "pts": 0.53076,
   "fg3m": 0.055,
   "reb": 0.29536,
   "ast": 0.1166,
   "stl": 0.02145,
   "blk": 0.02255,
   "fgm": 0.2167,
   "fga": 0.43946,
   "ftm": 0.04235,
   "fta": 0.05115,
   "tov": 0.04675
  }
 },
 {
  "name": "Kennedy Chandler",
  "team": "FA",
  "pos": "PG",
  "gp": 11,
  "mpg": 32.29,
  "rates": {
   "pts": 0.46448,
   "fg3m": 0.04223,
   "reb": 0.10416,
   "ast": 0.20831,
   "stl": 0.03097,
   "blk": 0.00563,
   "fgm": 0.17172,
   "fga": 0.38566,
   "ftm": 0.07882,
   "fta": 0.12105,
   "tov": 0.06475
  }
 },
 {
  "name": "Anthony Black",
  "team": "ORL",
  "pos": "PG/SG",
  "gp": 64,
  "mpg": 29.84,
  "rates": {
   "pts": 0.50208,
   "fg3m": 0.05235,
   "reb": 0.12775,
   "ast": 0.12356,
   "stl": 0.04764,
   "blk": 0.02356,
   "fgm": 0.18062,
   "fga": 0.4047,
   "ftm": 0.08848,
   "fta": 0.12094,
   "tov": 0.06911
  }
 },
 {
  "name": "Brice Sensabaugh",
  "team": "UTA",
  "pos": "SF",
  "gp": 75,
  "mpg": 23.49,
  "rates": {
   "pts": 0.63343,
   "fg3m": 0.09195,
   "reb": 0.13111,
   "ast": 0.08116,
   "stl": 0.03065,
   "blk": 0.00681,
   "fgm": 0.22363,
   "fga": 0.48642,
   "ftm": 0.09422,
   "fta": 0.11408,
   "tov": 0.07038
  }
 },
 {
  "name": "Jaden McDaniels",
  "team": "MIN",
  "pos": "SF",
  "gp": 73,
  "mpg": 31.73,
  "rates": {
   "pts": 0.46796,
   "fg3m": 0.04447,
   "reb": 0.13383,
   "ast": 0.08591,
   "stl": 0.03497,
   "blk": 0.03151,
   "fgm": 0.18002,
   "fga": 0.34925,
   "ftm": 0.06346,
   "fta": 0.07598,
   "tov": 0.05655
  }
 },
 {
  "name": "Ayo Dosunmu",
  "team": "MIN",
  "pos": "SG",
  "gp": 69,
  "mpg": 27.26,
  "rates": {
   "pts": 0.54331,
   "fg3m": 0.06539,
   "reb": 0.12599,
   "ast": 0.13237,
   "stl": 0.03083,
   "blk": 0.00957,
   "fgm": 0.2052,
   "fga": 0.39712,
   "ftm": 0.06751,
   "fta": 0.07708,
   "tov": 0.05103
  }
 },
 {
  "name": "Kyshawn George",
  "team": "WAS",
  "pos": "SG/SF",
  "gp": 48,
  "mpg": 28.98,
  "rates": {
   "pts": 0.51044,
   "fg3m": 0.07117,
   "reb": 0.17614,
   "ast": 0.15385,
   "stl": 0.03451,
   "blk": 0.03091,
   "fgm": 0.18189,
   "fga": 0.41482,
   "ftm": 0.07549,
   "fta": 0.09418,
   "tov": 0.08987
  }
 },
 {
  "name": "Peyton Watson",
  "team": "DEN",
  "pos": "SF/PF",
  "gp": 54,
  "mpg": 29.59,
  "rates": {
   "pts": 0.49381,
   "fg3m": 0.0507,
   "reb": 0.16523,
   "ast": 0.06947,
   "stl": 0.03129,
   "blk": 0.03755,
   "fgm": 0.17837,
   "fga": 0.36363,
   "ftm": 0.08637,
   "fta": 0.11829,
   "tov": 0.05821
  }
 },
 {
  "name": "Mikal Bridges",
  "team": "NYK",
  "pos": "SG/SF",
  "gp": 82,
  "mpg": 32.83,
  "rates": {
   "pts": 0.43871,
   "fg3m": 0.05795,
   "reb": 0.1159,
   "ast": 0.11293,
   "stl": 0.03975,
   "blk": 0.02303,
   "fgm": 0.17534,
   "fga": 0.35773,
   "ftm": 0.03009,
   "fta": 0.0364,
   "tov": 0.03083
  }
 },
 {
  "name": "Walker Kessler",
  "team": "UTA",
  "pos": "C",
  "gp": 5,
  "mpg": 30.8,
  "rates": {
   "pts": 0.46758,
   "fg3m": 0.03897,
   "reb": 0.35069,
   "ast": 0.09092,
   "stl": 0.04546,
   "blk": 0.05845,
   "fgm": 0.16885,
   "fga": 0.24029,
   "ftm": 0.09092,
   "fta": 0.12988,
   "tov": 0.10391
  }
 },
 {
  "name": "Cormac Ryan",
  "team": "MIL",
  "pos": "SG",
  "gp": 11,
  "mpg": 24.61,
  "rates": {
   "pts": 0.58001,
   "fg3m": 0.09975,
   "reb": 0.10344,
   "ast": 0.07019,
   "stl": 0.04064,
   "blk": 0.01108,
   "fgm": 0.1958,
   "fga": 0.37682,
   "ftm": 0.08866,
   "fta": 0.09605,
   "tov": 0.0628
  }
 },
 {
  "name": "Anfernee Simons",
  "team": "CHI",
  "pos": "PG/SG",
  "gp": 55,
  "mpg": 24.94,
  "rates": {
   "pts": 0.57217,
   "fg3m": 0.10642,
   "reb": 0.0984,
   "ast": 0.09767,
   "stl": 0.01968,
   "blk": 0.00583,
   "fgm": 0.20773,
   "fga": 0.47231,
   "ftm": 0.05029,
   "fta": 0.05612,
   "tov": 0.04956
  }
 },
 {
  "name": "Jeremiah Fears",
  "team": "NOR",
  "pos": "PG/SG",
  "gp": 82,
  "mpg": 25.76,
  "rates": {
   "pts": 0.5535,
   "fg3m": 0.04782,
   "reb": 0.14205,
   "ast": 0.1321,
   "stl": 0.04593,
   "blk": 0.0142,
   "fgm": 0.20691,
   "fga": 0.47633,
   "ftm": 0.09186,
   "fta": 0.11648,
   "tov": 0.08428
  }
 },
 {
  "name": "Scoot Henderson",
  "team": "POR",
  "pos": "PG",
  "gp": 30,
  "mpg": 24.93,
  "rates": {
   "pts": 0.57098,
   "fg3m": 0.07622,
   "reb": 0.10698,
   "ast": 0.14977,
   "stl": 0.0361,
   "blk": 0.01203,
   "fgm": 0.19122,
   "fga": 0.45732,
   "ftm": 0.11232,
   "fta": 0.13372,
   "tov": 0.09762
  }
 },
 {
  "name": "PJ Washington",
  "team": "DAL",
  "pos": "SF/PF",
  "gp": 56,
  "mpg": 30.99,
  "rates": {
   "pts": 0.45689,
   "fg3m": 0.04379,
   "reb": 0.227,
   "ast": 0.05646,
   "stl": 0.03169,
   "blk": 0.03457,
   "fgm": 0.17054,
   "fga": 0.37911,
   "ftm": 0.07202,
   "fta": 0.10486,
   "tov": 0.05416
  }
 },
 {
  "name": "Ivica Zubac",
  "team": "IND",
  "pos": "C",
  "gp": 48,
  "mpg": 30.14,
  "rates": {
   "pts": 0.46795,
   "fg3m": 0.0,
   "reb": 0.35182,
   "ast": 0.07258,
   "stl": 0.01244,
   "blk": 0.02765,
   "fgm": 0.19907,
   "fga": 0.33316,
   "ftm": 0.06981,
   "fta": 0.09815,
   "tov": 0.05944
  }
 },
 {
  "name": "Kelly Oubre",
  "team": "PHI",
  "pos": "SG/SF",
  "gp": 50,
  "mpg": 31.49,
  "rates": {
   "pts": 0.4478,
   "fg3m": 0.05463,
   "reb": 0.16007,
   "ast": 0.05081,
   "stl": 0.04256,
   "blk": 0.01524,
   "fgm": 0.16134,
   "fga": 0.34554,
   "ftm": 0.07051,
   "fta": 0.0921,
   "tov": 0.04383
  }
 },
 {
  "name": "Tre Jones",
  "team": "CHI",
  "pos": "PG",
  "gp": 65,
  "mpg": 26.96,
  "rates": {
   "pts": 0.52157,
   "fg3m": 0.0234,
   "reb": 0.11641,
   "ast": 0.19973,
   "stl": 0.04337,
   "blk": 0.00628,
   "fgm": 0.19459,
   "fga": 0.35209,
   "ftm": 0.10899,
   "fta": 0.12954,
   "tov": 0.0525
  }
 },
 {
  "name": "Santi Aldama",
  "team": "MEM",
  "pos": "SF/PF/C",
  "gp": 43,
  "mpg": 27.86,
  "rates": {
   "pts": 0.50246,
   "fg3m": 0.05843,
   "reb": 0.23954,
   "ast": 0.10433,
   "stl": 0.03088,
   "blk": 0.02587,
   "fgm": 0.1903,
   "fga": 0.39729,
   "ftm": 0.06343,
   "fta": 0.09515,
   "tov": 0.04591
  }
 },
 {
  "name": "Keegan Murray",
  "team": "SAC",
  "pos": "SF/PF",
  "gp": 23,
  "mpg": 34.48,
  "rates": {
   "pts": 0.40475,
   "fg3m": 0.03909,
   "reb": 0.16644,
   "ast": 0.04791,
   "stl": 0.03026,
   "blk": 0.04539,
   "fgm": 0.15887,
   "fga": 0.37827,
   "ftm": 0.04791,
   "fta": 0.06178,
   "tov": 0.03404
  }
 },
 {
  "name": "Devin Vassell",
  "team": "SAS",
  "pos": "SG/SF",
  "gp": 67,
  "mpg": 30.51,
  "rates": {
   "pts": 0.45592,
   "fg3m": 0.0812,
   "reb": 0.13159,
   "ast": 0.08169,
   "stl": 0.02788,
   "blk": 0.01223,
   "fgm": 0.16143,
   "fga": 0.36933,
   "ftm": 0.05185,
   "fta": 0.06359,
   "tov": 0.02935
  }
 },
 {
  "name": "Brandin Podziemski",
  "team": "GSW",
  "pos": "PG/SG",
  "gp": 82,
  "mpg": 28.45,
  "rates": {
   "pts": 0.4857,
   "fg3m": 0.06559,
   "reb": 0.17962,
   "ast": 0.13032,
   "stl": 0.03772,
   "blk": 0.00643,
   "fgm": 0.1689,
   "fga": 0.37124,
   "ftm": 0.08231,
   "fta": 0.10331,
   "tov": 0.05616
  }
 },
 {
  "name": "Aaron Nesmith",
  "team": "IND",
  "pos": "SF",
  "gp": 45,
  "mpg": 29.67,
  "rates": {
   "pts": 0.46519,
   "fg3m": 0.07866,
   "reb": 0.14008,
   "ast": 0.06442,
   "stl": 0.01948,
   "blk": 0.01723,
   "fgm": 0.15881,
   "fga": 0.38354,
   "ftm": 0.06892,
   "fta": 0.08315,
   "tov": 0.04719
  }
 },
 {
  "name": "Ace Bailey",
  "team": "UTA",
  "pos": "SF/PF",
  "gp": 72,
  "mpg": 27.61,
  "rates": {
   "pts": 0.49958,
   "fg3m": 0.06892,
   "reb": 0.15194,
   "ast": 0.06591,
   "stl": 0.03019,
   "blk": 0.02465,
   "fgm": 0.19872,
   "fga": 0.44876,
   "ftm": 0.0332,
   "fta": 0.04427,
   "tov": 0.05383
  }
 },
 {
  "name": "Jalen Suggs",
  "team": "ORL",
  "pos": "PG/SG",
  "gp": 57,
  "mpg": 27.61,
  "rates": {
   "pts": 0.4995,
   "fg3m": 0.07753,
   "reb": 0.13981,
   "ast": 0.19828,
   "stl": 0.06673,
   "blk": 0.02542,
   "fgm": 0.17921,
   "fga": 0.41244,
   "ftm": 0.06355,
   "fta": 0.07435,
   "tov": 0.0966
  }
 },
 {
  "name": "Bobby Portis",
  "team": "MIL",
  "pos": "PF",
  "gp": 67,
  "mpg": 24.17,
  "rates": {
   "pts": 0.56504,
   "fg3m": 0.08337,
   "reb": 0.2643,
   "ast": 0.06484,
   "stl": 0.02532,
   "blk": 0.00741,
   "fgm": 0.22602,
   "fga": 0.46315,
   "ftm": 0.02964,
   "fta": 0.04199,
   "tov": 0.04076
  }
 },
 {
  "name": "De'Andre Hunter",
  "team": "SAC",
  "pos": "SF/PF",
  "gp": 45,
  "mpg": 26.12,
  "rates": {
   "pts": 0.52234,
   "fg3m": 0.0638,
   "reb": 0.15738,
   "ast": 0.07656,
   "stl": 0.02637,
   "blk": 0.0051,
   "fgm": 0.17695,
   "fga": 0.42621,
   "ftm": 0.10464,
   "fta": 0.1208,
   "tov": 0.0638
  }
 },
 {
  "name": "Zach Edey",
  "team": "MEM",
  "pos": "C",
  "gp": 11,
  "mpg": 25.8,
  "rates": {
   "pts": 0.52845,
   "fg3m": 0.00352,
   "reb": 0.4298,
   "ast": 0.04228,
   "stl": 0.02466,
   "blk": 0.07398,
   "fgm": 0.21843,
   "fga": 0.34525,
   "ftm": 0.08807,
   "fta": 0.11274,
   "tov": 0.0916
  }
 },
 {
  "name": "Cedric Coward",
  "team": "MEM",
  "pos": "SG/SF",
  "gp": 62,
  "mpg": 25.77,
  "rates": {
   "pts": 0.52755,
   "fg3m": 0.0582,
   "reb": 0.22779,
   "ast": 0.10701,
   "stl": 0.02503,
   "blk": 0.0169,
   "fgm": 0.19087,
   "fga": 0.40552,
   "ftm": 0.08761,
   "fta": 0.10388,
   "tov": 0.06571
  }
 },
 {
  "name": "Naz Reid",
  "team": "MIN",
  "pos": "PF/C",
  "gp": 77,
  "mpg": 26.07,
  "rates": {
   "pts": 0.52109,
   "fg3m": 0.0807,
   "reb": 0.23763,
   "ast": 0.08519,
   "stl": 0.03786,
   "blk": 0.03886,
   "fgm": 0.19777,
   "fga": 0.43391,
   "ftm": 0.04484,
   "fta": 0.06127,
   "tov": 0.06277
  }
 },
 {
  "name": "Ajay Mitchell",
  "team": "OKC",
  "pos": "PG",
  "gp": 57,
  "mpg": 25.84,
  "rates": {
   "pts": 0.52552,
   "fg3m": 0.04142,
   "reb": 0.129,
   "ast": 0.14055,
   "stl": 0.04821,
   "blk": 0.01222,
   "fgm": 0.19419,
   "fga": 0.40059,
   "ftm": 0.09573,
   "fta": 0.10999,
   "tov": 0.055
  }
 },
 {
  "name": "John Collins",
  "team": "LAC",
  "pos": "PF/C",
  "gp": 69,
  "mpg": 27.12,
  "rates": {
   "pts": 0.4996,
   "fg3m": 0.04756,
   "reb": 0.1961,
   "ast": 0.0374,
   "stl": 0.03206,
   "blk": 0.02725,
   "fgm": 0.1945,
   "fga": 0.35212,
   "ftm": 0.06305,
   "fta": 0.08229,
   "tov": 0.05076
  }
 },
 {
  "name": "Reed Sheppard",
  "team": "HOU",
  "pos": "PG/SG",
  "gp": 82,
  "mpg": 26.18,
  "rates": {
   "pts": 0.51699,
   "fg3m": 0.10573,
   "reb": 0.11085,
   "ast": 0.12901,
   "stl": 0.05682,
   "blk": 0.02515,
   "fgm": 0.18956,
   "fga": 0.4406,
   "ftm": 0.03214,
   "fta": 0.04005,
   "tov": 0.05729
  }
 },
 {
  "name": "Tim Hardaway Jr.",
  "team": "DEN",
  "pos": "SG/SF",
  "gp": 80,
  "mpg": 26.59,
  "rates": {
   "pts": 0.50721,
   "fg3m": 0.1053,
   "reb": 0.09683,
   "ast": 0.05077,
   "stl": 0.01974,
   "blk": 0.0047,
   "fgm": 0.16359,
   "fga": 0.36619,
   "ftm": 0.07474,
   "fta": 0.09213,
   "tov": 0.02021
  }
 },
 {
  "name": "Cam Thomas",
  "team": "FA",
  "pos": "SG/SF",
  "gp": 42,
  "mpg": 20.97,
  "rates": {
   "pts": 0.64278,
   "fg3m": 0.05905,
   "reb": 0.08063,
   "ast": 0.12265,
   "stl": 0.01022,
   "blk": 0.00454,
   "fgm": 0.21464,
   "fga": 0.5224,
   "ftm": 0.15445,
   "fta": 0.19079,
   "tov": 0.08404
  }
 },
 {
  "name": "Jordan Poole",
  "team": "NOR",
  "pos": "PG/SG",
  "gp": 39,
  "mpg": 23.93,
  "rates": {
   "pts": 0.56147,
   "fg3m": 0.10286,
   "reb": 0.08251,
   "ast": 0.12751,
   "stl": 0.02357,
   "blk": 0.01607,
   "fgm": 0.1768,
   "fga": 0.47575,
   "ftm": 0.10501,
   "fta": 0.12215,
   "tov": 0.07393
  }
 },
 {
  "name": "Toumani Camara",
  "team": "POR",
  "pos": "SF/PF",
  "gp": 82,
  "mpg": 33.31,
  "rates": {
   "pts": 0.40275,
   "fg3m": 0.08018,
   "reb": 0.15414,
   "ast": 0.07359,
   "stl": 0.03405,
   "blk": 0.01281,
   "fgm": 0.14352,
   "fga": 0.32623,
   "ftm": 0.03552,
   "fta": 0.05016,
   "tov": 0.05272
  }
 },
 {
  "name": "Quentin Grimes",
  "team": "PHI",
  "pos": "SG",
  "gp": 75,
  "mpg": 29.41,
  "rates": {
   "pts": 0.45608,
   "fg3m": 0.05758,
   "reb": 0.12422,
   "ast": 0.11062,
   "stl": 0.02902,
   "blk": 0.01269,
   "fgm": 0.15414,
   "fga": 0.34229,
   "ftm": 0.09022,
   "fta": 0.10745,
   "tov": 0.0603
  }
 },
 {
  "name": "Tobias Harris",
  "team": "DET",
  "pos": "SF/PF",
  "gp": 63,
  "mpg": 27.71,
  "rates": {
   "pts": 0.47895,
   "fg3m": 0.04698,
   "reb": 0.18505,
   "ast": 0.08995,
   "stl": 0.0338,
   "blk": 0.0149,
   "fgm": 0.17703,
   "fga": 0.37754,
   "ftm": 0.07791,
   "fta": 0.08995,
   "tov": 0.03609
  }
 },
 {
  "name": "Jaylon Tyson",
  "team": "CLE",
  "pos": "SG/SF",
  "gp": 66,
  "mpg": 26.93,
  "rates": {
   "pts": 0.49058,
   "fg3m": 0.07482,
   "reb": 0.19016,
   "ast": 0.0827,
   "stl": 0.03038,
   "blk": 0.01575,
   "fgm": 0.18566,
   "fga": 0.37694,
   "ftm": 0.04444,
   "fta": 0.0602,
   "tov": 0.0557
  }
 },
 {
  "name": "Keldon Johnson",
  "team": "SAS",
  "pos": "SF/PF",
  "gp": 82,
  "mpg": 23.31,
  "rates": {
   "pts": 0.56553,
   "fg3m": 0.05179,
   "reb": 0.23019,
   "ast": 0.05807,
   "stl": 0.02407,
   "blk": 0.00575,
   "fgm": 0.21659,
   "fga": 0.41696,
   "ftm": 0.08057,
   "fta": 0.10149,
   "tov": 0.03662
  }
 },
 {
  "name": "Brandon Williams",
  "team": "DAL",
  "pos": "PG",
  "gp": 66,
  "mpg": 22.16,
  "rates": {
   "pts": 0.58728,
   "fg3m": 0.02461,
   "reb": 0.13058,
   "ast": 0.17502,
   "stl": 0.04239,
   "blk": 0.01367,
   "fgm": 0.19895,
   "fga": 0.42183,
   "ftm": 0.16477,
   "fta": 0.20784,
   "tov": 0.08546
  }
 },
 {
  "name": "Kyle Kuzma",
  "team": "MIL",
  "pos": "SF/PF",
  "gp": 69,
  "mpg": 26.17,
  "rates": {
   "pts": 0.49618,
   "fg3m": 0.04596,
   "reb": 0.17333,
   "ast": 0.10189,
   "stl": 0.02547,
   "blk": 0.01551,
   "fgm": 0.18773,
   "fga": 0.38155,
   "ftm": 0.07476,
   "fta": 0.103,
   "tov": 0.0659
  }
 },
 {
  "name": "Sam Merrill",
  "team": "CLE",
  "pos": "SG",
  "gp": 52,
  "mpg": 26.48,
  "rates": {
   "pts": 0.48146,
   "fg3m": 0.11474,
   "reb": 0.09658,
   "ast": 0.09077,
   "stl": 0.02396,
   "blk": 0.00508,
   "fgm": 0.16194,
   "fga": 0.35148,
   "ftm": 0.04285,
   "fta": 0.05011,
   "tov": 0.0305
  }
 },
 {
  "name": "Collin Gillespie",
  "team": "PHO",
  "pos": "PG",
  "gp": 80,
  "mpg": 28.52,
  "rates": {
   "pts": 0.44351,
   "fg3m": 0.10167,
   "reb": 0.14331,
   "ast": 0.16259,
   "stl": 0.04339,
   "blk": 0.00701,
   "fgm": 0.15426,
   "fga": 0.369,
   "ftm": 0.03331,
   "fta": 0.03813,
   "tov": 0.05434
  }
 },
 {
  "name": "Jaylen Wells",
  "team": "MEM",
  "pos": "SG",
  "gp": 69,
  "mpg": 26.39,
  "rates": {
   "pts": 0.47511,
   "fg3m": 0.07085,
   "reb": 0.12084,
   "ast": 0.06097,
   "stl": 0.0335,
   "blk": 0.00494,
   "fgm": 0.16533,
   "fga": 0.38338,
   "ftm": 0.0736,
   "fta": 0.09392,
   "tov": 0.04064
  }
 },
 {
  "name": "G.G. Jackson",
  "team": "MEM",
  "pos": "PF",
  "gp": 55,
  "mpg": 21.41,
  "rates": {
   "pts": 0.58247,
   "fg3m": 0.05434,
   "reb": 0.19953,
   "ast": 0.06878,
   "stl": 0.02632,
   "blk": 0.03736,
   "fgm": 0.21651,
   "fga": 0.43643,
   "ftm": 0.0951,
   "fta": 0.12821,
   "tov": 0.07217
  }
 },
 {
  "name": "Maxime Raynaud",
  "team": "SAC",
  "pos": "C",
  "gp": 74,
  "mpg": 26.54,
  "rates": {
   "pts": 0.46948,
   "fg3m": 0.01222,
   "reb": 0.28311,
   "ast": 0.05092,
   "stl": 0.01935,
   "blk": 0.01986,
   "fgm": 0.19502,
   "fga": 0.34167,
   "ftm": 0.06721,
   "fta": 0.08554,
   "tov": 0.04786
  }
 },
 {
  "name": "Deandre Ayton",
  "team": "LAL",
  "pos": "C",
  "gp": 72,
  "mpg": 27.2,
  "rates": {
   "pts": 0.45802,
   "fg3m": 0.0,
   "reb": 0.2936,
   "ast": 0.03013,
   "stl": 0.02094,
   "blk": 0.03574,
   "fgm": 0.20578,
   "fga": 0.30688,
   "ftm": 0.04647,
   "fta": 0.072,
   "tov": 0.04238
  }
 },
 {
  "name": "Malik Monk",
  "team": "SAC",
  "pos": "PG/SG/SF",
  "gp": 62,
  "mpg": 22.0,
  "rates": {
   "pts": 0.56611,
   "fg3m": 0.09093,
   "reb": 0.0858,
   "ast": 0.13566,
   "stl": 0.02713,
   "blk": 0.0176,
   "fgm": 0.20312,
   "fga": 0.46345,
   "ftm": 0.06893,
   "fta": 0.07846,
   "tov": 0.06673
  }
 },
 {
  "name": "De'Anthony Melton",
  "team": "GSW",
  "pos": "PG/SG",
  "gp": 49,
  "mpg": 22.97,
  "rates": {
   "pts": 0.53497,
   "fg3m": 0.06398,
   "reb": 0.14041,
   "ast": 0.11108,
   "stl": 0.06843,
   "blk": 0.01777,
   "fgm": 0.19106,
   "fga": 0.46921,
   "ftm": 0.08887,
   "fta": 0.10753,
   "tov": 0.08087
  }
 },
 {
  "name": "Max Christie",
  "team": "DAL",
  "pos": "SG",
  "gp": 77,
  "mpg": 29.15,
  "rates": {
   "pts": 0.42104,
   "fg3m": 0.0802,
   "reb": 0.11094,
   "ast": 0.06728,
   "stl": 0.02094,
   "blk": 0.01203,
   "fgm": 0.14257,
   "fga": 0.32302,
   "ftm": 0.05569,
   "fta": 0.06193,
   "tov": 0.04277
  }
 },
 {
  "name": "Noah Clowney",
  "team": "BKN",
  "pos": "PF",
  "gp": 66,
  "mpg": 26.97,
  "rates": {
   "pts": 0.45449,
   "fg3m": 0.07247,
   "reb": 0.15337,
   "ast": 0.06067,
   "stl": 0.02809,
   "blk": 0.02528,
   "fgm": 0.14045,
   "fga": 0.35449,
   "ftm": 0.10112,
   "fta": 0.12584,
   "tov": 0.0573
  }
 },
 {
  "name": "Tre Johnson",
  "team": "WAS",
  "pos": "SG",
  "gp": 60,
  "mpg": 24.05,
  "rates": {
   "pts": 0.50872,
   "fg3m": 0.0797,
   "reb": 0.11782,
   "ast": 0.08455,
   "stl": 0.02287,
   "blk": 0.01248,
   "fgm": 0.18782,
   "fga": 0.44842,
   "ftm": 0.05337,
   "fta": 0.06168,
   "tov": 0.06446
  }
 },
 {
  "name": "Cam Johnson",
  "team": "DEN",
  "pos": "SF/PF",
  "gp": 54,
  "mpg": 30.5,
  "rates": {
   "pts": 0.40072,
   "fg3m": 0.06679,
   "reb": 0.12507,
   "ast": 0.08014,
   "stl": 0.02429,
   "blk": 0.01275,
   "fgm": 0.13843,
   "fga": 0.2884,
   "ftm": 0.05707,
   "fta": 0.068,
   "tov": 0.02854
  }
 },
 {
  "name": "Donte DiVincenzo",
  "team": "MIN",
  "pos": "PG/SG",
  "gp": 82,
  "mpg": 30.42,
  "rates": {
   "pts": 0.40095,
   "fg3m": 0.09783,
   "reb": 0.13472,
   "ast": 0.1255,
   "stl": 0.0417,
   "blk": 0.01363,
   "fgm": 0.13592,
   "fga": 0.33479,
   "ftm": 0.03127,
   "fta": 0.0421,
   "tov": 0.04731
  }
 },
 {
  "name": "Duncan Robinson",
  "team": "DET",
  "pos": "SF",
  "gp": 77,
  "mpg": 27.44,
  "rates": {
   "pts": 0.44435,
   "fg3m": 0.10411,
   "reb": 0.09701,
   "ast": 0.07524,
   "stl": 0.02082,
   "blk": 0.01041,
   "fgm": 0.15048,
   "fga": 0.3303,
   "ftm": 0.03928,
   "fta": 0.05205,
   "tov": 0.02555
  }
 },
 {
  "name": "Jonathan Kuminga",
  "team": "ATL",
  "pos": "PF",
  "gp": 36,
  "mpg": 23.07,
  "rates": {
   "pts": 0.52738,
   "fg3m": 0.04214,
   "reb": 0.24322,
   "ast": 0.09994,
   "stl": 0.02649,
   "blk": 0.01324,
   "fgm": 0.18904,
   "fga": 0.40818,
   "ftm": 0.10716,
   "fta": 0.1481,
   "tov": 0.08067
  }
 },
 {
  "name": "Moses Moody",
  "team": "GSW",
  "pos": "SG/SF",
  "gp": 60,
  "mpg": 25.66,
  "rates": {
   "pts": 0.47276,
   "fg3m": 0.09806,
   "reb": 0.12988,
   "ast": 0.06364,
   "stl": 0.03831,
   "blk": 0.02208,
   "fgm": 0.1591,
   "fga": 0.36171,
   "ftm": 0.0565,
   "fta": 0.07338,
   "tov": 0.03702
  }
 },
 {
  "name": "Donovan Clingan",
  "team": "POR",
  "pos": "C",
  "gp": 77,
  "mpg": 27.19,
  "rates": {
   "pts": 0.4461,
   "fg3m": 0.04012,
   "reb": 0.42604,
   "ast": 0.07737,
   "stl": 0.02102,
   "blk": 0.06209,
   "fgm": 0.17003,
   "fga": 0.32669,
   "ftm": 0.06591,
   "fta": 0.09696,
   "tov": 0.04537
  }
 },
 {
  "name": "Josh Hart",
  "team": "NYK",
  "pos": "SG/SF",
  "gp": 66,
  "mpg": 30.21,
  "rates": {
   "pts": 0.39727,
   "fg3m": 0.05016,
   "reb": 0.24428,
   "ast": 0.15901,
   "stl": 0.03762,
   "blk": 0.00853,
   "fgm": 0.15098,
   "fga": 0.29695,
   "ftm": 0.04514,
   "fta": 0.0627,
   "tov": 0.0642
  }
 },
 {
  "name": "Tristen Newton",
  "team": "HOU",
  "pos": "PG",
  "gp": 1,
  "mpg": 12.0,
  "rates": {
   "pts": 1.0,
   "fg3m": 0.16667,
   "reb": 0.25,
   "ast": 0.0,
   "stl": 0.08333,
   "blk": 0.0,
   "fgm": 0.33333,
   "fga": 0.75,
   "ftm": 0.16667,
   "fta": 0.25,
   "tov": 0.0
  }
 },
 {
  "name": "Miles McBride",
  "team": "NYK",
  "pos": "PG",
  "gp": 41,
  "mpg": 26.34,
  "rates": {
   "pts": 0.4546,
   "fg3m": 0.1037,
   "reb": 0.09166,
   "ast": 0.09814,
   "stl": 0.03241,
   "blk": 0.00833,
   "fgm": 0.15832,
   "fga": 0.37405,
   "ftm": 0.03426,
   "fta": 0.04352,
   "tov": 0.03055
  }
 },
 {
  "name": "Christian Braun",
  "team": "DEN",
  "pos": "SG/SF",
  "gp": 44,
  "mpg": 31.8,
  "rates": {
   "pts": 0.37594,
   "fg3m": 0.03073,
   "reb": 0.15081,
   "ast": 0.08505,
   "stl": 0.02144,
   "blk": 0.00858,
   "fgm": 0.14437,
   "fga": 0.27803,
   "ftm": 0.05646,
   "fta": 0.07219,
   "tov": 0.03073
  }
 },
 {
  "name": "Blake Hinson",
  "team": "UTA",
  "pos": "SF",
  "gp": 14,
  "mpg": 20.39,
  "rates": {
   "pts": 0.58508,
   "fg3m": 0.12963,
   "reb": 0.11561,
   "ast": 0.05606,
   "stl": 0.01752,
   "blk": 0.00701,
   "fgm": 0.2067,
   "fga": 0.4029,
   "ftm": 0.04204,
   "fta": 0.05606,
   "tov": 0.01752
  }
 },
 {
  "name": "Myles Turner",
  "team": "MIL",
  "pos": "C",
  "gp": 71,
  "mpg": 26.93,
  "rates": {
   "pts": 0.44253,
   "fg3m": 0.07689,
   "reb": 0.19773,
   "ast": 0.05388,
   "stl": 0.02615,
   "blk": 0.06015,
   "fgm": 0.14856,
   "fga": 0.33791,
   "ftm": 0.06852,
   "fta": 0.09259,
   "tov": 0.04342
  }
 },
 {
  "name": "Dyson Daniels",
  "team": "ATL",
  "pos": "PG/SG",
  "gp": 76,
  "mpg": 33.15,
  "rates": {
   "pts": 0.3576,
   "fg3m": 0.00873,
   "reb": 0.20638,
   "ast": 0.1786,
   "stl": 0.05914,
   "blk": 0.0123,
   "fgm": 0.15955,
   "fga": 0.30838,
   "ftm": 0.02977,
   "fta": 0.04842,
   "tov": 0.05358
  }
 },
 {
  "name": "Julian Reese",
  "team": "WAS",
  "pos": "PF",
  "gp": 13,
  "mpg": 30.88,
  "rates": {
   "pts": 0.38356,
   "fg3m": 0.0,
   "reb": 0.34122,
   "ast": 0.05978,
   "stl": 0.04483,
   "blk": 0.01993,
   "fgm": 0.15691,
   "fga": 0.29639,
   "ftm": 0.06974,
   "fta": 0.10959,
   "tov": 0.0797
  }
 },
 {
  "name": "Wendell Carter Jr.",
  "team": "ORL",
  "pos": "C",
  "gp": 78,
  "mpg": 29.34,
  "rates": {
   "pts": 0.4029,
   "fg3m": 0.03146,
   "reb": 0.25214,
   "ast": 0.06773,
   "stl": 0.02666,
   "blk": 0.02141,
   "fgm": 0.14246,
   "fga": 0.27836,
   "ftm": 0.08652,
   "fta": 0.10925,
   "tov": 0.0437
  }
 },
 {
  "name": "Dylan Harper",
  "team": "SAS",
  "pos": "PG/SG",
  "gp": 69,
  "mpg": 22.58,
  "rates": {
   "pts": 0.52183,
   "fg3m": 0.03915,
   "reb": 0.15019,
   "ast": 0.17073,
   "stl": 0.03466,
   "blk": 0.0154,
   "fgm": 0.21245,
   "fga": 0.42106,
   "ftm": 0.05777,
   "fta": 0.07638,
   "tov": 0.06354
  }
 },
 {
  "name": "Nicolas Claxton",
  "team": "BKN",
  "pos": "C",
  "gp": 69,
  "mpg": 27.83,
  "rates": {
   "pts": 0.42179,
   "fg3m": 0.00156,
   "reb": 0.24891,
   "ast": 0.13175,
   "stl": 0.02343,
   "blk": 0.0401,
   "fgm": 0.1734,
   "fga": 0.30359,
   "ftm": 0.07342,
   "fta": 0.11925,
   "tov": 0.04999
  }
 },
 {
  "name": "Klay Thompson",
  "team": "DAL",
  "pos": "SG/SF",
  "gp": 69,
  "mpg": 21.69,
  "rates": {
   "pts": 0.54114,
   "fg3m": 0.13495,
   "reb": 0.09553,
   "ast": 0.06413,
   "stl": 0.02205,
   "blk": 0.0147,
   "fgm": 0.19107,
   "fga": 0.48635,
   "ftm": 0.02405,
   "fta": 0.0314,
   "tov": 0.04209
  }
 },
 {
  "name": "Bilal Coulibaly",
  "team": "WAS",
  "pos": "SG/SF",
  "gp": 56,
  "mpg": 26.21,
  "rates": {
   "pts": 0.44768,
   "fg3m": 0.04429,
   "reb": 0.16558,
   "ast": 0.0988,
   "stl": 0.05111,
   "blk": 0.0368,
   "fgm": 0.15672,
   "fga": 0.36864,
   "ftm": 0.08994,
   "fta": 0.12061,
   "tov": 0.05519
  }
 },
 {
  "name": "Derik Queen",
  "team": "NOR",
  "pos": "C",
  "gp": 81,
  "mpg": 24.98,
  "rates": {
   "pts": 0.4685,
   "fg3m": 0.01137,
   "reb": 0.28268,
   "ast": 0.14727,
   "stl": 0.04151,
   "blk": 0.03657,
   "fgm": 0.17495,
   "fga": 0.36966,
   "ftm": 0.10724,
   "fta": 0.13492,
   "tov": 0.0939
  }
 },
 {
  "name": "Mark Williams",
  "team": "PHO",
  "pos": "C",
  "gp": 60,
  "mpg": 23.6,
  "rates": {
   "pts": 0.49433,
   "fg3m": 0.00071,
   "reb": 0.33614,
   "ast": 0.04096,
   "stl": 0.03884,
   "blk": 0.03884,
   "fgm": 0.19914,
   "fga": 0.30931,
   "ftm": 0.09533,
   "fta": 0.12358,
   "tov": 0.0459
  }
 },
 {
  "name": "Isaiah Collier",
  "team": "UTA",
  "pos": "PG",
  "gp": 59,
  "mpg": 25.71,
  "rates": {
   "pts": 0.45355,
   "fg3m": 0.0178,
   "reb": 0.09888,
   "ast": 0.27885,
   "stl": 0.04351,
   "blk": 0.01318,
   "fgm": 0.1681,
   "fga": 0.3395,
   "ftm": 0.09954,
   "fta": 0.13778,
   "tov": 0.09757
  }
 },
 {
  "name": "Jarace Walker",
  "team": "IND",
  "pos": "PF",
  "gp": 76,
  "mpg": 25.7,
  "rates": {
   "pts": 0.45254,
   "fg3m": 0.06809,
   "reb": 0.20016,
   "ast": 0.09829,
   "stl": 0.03225,
   "blk": 0.01331,
   "fgm": 0.15716,
   "fga": 0.37524,
   "ftm": 0.07013,
   "fta": 0.09368,
   "tov": 0.07116
  }
 },
 {
  "name": "Obi Toppin",
  "team": "IND",
  "pos": "PF",
  "gp": 24,
  "mpg": 17.65,
  "rates": {
   "pts": 0.65846,
   "fg3m": 0.08732,
   "reb": 0.25017,
   "ast": 0.1298,
   "stl": 0.02832,
   "blk": 0.00236,
   "fgm": 0.23601,
   "fga": 0.46965,
   "ftm": 0.09912,
   "fta": 0.10856,
   "tov": 0.06608
  }
 },
 {
  "name": "Rui Hachimura",
  "team": "LAL",
  "pos": "SF/PF",
  "gp": 68,
  "mpg": 28.33,
  "rates": {
   "pts": 0.40486,
   "fg3m": 0.06021,
   "reb": 0.11731,
   "ast": 0.02907,
   "stl": 0.02024,
   "blk": 0.0109,
   "fgm": 0.15935,
   "fga": 0.30987,
   "ftm": 0.02595,
   "fta": 0.03737,
   "tov": 0.0218
  }
 },
 {
  "name": "Pelle Larsson",
  "team": "MIA",
  "pos": "SG",
  "gp": 70,
  "mpg": 26.42,
  "rates": {
   "pts": 0.43263,
   "fg3m": 0.03353,
   "reb": 0.13195,
   "ast": 0.12763,
   "stl": 0.0265,
   "blk": 0.00865,
   "fgm": 0.1498,
   "fga": 0.3023,
   "ftm": 0.0995,
   "fta": 0.12492,
   "tov": 0.05462
  }
 },
 {
  "name": "Kyle Filipowski",
  "team": "UTA",
  "pos": "PF/C",
  "gp": 77,
  "mpg": 23.39,
  "rates": {
   "pts": 0.48808,
   "fg3m": 0.04109,
   "reb": 0.30651,
   "ast": 0.10994,
   "stl": 0.04053,
   "blk": 0.02166,
   "fgm": 0.17935,
   "fga": 0.36481,
   "ftm": 0.08829,
   "fta": 0.11772,
   "tov": 0.06941
  }
 },
 {
  "name": "Scotty Pippen Jr.",
  "team": "MEM",
  "pos": "PG/SG",
  "gp": 10,
  "mpg": 21.19,
  "rates": {
   "pts": 0.53807,
   "fg3m": 0.0472,
   "reb": 0.10384,
   "ast": 0.22184,
   "stl": 0.08968,
   "blk": 0.01888,
   "fgm": 0.20296,
   "fga": 0.45312,
   "ftm": 0.08496,
   "fta": 0.10856,
   "tov": 0.12744
  }
 },
 {
  "name": "Max Strus",
  "team": "CLE",
  "pos": "SG/SF",
  "gp": 12,
  "mpg": 24.03,
  "rates": {
   "pts": 0.46479,
   "fg3m": 0.11446,
   "reb": 0.22546,
   "ast": 0.08325,
   "stl": 0.01041,
   "blk": 0.0,
   "fgm": 0.16302,
   "fga": 0.36767,
   "ftm": 0.02428,
   "fta": 0.03122,
   "tov": 0.03122
  }
 },
 {
  "name": "Sandro Mamukelashvili",
  "team": "TOR",
  "pos": "PF",
  "gp": 80,
  "mpg": 21.88,
  "rates": {
   "pts": 0.51007,
   "fg3m": 0.06569,
   "reb": 0.22562,
   "ast": 0.08625,
   "stl": 0.03656,
   "blk": 0.02342,
   "fgm": 0.18849,
   "fga": 0.36042,
   "ftm": 0.0674,
   "fta": 0.09025,
   "tov": 0.03827
  }
 },
 {
  "name": "Julian Champagnie",
  "team": "SAS",
  "pos": "SF",
  "gp": 82,
  "mpg": 27.63,
  "rates": {
   "pts": 0.40203,
   "fg3m": 0.08606,
   "reb": 0.20962,
   "ast": 0.05605,
   "stl": 0.02736,
   "blk": 0.01677,
   "fgm": 0.13283,
   "fga": 0.30406,
   "ftm": 0.05031,
   "fta": 0.05958,
   "tov": 0.03089
  }
 },
 {
  "name": "Cam Spencer",
  "team": "MEM",
  "pos": "PG/SG",
  "gp": 72,
  "mpg": 23.81,
  "rates": {
   "pts": 0.46546,
   "fg3m": 0.08516,
   "reb": 0.10674,
   "ast": 0.23331,
   "stl": 0.03033,
   "blk": 0.00642,
   "fgm": 0.1534,
   "fga": 0.3243,
   "ftm": 0.07349,
   "fta": 0.07816,
   "tov": 0.05424
  }
 },
 {
  "name": "Isaiah Joe",
  "team": "OKC",
  "pos": "SG",
  "gp": 71,
  "mpg": 21.23,
  "rates": {
   "pts": 0.52075,
   "fg3m": 0.12007,
   "reb": 0.12007,
   "ast": 0.06236,
   "stl": 0.03317,
   "blk": 0.0073,
   "fgm": 0.16385,
   "fga": 0.36021,
   "ftm": 0.07297,
   "fta": 0.0816,
   "tov": 0.02985
  }
 },
 {
  "name": "Kel'el Ware",
  "team": "MIA",
  "pos": "C",
  "gp": 77,
  "mpg": 22.13,
  "rates": {
   "pts": 0.49946,
   "fg3m": 0.054,
   "reb": 0.40732,
   "ast": 0.03287,
   "stl": 0.03463,
   "blk": 0.0493,
   "fgm": 0.2019,
   "fga": 0.38091,
   "ftm": 0.04167,
   "fta": 0.05576,
   "tov": 0.03639
  }
 },
 {
  "name": "Alondes Williams",
  "team": "FA",
  "pos": "SG",
  "gp": 4,
  "mpg": 25.2,
  "rates": {
   "pts": 0.43658,
   "fg3m": 0.04961,
   "reb": 0.24806,
   "ast": 0.11907,
   "stl": 0.02977,
   "blk": 0.02977,
   "fgm": 0.15876,
   "fga": 0.25798,
   "ftm": 0.06946,
   "fta": 0.07938,
   "tov": 0.04961
  }
 },
 {
  "name": "Rudy Gobert",
  "team": "MIN",
  "pos": "C",
  "gp": 76,
  "mpg": 31.32,
  "rates": {
   "pts": 0.3483,
   "fg3m": 0.0,
   "reb": 0.36637,
   "ast": 0.05378,
   "stl": 0.02437,
   "blk": 0.0521,
   "fgm": 0.14075,
   "fga": 0.20629,
   "ftm": 0.0668,
   "fta": 0.12688,
   "tov": 0.04454
  }
 },
 {
  "name": "Jusuf Nurkic",
  "team": "UTA",
  "pos": "C",
  "gp": 41,
  "mpg": 26.42,
  "rates": {
   "pts": 0.41272,
   "fg3m": 0.02308,
   "reb": 0.3924,
   "ast": 0.18097,
   "stl": 0.04801,
   "blk": 0.02031,
   "fgm": 0.16619,
   "fga": 0.33054,
   "ftm": 0.05724,
   "fta": 0.10433,
   "tov": 0.09325
  }
 },
 {
  "name": "Dennis Schroder",
  "team": "CLE",
  "pos": "PG",
  "gp": 70,
  "mpg": 24.23,
  "rates": {
   "pts": 0.44567,
   "fg3m": 0.04421,
   "reb": 0.11142,
   "ast": 0.20102,
   "stl": 0.03242,
   "blk": 0.00648,
   "fgm": 0.15033,
   "fga": 0.3708,
   "ftm": 0.10081,
   "fta": 0.12085,
   "tov": 0.0731
  }
 },
 {
  "name": "Daeqwon Plowden",
  "team": "SAC",
  "pos": "SG",
  "gp": 32,
  "mpg": 26.39,
  "rates": {
   "pts": 0.4074,
   "fg3m": 0.07343,
   "reb": 0.11488,
   "ast": 0.04856,
   "stl": 0.02724,
   "blk": 0.00829,
   "fgm": 0.14212,
   "fga": 0.33042,
   "ftm": 0.04974,
   "fta": 0.05803,
   "tov": 0.03079
  }
 },
 {
  "name": "Tyler Burton",
  "team": "FA",
  "pos": "SF",
  "gp": 12,
  "mpg": 25.56,
  "rates": {
   "pts": 0.42054,
   "fg3m": 0.07172,
   "reb": 0.163,
   "ast": 0.03912,
   "stl": 0.03586,
   "blk": 0.01304,
   "fgm": 0.13692,
   "fga": 0.36512,
   "ftm": 0.07498,
   "fta": 0.08802,
   "tov": 0.03586
  }
 },
 {
  "name": "Jakob Poeltl",
  "team": "TOR",
  "pos": "C",
  "gp": 46,
  "mpg": 24.98,
  "rates": {
   "pts": 0.42905,
   "fg3m": 0.0,
   "reb": 0.2811,
   "ast": 0.08094,
   "stl": 0.03481,
   "blk": 0.02785,
   "fgm": 0.18885,
   "fga": 0.26979,
   "ftm": 0.05135,
   "fta": 0.08529,
   "tov": 0.04961
  }
 },
 {
  "name": "Bub Carrington",
  "team": "WAS",
  "pos": "PG/SG",
  "gp": 82,
  "mpg": 27.69,
  "rates": {
   "pts": 0.38668,
   "fg3m": 0.07443,
   "reb": 0.12155,
   "ast": 0.16779,
   "stl": 0.0229,
   "blk": 0.00749,
   "fgm": 0.13829,
   "fga": 0.32634,
   "ftm": 0.03567,
   "fta": 0.04889,
   "tov": 0.08412
  }
 },
 {
  "name": "Jock Landale",
  "team": "ATL",
  "pos": "C",
  "gp": 68,
  "mpg": 22.15,
  "rates": {
   "pts": 0.47672,
   "fg3m": 0.04913,
   "reb": 0.25695,
   "ast": 0.07636,
   "stl": 0.02324,
   "blk": 0.0239,
   "fgm": 0.18724,
   "fga": 0.36385,
   "ftm": 0.05312,
   "fta": 0.08366,
   "tov": 0.03984
  }
 },
 {
  "name": "Tari Eason",
  "team": "HOU",
  "pos": "SF/PF",
  "gp": 60,
  "mpg": 25.82,
  "rates": {
   "pts": 0.40474,
   "fg3m": 0.06003,
   "reb": 0.24143,
   "ast": 0.0581,
   "stl": 0.04648,
   "blk": 0.01807,
   "fgm": 0.15557,
   "fga": 0.3744,
   "ftm": 0.03357,
   "fta": 0.04325,
   "tov": 0.05164
  }
 },
 {
  "name": "Marvin Bagley III",
  "team": "DAL",
  "pos": "PF/C",
  "gp": 60,
  "mpg": 20.01,
  "rates": {
   "pts": 0.52211,
   "fg3m": 0.01999,
   "reb": 0.30477,
   "ast": 0.07078,
   "stl": 0.02332,
   "blk": 0.03581,
   "fgm": 0.21151,
   "fga": 0.34224,
   "ftm": 0.07911,
   "fta": 0.11991,
   "tov": 0.0508
  }
 },
 {
  "name": "Lucas Williamson",
  "team": "MEM",
  "pos": "SG",
  "gp": 7,
  "mpg": 31.96,
  "rates": {
   "pts": 0.32628,
   "fg3m": 0.06704,
   "reb": 0.16985,
   "ast": 0.08045,
   "stl": 0.04917,
   "blk": 0.00447,
   "fgm": 0.11174,
   "fga": 0.33522,
   "ftm": 0.03576,
   "fta": 0.03576,
   "tov": 0.0447
  }
 },
 {
  "name": "Caleb Love",
  "team": "POR",
  "pos": "SG",
  "gp": 49,
  "mpg": 20.67,
  "rates": {
   "pts": 0.50265,
   "fg3m": 0.09184,
   "reb": 0.11258,
   "ast": 0.12147,
   "stl": 0.02666,
   "blk": 0.00395,
   "fgm": 0.18763,
   "fga": 0.48389,
   "ftm": 0.03555,
   "fta": 0.04839,
   "tov": 0.06123
  }
 },
 {
  "name": "Adama Bal",
  "team": "MEM",
  "pos": "SG",
  "gp": 8,
  "mpg": 30.16,
  "rates": {
   "pts": 0.34395,
   "fg3m": 0.07459,
   "reb": 0.1036,
   "ast": 0.07873,
   "stl": 0.0373,
   "blk": 0.00414,
   "fgm": 0.11603,
   "fga": 0.28179,
   "ftm": 0.0373,
   "fta": 0.04144,
   "tov": 0.02486
  }
 },
 {
  "name": "AJ Green",
  "team": "MIL",
  "pos": "SG",
  "gp": 78,
  "mpg": 29.1,
  "rates": {
   "pts": 0.3564,
   "fg3m": 0.1022,
   "reb": 0.09383,
   "ast": 0.06696,
   "stl": 0.01718,
   "blk": 0.00352,
   "fgm": 0.11542,
   "fga": 0.27225,
   "ftm": 0.02335,
   "fta": 0.02731,
   "tov": 0.03304
  }
 },
 {
  "name": "DaQuan Jeffries",
  "team": "FA",
  "pos": "SG",
  "gp": 3,
  "mpg": 19.97,
  "rates": {
   "pts": 0.51753,
   "fg3m": 0.06678,
   "reb": 0.08347,
   "ast": 0.01669,
   "stl": 0.03339,
   "blk": 0.0,
   "fgm": 0.18364,
   "fga": 0.3172,
   "ftm": 0.08347,
   "fta": 0.08347,
   "tov": 0.0
  }
 },
 {
  "name": "Will Riley",
  "team": "WAS",
  "pos": "SG/SF",
  "gp": 74,
  "mpg": 22.06,
  "rates": {
   "pts": 0.46799,
   "fg3m": 0.04778,
   "reb": 0.12986,
   "ast": 0.08943,
   "stl": 0.03308,
   "blk": 0.00613,
   "fgm": 0.166,
   "fga": 0.37856,
   "ftm": 0.08821,
   "fta": 0.11026,
   "tov": 0.05758
  }
 },
 {
  "name": "Egor Demin",
  "team": "BKN",
  "pos": "PG",
  "gp": 52,
  "mpg": 25.16,
  "rates": {
   "pts": 0.40971,
   "fg3m": 0.09478,
   "reb": 0.12612,
   "ast": 0.13224,
   "stl": 0.0321,
   "blk": 0.01299,
   "fgm": 0.13682,
   "fga": 0.34321,
   "ftm": 0.04128,
   "fta": 0.04968,
   "tov": 0.06574
  }
 },
 {
  "name": "Ziaire Williams",
  "team": "BKN",
  "pos": "SF",
  "gp": 56,
  "mpg": 22.88,
  "rates": {
   "pts": 0.44721,
   "fg3m": 0.06712,
   "reb": 0.10458,
   "ast": 0.04683,
   "stl": 0.0601,
   "blk": 0.01639,
   "fgm": 0.14361,
   "fga": 0.33795,
   "ftm": 0.09288,
   "fta": 0.10927,
   "tov": 0.04605
  }
 },
 {
  "name": "Jalen Smith",
  "team": "CHI",
  "pos": "PF/C",
  "gp": 53,
  "mpg": 20.67,
  "rates": {
   "pts": 0.4939,
   "fg3m": 0.07486,
   "reb": 0.32409,
   "ast": 0.05934,
   "stl": 0.02191,
   "blk": 0.03834,
   "fgm": 0.17802,
   "fga": 0.36883,
   "ftm": 0.06299,
   "fta": 0.0849,
   "tov": 0.04839
  }
 },
 {
  "name": "Neemias Queta",
  "team": "BOS",
  "pos": "C",
  "gp": 76,
  "mpg": 25.34,
  "rates": {
   "pts": 0.40286,
   "fg3m": 0.00052,
   "reb": 0.33018,
   "ast": 0.06541,
   "stl": 0.03115,
   "blk": 0.05192,
   "fgm": 0.16924,
   "fga": 0.25906,
   "ftm": 0.06386,
   "fta": 0.09085,
   "tov": 0.03894
  }
 },
 {
  "name": "Khris Middleton",
  "team": "DAL",
  "pos": "SF",
  "gp": 63,
  "mpg": 22.84,
  "rates": {
   "pts": 0.44473,
   "fg3m": 0.04656,
   "reb": 0.16052,
   "ast": 0.1223,
   "stl": 0.02849,
   "blk": 0.00625,
   "fgm": 0.15774,
   "fga": 0.37524,
   "ftm": 0.08269,
   "fta": 0.0945,
   "tov": 0.07505
  }
 },
 {
  "name": "D'Angelo Russell",
  "team": "WAS",
  "pos": "PG/SG",
  "gp": 26,
  "mpg": 19.03,
  "rates": {
   "pts": 0.53355,
   "fg3m": 0.06669,
   "reb": 0.12328,
   "ast": 0.21019,
   "stl": 0.02425,
   "blk": 0.00404,
   "fgm": 0.18998,
   "fga": 0.46888,
   "ftm": 0.0869,
   "fta": 0.12126,
   "tov": 0.09903
  }
 },
 {
  "name": "Precious Achiuwa",
  "team": "SAC",
  "pos": "PF/C",
  "gp": 73,
  "mpg": 23.91,
  "rates": {
   "pts": 0.42174,
   "fg3m": 0.01547,
   "reb": 0.28192,
   "ast": 0.05787,
   "stl": 0.03725,
   "blk": 0.02865,
   "fgm": 0.18107,
   "fga": 0.34266,
   "ftm": 0.04412,
   "fta": 0.07965,
   "tov": 0.03725
  }
 },
 {
  "name": "Derrick Jones",
  "team": "LAC",
  "pos": "SF",
  "gp": 50,
  "mpg": 26.99,
  "rates": {
   "pts": 0.37347,
   "fg3m": 0.04076,
   "reb": 0.12819,
   "ast": 0.05113,
   "stl": 0.03335,
   "blk": 0.03705,
   "fgm": 0.14005,
   "fga": 0.28084,
   "ftm": 0.05261,
   "fta": 0.06891,
   "tov": 0.02964
  }
 },
 {
  "name": "Kevin Huerter",
  "team": "DET",
  "pos": "SG/SF",
  "gp": 69,
  "mpg": 22.45,
  "rates": {
   "pts": 0.44736,
   "fg3m": 0.06455,
   "reb": 0.15493,
   "ast": 0.11491,
   "stl": 0.04067,
   "blk": 0.0213,
   "fgm": 0.17365,
   "fga": 0.38474,
   "ftm": 0.0355,
   "fta": 0.04583,
   "tov": 0.04648
  }
 },
 {
  "name": "Isaiah Stewart",
  "team": "DET",
  "pos": "PF/C",
  "gp": 58,
  "mpg": 22.71,
  "rates": {
   "pts": 0.4411,
   "fg3m": 0.03037,
   "reb": 0.22017,
   "ast": 0.05011,
   "stl": 0.01215,
   "blk": 0.07061,
   "fgm": 0.16779,
   "fga": 0.3052,
   "ftm": 0.07516,
   "fta": 0.09946,
   "tov": 0.05087
  }
 },
 {
  "name": "Olivier-Maxence Prosper",
  "team": "MEM",
  "pos": "PF",
  "gp": 53,
  "mpg": 18.56,
  "rates": {
   "pts": 0.53884,
   "fg3m": 0.061,
   "reb": 0.19012,
   "ast": 0.05185,
   "stl": 0.04067,
   "blk": 0.01322,
   "fgm": 0.1952,
   "fga": 0.35584,
   "ftm": 0.08743,
   "fta": 0.1159,
   "tov": 0.04778
  }
 },
 {
  "name": "Toby Okani",
  "team": "MEM",
  "pos": "SF",
  "gp": 6,
  "mpg": 36.18,
  "rates": {
   "pts": 0.27639,
   "fg3m": 0.04146,
   "reb": 0.09674,
   "ast": 0.02764,
   "stl": 0.01843,
   "blk": 0.01382,
   "fgm": 0.11516,
   "fga": 0.32246,
   "ftm": 0.00461,
   "fta": 0.03685,
   "tov": 0.01382
  }
 },
 {
  "name": "Jordan Miller",
  "team": "LAC",
  "pos": "SF",
  "gp": 60,
  "mpg": 22.08,
  "rates": {
   "pts": 0.45139,
   "fg3m": 0.02868,
   "reb": 0.13738,
   "ast": 0.10266,
   "stl": 0.03397,
   "blk": 0.0083,
   "fgm": 0.16002,
   "fga": 0.30118,
   "ftm": 0.10266,
   "fta": 0.1321,
   "tov": 0.04755
  }
 },
 {
  "name": "Harrison Barnes",
  "team": "SAS",
  "pos": "PF",
  "gp": 77,
  "mpg": 25.8,
  "rates": {
   "pts": 0.38612,
   "fg3m": 0.06997,
   "reb": 0.10773,
   "ast": 0.07451,
   "stl": 0.02517,
   "blk": 0.00604,
   "fgm": 0.1324,
   "fga": 0.28997,
   "ftm": 0.05135,
   "fta": 0.06192,
   "tov": 0.03071
  }
 },
 {
  "name": "Tristan da Silva",
  "team": "ORL",
  "pos": "SF",
  "gp": 77,
  "mpg": 24.67,
  "rates": {
   "pts": 0.40116,
   "fg3m": 0.06318,
   "reb": 0.14951,
   "ast": 0.06528,
   "stl": 0.0358,
   "blk": 0.01316,
   "fgm": 0.14688,
   "fga": 0.3264,
   "ftm": 0.04422,
   "fta": 0.05001,
   "tov": 0.03633
  }
 },
 {
  "name": "Ausar Thompson",
  "team": "DET",
  "pos": "SF/PF",
  "gp": 73,
  "mpg": 25.97,
  "rates": {
   "pts": 0.38035,
   "fg3m": 0.00317,
   "reb": 0.22051,
   "ast": 0.12028,
   "stl": 0.07649,
   "blk": 0.0364,
   "fgm": 0.15984,
   "fga": 0.30439,
   "ftm": 0.0575,
   "fta": 0.10076,
   "tov": 0.05803
  }
 },
 {
  "name": "Royce O'Neale",
  "team": "PHO",
  "pos": "SF",
  "gp": 78,
  "mpg": 28.37,
  "rates": {
   "pts": 0.34567,
   "fg3m": 0.09579,
   "reb": 0.16809,
   "ast": 0.09399,
   "stl": 0.03796,
   "blk": 0.01446,
   "fgm": 0.11884,
   "fga": 0.28196,
   "ftm": 0.0122,
   "fta": 0.01717,
   "tov": 0.04654
  }
 },
 {
  "name": "Micah Potter",
  "team": "IND",
  "pos": "C",
  "gp": 47,
  "mpg": 19.33,
  "rates": {
   "pts": 0.50423,
   "fg3m": 0.07817,
   "reb": 0.25652,
   "ast": 0.07596,
   "stl": 0.02422,
   "blk": 0.01651,
   "fgm": 0.16624,
   "fga": 0.32257,
   "ftm": 0.09358,
   "fta": 0.11119,
   "tov": 0.05174
  }
 },
 {
  "name": "Zach Collins",
  "team": "CHI",
  "pos": "PF/C",
  "gp": 10,
  "mpg": 18.37,
  "rates": {
   "pts": 0.52794,
   "fg3m": 0.04898,
   "reb": 0.30479,
   "ast": 0.08164,
   "stl": 0.01089,
   "blk": 0.02177,
   "fgm": 0.20138,
   "fga": 0.34833,
   "ftm": 0.0762,
   "fta": 0.10885,
   "tov": 0.05443
  }
 },
 {
  "name": "Javon Small",
  "team": "MEM",
  "pos": "PG",
  "gp": 41,
  "mpg": 20.24,
  "rates": {
   "pts": 0.47715,
   "fg3m": 0.07229,
   "reb": 0.15423,
   "ast": 0.18194,
   "stl": 0.04097,
   "blk": 0.01084,
   "fgm": 0.16146,
   "fga": 0.34702,
   "ftm": 0.08193,
   "fta": 0.0988,
   "tov": 0.06748
  }
 },
 {
  "name": "Zaccharie Risacher",
  "team": "ATL",
  "pos": "SF",
  "gp": 67,
  "mpg": 22.44,
  "rates": {
   "pts": 0.4264,
   "fg3m": 0.0632,
   "reb": 0.17096,
   "ast": 0.05056,
   "stl": 0.03858,
   "blk": 0.02395,
   "fgm": 0.16231,
   "fga": 0.35656,
   "ftm": 0.03858,
   "fta": 0.05987,
   "tov": 0.03858
  }
 },
 {
  "name": "Jay Huff",
  "team": "IND",
  "pos": "C",
  "gp": 82,
  "mpg": 20.97,
  "rates": {
   "pts": 0.45541,
   "fg3m": 0.06921,
   "reb": 0.18845,
   "ast": 0.07038,
   "stl": 0.02385,
   "blk": 0.08957,
   "fgm": 0.16925,
   "fga": 0.35537,
   "ftm": 0.04769,
   "fta": 0.05758,
   "tov": 0.0442
  }
 },
 {
  "name": "Daniel Gafford",
  "team": "DAL",
  "pos": "C",
  "gp": 55,
  "mpg": 21.72,
  "rates": {
   "pts": 0.43868,
   "fg3m": 0.0,
   "reb": 0.31645,
   "ast": 0.04856,
   "stl": 0.03516,
   "blk": 0.05776,
   "fgm": 0.17329,
   "fga": 0.26455,
   "ftm": 0.09209,
   "fta": 0.13478,
   "tov": 0.05274
  }
 },
 {
  "name": "Aaron Wiggins",
  "team": "OKC",
  "pos": "SG",
  "gp": 65,
  "mpg": 21.75,
  "rates": {
   "pts": 0.43212,
   "fg3m": 0.06789,
   "reb": 0.14074,
   "ast": 0.07709,
   "stl": 0.04243,
   "blk": 0.0198,
   "fgm": 0.16337,
   "fga": 0.37908,
   "ftm": 0.03748,
   "fta": 0.05092,
   "tov": 0.05729
  }
 },
 {
  "name": "Svi Mykhailiuk",
  "team": "UTA",
  "pos": "SG",
  "gp": 50,
  "mpg": 23.11,
  "rates": {
   "pts": 0.40585,
   "fg3m": 0.0848,
   "reb": 0.10817,
   "ast": 0.08048,
   "stl": 0.0225,
   "blk": 0.0026,
   "fgm": 0.14971,
   "fga": 0.31326,
   "ftm": 0.02163,
   "fta": 0.02423,
   "tov": 0.03634
  }
 },
 {
  "name": "T.J. McConnell",
  "team": "IND",
  "pos": "PG",
  "gp": 56,
  "mpg": 17.19,
  "rates": {
   "pts": 0.54545,
   "fg3m": 0.01662,
   "reb": 0.12883,
   "ast": 0.29818,
   "stl": 0.05818,
   "blk": 0.01039,
   "fgm": 0.25142,
   "fga": 0.46752,
   "ftm": 0.02597,
   "fta": 0.03013,
   "tov": 0.06649
  }
 },
 {
  "name": "Davion Mitchell",
  "team": "MIA",
  "pos": "PG",
  "gp": 70,
  "mpg": 28.58,
  "rates": {
   "pts": 0.32695,
   "fg3m": 0.04499,
   "reb": 0.09299,
   "ast": 0.22696,
   "stl": 0.03399,
   "blk": 0.0055,
   "fgm": 0.13048,
   "fga": 0.26646,
   "ftm": 0.021,
   "fta": 0.03299,
   "tov": 0.05399
  }
 },
 {
  "name": "Marcus Smart",
  "team": "LAL",
  "pos": "PG/SG",
  "gp": 62,
  "mpg": 28.53,
  "rates": {
   "pts": 0.32731,
   "fg3m": 0.05483,
   "reb": 0.09723,
   "ast": 0.10515,
   "stl": 0.04918,
   "blk": 0.013,
   "fgm": 0.10628,
   "fga": 0.26908,
   "ftm": 0.05992,
   "fta": 0.07292,
   "tov": 0.05201
  }
 },
 {
  "name": "Daniss Jenkins",
  "team": "DET",
  "pos": "PG",
  "gp": 72,
  "mpg": 20.21,
  "rates": {
   "pts": 0.46107,
   "fg3m": 0.05016,
   "reb": 0.11407,
   "ast": 0.19103,
   "stl": 0.04398,
   "blk": 0.01031,
   "fgm": 0.15942,
   "fga": 0.3903,
   "ftm": 0.09208,
   "fta": 0.11063,
   "tov": 0.07902
  }
 },
 {
  "name": "Landry Shamet",
  "team": "NYK",
  "pos": "SG",
  "gp": 51,
  "mpg": 22.96,
  "rates": {
   "pts": 0.40561,
   "fg3m": 0.08795,
   "reb": 0.07856,
   "ast": 0.06148,
   "stl": 0.02647,
   "blk": 0.00769,
   "fgm": 0.13577,
   "fga": 0.31082,
   "ftm": 0.04611,
   "fta": 0.0649,
   "tov": 0.02562
  }
 },
 {
  "name": "Isaac Okoro",
  "team": "CHI",
  "pos": "SG/SF",
  "gp": 63,
  "mpg": 26.9,
  "rates": {
   "pts": 0.34457,
   "fg3m": 0.04307,
   "reb": 0.10207,
   "ast": 0.059,
   "stl": 0.02714,
   "blk": 0.01711,
   "fgm": 0.12449,
   "fga": 0.27082,
   "ftm": 0.05251,
   "fta": 0.06608,
   "tov": 0.02714
  }
 },
 {
  "name": "Sam Hauser",
  "team": "BOS",
  "pos": "SF",
  "gp": 78,
  "mpg": 24.8,
  "rates": {
   "pts": 0.37173,
   "fg3m": 0.10237,
   "reb": 0.1551,
   "ast": 0.05894,
   "stl": 0.01965,
   "blk": 0.01189,
   "fgm": 0.13029,
   "fga": 0.31073,
   "ftm": 0.00879,
   "fta": 0.01034,
   "tov": 0.0181
  }
 },
 {
  "name": "Taurean Prince",
  "team": "MIL",
  "pos": "SF",
  "gp": 26,
  "mpg": 23.51,
  "rates": {
   "pts": 0.39102,
   "fg3m": 0.0998,
   "reb": 0.13252,
   "ast": 0.07526,
   "stl": 0.02618,
   "blk": 0.00982,
   "fgm": 0.1407,
   "fga": 0.31249,
   "ftm": 0.00982,
   "fta": 0.00982,
   "tov": 0.05072
  }
 },
 {
  "name": "Cam Whitmore",
  "team": "WAS",
  "pos": "SF",
  "gp": 21,
  "mpg": 16.86,
  "rates": {
   "pts": 0.54515,
   "fg3m": 0.04519,
   "reb": 0.16383,
   "ast": 0.04237,
   "stl": 0.04237,
   "blk": 0.0226,
   "fgm": 0.21749,
   "fga": 0.47736,
   "ftm": 0.06497,
   "fta": 0.08756,
   "tov": 0.05084
  }
 },
 {
  "name": "Isaiah Hartenstein",
  "team": "OKC",
  "pos": "C",
  "gp": 47,
  "mpg": 24.2,
  "rates": {
   "pts": 0.3798,
   "fg3m": 0.0,
   "reb": 0.39035,
   "ast": 0.14594,
   "stl": 0.04132,
   "blk": 0.03165,
   "fgm": 0.16177,
   "fga": 0.26023,
   "ftm": 0.05627,
   "fta": 0.09231,
   "tov": 0.07209
  }
 },
 {
  "name": "Gui Santos",
  "team": "GSW",
  "pos": "SF",
  "gp": 68,
  "mpg": 20.52,
  "rates": {
   "pts": 0.44791,
   "fg3m": 0.0559,
   "reb": 0.19063,
   "ast": 0.11395,
   "stl": 0.04372,
   "blk": 0.01577,
   "fgm": 0.16483,
   "fga": 0.32966,
   "ftm": 0.06235,
   "fta": 0.086,
   "tov": 0.0731
  }
 },
 {
  "name": "Jaden Hardy",
  "team": "WAS",
  "pos": "SG",
  "gp": 57,
  "mpg": 15.76,
  "rates": {
   "pts": 0.58235,
   "fg3m": 0.1158,
   "reb": 0.09576,
   "ast": 0.06458,
   "stl": 0.01782,
   "blk": 0.00668,
   "fgm": 0.20265,
   "fga": 0.47768,
   "ftm": 0.06124,
   "fta": 0.08351,
   "tov": 0.06904
  }
 },
 {
  "name": "Corey Kispert",
  "team": "ATL",
  "pos": "SG/SF",
  "gp": 58,
  "mpg": 18.61,
  "rates": {
   "pts": 0.49278,
   "fg3m": 0.08059,
   "reb": 0.12227,
   "ast": 0.08522,
   "stl": 0.01482,
   "blk": 0.00834,
   "fgm": 0.17044,
   "fga": 0.36496,
   "ftm": 0.07132,
   "fta": 0.08985,
   "tov": 0.04168
  }
 },
 {
  "name": "Quenton Jackson",
  "team": "IND",
  "pos": "PG/SG",
  "gp": 49,
  "mpg": 18.31,
  "rates": {
   "pts": 0.49921,
   "fg3m": 0.0468,
   "reb": 0.12703,
   "ast": 0.156,
   "stl": 0.03454,
   "blk": 0.00669,
   "fgm": 0.1716,
   "fga": 0.36549,
   "ftm": 0.1092,
   "fta": 0.1326,
   "tov": 0.06909
  }
 },
 {
  "name": "Tristan Vukcevic",
  "team": "WAS",
  "pos": "PF/C",
  "gp": 49,
  "mpg": 13.69,
  "rates": {
   "pts": 0.65723,
   "fg3m": 0.07452,
   "reb": 0.21908,
   "ast": 0.08197,
   "stl": 0.03428,
   "blk": 0.04769,
   "fgm": 0.22653,
   "fga": 0.47243,
   "ftm": 0.12966,
   "fta": 0.16542,
   "tov": 0.0924
  }
 },
 {
  "name": "Devin Carter",
  "team": "SAC",
  "pos": "PG",
  "gp": 38,
  "mpg": 18.42,
  "rates": {
   "pts": 0.48438,
   "fg3m": 0.04287,
   "reb": 0.17861,
   "ast": 0.14431,
   "stl": 0.04858,
   "blk": 0.01286,
   "fgm": 0.17289,
   "fga": 0.41722,
   "ftm": 0.09573,
   "fta": 0.13431,
   "tov": 0.07716
  }
 },
 {
  "name": "Danny Wolf",
  "team": "BKN",
  "pos": "PF",
  "gp": 57,
  "mpg": 20.83,
  "rates": {
   "pts": 0.42791,
   "fg3m": 0.05728,
   "reb": 0.2367,
   "ast": 0.10698,
   "stl": 0.02527,
   "blk": 0.02695,
   "fgm": 0.14994,
   "fga": 0.37063,
   "ftm": 0.07076,
   "fta": 0.09182,
   "tov": 0.06149
  }
 },
 {
  "name": "Nolan Traore",
  "team": "BKN",
  "pos": "PG",
  "gp": 56,
  "mpg": 22.2,
  "rates": {
   "pts": 0.40132,
   "fg3m": 0.04906,
   "reb": 0.07962,
   "ast": 0.1713,
   "stl": 0.03619,
   "blk": 0.0185,
   "fgm": 0.14637,
   "fga": 0.38523,
   "ftm": 0.05951,
   "fta": 0.0756,
   "tov": 0.10375
  }
 },
 {
  "name": "Herb Jones",
  "team": "NOR",
  "pos": "SF/PF",
  "gp": 56,
  "mpg": 28.36,
  "rates": {
   "pts": 0.31226,
   "fg3m": 0.05036,
   "reb": 0.11962,
   "ast": 0.09758,
   "stl": 0.0554,
   "blk": 0.017,
   "fgm": 0.11521,
   "fga": 0.30093,
   "ftm": 0.03148,
   "fta": 0.03903,
   "tov": 0.04596
  }
 },
 {
  "name": "John Poulakidas",
  "team": "DAL",
  "pos": "SG",
  "gp": 13,
  "mpg": 19.49,
  "rates": {
   "pts": 0.45377,
   "fg3m": 0.12232,
   "reb": 0.11837,
   "ast": 0.0434,
   "stl": 0.02762,
   "blk": 0.01578,
   "fgm": 0.15389,
   "fga": 0.35907,
   "ftm": 0.02367,
   "fta": 0.02762,
   "tov": 0.01578
  }
 },
 {
  "name": "Cody Williams",
  "team": "UTA",
  "pos": "SG",
  "gp": 67,
  "mpg": 24.34,
  "rates": {
   "pts": 0.36061,
   "fg3m": 0.01717,
   "reb": 0.12143,
   "ast": 0.08402,
   "stl": 0.03128,
   "blk": 0.01595,
   "fgm": 0.14596,
   "fga": 0.31216,
   "ftm": 0.05152,
   "fta": 0.07298,
   "tov": 0.04477
  }
 },
 {
  "name": "Payton Sandfort",
  "team": "OKC",
  "pos": "SF",
  "gp": 4,
  "mpg": 15.83,
  "rates": {
   "pts": 0.55263,
   "fg3m": 0.11053,
   "reb": 0.15789,
   "ast": 0.0,
   "stl": 0.01579,
   "blk": 0.0,
   "fgm": 0.20526,
   "fga": 0.41053,
   "ftm": 0.03158,
   "fta": 0.06316,
   "tov": 0.01579
  }
 },
 {
  "name": "Jonas Valanciunas",
  "team": "DEN",
  "pos": "C",
  "gp": 65,
  "mpg": 13.4,
  "rates": {
   "pts": 0.65093,
   "fg3m": 0.00918,
   "reb": 0.3777,
   "ast": 0.08955,
   "stl": 0.01607,
   "blk": 0.04248,
   "fgm": 0.2606,
   "fga": 0.44773,
   "ftm": 0.12054,
   "fta": 0.15613,
   "tov": 0.08381
  }
 },
 {
  "name": "Day'Ron Sharpe",
  "team": "BKN",
  "pos": "C",
  "gp": 62,
  "mpg": 18.71,
  "rates": {
   "pts": 0.46553,
   "fg3m": 0.00776,
   "reb": 0.35604,
   "ast": 0.125,
   "stl": 0.0569,
   "blk": 0.02241,
   "fgm": 0.18449,
   "fga": 0.30691,
   "ftm": 0.0888,
   "fta": 0.13104,
   "tov": 0.09138
  }
 },
 {
  "name": "Jordan Goodwin",
  "team": "PHO",
  "pos": "PG/SG",
  "gp": 70,
  "mpg": 22.45,
  "rates": {
   "pts": 0.38746,
   "fg3m": 0.07126,
   "reb": 0.21695,
   "ast": 0.09607,
   "stl": 0.06744,
   "blk": 0.00891,
   "fgm": 0.1457,
   "fga": 0.35311,
   "ftm": 0.02481,
   "fta": 0.03563,
   "tov": 0.04326
  }
 },
 {
  "name": "Justin Champagnie",
  "team": "WAS",
  "pos": "SF",
  "gp": 69,
  "mpg": 19.96,
  "rates": {
   "pts": 0.43341,
   "fg3m": 0.03848,
   "reb": 0.27878,
   "ast": 0.06098,
   "stl": 0.04283,
   "blk": 0.03122,
   "fgm": 0.16843,
   "fga": 0.3354,
   "ftm": 0.05808,
   "fta": 0.07405,
   "tov": 0.03267
  }
 },
 {
  "name": "Jordan Clarkson",
  "team": "NYK",
  "pos": "SG/SF",
  "gp": 72,
  "mpg": 17.77,
  "rates": {
   "pts": 0.48614,
   "fg3m": 0.05471,
   "reb": 0.09926,
   "ast": 0.07503,
   "stl": 0.02345,
   "blk": 0.00703,
   "fgm": 0.18523,
   "fga": 0.41111,
   "ftm": 0.06096,
   "fta": 0.07347,
   "tov": 0.05002
  }
 },
 {
  "name": "Nique Clifford",
  "team": "SAC",
  "pos": "SG",
  "gp": 75,
  "mpg": 25.09,
  "rates": {
   "pts": 0.34273,
   "fg3m": 0.04092,
   "reb": 0.15038,
   "ast": 0.09511,
   "stl": 0.03613,
   "blk": 0.01275,
   "fgm": 0.13231,
   "fga": 0.31722,
   "ftm": 0.0372,
   "fta": 0.05154,
   "tov": 0.06164
  }
 },
 {
  "name": "Cason Wallace",
  "team": "OKC",
  "pos": "SG",
  "gp": 77,
  "mpg": 26.57,
  "rates": {
   "pts": 0.32258,
   "fg3m": 0.04936,
   "reb": 0.11632,
   "ast": 0.09775,
   "stl": 0.07331,
   "blk": 0.01369,
   "fgm": 0.12317,
   "fga": 0.28543,
   "ftm": 0.02688,
   "fta": 0.03324,
   "tov": 0.03568
  }
 },
 {
  "name": "Jaden Ivey",
  "team": "FA",
  "pos": "PG/SG",
  "gp": 37,
  "mpg": 18.11,
  "rates": {
   "pts": 0.47147,
   "fg3m": 0.0746,
   "reb": 0.13577,
   "ast": 0.10145,
   "stl": 0.03432,
   "blk": 0.02089,
   "fgm": 0.17009,
   "fga": 0.38195,
   "ftm": 0.0567,
   "fta": 0.07012,
   "tov": 0.06117
  }
 },
 {
  "name": "Simone Fontecchio",
  "team": "MIA",
  "pos": "SF",
  "gp": 70,
  "mpg": 16.75,
  "rates": {
   "pts": 0.50918,
   "fg3m": 0.10491,
   "reb": 0.17996,
   "ast": 0.08614,
   "stl": 0.03156,
   "blk": 0.00768,
   "fgm": 0.16546,
   "fga": 0.40171,
   "ftm": 0.07335,
   "fta": 0.08699,
   "tov": 0.04179
  }
 },
 {
  "name": "Bones Hyland",
  "team": "MIN",
  "pos": "PG",
  "gp": 71,
  "mpg": 16.58,
  "rates": {
   "pts": 0.51321,
   "fg3m": 0.09856,
   "reb": 0.10791,
   "ast": 0.15974,
   "stl": 0.03654,
   "blk": 0.01444,
   "fgm": 0.18013,
   "fga": 0.39765,
   "ftm": 0.05438,
   "fta": 0.06967,
   "tov": 0.05948
  }
 },
 {
  "name": "Collin Murray-Boyles",
  "team": "TOR",
  "pos": "PF",
  "gp": 57,
  "mpg": 21.85,
  "rates": {
   "pts": 0.38856,
   "fg3m": 0.01365,
   "reb": 0.2288,
   "ast": 0.0851,
   "stl": 0.04175,
   "blk": 0.04255,
   "fgm": 0.15896,
   "fga": 0.27456,
   "ftm": 0.057,
   "fta": 0.0867,
   "tov": 0.04737
  }
 },
 {
  "name": "Vit Krejci",
  "team": "POR",
  "pos": "PG",
  "gp": 65,
  "mpg": 21.42,
  "rates": {
   "pts": 0.39508,
   "fg3m": 0.09195,
   "reb": 0.10631,
   "ast": 0.07183,
   "stl": 0.03376,
   "blk": 0.01293,
   "fgm": 0.13792,
   "fga": 0.30816,
   "ftm": 0.0273,
   "fta": 0.03663,
   "tov": 0.02945
  }
 },
 {
  "name": "Brook Lopez",
  "team": "LAC",
  "pos": "C",
  "gp": 75,
  "mpg": 21.8,
  "rates": {
   "pts": 0.3877,
   "fg3m": 0.06971,
   "reb": 0.16633,
   "ast": 0.05932,
   "stl": 0.02752,
   "blk": 0.0532,
   "fgm": 0.14187,
   "fga": 0.33144,
   "ftm": 0.03424,
   "fta": 0.04525,
   "tov": 0.0373
  }
 },
 {
  "name": "Kentavious Caldwell-Pope",
  "team": "MEM",
  "pos": "SG/SF",
  "gp": 51,
  "mpg": 21.32,
  "rates": {
   "pts": 0.39354,
   "fg3m": 0.05057,
   "reb": 0.11494,
   "ast": 0.12781,
   "stl": 0.03954,
   "blk": 0.00736,
   "fgm": 0.13792,
   "fga": 0.33653,
   "ftm": 0.06712,
   "fta": 0.07356,
   "tov": 0.05609
  }
 },
 {
  "name": "Draymond Green",
  "team": "GSW",
  "pos": "PF/C",
  "gp": 68,
  "mpg": 27.48,
  "rates": {
   "pts": 0.30499,
   "fg3m": 0.05404,
   "reb": 0.20065,
   "ast": 0.20119,
   "stl": 0.03264,
   "blk": 0.02247,
   "fgm": 0.10969,
   "fga": 0.26272,
   "ftm": 0.03157,
   "fta": 0.04495,
   "tov": 0.09685
  }
 },
 {
  "name": "Luke Kennard",
  "team": "LAL",
  "pos": "SG",
  "gp": 78,
  "mpg": 21.55,
  "rates": {
   "pts": 0.38797,
   "fg3m": 0.06962,
   "reb": 0.10889,
   "ast": 0.10354,
   "stl": 0.03332,
   "blk": 0.00476,
   "fgm": 0.14043,
   "fga": 0.26361,
   "ftm": 0.03749,
   "fta": 0.04106,
   "tov": 0.0357
  }
 },
 {
  "name": "Luguentz Dort",
  "team": "OKC",
  "pos": "SG/SF",
  "gp": 69,
  "mpg": 26.79,
  "rates": {
   "pts": 0.31157,
   "fg3m": 0.06924,
   "reb": 0.13253,
   "ast": 0.04598,
   "stl": 0.03354,
   "blk": 0.0146,
   "fgm": 0.10927,
   "fga": 0.28344,
   "ftm": 0.0238,
   "fta": 0.03137,
   "tov": 0.02921
  }
 },
 {
  "name": "Josh Oduro",
  "team": "NOR",
  "pos": "C",
  "gp": 3,
  "mpg": 27.26,
  "rates": {
   "pts": 0.30575,
   "fg3m": 0.0,
   "reb": 0.28129,
   "ast": 0.04892,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.13453,
   "fga": 0.20791,
   "ftm": 0.03669,
   "fta": 0.07338,
   "tov": 0.02446
  }
 },
 {
  "name": "Kadary Richmond",
  "team": "FA",
  "pos": "SG",
  "gp": 3,
  "mpg": 22.27,
  "rates": {
   "pts": 0.37425,
   "fg3m": 0.02994,
   "reb": 0.1497,
   "ast": 0.11976,
   "stl": 0.11976,
   "blk": 0.01497,
   "fgm": 0.1497,
   "fga": 0.23952,
   "ftm": 0.04491,
   "fta": 0.04491,
   "tov": 0.02994
  }
 },
 {
  "name": "Jared McCain",
  "team": "OKC",
  "pos": "SG",
  "gp": 67,
  "mpg": 17.31,
  "rates": {
   "pts": 0.48117,
   "fg3m": 0.08537,
   "reb": 0.11814,
   "ast": 0.07761,
   "stl": 0.03018,
   "blk": 0.00431,
   "fgm": 0.17591,
   "fga": 0.41391,
   "ftm": 0.04398,
   "fta": 0.05088,
   "tov": 0.04829
  }
 },
 {
  "name": "Al Horford",
  "team": "GSW",
  "pos": "PF/C",
  "gp": 45,
  "mpg": 21.54,
  "rates": {
   "pts": 0.38383,
   "fg3m": 0.07635,
   "reb": 0.22597,
   "ast": 0.11969,
   "stl": 0.03095,
   "blk": 0.05262,
   "fgm": 0.14239,
   "fga": 0.33534,
   "ftm": 0.0227,
   "fta": 0.02683,
   "tov": 0.04334
  }
 },
 {
  "name": "Malachi Smith",
  "team": "BKN",
  "pos": "SG",
  "gp": 15,
  "mpg": 23.92,
  "rates": {
   "pts": 0.34558,
   "fg3m": 0.05574,
   "reb": 0.14213,
   "ast": 0.13656,
   "stl": 0.03344,
   "blk": 0.01115,
   "fgm": 0.13377,
   "fga": 0.27591,
   "ftm": 0.0223,
   "fta": 0.0223,
   "tov": 0.03902
  }
 },
 {
  "name": "L.J. Cryer",
  "team": "GSW",
  "pos": "PG",
  "gp": 18,
  "mpg": 16.23,
  "rates": {
   "pts": 0.50659,
   "fg3m": 0.12665,
   "reb": 0.09584,
   "ast": 0.06161,
   "stl": 0.01027,
   "blk": 0.0,
   "fgm": 0.16088,
   "fga": 0.40048,
   "ftm": 0.05819,
   "fta": 0.06504,
   "tov": 0.04792
  }
 },
 {
  "name": "Jake LaRavia",
  "team": "LAL",
  "pos": "PF",
  "gp": 82,
  "mpg": 25.14,
  "rates": {
   "pts": 0.32695,
   "fg3m": 0.03784,
   "reb": 0.15814,
   "ast": 0.07034,
   "stl": 0.05045,
   "blk": 0.01843,
   "fgm": 0.11642,
   "fga": 0.2537,
   "ftm": 0.05627,
   "fta": 0.07373,
   "tov": 0.0422
  }
 },
 {
  "name": "Ron Holland",
  "team": "DET",
  "pos": "SF",
  "gp": 78,
  "mpg": 19.88,
  "rates": {
   "pts": 0.41275,
   "fg3m": 0.03225,
   "reb": 0.20315,
   "ast": 0.06127,
   "stl": 0.05933,
   "blk": 0.01741,
   "fgm": 0.15156,
   "fga": 0.35084,
   "ftm": 0.07739,
   "fta": 0.09609,
   "tov": 0.06191
  }
 },
 {
  "name": "Chaney Johnson",
  "team": "BKN",
  "pos": "SF",
  "gp": 17,
  "mpg": 20.45,
  "rates": {
   "pts": 0.3999,
   "fg3m": 0.02589,
   "reb": 0.22728,
   "ast": 0.10357,
   "stl": 0.04316,
   "blk": 0.02589,
   "fgm": 0.14673,
   "fga": 0.27044,
   "ftm": 0.08056,
   "fta": 0.1007,
   "tov": 0.05754
  }
 },
 {
  "name": "Bradley Beal",
  "team": "LAC",
  "pos": "SG/SF",
  "gp": 6,
  "mpg": 20.15,
  "rates": {
   "pts": 0.40524,
   "fg3m": 0.05789,
   "reb": 0.04135,
   "ast": 0.0827,
   "stl": 0.02481,
   "blk": 0.0,
   "fgm": 0.14886,
   "fga": 0.39697,
   "ftm": 0.04962,
   "fta": 0.06616,
   "tov": 0.07443
  }
 },
 {
  "name": "Gary Trent",
  "team": "MIL",
  "pos": "SG",
  "gp": 65,
  "mpg": 21.19,
  "rates": {
   "pts": 0.38408,
   "fg3m": 0.08931,
   "reb": 0.04865,
   "ast": 0.05736,
   "stl": 0.02469,
   "blk": 0.00218,
   "fgm": 0.13287,
   "fga": 0.34343,
   "ftm": 0.02904,
   "fta": 0.03776,
   "tov": 0.02977
  }
 },
 {
  "name": "Bez Mbeng",
  "team": "UTA",
  "pos": "SG",
  "gp": 15,
  "mpg": 32.81,
  "rates": {
   "pts": 0.24788,
   "fg3m": 0.01219,
   "reb": 0.11581,
   "ast": 0.12597,
   "stl": 0.06908,
   "blk": 0.01219,
   "fgm": 0.10159,
   "fga": 0.20318,
   "ftm": 0.03251,
   "fta": 0.05079,
   "tov": 0.0447
  }
 },
 {
  "name": "Sharife Cooper",
  "team": "WAS",
  "pos": "PG",
  "gp": 41,
  "mpg": 17.07,
  "rates": {
   "pts": 0.47571,
   "fg3m": 0.04143,
   "reb": 0.12286,
   "ast": 0.17714,
   "stl": 0.02286,
   "blk": 0.00714,
   "fgm": 0.18143,
   "fga": 0.35286,
   "ftm": 0.07143,
   "fta": 0.08571,
   "tov": 0.08714
  }
 },
 {
  "name": "Bryce McGowens",
  "team": "NOR",
  "pos": "SG",
  "gp": 42,
  "mpg": 20.95,
  "rates": {
   "pts": 0.38639,
   "fg3m": 0.04319,
   "reb": 0.10001,
   "ast": 0.07046,
   "stl": 0.03068,
   "blk": 0.01023,
   "fgm": 0.12956,
   "fga": 0.26934,
   "ftm": 0.0841,
   "fta": 0.10796,
   "tov": 0.01932
  }
 },
 {
  "name": "Luka Garza",
  "team": "BOS",
  "pos": "C",
  "gp": 69,
  "mpg": 16.2,
  "rates": {
   "pts": 0.49823,
   "fg3m": 0.0492,
   "reb": 0.25135,
   "ast": 0.05904,
   "stl": 0.02415,
   "blk": 0.02505,
   "fgm": 0.18427,
   "fga": 0.31933,
   "ftm": 0.0805,
   "fta": 0.10466,
   "tov": 0.04115
  }
 },
 {
  "name": "Mouhamadou Gueye",
  "team": "CHI",
  "pos": "PF",
  "gp": 2,
  "mpg": 22.73,
  "rates": {
   "pts": 0.35204,
   "fg3m": 0.022,
   "reb": 0.13201,
   "ast": 0.13201,
   "stl": 0.044,
   "blk": 0.022,
   "fgm": 0.13201,
   "fga": 0.24202,
   "ftm": 0.06601,
   "fta": 0.08801,
   "tov": 0.06601
  }
 },
 {
  "name": "DeJon Jarreau",
  "team": "FA",
  "pos": "PG/SG",
  "gp": 11,
  "mpg": 20.98,
  "rates": {
   "pts": 0.38139,
   "fg3m": 0.01734,
   "reb": 0.22103,
   "ast": 0.15602,
   "stl": 0.04334,
   "blk": 0.03467,
   "fgm": 0.14302,
   "fga": 0.35972,
   "ftm": 0.07801,
   "fta": 0.09968,
   "tov": 0.11268
  }
 },
 {
  "name": "Tre Scott",
  "team": "BKN",
  "pos": "PF",
  "gp": 6,
  "mpg": 30.37,
  "rates": {
   "pts": 0.2634,
   "fg3m": 0.03292,
   "reb": 0.17011,
   "ast": 0.05487,
   "stl": 0.0439,
   "blk": 0.02744,
   "fgm": 0.10426,
   "fga": 0.27437,
   "ftm": 0.02195,
   "fta": 0.03292,
   "tov": 0.02195
  }
 },
 {
  "name": "Jeenathan Williams Jr",
  "team": "GSW",
  "pos": "SG",
  "gp": 14,
  "mpg": 17.08,
  "rates": {
   "pts": 0.46829,
   "fg3m": 0.05436,
   "reb": 0.12544,
   "ast": 0.05854,
   "stl": 0.02091,
   "blk": 0.0,
   "fgm": 0.17979,
   "fga": 0.36794,
   "ftm": 0.05436,
   "fta": 0.06272,
   "tov": 0.06272
  }
 },
 {
  "name": "David Roddy",
  "team": "DEN",
  "pos": "PF",
  "gp": 5,
  "mpg": 14.6,
  "rates": {
   "pts": 0.54782,
   "fg3m": 0.04109,
   "reb": 0.27391,
   "ast": 0.05478,
   "stl": 0.05478,
   "blk": 0.0137,
   "fgm": 0.20543,
   "fga": 0.41087,
   "ftm": 0.09587,
   "fta": 0.09587,
   "tov": 0.02739
  }
 },
 {
  "name": "Bruce Brown",
  "team": "DEN",
  "pos": "SG/SF",
  "gp": 82,
  "mpg": 24.36,
  "rates": {
   "pts": 0.32486,
   "fg3m": 0.02853,
   "reb": 0.15918,
   "ast": 0.0871,
   "stl": 0.04255,
   "blk": 0.01051,
   "fgm": 0.12414,
   "fga": 0.26129,
   "ftm": 0.04805,
   "fta": 0.06307,
   "tov": 0.04555
  }
 },
 {
  "name": "Moussa Diabate",
  "team": "CHA",
  "pos": "PF/C",
  "gp": 73,
  "mpg": 26.01,
  "rates": {
   "pts": 0.30279,
   "fg3m": 0.00053,
   "reb": 0.33438,
   "ast": 0.07425,
   "stl": 0.02949,
   "blk": 0.03791,
   "fgm": 0.12059,
   "fga": 0.19115,
   "ftm": 0.06108,
   "fta": 0.09268,
   "tov": 0.03844
  }
 },
 {
  "name": "Tyson Etienne",
  "team": "BKN",
  "pos": "PG",
  "gp": 24,
  "mpg": 15.83,
  "rates": {
   "pts": 0.49735,
   "fg3m": 0.11315,
   "reb": 0.07105,
   "ast": 0.10526,
   "stl": 0.02895,
   "blk": 0.0,
   "fgm": 0.15262,
   "fga": 0.38156,
   "ftm": 0.07894,
   "fta": 0.09473,
   "tov": 0.0421
  }
 },
 {
  "name": "Leonard Miller",
  "team": "CHI",
  "pos": "SF",
  "gp": 46,
  "mpg": 15.62,
  "rates": {
   "pts": 0.50231,
   "fg3m": 0.04453,
   "reb": 0.25185,
   "ast": 0.05566,
   "stl": 0.02365,
   "blk": 0.02087,
   "fgm": 0.20176,
   "fga": 0.36456,
   "ftm": 0.05427,
   "fta": 0.07375,
   "tov": 0.05009
  }
 },
 {
  "name": "Oscar Tshiebwe",
  "team": "UTA",
  "pos": "C",
  "gp": 27,
  "mpg": 16.61,
  "rates": {
   "pts": 0.47054,
   "fg3m": 0.0,
   "reb": 0.39918,
   "ast": 0.07136,
   "stl": 0.03568,
   "blk": 0.01115,
   "fgm": 0.20517,
   "fga": 0.32336,
   "ftm": 0.06021,
   "fta": 0.10927,
   "tov": 0.04683
  }
 },
 {
  "name": "Walter Clayton",
  "team": "MEM",
  "pos": "PG/SG",
  "gp": 69,
  "mpg": 20.44,
  "rates": {
   "pts": 0.38142,
   "fg3m": 0.05317,
   "reb": 0.09854,
   "ast": 0.1978,
   "stl": 0.03119,
   "blk": 0.01347,
   "fgm": 0.12548,
   "fga": 0.32683,
   "ftm": 0.07728,
   "fta": 0.08578,
   "tov": 0.08224
  }
 },
 {
  "name": "Paul Reed",
  "team": "DET",
  "pos": "PF/C",
  "gp": 65,
  "mpg": 13.86,
  "rates": {
   "pts": 0.55962,
   "fg3m": 0.01443,
   "reb": 0.32644,
   "ast": 0.08883,
   "stl": 0.06329,
   "blk": 0.06662,
   "fgm": 0.23206,
   "fga": 0.37641,
   "ftm": 0.08106,
   "fta": 0.12214,
   "tov": 0.0644
  }
 },
 {
  "name": "Dominick Barlow",
  "team": "PHI",
  "pos": "PF/C",
  "gp": 71,
  "mpg": 23.78,
  "rates": {
   "pts": 0.32277,
   "fg3m": 0.01244,
   "reb": 0.20136,
   "ast": 0.05152,
   "stl": 0.03731,
   "blk": 0.03139,
   "fgm": 0.12733,
   "fga": 0.2363,
   "ftm": 0.05567,
   "fta": 0.07758,
   "tov": 0.03316
  }
 },
 {
  "name": "Quinten Post",
  "team": "GSW",
  "pos": "C",
  "gp": 67,
  "mpg": 17.3,
  "rates": {
   "pts": 0.44253,
   "fg3m": 0.08022,
   "reb": 0.23205,
   "ast": 0.08109,
   "stl": 0.02243,
   "blk": 0.03019,
   "fgm": 0.16649,
   "fga": 0.37869,
   "ftm": 0.02933,
   "fta": 0.03709,
   "tov": 0.04831
  }
 },
 {
  "name": "Buddy Hield",
  "team": "ATL",
  "pos": "SG/SF",
  "gp": 51,
  "mpg": 16.07,
  "rates": {
   "pts": 0.47583,
   "fg3m": 0.09029,
   "reb": 0.14153,
   "ast": 0.08663,
   "stl": 0.04758,
   "blk": 0.01098,
   "fgm": 0.17447,
   "fga": 0.39897,
   "ftm": 0.0366,
   "fta": 0.04514,
   "tov": 0.05856
  }
 },
 {
  "name": "Ousmane Dieng",
  "team": "MIL",
  "pos": "SF",
  "gp": 57,
  "mpg": 19.29,
  "rates": {
   "pts": 0.392,
   "fg3m": 0.0573,
   "reb": 0.16371,
   "ast": 0.12369,
   "stl": 0.02274,
   "blk": 0.01546,
   "fgm": 0.1528,
   "fga": 0.36199,
   "ftm": 0.0291,
   "fta": 0.04093,
   "tov": 0.06821
  }
 },
 {
  "name": "Ryan Kalkbrenner",
  "team": "CHA",
  "pos": "C",
  "gp": 69,
  "mpg": 21.44,
  "rates": {
   "pts": 0.35223,
   "fg3m": 0.0,
   "reb": 0.25487,
   "ast": 0.03651,
   "stl": 0.02163,
   "blk": 0.06828,
   "fgm": 0.14806,
   "fga": 0.19673,
   "ftm": 0.05611,
   "fta": 0.07842,
   "tov": 0.04192
  }
 },
 {
  "name": "Ben Saraf",
  "team": "BKN",
  "pos": "SG",
  "gp": 44,
  "mpg": 20.83,
  "rates": {
   "pts": 0.36232,
   "fg3m": 0.02074,
   "reb": 0.1004,
   "ast": 0.15824,
   "stl": 0.04147,
   "blk": 0.00873,
   "fgm": 0.13096,
   "fga": 0.33067,
   "ftm": 0.07967,
   "fta": 0.09604,
   "tov": 0.10804
  }
 },
 {
  "name": "Ja'Kobe Walter",
  "team": "TOR",
  "pos": "SG",
  "gp": 72,
  "mpg": 20.47,
  "rates": {
   "pts": 0.36714,
   "fg3m": 0.07465,
   "reb": 0.12487,
   "ast": 0.05836,
   "stl": 0.04954,
   "blk": 0.0095,
   "fgm": 0.12215,
   "fga": 0.27416,
   "ftm": 0.04818,
   "fta": 0.06108,
   "tov": 0.02511
  }
 },
 {
  "name": "Vince Williams Jr.",
  "team": "FA",
  "pos": "PG/SG",
  "gp": 40,
  "mpg": 20.49,
  "rates": {
   "pts": 0.36611,
   "fg3m": 0.06712,
   "reb": 0.18916,
   "ast": 0.2038,
   "stl": 0.03539,
   "blk": 0.01953,
   "fgm": 0.1257,
   "fga": 0.35634,
   "ftm": 0.04759,
   "fta": 0.06102,
   "tov": 0.08542
  }
 },
 {
  "name": "Jaxson Hayes",
  "team": "LAL",
  "pos": "C",
  "gp": 66,
  "mpg": 18.28,
  "rates": {
   "pts": 0.41023,
   "fg3m": 0.00249,
   "reb": 0.22459,
   "ast": 0.0489,
   "stl": 0.02403,
   "blk": 0.0431,
   "fgm": 0.16326,
   "fga": 0.2163,
   "ftm": 0.08122,
   "fta": 0.12431,
   "tov": 0.02569
  }
 },
 {
  "name": "Gary Payton II",
  "team": "GSW",
  "pos": "SG",
  "gp": 73,
  "mpg": 15.65,
  "rates": {
   "pts": 0.47887,
   "fg3m": 0.03239,
   "reb": 0.23199,
   "ast": 0.10768,
   "stl": 0.05866,
   "blk": 0.01838,
   "fgm": 0.21186,
   "fga": 0.36331,
   "ftm": 0.02276,
   "fta": 0.03502,
   "tov": 0.05428
  }
 },
 {
  "name": "Bogdan Bogdanovic",
  "team": "LAC",
  "pos": "SG/SF",
  "gp": 23,
  "mpg": 19.65,
  "rates": {
   "pts": 0.37829,
   "fg3m": 0.073,
   "reb": 0.13052,
   "ast": 0.11282,
   "stl": 0.02212,
   "blk": 0.00664,
   "fgm": 0.13052,
   "fga": 0.33626,
   "ftm": 0.04424,
   "fta": 0.05531,
   "tov": 0.05973
  }
 },
 {
  "name": "Josh Minott",
  "team": "BKN",
  "pos": "SF",
  "gp": 49,
  "mpg": 17.02,
  "rates": {
   "pts": 0.43656,
   "fg3m": 0.07676,
   "reb": 0.1895,
   "ast": 0.05517,
   "stl": 0.05277,
   "blk": 0.02878,
   "fgm": 0.15112,
   "fga": 0.30224,
   "ftm": 0.05757,
   "fta": 0.07316,
   "tov": 0.05157
  }
 },
 {
  "name": "Taylor Hendricks",
  "team": "MEM",
  "pos": "PF",
  "gp": 59,
  "mpg": 18.96,
  "rates": {
   "pts": 0.3916,
   "fg3m": 0.05633,
   "reb": 0.19759,
   "ast": 0.04917,
   "stl": 0.0447,
   "blk": 0.02682,
   "fgm": 0.14573,
   "fga": 0.31739,
   "ftm": 0.04381,
   "fta": 0.06437,
   "tov": 0.0447
  }
 },
 {
  "name": "Cam Payne",
  "team": "FA",
  "pos": "PG/SG",
  "gp": 22,
  "mpg": 17.02,
  "rates": {
   "pts": 0.43544,
   "fg3m": 0.08549,
   "reb": 0.11754,
   "ast": 0.15494,
   "stl": 0.06411,
   "blk": 0.0187,
   "fgm": 0.1496,
   "fga": 0.39804,
   "ftm": 0.05076,
   "fta": 0.05877,
   "tov": 0.02939
  }
 },
 {
  "name": "Jose Alvarado",
  "team": "NYK",
  "pos": "PG",
  "gp": 69,
  "mpg": 19.86,
  "rates": {
   "pts": 0.37221,
   "fg3m": 0.07371,
   "reb": 0.1248,
   "ast": 0.17078,
   "stl": 0.04817,
   "blk": 0.00584,
   "fgm": 0.13648,
   "fga": 0.32769,
   "ftm": 0.02554,
   "fta": 0.03357,
   "tov": 0.0562
  }
 },
 {
  "name": "Caris LeVert",
  "team": "DET",
  "pos": "SG/SF",
  "gp": 60,
  "mpg": 19.24,
  "rates": {
   "pts": 0.38374,
   "fg3m": 0.05197,
   "reb": 0.10135,
   "ast": 0.13773,
   "stl": 0.04418,
   "blk": 0.03552,
   "fgm": 0.14119,
   "fga": 0.33869,
   "ftm": 0.04937,
   "fta": 0.07276,
   "tov": 0.07103
  }
 },
 {
  "name": "Jamir Watkins",
  "team": "WAS",
  "pos": "SG/SF",
  "gp": 50,
  "mpg": 20.64,
  "rates": {
   "pts": 0.35652,
   "fg3m": 0.04553,
   "reb": 0.18795,
   "ast": 0.06491,
   "stl": 0.05232,
   "blk": 0.02422,
   "fgm": 0.12788,
   "fga": 0.28677,
   "ftm": 0.05522,
   "fta": 0.07944,
   "tov": 0.03875
  }
 },
 {
  "name": "Nikola Jovic",
  "team": "MIA",
  "pos": "PF",
  "gp": 47,
  "mpg": 17.19,
  "rates": {
   "pts": 0.42573,
   "fg3m": 0.05569,
   "reb": 0.18935,
   "ast": 0.12624,
   "stl": 0.03218,
   "blk": 0.02104,
   "fgm": 0.14232,
   "fga": 0.38861,
   "ftm": 0.08539,
   "fta": 0.125,
   "tov": 0.08044
  }
 },
 {
  "name": "Jalen Slawson",
  "team": "IND",
  "pos": "SF",
  "gp": 13,
  "mpg": 23.89,
  "rates": {
   "pts": 0.30593,
   "fg3m": 0.0483,
   "reb": 0.18356,
   "ast": 0.11593,
   "stl": 0.06441,
   "blk": 0.04508,
   "fgm": 0.10949,
   "fga": 0.24796,
   "ftm": 0.03864,
   "fta": 0.05474,
   "tov": 0.05474
  }
 },
 {
  "name": "Kobe Sanders",
  "team": "LAC",
  "pos": "SG/SF",
  "gp": 68,
  "mpg": 19.87,
  "rates": {
   "pts": 0.36629,
   "fg3m": 0.0592,
   "reb": 0.11322,
   "ast": 0.08066,
   "stl": 0.03626,
   "blk": 0.0074,
   "fgm": 0.13246,
   "fga": 0.28415,
   "ftm": 0.04218,
   "fta": 0.05106,
   "tov": 0.05994
  }
 },
 {
  "name": "Kris Dunn",
  "team": "LAC",
  "pos": "PG",
  "gp": 82,
  "mpg": 27.2,
  "rates": {
   "pts": 0.26726,
   "fg3m": 0.03587,
   "reb": 0.12152,
   "ast": 0.13228,
   "stl": 0.05874,
   "blk": 0.00628,
   "fgm": 0.10179,
   "fga": 0.2139,
   "ftm": 0.0278,
   "fta": 0.03632,
   "tov": 0.04977
  }
 },
 {
  "name": "Julian Strawther",
  "team": "DEN",
  "pos": "SF",
  "gp": 57,
  "mpg": 15.1,
  "rates": {
   "pts": 0.47986,
   "fg3m": 0.06739,
   "reb": 0.13246,
   "ast": 0.07088,
   "stl": 0.02905,
   "blk": 0.00697,
   "fgm": 0.17312,
   "fga": 0.37064,
   "ftm": 0.06623,
   "fta": 0.08133,
   "tov": 0.04183
  }
 },
 {
  "name": "Terance Mann",
  "team": "BKN",
  "pos": "SG/SF",
  "gp": 63,
  "mpg": 24.27,
  "rates": {
   "pts": 0.29757,
   "fg3m": 0.03662,
   "reb": 0.1308,
   "ast": 0.12426,
   "stl": 0.02681,
   "blk": 0.00981,
   "fgm": 0.10987,
   "fga": 0.24002,
   "ftm": 0.0412,
   "fta": 0.05232,
   "tov": 0.04643
  }
 },
 {
  "name": "Jaylin Williams",
  "team": "OKC",
  "pos": "C",
  "gp": 65,
  "mpg": 19.65,
  "rates": {
   "pts": 0.36715,
   "fg3m": 0.07672,
   "reb": 0.28025,
   "ast": 0.12369,
   "stl": 0.02427,
   "blk": 0.03288,
   "fgm": 0.11664,
   "fga": 0.27556,
   "ftm": 0.05715,
   "fta": 0.07202,
   "tov": 0.05245
  }
 },
 {
  "name": "Pat Spencer",
  "team": "GSW",
  "pos": "PG",
  "gp": 66,
  "mpg": 18.62,
  "rates": {
   "pts": 0.38723,
   "fg3m": 0.04881,
   "reb": 0.12853,
   "ast": 0.18873,
   "stl": 0.03823,
   "blk": 0.00407,
   "fgm": 0.15131,
   "fga": 0.35469,
   "ftm": 0.03579,
   "fta": 0.04637,
   "tov": 0.06915
  }
 },
 {
  "name": "Seth Curry",
  "team": "GSW",
  "pos": "PG/SG",
  "gp": 10,
  "mpg": 13.3,
  "rates": {
   "pts": 0.53383,
   "fg3m": 0.09023,
   "reb": 0.09023,
   "ast": 0.07519,
   "stl": 0.02256,
   "blk": 0.0,
   "fgm": 0.18045,
   "fga": 0.36842,
   "ftm": 0.08271,
   "fta": 0.09023,
   "tov": 0.01504
  }
 },
 {
  "name": "Leaky Black",
  "team": "WAS",
  "pos": "SF",
  "gp": 15,
  "mpg": 28.87,
  "rates": {
   "pts": 0.24476,
   "fg3m": 0.04387,
   "reb": 0.17318,
   "ast": 0.0508,
   "stl": 0.04156,
   "blk": 0.01847,
   "fgm": 0.09236,
   "fga": 0.23783,
   "ftm": 0.01616,
   "fta": 0.01847,
   "tov": 0.03233
  }
 },
 {
  "name": "Ben Sheppard",
  "team": "IND",
  "pos": "SG",
  "gp": 65,
  "mpg": 21.39,
  "rates": {
   "pts": 0.3301,
   "fg3m": 0.06041,
   "reb": 0.14024,
   "ast": 0.08199,
   "stl": 0.02805,
   "blk": 0.00432,
   "fgm": 0.12082,
   "fga": 0.27832,
   "ftm": 0.02805,
   "fta": 0.03668,
   "tov": 0.02949
  }
 },
 {
  "name": "Patrick Williams",
  "team": "CHI",
  "pos": "PF",
  "gp": 72,
  "mpg": 20.47,
  "rates": {
   "pts": 0.34265,
   "fg3m": 0.06446,
   "reb": 0.14588,
   "ast": 0.07192,
   "stl": 0.03325,
   "blk": 0.01764,
   "fgm": 0.12078,
   "fga": 0.32433,
   "ftm": 0.03664,
   "fta": 0.05089,
   "tov": 0.05089
  }
 },
 {
  "name": "Grant Williams",
  "team": "CHA",
  "pos": "PF",
  "gp": 36,
  "mpg": 19.76,
  "rates": {
   "pts": 0.35421,
   "fg3m": 0.07309,
   "reb": 0.19959,
   "ast": 0.07871,
   "stl": 0.02389,
   "blk": 0.0253,
   "fgm": 0.10964,
   "fga": 0.25722,
   "ftm": 0.06185,
   "fta": 0.0759,
   "tov": 0.04357
  }
 },
 {
  "name": "Lawson Lovering",
  "team": "FA",
  "pos": "C",
  "gp": 2,
  "mpg": 24.63,
  "rates": {
   "pts": 0.28417,
   "fg3m": 0.0,
   "reb": 0.30447,
   "ast": 0.06089,
   "stl": 0.06089,
   "blk": 0.0203,
   "fgm": 0.12179,
   "fga": 0.20298,
   "ftm": 0.0406,
   "fta": 0.10149,
   "tov": 0.0406
  }
 },
 {
  "name": "Ethan Thompson",
  "team": "IND",
  "pos": "PG/SG",
  "gp": 32,
  "mpg": 20.41,
  "rates": {
   "pts": 0.34137,
   "fg3m": 0.05817,
   "reb": 0.10563,
   "ast": 0.08726,
   "stl": 0.03062,
   "blk": 0.01378,
   "fgm": 0.11328,
   "fga": 0.30004,
   "ftm": 0.05664,
   "fta": 0.07195,
   "tov": 0.03827
  }
 },
 {
  "name": "Javonte Green",
  "team": "DET",
  "pos": "SF",
  "gp": 82,
  "mpg": 17.63,
  "rates": {
   "pts": 0.39349,
   "fg3m": 0.06501,
   "reb": 0.15906,
   "ast": 0.03873,
   "stl": 0.07054,
   "blk": 0.01729,
   "fgm": 0.12794,
   "fga": 0.2863,
   "ftm": 0.07261,
   "fta": 0.08644,
   "tov": 0.03112
  }
 },
 {
  "name": "Moritz Wagner",
  "team": "ORL",
  "pos": "C",
  "gp": 36,
  "mpg": 11.85,
  "rates": {
   "pts": 0.579,
   "fg3m": 0.05157,
   "reb": 0.26957,
   "ast": 0.06329,
   "stl": 0.03516,
   "blk": 0.00469,
   "fgm": 0.19456,
   "fga": 0.4571,
   "ftm": 0.1383,
   "fta": 0.16878,
   "tov": 0.04454
  }
 },
 {
  "name": "EJ Harkless",
  "team": "UTA",
  "pos": "SG",
  "gp": 26,
  "mpg": 20.95,
  "rates": {
   "pts": 0.32673,
   "fg3m": 0.03855,
   "reb": 0.09728,
   "ast": 0.13767,
   "stl": 0.0569,
   "blk": 0.01101,
   "fgm": 0.09912,
   "fga": 0.29552,
   "ftm": 0.08994,
   "fta": 0.11747,
   "tov": 0.04772
  }
 },
 {
  "name": "MarJon Beauchamp",
  "team": "PHI",
  "pos": "SG",
  "gp": 14,
  "mpg": 14.01,
  "rates": {
   "pts": 0.48441,
   "fg3m": 0.08158,
   "reb": 0.16317,
   "ast": 0.07649,
   "stl": 0.04589,
   "blk": 0.0204,
   "fgm": 0.16827,
   "fga": 0.38752,
   "ftm": 0.06629,
   "fta": 0.09688,
   "tov": 0.06629
  }
 },
 {
  "name": "Robert Williams",
  "team": "POR",
  "pos": "C",
  "gp": 59,
  "mpg": 17.09,
  "rates": {
   "pts": 0.39375,
   "fg3m": 0.00893,
   "reb": 0.4116,
   "ast": 0.05951,
   "stl": 0.03471,
   "blk": 0.08629,
   "fgm": 0.17555,
   "fga": 0.24795,
   "ftm": 0.03372,
   "fta": 0.05653,
   "tov": 0.0486
  }
 },
 {
  "name": "Isaiah Jackson",
  "team": "LAC",
  "pos": "PF/C",
  "gp": 55,
  "mpg": 16.52,
  "rates": {
   "pts": 0.40733,
   "fg3m": 0.0,
   "reb": 0.31926,
   "ast": 0.05725,
   "stl": 0.03963,
   "blk": 0.05394,
   "fgm": 0.16624,
   "fga": 0.26091,
   "ftm": 0.07486,
   "fta": 0.11559,
   "tov": 0.06385
  }
 },
 {
  "name": "Kevin Love",
  "team": "UTA",
  "pos": "PF/C",
  "gp": 37,
  "mpg": 16.56,
  "rates": {
   "pts": 0.40468,
   "fg3m": 0.08648,
   "reb": 0.35083,
   "ast": 0.10933,
   "stl": 0.02284,
   "blk": 0.01469,
   "fgm": 0.12891,
   "fga": 0.32472,
   "ftm": 0.06038,
   "fta": 0.0718,
   "tov": 0.04895
  }
 },
 {
  "name": "Cole Anthony",
  "team": "FA",
  "pos": "PG",
  "gp": 35,
  "mpg": 15.04,
  "rates": {
   "pts": 0.44443,
   "fg3m": 0.04178,
   "reb": 0.16524,
   "ast": 0.22981,
   "stl": 0.03799,
   "blk": 0.02089,
   "fgm": 0.18613,
   "fga": 0.43873,
   "ftm": 0.03039,
   "fta": 0.04938,
   "tov": 0.12345
  }
 },
 {
  "name": "Keon Ellis",
  "team": "CLE",
  "pos": "SG",
  "gp": 72,
  "mpg": 20.54,
  "rates": {
   "pts": 0.32462,
   "fg3m": 0.06154,
   "reb": 0.0913,
   "ast": 0.04869,
   "stl": 0.05613,
   "blk": 0.03043,
   "fgm": 0.11429,
   "fga": 0.2597,
   "ftm": 0.03449,
   "fta": 0.04734,
   "tov": 0.02773
  }
 },
 {
  "name": "Jamal Shead",
  "team": "TOR",
  "pos": "PG",
  "gp": 82,
  "mpg": 22.59,
  "rates": {
   "pts": 0.29423,
   "fg3m": 0.04535,
   "reb": 0.07774,
   "ast": 0.2397,
   "stl": 0.04103,
   "blk": 0.0081,
   "fgm": 0.09988,
   "fga": 0.2721,
   "ftm": 0.04913,
   "fta": 0.06263,
   "tov": 0.06047
  }
 },
 {
  "name": "Ryan Nembhard",
  "team": "DAL",
  "pos": "PG",
  "gp": 60,
  "mpg": 19.51,
  "rates": {
   "pts": 0.33906,
   "fg3m": 0.04099,
   "reb": 0.11359,
   "ast": 0.26988,
   "stl": 0.02135,
   "blk": 0.00171,
   "fgm": 0.13836,
   "fga": 0.33308,
   "ftm": 0.02135,
   "fta": 0.02648,
   "tov": 0.07259
  }
 },
 {
  "name": "Trendon Watford",
  "team": "PHI",
  "pos": "PF",
  "gp": 53,
  "mpg": 16.3,
  "rates": {
   "pts": 0.40061,
   "fg3m": 0.01158,
   "reb": 0.20262,
   "ast": 0.15283,
   "stl": 0.01853,
   "blk": 0.02547,
   "fgm": 0.15978,
   "fga": 0.3103,
   "ftm": 0.06947,
   "fta": 0.08915,
   "tov": 0.0741
  }
 },
 {
  "name": "Luke Kornet",
  "team": "SAS",
  "pos": "C",
  "gp": 68,
  "mpg": 21.03,
  "rates": {
   "pts": 0.31047,
   "fg3m": 0.0,
   "reb": 0.28949,
   "ast": 0.08811,
   "stl": 0.02238,
   "blk": 0.04545,
   "fgm": 0.12237,
   "fga": 0.1902,
   "ftm": 0.06573,
   "fta": 0.07972,
   "tov": 0.01958
  }
 },
 {
  "name": "Kenrich Williams",
  "team": "OKC",
  "pos": "SF",
  "gp": 56,
  "mpg": 15.27,
  "rates": {
   "pts": 0.42446,
   "fg3m": 0.05847,
   "reb": 0.21866,
   "ast": 0.09238,
   "stl": 0.03625,
   "blk": 0.00585,
   "fgm": 0.1637,
   "fga": 0.34612,
   "ftm": 0.03859,
   "fta": 0.0608,
   "tov": 0.05028
  }
 },
 {
  "name": "Drake Powell",
  "team": "BKN",
  "pos": "SG",
  "gp": 63,
  "mpg": 20.94,
  "rates": {
   "pts": 0.30921,
   "fg3m": 0.03865,
   "reb": 0.08412,
   "ast": 0.06897,
   "stl": 0.02728,
   "blk": 0.00985,
   "fgm": 0.10913,
   "fga": 0.27131,
   "ftm": 0.05229,
   "fta": 0.05836,
   "tov": 0.04547
  }
 },
 {
  "name": "Oso Ighodaro",
  "team": "PHO",
  "pos": "PF",
  "gp": 82,
  "mpg": 22.05,
  "rates": {
   "pts": 0.29363,
   "fg3m": 0.0,
   "reb": 0.23114,
   "ast": 0.1023,
   "stl": 0.04037,
   "blk": 0.03152,
   "fgm": 0.13216,
   "fga": 0.20239,
   "ftm": 0.02931,
   "fta": 0.0647,
   "tov": 0.05585
  }
 },
 {
  "name": "Andre Drummond",
  "team": "PHI",
  "pos": "C",
  "gp": 63,
  "mpg": 19.54,
  "rates": {
   "pts": 0.32745,
   "fg3m": 0.026,
   "reb": 0.43226,
   "ast": 0.06581,
   "stl": 0.03088,
   "blk": 0.03981,
   "fgm": 0.12919,
   "fga": 0.27382,
   "ftm": 0.04306,
   "fta": 0.06825,
   "tov": 0.04956
  }
 },
 {
  "name": "Jevon Carter",
  "team": "ORL",
  "pos": "PG",
  "gp": 53,
  "mpg": 16.37,
  "rates": {
   "pts": 0.39082,
   "fg3m": 0.08992,
   "reb": 0.1026,
   "ast": 0.1003,
   "stl": 0.04611,
   "blk": 0.01153,
   "fgm": 0.1418,
   "fga": 0.35392,
   "ftm": 0.01729,
   "fta": 0.0219,
   "tov": 0.0415
  }
 },
 {
  "name": "Will Richard",
  "team": "GSW",
  "pos": "SG/PF",
  "gp": 69,
  "mpg": 19.95,
  "rates": {
   "pts": 0.3203,
   "fg3m": 0.05157,
   "reb": 0.12492,
   "ast": 0.06755,
   "stl": 0.0581,
   "blk": 0.00654,
   "fgm": 0.11766,
   "fga": 0.2513,
   "ftm": 0.03341,
   "fta": 0.03922,
   "tov": 0.03849
  }
 },
 {
  "name": "Jalen Wilson",
  "team": "BKN",
  "pos": "PF",
  "gp": 54,
  "mpg": 15.91,
  "rates": {
   "pts": 0.39919,
   "fg3m": 0.06285,
   "reb": 0.13268,
   "ast": 0.05819,
   "stl": 0.0256,
   "blk": 0.00233,
   "fgm": 0.12802,
   "fga": 0.32354,
   "ftm": 0.0803,
   "fta": 0.11173,
   "tov": 0.04423
  }
 },
 {
  "name": "Tyrese Martin",
  "team": "PHI",
  "pos": "SF",
  "gp": 46,
  "mpg": 16.88,
  "rates": {
   "pts": 0.37341,
   "fg3m": 0.06824,
   "reb": 0.14937,
   "ast": 0.10044,
   "stl": 0.03219,
   "blk": 0.00773,
   "fgm": 0.14035,
   "fga": 0.35539,
   "ftm": 0.02447,
   "fta": 0.03605,
   "tov": 0.05151
  }
 },
 {
  "name": "Rob Dillingham",
  "team": "CHI",
  "pos": "PG",
  "gp": 65,
  "mpg": 14.92,
  "rates": {
   "pts": 0.42167,
   "fg3m": 0.0433,
   "reb": 0.13506,
   "ast": 0.14743,
   "stl": 0.04846,
   "blk": 0.00619,
   "fgm": 0.16805,
   "fga": 0.42476,
   "ftm": 0.04227,
   "fta": 0.0567,
   "tov": 0.1031
  }
 },
 {
  "name": "Alex Caruso",
  "team": "OKC",
  "pos": "PG/SG",
  "gp": 56,
  "mpg": 18.22,
  "rates": {
   "pts": 0.34106,
   "fg3m": 0.05194,
   "reb": 0.15191,
   "ast": 0.10781,
   "stl": 0.07056,
   "blk": 0.01666,
   "fgm": 0.12447,
   "fga": 0.29402,
   "ftm": 0.04018,
   "fta": 0.04998,
   "tov": 0.04704
  }
 },
 {
  "name": "Jahmai Mashack",
  "team": "MEM",
  "pos": "SG",
  "gp": 31,
  "mpg": 21.71,
  "rates": {
   "pts": 0.28523,
   "fg3m": 0.02823,
   "reb": 0.12033,
   "ast": 0.10251,
   "stl": 0.05497,
   "blk": 0.0208,
   "fgm": 0.11439,
   "fga": 0.28969,
   "ftm": 0.02823,
   "fta": 0.052,
   "tov": 0.07279
  }
 },
 {
  "name": "Kasparas Jakucionis",
  "team": "MIA",
  "pos": "PG",
  "gp": 53,
  "mpg": 17.82,
  "rates": {
   "pts": 0.34722,
   "fg3m": 0.06987,
   "reb": 0.14609,
   "ast": 0.14503,
   "stl": 0.03493,
   "blk": 0.00741,
   "fgm": 0.10798,
   "fga": 0.25195,
   "ftm": 0.0614,
   "fta": 0.06987,
   "tov": 0.05293
  }
 },
 {
  "name": "Kyle Anderson",
  "team": "MIN",
  "pos": "SF/PF",
  "gp": 43,
  "mpg": 19.84,
  "rates": {
   "pts": 0.31177,
   "fg3m": 0.00469,
   "reb": 0.17581,
   "ast": 0.14768,
   "stl": 0.05274,
   "blk": 0.03047,
   "fgm": 0.12541,
   "fga": 0.23676,
   "ftm": 0.05626,
   "fta": 0.0797,
   "tov": 0.04571
  }
 },
 {
  "name": "Nick Smith Jr.",
  "team": "LAL",
  "pos": "SG",
  "gp": 30,
  "mpg": 12.5,
  "rates": {
   "pts": 0.49351,
   "fg3m": 0.0907,
   "reb": 0.06136,
   "ast": 0.0827,
   "stl": 0.02401,
   "blk": 0.00534,
   "fgm": 0.18673,
   "fga": 0.42949,
   "ftm": 0.02934,
   "fta": 0.04001,
   "tov": 0.05602
  }
 },
 {
  "name": "Thomas Bryant",
  "team": "CLE",
  "pos": "C",
  "gp": 60,
  "mpg": 12.2,
  "rates": {
   "pts": 0.50557,
   "fg3m": 0.06422,
   "reb": 0.28011,
   "ast": 0.04509,
   "stl": 0.0246,
   "blk": 0.03689,
   "fgm": 0.18446,
   "fga": 0.36483,
   "ftm": 0.07242,
   "fta": 0.09018,
   "tov": 0.03826
  }
 },
 {
  "name": "Mac McClung",
  "team": "CHI",
  "pos": "SG",
  "gp": 11,
  "mpg": 12.29,
  "rates": {
   "pts": 0.49568,
   "fg3m": 0.05179,
   "reb": 0.07398,
   "ast": 0.07398,
   "stl": 0.08138,
   "blk": 0.02219,
   "fgm": 0.17016,
   "fga": 0.4365,
   "ftm": 0.10358,
   "fta": 0.13317,
   "tov": 0.06658
  }
 },
 {
  "name": "Justin Edwards",
  "team": "PHI",
  "pos": "SF",
  "gp": 64,
  "mpg": 15.27,
  "rates": {
   "pts": 0.39508,
   "fg3m": 0.06858,
   "reb": 0.09621,
   "ast": 0.08188,
   "stl": 0.05629,
   "blk": 0.01126,
   "fgm": 0.14636,
   "fga": 0.32753,
   "ftm": 0.03378,
   "fta": 0.03992,
   "tov": 0.03685
  }
 },
 {
  "name": "Hayden Gray",
  "team": "UTA",
  "pos": "SG",
  "gp": 1,
  "mpg": 24.75,
  "rates": {
   "pts": 0.24242,
   "fg3m": 0.0,
   "reb": 0.0,
   "ast": 0.0404,
   "stl": 0.0404,
   "blk": 0.0404,
   "fgm": 0.08081,
   "fga": 0.12121,
   "ftm": 0.08081,
   "fta": 0.08081,
   "tov": 0.0404
  }
 },
 {
  "name": "Tidjane Salaun",
  "team": "CHA",
  "pos": "PF",
  "gp": 37,
  "mpg": 15.55,
  "rates": {
   "pts": 0.38584,
   "fg3m": 0.06257,
   "reb": 0.25897,
   "ast": 0.04693,
   "stl": 0.02781,
   "blk": 0.01217,
   "fgm": 0.13904,
   "fga": 0.27635,
   "ftm": 0.04519,
   "fta": 0.06952,
   "tov": 0.04519
  }
 },
 {
  "name": "Gradey Dick",
  "team": "TOR",
  "pos": "SG/SF",
  "gp": 76,
  "mpg": 14.04,
  "rates": {
   "pts": 0.42651,
   "fg3m": 0.05249,
   "reb": 0.1378,
   "ast": 0.04781,
   "stl": 0.04218,
   "blk": 0.00656,
   "fgm": 0.15092,
   "fga": 0.35996,
   "ftm": 0.07218,
   "fta": 0.08249,
   "tov": 0.04031
  }
 },
 {
  "name": "Nick Richards",
  "team": "CHI",
  "pos": "C",
  "gp": 47,
  "mpg": 14.91,
  "rates": {
   "pts": 0.39387,
   "fg3m": 0.00714,
   "reb": 0.34678,
   "ast": 0.02283,
   "stl": 0.01427,
   "blk": 0.04567,
   "fgm": 0.14699,
   "fga": 0.28684,
   "ftm": 0.09276,
   "fta": 0.14413,
   "tov": 0.0842
  }
 },
 {
  "name": "Goga Bitadze",
  "team": "ORL",
  "pos": "C",
  "gp": 64,
  "mpg": 15.19,
  "rates": {
   "pts": 0.3858,
   "fg3m": 0.00206,
   "reb": 0.32921,
   "ast": 0.08642,
   "stl": 0.03807,
   "blk": 0.06276,
   "fgm": 0.15638,
   "fga": 0.23148,
   "ftm": 0.07099,
   "fta": 0.09979,
   "tov": 0.04424
  }
 },
 {
  "name": "Charles Bassey",
  "team": "GSW",
  "pos": "C",
  "gp": 13,
  "mpg": 11.75,
  "rates": {
   "pts": 0.49771,
   "fg3m": 0.0,
   "reb": 0.37328,
   "ast": 0.04584,
   "stl": 0.0262,
   "blk": 0.07204,
   "fgm": 0.20301,
   "fga": 0.30779,
   "ftm": 0.09168,
   "fta": 0.13098,
   "tov": 0.03929
  }
 },
 {
  "name": "Steven Adams",
  "team": "HOU",
  "pos": "C",
  "gp": 32,
  "mpg": 22.83,
  "rates": {
   "pts": 0.256,
   "fg3m": 0.0,
   "reb": 0.37784,
   "ast": 0.06571,
   "stl": 0.03012,
   "blk": 0.02738,
   "fgm": 0.09583,
   "fga": 0.19029,
   "ftm": 0.06434,
   "fta": 0.11089,
   "tov": 0.04791
  }
 },
 {
  "name": "Nae'Qwan Tomlin",
  "team": "CLE",
  "pos": "PF",
  "gp": 64,
  "mpg": 15.68,
  "rates": {
   "pts": 0.37263,
   "fg3m": 0.0269,
   "reb": 0.18532,
   "ast": 0.05281,
   "stl": 0.04085,
   "blk": 0.03388,
   "fgm": 0.14945,
   "fga": 0.31285,
   "ftm": 0.04683,
   "fta": 0.06078,
   "tov": 0.02889
  }
 },
 {
  "name": "Anthony Gill",
  "team": "WAS",
  "pos": "PF",
  "gp": 55,
  "mpg": 17.29,
  "rates": {
   "pts": 0.33755,
   "fg3m": 0.01788,
   "reb": 0.16614,
   "ast": 0.07256,
   "stl": 0.0326,
   "blk": 0.02208,
   "fgm": 0.14196,
   "fga": 0.22608,
   "ftm": 0.03575,
   "fta": 0.04837,
   "tov": 0.03786
  }
 },
 {
  "name": "Ryan Dunn",
  "team": "PHO",
  "pos": "SF",
  "gp": 70,
  "mpg": 19.36,
  "rates": {
   "pts": 0.30031,
   "fg3m": 0.04132,
   "reb": 0.21915,
   "ast": 0.07526,
   "stl": 0.04427,
   "blk": 0.0214,
   "fgm": 0.12101,
   "fga": 0.26711,
   "ftm": 0.01697,
   "fta": 0.03468,
   "tov": 0.04132
  }
 },
 {
  "name": "Kris Murray",
  "team": "POR",
  "pos": "PF",
  "gp": 57,
  "mpg": 23.39,
  "rates": {
   "pts": 0.24827,
   "fg3m": 0.0255,
   "reb": 0.15451,
   "ast": 0.06076,
   "stl": 0.03825,
   "blk": 0.0165,
   "fgm": 0.09676,
   "fga": 0.20702,
   "ftm": 0.02925,
   "fta": 0.04275,
   "tov": 0.03525
  }
 },
 {
  "name": "Matisse Thybulle",
  "team": "POR",
  "pos": "SG/SF",
  "gp": 30,
  "mpg": 15.99,
  "rates": {
   "pts": 0.36276,
   "fg3m": 0.07714,
   "reb": 0.12301,
   "ast": 0.05629,
   "stl": 0.12509,
   "blk": 0.03336,
   "fgm": 0.12092,
   "fga": 0.27937,
   "ftm": 0.04378,
   "fta": 0.05212,
   "tov": 0.05838
  }
 },
 {
  "name": "Dean Wade",
  "team": "CLE",
  "pos": "PF",
  "gp": 59,
  "mpg": 22.33,
  "rates": {
   "pts": 0.25955,
   "fg3m": 0.05388,
   "reb": 0.18745,
   "ast": 0.06754,
   "stl": 0.03339,
   "blk": 0.01746,
   "fgm": 0.09259,
   "fga": 0.21098,
   "ftm": 0.02049,
   "fta": 0.02884,
   "tov": 0.01214
  }
 },
 {
  "name": "Kobe Brown",
  "team": "IND",
  "pos": "PF",
  "gp": 61,
  "mpg": 15.78,
  "rates": {
   "pts": 0.3668,
   "fg3m": 0.05403,
   "reb": 0.19223,
   "ast": 0.08313,
   "stl": 0.0239,
   "blk": 0.01247,
   "fgm": 0.13196,
   "fga": 0.28159,
   "ftm": 0.04884,
   "fta": 0.06131,
   "tov": 0.05507
  }
 },
 {
  "name": "Branden Carlson",
  "team": "OKC",
  "pos": "C",
  "gp": 42,
  "mpg": 11.62,
  "rates": {
   "pts": 0.49566,
   "fg3m": 0.06349,
   "reb": 0.25398,
   "ast": 0.0594,
   "stl": 0.01639,
   "blk": 0.0553,
   "fgm": 0.20072,
   "fga": 0.38097,
   "ftm": 0.03072,
   "fta": 0.05325,
   "tov": 0.03277
  }
 },
 {
  "name": "Jamaree Bouyea",
  "team": "PHO",
  "pos": "PG",
  "gp": 46,
  "mpg": 14.0,
  "rates": {
   "pts": 0.40832,
   "fg3m": 0.03571,
   "reb": 0.12731,
   "ast": 0.12731,
   "stl": 0.04502,
   "blk": 0.02484,
   "fgm": 0.16768,
   "fga": 0.3664,
   "ftm": 0.03726,
   "fta": 0.05434,
   "tov": 0.04658
  }
 },
 {
  "name": "Yves Missi",
  "team": "NOR",
  "pos": "C",
  "gp": 66,
  "mpg": 19.65,
  "rates": {
   "pts": 0.29066,
   "fg3m": 0.0,
   "reb": 0.29683,
   "ast": 0.06476,
   "stl": 0.01542,
   "blk": 0.07787,
   "fgm": 0.12336,
   "fga": 0.22667,
   "ftm": 0.04395,
   "fta": 0.07864,
   "tov": 0.04163
  }
 },
 {
  "name": "Karlo Matkovic",
  "team": "NOR",
  "pos": "PF",
  "gp": 62,
  "mpg": 14.71,
  "rates": {
   "pts": 0.38608,
   "fg3m": 0.04168,
   "reb": 0.25117,
   "ast": 0.05484,
   "stl": 0.02742,
   "blk": 0.05923,
   "fgm": 0.15575,
   "fga": 0.25775,
   "ftm": 0.0329,
   "fta": 0.04497,
   "tov": 0.03729
  }
 },
 {
  "name": "Mitchell Robinson",
  "team": "NYK",
  "pos": "C",
  "gp": 60,
  "mpg": 19.58,
  "rates": {
   "pts": 0.28948,
   "fg3m": 0.0,
   "reb": 0.44699,
   "ast": 0.04427,
   "stl": 0.04768,
   "blk": 0.0596,
   "fgm": 0.12686,
   "fga": 0.17539,
   "ftm": 0.03576,
   "fta": 0.08769,
   "tov": 0.03491
  }
 },
 {
  "name": "Doug McDermott",
  "team": "SAC",
  "pos": "SF",
  "gp": 29,
  "mpg": 15.15,
  "rates": {
   "pts": 0.37339,
   "fg3m": 0.10929,
   "reb": 0.08424,
   "ast": 0.05009,
   "stl": 0.01366,
   "blk": 0.00911,
   "fgm": 0.12295,
   "fga": 0.31647,
   "ftm": 0.01821,
   "fta": 0.02049,
   "tov": 0.0296
  }
 },
 {
  "name": "E.J. Liddell",
  "team": "BKN",
  "pos": "PF",
  "gp": 26,
  "mpg": 13.43,
  "rates": {
   "pts": 0.42098,
   "fg3m": 0.05155,
   "reb": 0.1976,
   "ast": 0.06873,
   "stl": 0.01718,
   "blk": 0.02864,
   "fgm": 0.15465,
   "fga": 0.32075,
   "ftm": 0.06014,
   "fta": 0.07446,
   "tov": 0.04296
  }
 },
 {
  "name": "Dru Smith",
  "team": "MIA",
  "pos": "PG",
  "gp": 70,
  "mpg": 16.3,
  "rates": {
   "pts": 0.34608,
   "fg3m": 0.03329,
   "reb": 0.15157,
   "ast": 0.15771,
   "stl": 0.08762,
   "blk": 0.0184,
   "fgm": 0.11828,
   "fga": 0.28475,
   "ftm": 0.07623,
   "fta": 0.092,
   "tov": 0.04819
  }
 },
 {
  "name": "Terrence Shannon Jr.",
  "team": "MIN",
  "pos": "SG",
  "gp": 43,
  "mpg": 12.5,
  "rates": {
   "pts": 0.44821,
   "fg3m": 0.05765,
   "reb": 0.09113,
   "ast": 0.07067,
   "stl": 0.02604,
   "blk": 0.00186,
   "fgm": 0.1432,
   "fga": 0.31802,
   "ftm": 0.10415,
   "fta": 0.13018,
   "tov": 0.04463
  }
 },
 {
  "name": "Guerschon Yabusele",
  "team": "CHI",
  "pos": "PF",
  "gp": 67,
  "mpg": 15.03,
  "rates": {
   "pts": 0.37039,
   "fg3m": 0.06852,
   "reb": 0.23236,
   "ast": 0.06256,
   "stl": 0.02582,
   "blk": 0.01589,
   "fgm": 0.12412,
   "fga": 0.30882,
   "ftm": 0.05362,
   "fta": 0.0715,
   "tov": 0.04071
  }
 },
 {
  "name": "Baylor Scheierman",
  "team": "BOS",
  "pos": "SG",
  "gp": 77,
  "mpg": 18.56,
  "rates": {
   "pts": 0.29875,
   "fg3m": 0.06787,
   "reb": 0.1882,
   "ast": 0.08116,
   "stl": 0.02939,
   "blk": 0.0042,
   "fgm": 0.10565,
   "fga": 0.23298,
   "ftm": 0.01959,
   "fta": 0.02169,
   "tov": 0.03218
  }
 },
 {
  "name": "Killian Hayes",
  "team": "SAC",
  "pos": "PG",
  "gp": 23,
  "mpg": 17.63,
  "rates": {
   "pts": 0.31317,
   "fg3m": 0.04192,
   "reb": 0.13316,
   "ast": 0.19974,
   "stl": 0.05178,
   "blk": 0.00986,
   "fgm": 0.10357,
   "fga": 0.34029,
   "ftm": 0.06411,
   "fta": 0.06904,
   "tov": 0.06904
  }
 },
 {
  "name": "Spencer Jones",
  "team": "DEN",
  "pos": "SF",
  "gp": 64,
  "mpg": 22.14,
  "rates": {
   "pts": 0.24845,
   "fg3m": 0.04023,
   "reb": 0.14752,
   "ast": 0.036,
   "stl": 0.0367,
   "blk": 0.02047,
   "fgm": 0.09317,
   "fga": 0.18492,
   "ftm": 0.02188,
   "fta": 0.036,
   "tov": 0.02188
  }
 },
 {
  "name": "Eric Gordon",
  "team": "FA",
  "pos": "SG/SF",
  "gp": 6,
  "mpg": 12.29,
  "rates": {
   "pts": 0.44746,
   "fg3m": 0.10847,
   "reb": 0.02712,
   "ast": 0.04068,
   "stl": 0.05424,
   "blk": 0.01356,
   "fgm": 0.16271,
   "fga": 0.28475,
   "ftm": 0.01356,
   "fta": 0.02712,
   "tov": 0.04068
  }
 },
 {
  "name": "Tre Mann",
  "team": "CHA",
  "pos": "PG/SG",
  "gp": 53,
  "mpg": 12.61,
  "rates": {
   "pts": 0.43534,
   "fg3m": 0.0748,
   "reb": 0.13763,
   "ast": 0.12866,
   "stl": 0.0374,
   "blk": 0.00748,
   "fgm": 0.16306,
   "fga": 0.45329,
   "ftm": 0.03441,
   "fta": 0.04039,
   "tov": 0.08078
  }
 },
 {
  "name": "Aaron Holiday",
  "team": "HOU",
  "pos": "PG",
  "gp": 57,
  "mpg": 13.7,
  "rates": {
   "pts": 0.39962,
   "fg3m": 0.08581,
   "reb": 0.07429,
   "ast": 0.07685,
   "stl": 0.03458,
   "blk": 0.0064,
   "fgm": 0.13449,
   "fga": 0.32277,
   "ftm": 0.04483,
   "fta": 0.05251,
   "tov": 0.04867
  }
 },
 {
  "name": "Jett Howard",
  "team": "ORL",
  "pos": "SG/SF",
  "gp": 55,
  "mpg": 12.64,
  "rates": {
   "pts": 0.43289,
   "fg3m": 0.07766,
   "reb": 0.12512,
   "ast": 0.06472,
   "stl": 0.01438,
   "blk": 0.01582,
   "fgm": 0.15101,
   "fga": 0.36098,
   "ftm": 0.05321,
   "fta": 0.05609,
   "tov": 0.02157
  }
 },
 {
  "name": "Tyrese Proctor",
  "team": "CLE",
  "pos": "SG",
  "gp": 50,
  "mpg": 10.9,
  "rates": {
   "pts": 0.49896,
   "fg3m": 0.08438,
   "reb": 0.1174,
   "ast": 0.13391,
   "stl": 0.04586,
   "blk": 0.0,
   "fgm": 0.1706,
   "fga": 0.41091,
   "ftm": 0.07338,
   "fta": 0.08255,
   "tov": 0.07338
  }
 },
 {
  "name": "Haywood Highsmith",
  "team": "PHO",
  "pos": "SF",
  "gp": 7,
  "mpg": 12.97,
  "rates": {
   "pts": 0.4185,
   "fg3m": 0.08811,
   "reb": 0.14317,
   "ast": 0.07709,
   "stl": 0.04405,
   "blk": 0.0,
   "fgm": 0.13216,
   "fga": 0.2533,
   "ftm": 0.06608,
   "fta": 0.07709,
   "tov": 0.0
  }
 },
 {
  "name": "Dylan Cardwell",
  "team": "SAC",
  "pos": "C",
  "gp": 44,
  "mpg": 20.6,
  "rates": {
   "pts": 0.26255,
   "fg3m": 0.00221,
   "reb": 0.36624,
   "ast": 0.06839,
   "stl": 0.03309,
   "blk": 0.07391,
   "fgm": 0.11583,
   "fga": 0.19746,
   "ftm": 0.02868,
   "fta": 0.05626,
   "tov": 0.04302
  }
 },
 {
  "name": "Pete Nance",
  "team": "MIL",
  "pos": "PF",
  "gp": 47,
  "mpg": 15.68,
  "rates": {
   "pts": 0.34459,
   "fg3m": 0.06783,
   "reb": 0.16958,
   "ast": 0.06512,
   "stl": 0.01899,
   "blk": 0.01899,
   "fgm": 0.13567,
   "fga": 0.26319,
   "ftm": 0.00543,
   "fta": 0.01492,
   "tov": 0.03527
  }
 },
 {
  "name": "Sion James",
  "team": "CHA",
  "pos": "SG/SF",
  "gp": 82,
  "mpg": 22.48,
  "rates": {
   "pts": 0.23925,
   "fg3m": 0.04503,
   "reb": 0.1557,
   "ast": 0.08843,
   "stl": 0.02821,
   "blk": 0.01085,
   "fgm": 0.07487,
   "fga": 0.20182,
   "ftm": 0.04449,
   "fta": 0.05317,
   "tov": 0.03581
  }
 },
 {
  "name": "Jamal Cain",
  "team": "ORL",
  "pos": "SF",
  "gp": 40,
  "mpg": 12.15,
  "rates": {
   "pts": 0.4424,
   "fg3m": 0.05762,
   "reb": 0.1605,
   "ast": 0.05967,
   "stl": 0.02263,
   "blk": 0.00823,
   "fgm": 0.15227,
   "fga": 0.31277,
   "ftm": 0.08025,
   "fta": 0.09465,
   "tov": 0.0391
  }
 },
 {
  "name": "Jordan Walsh",
  "team": "BOS",
  "pos": "SF",
  "gp": 68,
  "mpg": 17.82,
  "rates": {
   "pts": 0.30034,
   "fg3m": 0.03961,
   "reb": 0.22443,
   "ast": 0.04456,
   "stl": 0.04043,
   "blk": 0.02558,
   "fgm": 0.11221,
   "fga": 0.2203,
   "ftm": 0.0363,
   "fta": 0.04703,
   "tov": 0.02888
  }
 },
 {
  "name": "Trey Alexander",
  "team": "NOR",
  "pos": "SG",
  "gp": 9,
  "mpg": 12.29,
  "rates": {
   "pts": 0.42483,
   "fg3m": 0.05423,
   "reb": 0.09943,
   "ast": 0.08135,
   "stl": 0.05423,
   "blk": 0.01808,
   "fgm": 0.17174,
   "fga": 0.33444,
   "ftm": 0.02712,
   "fta": 0.04519,
   "tov": 0.02712
  }
 },
 {
  "name": "Drew Eubanks",
  "team": "SAC",
  "pos": "C",
  "gp": 42,
  "mpg": 13.15,
  "rates": {
   "pts": 0.39655,
   "fg3m": 0.00181,
   "reb": 0.22996,
   "ast": 0.0344,
   "stl": 0.02716,
   "blk": 0.04708,
   "fgm": 0.1684,
   "fga": 0.28247,
   "ftm": 0.05794,
   "fta": 0.10321,
   "tov": 0.05432
  }
 },
 {
  "name": "Nikola Topic",
  "team": "OKC",
  "pos": "PG",
  "gp": 10,
  "mpg": 16.01,
  "rates": {
   "pts": 0.32483,
   "fg3m": 0.03748,
   "reb": 0.11869,
   "ast": 0.27486,
   "stl": 0.03123,
   "blk": 0.0,
   "fgm": 0.13743,
   "fga": 0.31858,
   "ftm": 0.01249,
   "fta": 0.03123,
   "tov": 0.15617
  }
 },
 {
  "name": "Jalen Pickett",
  "team": "DEN",
  "pos": "PG/SG",
  "gp": 50,
  "mpg": 16.13,
  "rates": {
   "pts": 0.32238,
   "fg3m": 0.06076,
   "reb": 0.14135,
   "ast": 0.14259,
   "stl": 0.01612,
   "blk": 0.0062,
   "fgm": 0.12151,
   "fga": 0.28766,
   "ftm": 0.0186,
   "fta": 0.02356,
   "tov": 0.0434
  }
 },
 {
  "name": "Andersson Garcia",
  "team": "FA",
  "pos": "SF",
  "gp": 5,
  "mpg": 33.75,
  "rates": {
   "pts": 0.15407,
   "fg3m": 0.00593,
   "reb": 0.24889,
   "ast": 0.08296,
   "stl": 0.04741,
   "blk": 0.0237,
   "fgm": 0.05333,
   "fga": 0.17185,
   "ftm": 0.04148,
   "fta": 0.05333,
   "tov": 0.04148
  }
 },
 {
  "name": "Garrison Mathews",
  "team": "FA",
  "pos": "SG/SF",
  "gp": 15,
  "mpg": 13.07,
  "rates": {
   "pts": 0.39776,
   "fg3m": 0.08669,
   "reb": 0.08669,
   "ast": 0.05099,
   "stl": 0.0306,
   "blk": 0.0153,
   "fgm": 0.10709,
   "fga": 0.26517,
   "ftm": 0.09689,
   "fta": 0.11729,
   "tov": 0.0153
  }
 },
 {
  "name": "Rayan Rupert",
  "team": "MEM",
  "pos": "SG",
  "gp": 64,
  "mpg": 16.76,
  "rates": {
   "pts": 0.30952,
   "fg3m": 0.04102,
   "reb": 0.17527,
   "ast": 0.0634,
   "stl": 0.05221,
   "blk": 0.00839,
   "fgm": 0.11467,
   "fga": 0.29181,
   "ftm": 0.03916,
   "fta": 0.05034,
   "tov": 0.05128
  }
 },
 {
  "name": "Marcus Sasser",
  "team": "DET",
  "pos": "PG",
  "gp": 38,
  "mpg": 12.01,
  "rates": {
   "pts": 0.43154,
   "fg3m": 0.09639,
   "reb": 0.08543,
   "ast": 0.16429,
   "stl": 0.04381,
   "blk": 0.00876,
   "fgm": 0.15115,
   "fga": 0.38773,
   "ftm": 0.03286,
   "fta": 0.03943,
   "tov": 0.06791
  }
 },
 {
  "name": "Asa Newell",
  "team": "ATL",
  "pos": "PF",
  "gp": 44,
  "mpg": 11.36,
  "rates": {
   "pts": 0.45408,
   "fg3m": 0.05801,
   "reb": 0.19003,
   "ast": 0.05201,
   "stl": 0.03201,
   "blk": 0.03001,
   "fgm": 0.18203,
   "fga": 0.33806,
   "ftm": 0.03201,
   "fta": 0.05801,
   "tov": 0.04601
  }
 },
 {
  "name": "Johnny Furphy",
  "team": "IND",
  "pos": "SG",
  "gp": 35,
  "mpg": 18.37,
  "rates": {
   "pts": 0.27992,
   "fg3m": 0.03577,
   "reb": 0.23793,
   "ast": 0.06376,
   "stl": 0.0311,
   "blk": 0.01089,
   "fgm": 0.10886,
   "fga": 0.23171,
   "ftm": 0.02644,
   "fta": 0.05443,
   "tov": 0.0451
  }
 },
 {
  "name": "Sidy Cissoko",
  "team": "POR",
  "pos": "SG",
  "gp": 75,
  "mpg": 19.13,
  "rates": {
   "pts": 0.26689,
   "fg3m": 0.04111,
   "reb": 0.11568,
   "ast": 0.07665,
   "stl": 0.03624,
   "blk": 0.01742,
   "fgm": 0.09268,
   "fga": 0.23274,
   "ftm": 0.04042,
   "fta": 0.06132,
   "tov": 0.04878
  }
 },
 {
  "name": "Ochai Agbaji",
  "team": "BKN",
  "pos": "SG/SF",
  "gp": 62,
  "mpg": 15.7,
  "rates": {
   "pts": 0.32265,
   "fg3m": 0.03494,
   "reb": 0.14489,
   "ast": 0.0483,
   "stl": 0.02466,
   "blk": 0.01747,
   "fgm": 0.12536,
   "fga": 0.28772,
   "ftm": 0.03699,
   "fta": 0.04418,
   "tov": 0.03185
  }
 },
 {
  "name": "Jordan Hawkins",
  "team": "NOR",
  "pos": "SG",
  "gp": 51,
  "mpg": 13.57,
  "rates": {
   "pts": 0.37284,
   "fg3m": 0.06792,
   "reb": 0.12717,
   "ast": 0.0607,
   "stl": 0.01879,
   "blk": 0.01445,
   "fgm": 0.13584,
   "fga": 0.3714,
   "ftm": 0.03324,
   "fta": 0.03902,
   "tov": 0.04913
  }
 },
 {
  "name": "Jericho Sims",
  "team": "MIL",
  "pos": "C",
  "gp": 67,
  "mpg": 19.67,
  "rates": {
   "pts": 0.25345,
   "fg3m": 0.0,
   "reb": 0.28076,
   "ast": 0.07892,
   "stl": 0.01442,
   "blk": 0.0129,
   "fgm": 0.11003,
   "fga": 0.14038,
   "ftm": 0.03339,
   "fta": 0.05388,
   "tov": 0.05691
  }
 },
 {
  "name": "Adem Bona",
  "team": "PHI",
  "pos": "C",
  "gp": 71,
  "mpg": 17.38,
  "rates": {
   "pts": 0.27872,
   "fg3m": 0.00162,
   "reb": 0.24874,
   "ast": 0.02593,
   "stl": 0.02431,
   "blk": 0.06644,
   "fgm": 0.10614,
   "fga": 0.17825,
   "ftm": 0.06482,
   "fta": 0.09156,
   "tov": 0.04537
  }
 },
 {
  "name": "Blake Wesley",
  "team": "POR",
  "pos": "SG",
  "gp": 31,
  "mpg": 11.64,
  "rates": {
   "pts": 0.41014,
   "fg3m": 0.02771,
   "reb": 0.10808,
   "ast": 0.17182,
   "stl": 0.04434,
   "blk": 0.01386,
   "fgm": 0.15519,
   "fga": 0.34363,
   "ftm": 0.07205,
   "fta": 0.13025,
   "tov": 0.08591
  }
 },
 {
  "name": "Tyler Smith",
  "team": "DAL",
  "pos": "SF",
  "gp": 12,
  "mpg": 13.8,
  "rates": {
   "pts": 0.3382,
   "fg3m": 0.06039,
   "reb": 0.1993,
   "ast": 0.0302,
   "stl": 0.03624,
   "blk": 0.0,
   "fgm": 0.12682,
   "fga": 0.30196,
   "ftm": 0.02416,
   "fta": 0.03624,
   "tov": 0.03624
  }
 },
 {
  "name": "Zyon Pullin",
  "team": "MIN",
  "pos": "SG",
  "gp": 5,
  "mpg": 8.52,
  "rates": {
   "pts": 0.54012,
   "fg3m": 0.02348,
   "reb": 0.07045,
   "ast": 0.21135,
   "stl": 0.02348,
   "blk": 0.0,
   "fgm": 0.21135,
   "fga": 0.30528,
   "ftm": 0.09393,
   "fta": 0.09393,
   "tov": 0.07045
  }
 },
 {
  "name": "Jeremiah Robinson-Earl",
  "team": "FA",
  "pos": "PF/C",
  "gp": 22,
  "mpg": 16.39,
  "rates": {
   "pts": 0.28009,
   "fg3m": 0.02773,
   "reb": 0.28564,
   "ast": 0.0416,
   "stl": 0.02496,
   "blk": 0.00277,
   "fgm": 0.10261,
   "fga": 0.27732,
   "ftm": 0.04714,
   "fta": 0.04992,
   "tov": 0.03328
  }
 },
 {
  "name": "Malaki Branham",
  "team": "FA",
  "pos": "SG",
  "gp": 28,
  "mpg": 9.84,
  "rates": {
   "pts": 0.46464,
   "fg3m": 0.05082,
   "reb": 0.15972,
   "ast": 0.08349,
   "stl": 0.0363,
   "blk": 0.01089,
   "fgm": 0.15609,
   "fga": 0.33033,
   "ftm": 0.10164,
   "fta": 0.12342,
   "tov": 0.05445
  }
 },
 {
  "name": "Lonzo Ball",
  "team": "FA",
  "pos": "PG",
  "gp": 35,
  "mpg": 20.79,
  "rates": {
   "pts": 0.21986,
   "fg3m": 0.05497,
   "reb": 0.19238,
   "ast": 0.18688,
   "stl": 0.06184,
   "blk": 0.01237,
   "fgm": 0.07283,
   "fga": 0.24185,
   "ftm": 0.01924,
   "fta": 0.02886,
   "tov": 0.07145
  }
 },
 {
  "name": "KJ Simpson",
  "team": "DEN",
  "pos": "PG",
  "gp": 20,
  "mpg": 12.88,
  "rates": {
   "pts": 0.35324,
   "fg3m": 0.04658,
   "reb": 0.14362,
   "ast": 0.16691,
   "stl": 0.06211,
   "blk": 0.0,
   "fgm": 0.13198,
   "fga": 0.38429,
   "ftm": 0.0427,
   "fta": 0.06987,
   "tov": 0.09704
  }
 },
 {
  "name": "Mike Conley",
  "team": "MIN",
  "pos": "PG",
  "gp": 54,
  "mpg": 18.36,
  "rates": {
   "pts": 0.24714,
   "fg3m": 0.05649,
   "reb": 0.09381,
   "ast": 0.15837,
   "stl": 0.03531,
   "blk": 0.01412,
   "fgm": 0.07263,
   "fga": 0.21688,
   "ftm": 0.04539,
   "fta": 0.05044,
   "tov": 0.0343
  }
 },
 {
  "name": "Josh Okogie",
  "team": "HOU",
  "pos": "SG/SF",
  "gp": 78,
  "mpg": 17.36,
  "rates": {
   "pts": 0.26075,
   "fg3m": 0.0458,
   "reb": 0.14773,
   "ast": 0.05097,
   "stl": 0.04654,
   "blk": 0.01182,
   "fgm": 0.09233,
   "fga": 0.21717,
   "ftm": 0.03029,
   "fta": 0.05097,
   "tov": 0.03029
  }
 },
 {
  "name": "PJ Hall",
  "team": "CHA",
  "pos": "PF",
  "gp": 19,
  "mpg": 11.23,
  "rates": {
   "pts": 0.403,
   "fg3m": 0.01406,
   "reb": 0.35614,
   "ast": 0.04686,
   "stl": 0.01406,
   "blk": 0.04686,
   "fgm": 0.14058,
   "fga": 0.27648,
   "ftm": 0.10778,
   "fta": 0.1359,
   "tov": 0.07498
  }
 },
 {
  "name": "Craig Porter Jr.",
  "team": "CLE",
  "pos": "SG",
  "gp": 64,
  "mpg": 17.93,
  "rates": {
   "pts": 0.25181,
   "fg3m": 0.02875,
   "reb": 0.19169,
   "ast": 0.17862,
   "stl": 0.04966,
   "blk": 0.03311,
   "fgm": 0.10107,
   "fga": 0.22567,
   "ftm": 0.02091,
   "fta": 0.03485,
   "tov": 0.05141
  }
 },
 {
  "name": "Taelon Peter",
  "team": "IND",
  "pos": "SG",
  "gp": 38,
  "mpg": 12.95,
  "rates": {
   "pts": 0.34741,
   "fg3m": 0.0833,
   "reb": 0.11987,
   "ast": 0.08127,
   "stl": 0.05282,
   "blk": 0.00813,
   "fgm": 0.1219,
   "fga": 0.321,
   "ftm": 0.02032,
   "fta": 0.03251,
   "tov": 0.05485
  }
 },
 {
  "name": "Moussa Cisse",
  "team": "DAL",
  "pos": "C",
  "gp": 38,
  "mpg": 13.94,
  "rates": {
   "pts": 0.32101,
   "fg3m": 0.0,
   "reb": 0.40787,
   "ast": 0.01699,
   "stl": 0.03588,
   "blk": 0.08497,
   "fgm": 0.12463,
   "fga": 0.21715,
   "ftm": 0.07175,
   "fta": 0.15295,
   "tov": 0.05665
  }
 },
 {
  "name": "Mouhamed Gueye",
  "team": "ATL",
  "pos": "PF",
  "gp": 77,
  "mpg": 15.31,
  "rates": {
   "pts": 0.29013,
   "fg3m": 0.03393,
   "reb": 0.23329,
   "ast": 0.05853,
   "stl": 0.05175,
   "blk": 0.03308,
   "fgm": 0.11113,
   "fga": 0.24601,
   "ftm": 0.03393,
   "fta": 0.0526,
   "tov": 0.02799
  }
 },
 {
  "name": "Jarred Vanderbilt",
  "team": "LAL",
  "pos": "PF",
  "gp": 65,
  "mpg": 17.35,
  "rates": {
   "pts": 0.25537,
   "fg3m": 0.02571,
   "reb": 0.25892,
   "ast": 0.07448,
   "stl": 0.04877,
   "blk": 0.01685,
   "fgm": 0.1002,
   "fga": 0.21281,
   "ftm": 0.02926,
   "fta": 0.04966,
   "tov": 0.04966
  }
 },
 {
  "name": "Jase Richardson",
  "team": "ORL",
  "pos": "PG/SG",
  "gp": 54,
  "mpg": 10.87,
  "rates": {
   "pts": 0.40734,
   "fg3m": 0.04772,
   "reb": 0.10737,
   "ast": 0.09885,
   "stl": 0.03238,
   "blk": 0.00341,
   "fgm": 0.15169,
   "fga": 0.32042,
   "ftm": 0.05624,
   "fta": 0.0784,
   "tov": 0.04261
  }
 },
 {
  "name": "John Konchar",
  "team": "UTA",
  "pos": "SG/SF",
  "gp": 56,
  "mpg": 19.9,
  "rates": {
   "pts": 0.22249,
   "fg3m": 0.02512,
   "reb": 0.21441,
   "ast": 0.10586,
   "stl": 0.07446,
   "blk": 0.03499,
   "fgm": 0.08433,
   "fga": 0.17853,
   "ftm": 0.02871,
   "fta": 0.03947,
   "tov": 0.0314
  }
 },
 {
  "name": "Tyler Kolek",
  "team": "NYK",
  "pos": "PG",
  "gp": 62,
  "mpg": 11.73,
  "rates": {
   "pts": 0.3768,
   "fg3m": 0.06051,
   "reb": 0.13477,
   "ast": 0.23378,
   "stl": 0.03025,
   "blk": 0.0055,
   "fgm": 0.14852,
   "fga": 0.34105,
   "ftm": 0.01925,
   "fta": 0.0275,
   "tov": 0.07564
  }
 },
 {
  "name": "DeAndre Jordan",
  "team": "NOR",
  "pos": "C",
  "gp": 12,
  "mpg": 16.57,
  "rates": {
   "pts": 0.2666,
   "fg3m": 0.0,
   "reb": 0.38229,
   "ast": 0.05533,
   "stl": 0.02012,
   "blk": 0.0503,
   "fgm": 0.10563,
   "fga": 0.16097,
   "ftm": 0.05533,
   "fta": 0.08551,
   "tov": 0.04527
  }
 },
 {
  "name": "Kam Jones",
  "team": "IND",
  "pos": "PG",
  "gp": 37,
  "mpg": 16.66,
  "rates": {
   "pts": 0.26284,
   "fg3m": 0.03569,
   "reb": 0.09735,
   "ast": 0.19307,
   "stl": 0.0292,
   "blk": 0.0,
   "fgm": 0.11033,
   "fga": 0.27419,
   "ftm": 0.00649,
   "fta": 0.01298,
   "tov": 0.05841
  }
 },
 {
  "name": "Gabe Vincent",
  "team": "ATL",
  "pos": "PG",
  "gp": 53,
  "mpg": 16.59,
  "rates": {
   "pts": 0.26276,
   "fg3m": 0.06711,
   "reb": 0.06143,
   "ast": 0.08645,
   "stl": 0.03071,
   "blk": 0.00341,
   "fgm": 0.08645,
   "fga": 0.2457,
   "ftm": 0.02275,
   "fta": 0.02616,
   "tov": 0.03071
  }
 },
 {
  "name": "RayJ Dennis",
  "team": "ATL",
  "pos": "PG",
  "gp": 17,
  "mpg": 12.13,
  "rates": {
   "pts": 0.35882,
   "fg3m": 0.06788,
   "reb": 0.12607,
   "ast": 0.16001,
   "stl": 0.0194,
   "blk": 0.0194,
   "fgm": 0.12607,
   "fga": 0.40246,
   "ftm": 0.03879,
   "fta": 0.04364,
   "tov": 0.08243
  }
 },
 {
  "name": "Skal Labissiere",
  "team": "FA",
  "pos": "PF",
  "gp": 3,
  "mpg": 12.52,
  "rates": {
   "pts": 0.34621,
   "fg3m": 0.02663,
   "reb": 0.23968,
   "ast": 0.07989,
   "stl": 0.05326,
   "blk": 0.02663,
   "fgm": 0.15979,
   "fga": 0.26631,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.02663
  }
 },
 {
  "name": "Rasheer Fleming",
  "team": "PHO",
  "pos": "PF",
  "gp": 55,
  "mpg": 12.24,
  "rates": {
   "pts": 0.35341,
   "fg3m": 0.06682,
   "reb": 0.18413,
   "ast": 0.02376,
   "stl": 0.03267,
   "blk": 0.03118,
   "fgm": 0.12919,
   "fga": 0.32074,
   "ftm": 0.02821,
   "fta": 0.05049,
   "tov": 0.04306
  }
 },
 {
  "name": "Jabari Walker",
  "team": "PHI",
  "pos": "PF",
  "gp": 64,
  "mpg": 11.9,
  "rates": {
   "pts": 0.36237,
   "fg3m": 0.04201,
   "reb": 0.25208,
   "ast": 0.04464,
   "stl": 0.0302,
   "blk": 0.01707,
   "fgm": 0.12736,
   "fga": 0.27966,
   "ftm": 0.06565,
   "fta": 0.08928,
   "tov": 0.03545
  }
 },
 {
  "name": "Micah Peavy",
  "team": "NOR",
  "pos": "SG/SF",
  "gp": 61,
  "mpg": 14.97,
  "rates": {
   "pts": 0.28697,
   "fg3m": 0.03067,
   "reb": 0.12815,
   "ast": 0.06681,
   "stl": 0.0471,
   "blk": 0.00986,
   "fgm": 0.1161,
   "fga": 0.30121,
   "ftm": 0.0241,
   "fta": 0.03176,
   "tov": 0.02191
  }
 },
 {
  "name": "Josh Green",
  "team": "CHA",
  "pos": "SG/SF",
  "gp": 58,
  "mpg": 15.65,
  "rates": {
   "pts": 0.27423,
   "fg3m": 0.06388,
   "reb": 0.11234,
   "ast": 0.05176,
   "stl": 0.03855,
   "blk": 0.00661,
   "fgm": 0.09141,
   "fga": 0.19934,
   "ftm": 0.02753,
   "fta": 0.03084,
   "tov": 0.03855
  }
 },
 {
  "name": "Yanic Konan Niederhauser",
  "team": "LAC",
  "pos": "C",
  "gp": 41,
  "mpg": 10.33,
  "rates": {
   "pts": 0.41542,
   "fg3m": 0.00236,
   "reb": 0.27616,
   "ast": 0.02832,
   "stl": 0.0118,
   "blk": 0.07081,
   "fgm": 0.15106,
   "fga": 0.23603,
   "ftm": 0.11094,
   "fta": 0.14634,
   "tov": 0.05429
  }
 },
 {
  "name": "Dereck Lively II",
  "team": "DAL",
  "pos": "C",
  "gp": 7,
  "mpg": 16.47,
  "rates": {
   "pts": 0.26023,
   "fg3m": 0.0,
   "reb": 0.32095,
   "ast": 0.11277,
   "stl": 0.0347,
   "blk": 0.09542,
   "fgm": 0.09542,
   "fga": 0.15614,
   "ftm": 0.06939,
   "fta": 0.08674,
   "tov": 0.08674
  }
 },
 {
  "name": "Liam McNeeley",
  "team": "CHA",
  "pos": "SG/SF",
  "gp": 31,
  "mpg": 11.86,
  "rates": {
   "pts": 0.35894,
   "fg3m": 0.06526,
   "reb": 0.1985,
   "ast": 0.06526,
   "stl": 0.0136,
   "blk": 0.00816,
   "fgm": 0.10333,
   "fga": 0.25833,
   "ftm": 0.08702,
   "fta": 0.10605,
   "tov": 0.03535
  }
 },
 {
  "name": "Keshon Gilbert",
  "team": "ATL",
  "pos": "SG",
  "gp": 4,
  "mpg": 18.45,
  "rates": {
   "pts": 0.2304,
   "fg3m": 0.0,
   "reb": 0.06777,
   "ast": 0.16264,
   "stl": 0.04066,
   "blk": 0.05421,
   "fgm": 0.06777,
   "fga": 0.16264,
   "ftm": 0.09487,
   "fta": 0.09487,
   "tov": 0.10843
  }
 },
 {
  "name": "Grant Nelson",
  "team": "FA",
  "pos": "SF",
  "gp": 4,
  "mpg": 8.75,
  "rates": {
   "pts": 0.48548,
   "fg3m": 0.0,
   "reb": 0.17135,
   "ast": 0.14279,
   "stl": 0.02856,
   "blk": 0.14279,
   "fgm": 0.14279,
   "fga": 0.25702,
   "ftm": 0.1999,
   "fta": 0.28558,
   "tov": 0.11423
  }
 },
 {
  "name": "Keshad Johnson",
  "team": "MIA",
  "pos": "PF",
  "gp": 32,
  "mpg": 8.73,
  "rates": {
   "pts": 0.48658,
   "fg3m": 0.04651,
   "reb": 0.22182,
   "ast": 0.02862,
   "stl": 0.05367,
   "blk": 0.02862,
   "fgm": 0.18247,
   "fga": 0.37209,
   "ftm": 0.07513,
   "fta": 0.10376,
   "tov": 0.04651
  }
 },
 {
  "name": "Ron Harper Jr.",
  "team": "BOS",
  "pos": "SG/SF",
  "gp": 29,
  "mpg": 10.95,
  "rates": {
   "pts": 0.38736,
   "fg3m": 0.08818,
   "reb": 0.15117,
   "ast": 0.06928,
   "stl": 0.03149,
   "blk": 0.02834,
   "fgm": 0.14487,
   "fga": 0.34642,
   "ftm": 0.00945,
   "fta": 0.0126,
   "tov": 0.02519
  }
 },
 {
  "name": "Dalton Knecht",
  "team": "LAL",
  "pos": "SG/SF",
  "gp": 54,
  "mpg": 10.24,
  "rates": {
   "pts": 0.41235,
   "fg3m": 0.06872,
   "reb": 0.13564,
   "ast": 0.03798,
   "stl": 0.01989,
   "blk": 0.01989,
   "fgm": 0.15734,
   "fga": 0.34543,
   "ftm": 0.02894,
   "fta": 0.03979,
   "tov": 0.0416
  }
 },
 {
  "name": "A.J. Lawson",
  "team": "TOR",
  "pos": "SG",
  "gp": 24,
  "mpg": 9.42,
  "rates": {
   "pts": 0.4467,
   "fg3m": 0.08403,
   "reb": 0.19018,
   "ast": 0.03096,
   "stl": 0.05307,
   "blk": 0.01769,
   "fgm": 0.15038,
   "fga": 0.34498,
   "ftm": 0.06192,
   "fta": 0.07961,
   "tov": 0.02654
  }
 },
 {
  "name": "Carter Bryant",
  "team": "SAS",
  "pos": "SF",
  "gp": 71,
  "mpg": 11.52,
  "rates": {
   "pts": 0.36437,
   "fg3m": 0.06358,
   "reb": 0.21764,
   "ast": 0.05747,
   "stl": 0.01956,
   "blk": 0.02812,
   "fgm": 0.13205,
   "fga": 0.32402,
   "ftm": 0.03668,
   "fta": 0.05135,
   "tov": 0.04035
  }
 },
 {
  "name": "Tristan Enaruna",
  "team": "CLE",
  "pos": "SF",
  "gp": 9,
  "mpg": 9.46,
  "rates": {
   "pts": 0.43461,
   "fg3m": 0.03524,
   "reb": 0.16445,
   "ast": 0.08222,
   "stl": 0.05873,
   "blk": 0.0,
   "fgm": 0.16445,
   "fga": 0.3289,
   "ftm": 0.07048,
   "fta": 0.09397,
   "tov": 0.03524
  }
 },
 {
  "name": "Tony Bradley",
  "team": "ATL",
  "pos": "C",
  "gp": 40,
  "mpg": 11.26,
  "rates": {
   "pts": 0.35953,
   "fg3m": 0.00444,
   "reb": 0.25744,
   "ast": 0.04883,
   "stl": 0.01332,
   "blk": 0.01554,
   "fgm": 0.14204,
   "fga": 0.25966,
   "ftm": 0.07102,
   "fta": 0.09543,
   "tov": 0.03995
  }
 },
 {
  "name": "Jaylen Clark",
  "team": "MIN",
  "pos": "SG",
  "gp": 68,
  "mpg": 13.06,
  "rates": {
   "pts": 0.30977,
   "fg3m": 0.03717,
   "reb": 0.13517,
   "ast": 0.04844,
   "stl": 0.05294,
   "blk": 0.01014,
   "fgm": 0.11152,
   "fga": 0.25682,
   "ftm": 0.04956,
   "fta": 0.07547,
   "tov": 0.02591
  }
 },
 {
  "name": "Brandon Clarke",
  "team": "MEM",
  "pos": "PF/C",
  "gp": 2,
  "mpg": 10.22,
  "rates": {
   "pts": 0.39152,
   "fg3m": 0.0,
   "reb": 0.29364,
   "ast": 0.04894,
   "stl": 0.09788,
   "blk": 0.0,
   "fgm": 0.14682,
   "fga": 0.44046,
   "ftm": 0.09788,
   "fta": 0.19576,
   "tov": 0.0
  }
 },
 {
  "name": "Nicolas Batum",
  "team": "LAC",
  "pos": "PF",
  "gp": 74,
  "mpg": 17.49,
  "rates": {
   "pts": 0.22633,
   "fg3m": 0.07107,
   "reb": 0.14213,
   "ast": 0.04944,
   "stl": 0.03631,
   "blk": 0.01777,
   "fgm": 0.07416,
   "fga": 0.18385,
   "ftm": 0.00695,
   "fta": 0.0085,
   "tov": 0.02858
  }
 },
 {
  "name": "Caleb Martin",
  "team": "DAL",
  "pos": "SG/SF",
  "gp": 58,
  "mpg": 14.76,
  "rates": {
   "pts": 0.26511,
   "fg3m": 0.02336,
   "reb": 0.16701,
   "ast": 0.0946,
   "stl": 0.04672,
   "blk": 0.01752,
   "fgm": 0.09927,
   "fga": 0.22073,
   "ftm": 0.04321,
   "fta": 0.07124,
   "tov": 0.04672
  }
 },
 {
  "name": "Hugo Gonzalez",
  "team": "BOS",
  "pos": "SG/SF",
  "gp": 74,
  "mpg": 14.65,
  "rates": {
   "pts": 0.26663,
   "fg3m": 0.03875,
   "reb": 0.22695,
   "ast": 0.0369,
   "stl": 0.03875,
   "blk": 0.01937,
   "fgm": 0.10794,
   "fga": 0.22695,
   "ftm": 0.01199,
   "fta": 0.02399,
   "tov": 0.03506
  }
 },
 {
  "name": "Joan Beringer",
  "team": "MIN",
  "pos": "C",
  "gp": 40,
  "mpg": 7.85,
  "rates": {
   "pts": 0.4966,
   "fg3m": 0.0,
   "reb": 0.29287,
   "ast": 0.04138,
   "stl": 0.02228,
   "blk": 0.08277,
   "fgm": 0.20692,
   "fga": 0.31197,
   "ftm": 0.08277,
   "fta": 0.11778,
   "tov": 0.03502
  }
 },
 {
  "name": "Riley Minix",
  "team": "CLE",
  "pos": "SF",
  "gp": 9,
  "mpg": 6.45,
  "rates": {
   "pts": 0.60258,
   "fg3m": 0.06887,
   "reb": 0.1033,
   "ast": 0.08608,
   "stl": 0.03443,
   "blk": 0.01722,
   "fgm": 0.24103,
   "fga": 0.39598,
   "ftm": 0.05165,
   "fta": 0.05165,
   "tov": 0.05165
  }
 },
 {
  "name": "Noah Penda",
  "team": "ORL",
  "pos": "SF/PF",
  "gp": 59,
  "mpg": 12.84,
  "rates": {
   "pts": 0.29975,
   "fg3m": 0.03961,
   "reb": 0.24693,
   "ast": 0.09243,
   "stl": 0.03961,
   "blk": 0.02377,
   "fgm": 0.10828,
   "fga": 0.26806,
   "ftm": 0.04358,
   "fta": 0.06338,
   "tov": 0.05546
  }
 },
 {
  "name": "Omer Yurtseven",
  "team": "FA",
  "pos": "C",
  "gp": 9,
  "mpg": 11.55,
  "rates": {
   "pts": 0.32708,
   "fg3m": 0.0,
   "reb": 0.2886,
   "ast": 0.07696,
   "stl": 0.01924,
   "blk": 0.00962,
   "fgm": 0.10582,
   "fga": 0.25012,
   "ftm": 0.11544,
   "fta": 0.17316,
   "tov": 0.08658
  }
 },
 {
  "name": "Larry Nance Jr.",
  "team": "CLE",
  "pos": "PF/C",
  "gp": 35,
  "mpg": 12.82,
  "rates": {
   "pts": 0.29414,
   "fg3m": 0.04679,
   "reb": 0.20723,
   "ast": 0.07576,
   "stl": 0.04679,
   "blk": 0.01337,
   "fgm": 0.11587,
   "fga": 0.27631,
   "ftm": 0.0156,
   "fta": 0.0312,
   "tov": 0.04457
  }
 },
 {
  "name": "Clint Capela",
  "team": "HOU",
  "pos": "C",
  "gp": 75,
  "mpg": 12.34,
  "rates": {
   "pts": 0.30463,
   "fg3m": 0.00108,
   "reb": 0.37268,
   "ast": 0.05401,
   "stl": 0.03889,
   "blk": 0.06806,
   "fgm": 0.12747,
   "fga": 0.24522,
   "ftm": 0.04861,
   "fta": 0.08426,
   "tov": 0.04429
  }
 },
 {
  "name": "Koby Brea",
  "team": "PHO",
  "pos": "SG/SF",
  "gp": 12,
  "mpg": 6.99,
  "rates": {
   "pts": 0.53657,
   "fg3m": 0.15501,
   "reb": 0.09539,
   "ast": 0.11924,
   "stl": 0.01192,
   "blk": 0.0,
   "fgm": 0.17886,
   "fga": 0.42925,
   "ftm": 0.02385,
   "fta": 0.02385,
   "tov": 0.04769
  }
 },
 {
  "name": "Tolu Smith",
  "team": "DET",
  "pos": "PF",
  "gp": 15,
  "mpg": 9.16,
  "rates": {
   "pts": 0.40747,
   "fg3m": 0.0,
   "reb": 0.35654,
   "ast": 0.09459,
   "stl": 0.01455,
   "blk": 0.04366,
   "fgm": 0.13097,
   "fga": 0.26195,
   "ftm": 0.14553,
   "fta": 0.21829,
   "tov": 0.05093
  }
 },
 {
  "name": "DaRon Holmes II",
  "team": "DEN",
  "pos": "PF",
  "gp": 25,
  "mpg": 8.38,
  "rates": {
   "pts": 0.44388,
   "fg3m": 0.09546,
   "reb": 0.16705,
   "ast": 0.07637,
   "stl": 0.00477,
   "blk": 0.02864,
   "fgm": 0.14796,
   "fga": 0.29115,
   "ftm": 0.0525,
   "fta": 0.06682,
   "tov": 0.05727
  }
 },
 {
  "name": "Patrick Baldwin",
  "team": "SAC",
  "pos": "SF",
  "gp": 9,
  "mpg": 11.39,
  "rates": {
   "pts": 0.32206,
   "fg3m": 0.05856,
   "reb": 0.22446,
   "ast": 0.0488,
   "stl": 0.02928,
   "blk": 0.0488,
   "fgm": 0.10735,
   "fga": 0.2635,
   "ftm": 0.0488,
   "fta": 0.06831,
   "tov": 0.0488
  }
 },
 {
  "name": "Dalen Terry",
  "team": "PHI",
  "pos": "SG/SF",
  "gp": 48,
  "mpg": 11.48,
  "rates": {
   "pts": 0.3194,
   "fg3m": 0.04355,
   "reb": 0.15607,
   "ast": 0.11977,
   "stl": 0.05263,
   "blk": 0.02722,
   "fgm": 0.1234,
   "fga": 0.28129,
   "ftm": 0.02904,
   "fta": 0.05444,
   "tov": 0.04718
  }
 },
 {
  "name": "Zeke Nnaji",
  "team": "DEN",
  "pos": "PF",
  "gp": 52,
  "mpg": 12.04,
  "rates": {
   "pts": 0.3035,
   "fg3m": 0.02236,
   "reb": 0.21724,
   "ast": 0.04632,
   "stl": 0.02716,
   "blk": 0.03834,
   "fgm": 0.11341,
   "fga": 0.2412,
   "ftm": 0.05431,
   "fta": 0.07028,
   "tov": 0.04313
  }
 },
 {
  "name": "Jeremy Sochan",
  "team": "NYK",
  "pos": "PF",
  "gp": 44,
  "mpg": 10.65,
  "rates": {
   "pts": 0.34149,
   "fg3m": 0.02348,
   "reb": 0.22837,
   "ast": 0.08324,
   "stl": 0.03628,
   "blk": 0.01494,
   "fgm": 0.13873,
   "fga": 0.27746,
   "ftm": 0.04055,
   "fta": 0.05549,
   "tov": 0.04482
  }
 },
 {
  "name": "Myron Gardner",
  "team": "MIA",
  "pos": "SF",
  "gp": 45,
  "mpg": 9.12,
  "rates": {
   "pts": 0.39708,
   "fg3m": 0.06334,
   "reb": 0.2972,
   "ast": 0.10719,
   "stl": 0.04872,
   "blk": 0.01949,
   "fgm": 0.14373,
   "fga": 0.29963,
   "ftm": 0.04629,
   "fta": 0.06334,
   "tov": 0.04141
  }
 },
 {
  "name": "Mohamed Diawara",
  "team": "NYK",
  "pos": "PF",
  "gp": 69,
  "mpg": 9.19,
  "rates": {
   "pts": 0.38792,
   "fg3m": 0.07569,
   "reb": 0.14823,
   "ast": 0.08358,
   "stl": 0.02681,
   "blk": 0.00946,
   "fgm": 0.14192,
   "fga": 0.33588,
   "ftm": 0.02838,
   "fta": 0.03785,
   "tov": 0.04731
  }
 },
 {
  "name": "Keaton Wallace",
  "team": "ATL",
  "pos": "PG",
  "gp": 53,
  "mpg": 10.11,
  "rates": {
   "pts": 0.34703,
   "fg3m": 0.0709,
   "reb": 0.10448,
   "ast": 0.17538,
   "stl": 0.04478,
   "blk": 0.00933,
   "fgm": 0.12687,
   "fga": 0.31904,
   "ftm": 0.02239,
   "fta": 0.03358,
   "tov": 0.05224
  }
 },
 {
  "name": "Olivier Sarr",
  "team": "CLE",
  "pos": "C",
  "gp": 4,
  "mpg": 9.84,
  "rates": {
   "pts": 0.35578,
   "fg3m": 0.05083,
   "reb": 0.27954,
   "ast": 0.12706,
   "stl": 0.05083,
   "blk": 0.07624,
   "fgm": 0.12706,
   "fga": 0.17789,
   "ftm": 0.05083,
   "fta": 0.12706,
   "tov": 0.05083
  }
 },
 {
  "name": "Yuki Kawamura",
  "team": "CHI",
  "pos": "PG",
  "gp": 18,
  "mpg": 11.61,
  "rates": {
   "pts": 0.2966,
   "fg3m": 0.05262,
   "reb": 0.15787,
   "ast": 0.22484,
   "stl": 0.04306,
   "blk": 0.0,
   "fgm": 0.08133,
   "fga": 0.24876,
   "ftm": 0.08133,
   "fta": 0.09089,
   "tov": 0.06697
  }
 },
 {
  "name": "Trayce Jackson-Davis",
  "team": "TOR",
  "pos": "PF/C",
  "gp": 53,
  "mpg": 9.36,
  "rates": {
   "pts": 0.36488,
   "fg3m": 0.00202,
   "reb": 0.29231,
   "ast": 0.07862,
   "stl": 0.03427,
   "blk": 0.04838,
   "fgm": 0.14313,
   "fga": 0.24997,
   "ftm": 0.07661,
   "fta": 0.14918,
   "tov": 0.04435
  }
 },
 {
  "name": "Drew Timme",
  "team": "LAL",
  "pos": "C",
  "gp": 27,
  "mpg": 8.71,
  "rates": {
   "pts": 0.39135,
   "fg3m": 0.04679,
   "reb": 0.14038,
   "ast": 0.09784,
   "stl": 0.02552,
   "blk": 0.0,
   "fgm": 0.16164,
   "fga": 0.28075,
   "ftm": 0.02127,
   "fta": 0.03828,
   "tov": 0.0553
  }
 },
 {
  "name": "Taj Gibson",
  "team": "MEM",
  "pos": "PF",
  "gp": 10,
  "mpg": 9.69,
  "rates": {
   "pts": 0.351,
   "fg3m": 0.03097,
   "reb": 0.27873,
   "ast": 0.06194,
   "stl": 0.02065,
   "blk": 0.01032,
   "fgm": 0.12388,
   "fga": 0.26841,
   "ftm": 0.07226,
   "fta": 0.08259,
   "tov": 0.01032
  }
 },
 {
  "name": "A.J. Johnson",
  "team": "DAL",
  "pos": "SG",
  "gp": 48,
  "mpg": 9.45,
  "rates": {
   "pts": 0.35286,
   "fg3m": 0.02646,
   "reb": 0.1213,
   "ast": 0.10365,
   "stl": 0.02426,
   "blk": 0.00662,
   "fgm": 0.12571,
   "fga": 0.38815,
   "ftm": 0.07498,
   "fta": 0.08822,
   "tov": 0.06616
  }
 },
 {
  "name": "Dwight Powell",
  "team": "DAL",
  "pos": "C",
  "gp": 63,
  "mpg": 14.36,
  "rates": {
   "pts": 0.23219,
   "fg3m": 0.00221,
   "reb": 0.28416,
   "ast": 0.07519,
   "stl": 0.03759,
   "blk": 0.02322,
   "fgm": 0.07187,
   "fga": 0.11167,
   "ftm": 0.08624,
   "fta": 0.12384,
   "tov": 0.04533
  }
 },
 {
  "name": "Isaiah Stevens",
  "team": "SAC",
  "pos": "PG",
  "gp": 3,
  "mpg": 14.26,
  "rates": {
   "pts": 0.23374,
   "fg3m": 0.0,
   "reb": 0.07012,
   "ast": 0.23374,
   "stl": 0.11687,
   "blk": 0.0,
   "fgm": 0.07012,
   "fga": 0.16362,
   "ftm": 0.09349,
   "fta": 0.09349,
   "tov": 0.04675
  }
 },
 {
  "name": "Dorian Finney-Smith",
  "team": "HOU",
  "pos": "SF/PF",
  "gp": 37,
  "mpg": 16.77,
  "rates": {
   "pts": 0.19829,
   "fg3m": 0.04353,
   "reb": 0.14992,
   "ast": 0.05803,
   "stl": 0.02579,
   "blk": 0.00967,
   "fgm": 0.07093,
   "fga": 0.21279,
   "ftm": 0.0129,
   "fta": 0.01451,
   "tov": 0.03547
  }
 },
 {
  "name": "Malevy Leons",
  "team": "GSW",
  "pos": "SF",
  "gp": 25,
  "mpg": 11.06,
  "rates": {
   "pts": 0.3002,
   "fg3m": 0.01447,
   "reb": 0.19169,
   "ast": 0.08319,
   "stl": 0.05064,
   "blk": 0.03255,
   "fgm": 0.11574,
   "fga": 0.26041,
   "ftm": 0.05425,
   "fta": 0.06872,
   "tov": 0.04702
  }
 },
 {
  "name": "James Wiseman",
  "team": "FA",
  "pos": "C",
  "gp": 4,
  "mpg": 14.61,
  "rates": {
   "pts": 0.22241,
   "fg3m": 0.0,
   "reb": 0.13687,
   "ast": 0.05133,
   "stl": 0.0,
   "blk": 0.01711,
   "fgm": 0.10265,
   "fga": 0.17109,
   "ftm": 0.01711,
   "fta": 0.03422,
   "tov": 0.08554
  }
 },
 {
  "name": "Enrique Freeman",
  "team": "MIN",
  "pos": "PF",
  "gp": 4,
  "mpg": 9.3,
  "rates": {
   "pts": 0.34931,
   "fg3m": 0.05374,
   "reb": 0.2687,
   "ast": 0.05374,
   "stl": 0.05374,
   "blk": 0.08061,
   "fgm": 0.10748,
   "fga": 0.21496,
   "ftm": 0.08061,
   "fta": 0.10748,
   "tov": 0.05374
  }
 },
 {
  "name": "Kelly Olynyk",
  "team": "SAS",
  "pos": "PF/C",
  "gp": 41,
  "mpg": 8.79,
  "rates": {
   "pts": 0.36921,
   "fg3m": 0.03331,
   "reb": 0.21097,
   "ast": 0.13602,
   "stl": 0.04164,
   "blk": 0.00833,
   "fgm": 0.13047,
   "fga": 0.26649,
   "ftm": 0.07495,
   "fta": 0.10549,
   "tov": 0.06662
  }
 },
 {
  "name": "Amir Coffey",
  "team": "PHO",
  "pos": "SG",
  "gp": 46,
  "mpg": 10.66,
  "rates": {
   "pts": 0.30377,
   "fg3m": 0.03466,
   "reb": 0.11621,
   "ast": 0.05505,
   "stl": 0.01835,
   "blk": 0.01019,
   "fgm": 0.11213,
   "fga": 0.23038,
   "ftm": 0.04485,
   "fta": 0.05708,
   "tov": 0.01835
  }
 },
 {
  "name": "Alex Antetokounmpo",
  "team": "MIL",
  "pos": "SF",
  "gp": 6,
  "mpg": 3.44,
  "rates": {
   "pts": 0.92084,
   "fg3m": 0.09693,
   "reb": 0.29079,
   "ast": 0.04847,
   "stl": 0.0,
   "blk": 0.04847,
   "fgm": 0.1454,
   "fga": 0.38772,
   "ftm": 0.53312,
   "fta": 0.72698,
   "tov": 0.04847
  }
 },
 {
  "name": "Jamison Battle",
  "team": "TOR",
  "pos": "SF",
  "gp": 61,
  "mpg": 8.47,
  "rates": {
   "pts": 0.37153,
   "fg3m": 0.06773,
   "reb": 0.17222,
   "ast": 0.04644,
   "stl": 0.01355,
   "blk": 0.00581,
   "fgm": 0.14319,
   "fga": 0.28058,
   "ftm": 0.01742,
   "fta": 0.02709,
   "tov": 0.03677
  }
 },
 {
  "name": "Mark Sears",
  "team": "FA",
  "pos": "PG",
  "gp": 7,
  "mpg": 3.72,
  "rates": {
   "pts": 0.84399,
   "fg3m": 0.15345,
   "reb": 0.07673,
   "ast": 0.07673,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.23018,
   "fga": 0.49872,
   "ftm": 0.23018,
   "fta": 0.30691,
   "tov": 0.15345
  }
 },
 {
  "name": "Miles Kelly",
  "team": "FA",
  "pos": "PG",
  "gp": 14,
  "mpg": 9.55,
  "rates": {
   "pts": 0.32154,
   "fg3m": 0.07478,
   "reb": 0.17946,
   "ast": 0.08973,
   "stl": 0.02991,
   "blk": 0.00748,
   "fgm": 0.11964,
   "fga": 0.32901,
   "ftm": 0.00748,
   "fta": 0.00748,
   "tov": 0.04487
  }
 },
 {
  "name": "Khaman Maluach",
  "team": "PHO",
  "pos": "C",
  "gp": 46,
  "mpg": 8.94,
  "rates": {
   "pts": 0.33817,
   "fg3m": 0.01216,
   "reb": 0.32357,
   "ast": 0.0146,
   "stl": 0.01216,
   "blk": 0.08029,
   "fgm": 0.13624,
   "fga": 0.25545,
   "ftm": 0.05352,
   "fta": 0.07542,
   "tov": 0.06082
  }
 },
 {
  "name": "Monte Morris",
  "team": "FA",
  "pos": "PG",
  "gp": 6,
  "mpg": 10.77,
  "rates": {
   "pts": 0.27857,
   "fg3m": 0.03095,
   "reb": 0.10833,
   "ast": 0.13928,
   "stl": 0.01548,
   "blk": 0.01548,
   "fgm": 0.10833,
   "fga": 0.30952,
   "ftm": 0.03095,
   "fta": 0.0619,
   "tov": 0.03095
  }
 },
 {
  "name": "Emanuel Miller",
  "team": "SAS",
  "pos": "PF",
  "gp": 5,
  "mpg": 6.61,
  "rates": {
   "pts": 0.45386,
   "fg3m": 0.06051,
   "reb": 0.09077,
   "ast": 0.12103,
   "stl": 0.06051,
   "blk": 0.0,
   "fgm": 0.18154,
   "fga": 0.39334,
   "ftm": 0.03026,
   "fta": 0.06051,
   "tov": 0.0
  }
 },
 {
  "name": "CJ Huntley",
  "team": "PHO",
  "pos": "SF",
  "gp": 4,
  "mpg": 10.1,
  "rates": {
   "pts": 0.29703,
   "fg3m": 0.0,
   "reb": 0.12376,
   "ast": 0.0495,
   "stl": 0.02475,
   "blk": 0.0,
   "fgm": 0.14851,
   "fga": 0.27228,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Chris Livingston",
  "team": "FA",
  "pos": "SF",
  "gp": 3,
  "mpg": 5.81,
  "rates": {
   "pts": 0.51625,
   "fg3m": 0.0,
   "reb": 0.17208,
   "ast": 0.05736,
   "stl": 0.05736,
   "blk": 0.0,
   "fgm": 0.22945,
   "fga": 0.40153,
   "ftm": 0.05736,
   "fta": 0.05736,
   "tov": 0.0
  }
 },
 {
  "name": "Tyus Jones",
  "team": "DEN",
  "pos": "PG",
  "gp": 67,
  "mpg": 14.61,
  "rates": {
   "pts": 0.20334,
   "fg3m": 0.04087,
   "reb": 0.07766,
   "ast": 0.16247,
   "stl": 0.03781,
   "blk": 0.00307,
   "fgm": 0.07766,
   "fga": 0.22378,
   "ftm": 0.00715,
   "fta": 0.0092,
   "tov": 0.02452
  }
 },
 {
  "name": "Duop Reath",
  "team": "FA",
  "pos": "C",
  "gp": 32,
  "mpg": 8.07,
  "rates": {
   "pts": 0.36408,
   "fg3m": 0.08908,
   "reb": 0.14718,
   "ast": 0.03873,
   "stl": 0.01937,
   "blk": 0.03099,
   "fgm": 0.12782,
   "fga": 0.28662,
   "ftm": 0.01937,
   "fta": 0.02324,
   "tov": 0.02711
  }
 },
 {
  "name": "Chris Paul",
  "team": "FA",
  "pos": "PG",
  "gp": 16,
  "mpg": 14.22,
  "rates": {
   "pts": 0.20655,
   "fg3m": 0.04395,
   "reb": 0.12305,
   "ast": 0.23292,
   "stl": 0.04834,
   "blk": 0.0,
   "fgm": 0.0791,
   "fga": 0.2461,
   "ftm": 0.00439,
   "fta": 0.00879,
   "tov": 0.07031
  }
 },
 {
  "name": "Julian Phillips",
  "team": "MIN",
  "pos": "SF",
  "gp": 48,
  "mpg": 8.9,
  "rates": {
   "pts": 0.32784,
   "fg3m": 0.04683,
   "reb": 0.11475,
   "ast": 0.02342,
   "stl": 0.05386,
   "blk": 0.01873,
   "fgm": 0.11943,
   "fga": 0.28335,
   "ftm": 0.04215,
   "fta": 0.05386,
   "tov": 0.02576
  }
 },
 {
  "name": "David Jones Garcia",
  "team": "SAS",
  "pos": "SF",
  "gp": 11,
  "mpg": 6.18,
  "rates": {
   "pts": 0.47082,
   "fg3m": 0.04414,
   "reb": 0.19127,
   "ast": 0.26484,
   "stl": 0.08828,
   "blk": 0.01471,
   "fgm": 0.19127,
   "fga": 0.36783,
   "ftm": 0.04414,
   "fta": 0.08828,
   "tov": 0.07357
  }
 },
 {
  "name": "Bronny James",
  "team": "LAL",
  "pos": "PG",
  "gp": 42,
  "mpg": 8.94,
  "rates": {
   "pts": 0.32491,
   "fg3m": 0.05859,
   "reb": 0.06125,
   "ast": 0.13582,
   "stl": 0.0506,
   "blk": 0.01065,
   "fgm": 0.12517,
   "fga": 0.30627,
   "ftm": 0.01598,
   "fta": 0.01864,
   "tov": 0.06658
  }
 },
 {
  "name": "Curtis Jones",
  "team": "DEN",
  "pos": "SG",
  "gp": 10,
  "mpg": 8.77,
  "rates": {
   "pts": 0.33061,
   "fg3m": 0.0684,
   "reb": 0.1254,
   "ast": 0.114,
   "stl": 0.0456,
   "blk": 0.0,
   "fgm": 0.1254,
   "fga": 0.30781,
   "ftm": 0.0114,
   "fta": 0.0228,
   "tov": 0.0228
  }
 },
 {
  "name": "Kobe Bufkin",
  "team": "FA",
  "pos": "PG/SG",
  "gp": 16,
  "mpg": 7.47,
  "rates": {
   "pts": 0.38499,
   "fg3m": 0.04185,
   "reb": 0.1088,
   "ast": 0.08369,
   "stl": 0.01674,
   "blk": 0.02511,
   "fgm": 0.12554,
   "fga": 0.41847,
   "ftm": 0.09206,
   "fta": 0.10043,
   "tov": 0.04185
  }
 },
 {
  "name": "Cam Christie",
  "team": "LAC",
  "pos": "SG",
  "gp": 55,
  "mpg": 8.72,
  "rates": {
   "pts": 0.32517,
   "fg3m": 0.02501,
   "reb": 0.1605,
   "ast": 0.06462,
   "stl": 0.03335,
   "blk": 0.00625,
   "fgm": 0.11047,
   "fga": 0.28973,
   "ftm": 0.07921,
   "fta": 0.10422,
   "tov": 0.04586
  }
 },
 {
  "name": "Norchad Omier",
  "team": "LAC",
  "pos": "PF",
  "gp": 6,
  "mpg": 3.94,
  "rates": {
   "pts": 0.71831,
   "fg3m": 0.0,
   "reb": 0.29577,
   "ast": 0.08451,
   "stl": 0.04225,
   "blk": 0.0,
   "fgm": 0.29577,
   "fga": 0.42254,
   "ftm": 0.12676,
   "fta": 0.12676,
   "tov": 0.0
  }
 },
 {
  "name": "Kevon Looney",
  "team": "NOR",
  "pos": "C",
  "gp": 21,
  "mpg": 14.64,
  "rates": {
   "pts": 0.19186,
   "fg3m": 0.0065,
   "reb": 0.38372,
   "ast": 0.11056,
   "stl": 0.02927,
   "blk": 0.03252,
   "fgm": 0.0813,
   "fga": 0.19511,
   "ftm": 0.02276,
   "fta": 0.03252,
   "tov": 0.02927
  }
 },
 {
  "name": "Jae'Sean Tate",
  "team": "HOU",
  "pos": "SF",
  "gp": 46,
  "mpg": 8.8,
  "rates": {
   "pts": 0.31873,
   "fg3m": 0.02471,
   "reb": 0.18037,
   "ast": 0.06177,
   "stl": 0.02471,
   "blk": 0.00741,
   "fgm": 0.13836,
   "fga": 0.26931,
   "ftm": 0.0173,
   "fta": 0.02718,
   "tov": 0.03953
  }
 },
 {
  "name": "Rocco Zikarsky",
  "team": "MIN",
  "pos": "C",
  "gp": 5,
  "mpg": 7.3,
  "rates": {
   "pts": 0.38374,
   "fg3m": 0.0,
   "reb": 0.38374,
   "ast": 0.05482,
   "stl": 0.0,
   "blk": 0.13705,
   "fgm": 0.13705,
   "fga": 0.21928,
   "ftm": 0.10964,
   "fta": 0.10964,
   "tov": 0.02741
  }
 },
 {
  "name": "Christian Koloko",
  "team": "ATL",
  "pos": "C",
  "gp": 27,
  "mpg": 13.21,
  "rates": {
   "pts": 0.20466,
   "fg3m": 0.0028,
   "reb": 0.22709,
   "ast": 0.05046,
   "stl": 0.03925,
   "blk": 0.06448,
   "fgm": 0.08691,
   "fga": 0.20747,
   "ftm": 0.02804,
   "fta": 0.04205,
   "tov": 0.04486
  }
 },
 {
  "name": "Antonio Reeves",
  "team": "CHA",
  "pos": "SG",
  "gp": 10,
  "mpg": 6.77,
  "rates": {
   "pts": 0.39892,
   "fg3m": 0.10342,
   "reb": 0.1182,
   "ast": 0.04432,
   "stl": 0.01477,
   "blk": 0.0,
   "fgm": 0.14775,
   "fga": 0.29549,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.01477
  }
 },
 {
  "name": "Gary Harris",
  "team": "MIL",
  "pos": "SG",
  "gp": 48,
  "mpg": 13.77,
  "rates": {
   "pts": 0.19372,
   "fg3m": 0.04238,
   "reb": 0.09232,
   "ast": 0.07719,
   "stl": 0.04086,
   "blk": 0.01362,
   "fgm": 0.06962,
   "fga": 0.1574,
   "ftm": 0.01211,
   "fta": 0.01362,
   "tov": 0.02876
  }
 },
 {
  "name": "Pat Connaughton",
  "team": "CHA",
  "pos": "SG/SF",
  "gp": 42,
  "mpg": 7.06,
  "rates": {
   "pts": 0.37095,
   "fg3m": 0.07082,
   "reb": 0.20571,
   "ast": 0.0607,
   "stl": 0.0371,
   "blk": 0.00337,
   "fgm": 0.12815,
   "fga": 0.28665,
   "ftm": 0.04384,
   "fta": 0.06745,
   "tov": 0.0371
  }
 },
 {
  "name": "Jonathan Isaac",
  "team": "ORL",
  "pos": "PF",
  "gp": 52,
  "mpg": 10.02,
  "rates": {
   "pts": 0.25726,
   "fg3m": 0.01344,
   "reb": 0.25342,
   "ast": 0.04224,
   "stl": 0.0384,
   "blk": 0.05951,
   "fgm": 0.08831,
   "fga": 0.20926,
   "ftm": 0.06719,
   "fta": 0.11135,
   "tov": 0.03456
  }
 },
 {
  "name": "Mo Bamba",
  "team": "FA",
  "pos": "C",
  "gp": 4,
  "mpg": 10.95,
  "rates": {
   "pts": 0.22831,
   "fg3m": 0.0,
   "reb": 0.50228,
   "ast": 0.02283,
   "stl": 0.0,
   "blk": 0.06849,
   "fgm": 0.11416,
   "fga": 0.25114,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.04566
  }
 },
 {
  "name": "John Tonje",
  "team": "BOS",
  "pos": "SF",
  "gp": 6,
  "mpg": 6.98,
  "rates": {
   "pts": 0.358,
   "fg3m": 0.0716,
   "reb": 0.1432,
   "ast": 0.04773,
   "stl": 0.04773,
   "blk": 0.0,
   "fgm": 0.09547,
   "fga": 0.33413,
   "ftm": 0.09547,
   "fta": 0.09547,
   "tov": 0.0
  }
 },
 {
  "name": "J.D. Davison",
  "team": "HOU",
  "pos": "PG",
  "gp": 28,
  "mpg": 7.8,
  "rates": {
   "pts": 0.31591,
   "fg3m": 0.03663,
   "reb": 0.15567,
   "ast": 0.16024,
   "stl": 0.02747,
   "blk": 0.02747,
   "fgm": 0.10988,
   "fga": 0.29302,
   "ftm": 0.05952,
   "fta": 0.08699,
   "tov": 0.03205
  }
 },
 {
  "name": "Lachlan Olbrich",
  "team": "CHI",
  "pos": "PF",
  "gp": 37,
  "mpg": 9.3,
  "rates": {
   "pts": 0.25855,
   "fg3m": 0.00581,
   "reb": 0.32536,
   "ast": 0.12201,
   "stl": 0.03486,
   "blk": 0.02324,
   "fgm": 0.10458,
   "fga": 0.22369,
   "ftm": 0.04358,
   "fta": 0.1162,
   "tov": 0.04648
  }
 },
 {
  "name": "Hunter Dickinson",
  "team": "NOR",
  "pos": "C",
  "gp": 5,
  "mpg": 8.49,
  "rates": {
   "pts": 0.28257,
   "fg3m": 0.0,
   "reb": 0.11774,
   "ast": 0.0471,
   "stl": 0.02355,
   "blk": 0.0471,
   "fgm": 0.11774,
   "fga": 0.32967,
   "ftm": 0.0471,
   "fta": 0.0471,
   "tov": 0.07064
  }
 },
 {
  "name": "Kevin McCullar Jr",
  "team": "NYK",
  "pos": "SF",
  "gp": 21,
  "mpg": 7.38,
  "rates": {
   "pts": 0.32258,
   "fg3m": 0.05161,
   "reb": 0.18065,
   "ast": 0.12903,
   "stl": 0.05806,
   "blk": 0.0,
   "fgm": 0.12903,
   "fga": 0.30323,
   "ftm": 0.0129,
   "fta": 0.03226,
   "tov": 0.07742
  }
 },
 {
  "name": "Lindy Waters III",
  "team": "SAS",
  "pos": "SG/SF",
  "gp": 40,
  "mpg": 7.12,
  "rates": {
   "pts": 0.3337,
   "fg3m": 0.09484,
   "reb": 0.10187,
   "ast": 0.06674,
   "stl": 0.02108,
   "blk": 0.00351,
   "fgm": 0.11592,
   "fga": 0.30912,
   "ftm": 0.00703,
   "fta": 0.01054,
   "tov": 0.02459
  }
 },
 {
  "name": "Chaz Lanier",
  "team": "DET",
  "pos": "SG",
  "gp": 34,
  "mpg": 7.71,
  "rates": {
   "pts": 0.3053,
   "fg3m": 0.07251,
   "reb": 0.08778,
   "ast": 0.06488,
   "stl": 0.02671,
   "blk": 0.0,
   "fgm": 0.10686,
   "fga": 0.33965,
   "ftm": 0.01908,
   "fta": 0.0229,
   "tov": 0.01145
  }
 },
 {
  "name": "Andre Jackson Jr.",
  "team": "MIL",
  "pos": "SG/SF",
  "gp": 48,
  "mpg": 8.5,
  "rates": {
   "pts": 0.2769,
   "fg3m": 0.03676,
   "reb": 0.17643,
   "ast": 0.10537,
   "stl": 0.04656,
   "blk": 0.0098,
   "fgm": 0.09557,
   "fga": 0.29161,
   "ftm": 0.04901,
   "fta": 0.07842,
   "tov": 0.07596
  }
 },
 {
  "name": "Luke Travers",
  "team": "FA",
  "pos": "SG",
  "gp": 12,
  "mpg": 8.59,
  "rates": {
   "pts": 0.27158,
   "fg3m": 0.0097,
   "reb": 0.23278,
   "ast": 0.08729,
   "stl": 0.0679,
   "blk": 0.0388,
   "fgm": 0.08729,
   "fga": 0.34918,
   "ftm": 0.08729,
   "fta": 0.08729,
   "tov": 0.0291
  }
 },
 {
  "name": "Chris Boucher",
  "team": "FA",
  "pos": "PF/C",
  "gp": 9,
  "mpg": 10.46,
  "rates": {
   "pts": 0.22301,
   "fg3m": 0.02124,
   "reb": 0.19115,
   "ast": 0.03186,
   "stl": 0.0531,
   "blk": 0.07434,
   "fgm": 0.08496,
   "fga": 0.26549,
   "ftm": 0.03186,
   "fta": 0.04248,
   "tov": 0.01062
  }
 },
 {
  "name": "Caleb Houstan",
  "team": "FA",
  "pos": "SF",
  "gp": 18,
  "mpg": 4.19,
  "rates": {
   "pts": 0.55654,
   "fg3m": 0.14576,
   "reb": 0.14576,
   "ast": 0.053,
   "stl": 0.0265,
   "blk": 0.01325,
   "fgm": 0.18551,
   "fga": 0.34452,
   "ftm": 0.03975,
   "fta": 0.03975,
   "tov": 0.053
  }
 },
 {
  "name": "Jeff Green",
  "team": "HOU",
  "pos": "PF",
  "gp": 30,
  "mpg": 5.83,
  "rates": {
   "pts": 0.38326,
   "fg3m": 0.06864,
   "reb": 0.14301,
   "ast": 0.04576,
   "stl": 0.01144,
   "blk": 0.01144,
   "fgm": 0.14301,
   "fga": 0.38898,
   "ftm": 0.0286,
   "fta": 0.0286,
   "tov": 0.02288
  }
 },
 {
  "name": "Alijah Martin",
  "team": "TOR",
  "pos": "SG",
  "gp": 23,
  "mpg": 6.33,
  "rates": {
   "pts": 0.35023,
   "fg3m": 0.02747,
   "reb": 0.14421,
   "ast": 0.08241,
   "stl": 0.05494,
   "blk": 0.02747,
   "fgm": 0.10988,
   "fga": 0.34337,
   "ftm": 0.10301,
   "fta": 0.13048,
   "tov": 0.05494
  }
 },
 {
  "name": "Yang Hansen",
  "team": "POR",
  "pos": "C",
  "gp": 43,
  "mpg": 6.97,
  "rates": {
   "pts": 0.31677,
   "fg3m": 0.01667,
   "reb": 0.22007,
   "ast": 0.07336,
   "stl": 0.01,
   "blk": 0.03334,
   "fgm": 0.10337,
   "fga": 0.33344,
   "ftm": 0.09336,
   "fta": 0.11337,
   "tov": 0.1067
  }
 },
 {
  "name": "Hunter Tyson",
  "team": "FA",
  "pos": "SF",
  "gp": 21,
  "mpg": 7.71,
  "rates": {
   "pts": 0.28413,
   "fg3m": 0.04324,
   "reb": 0.22236,
   "ast": 0.105,
   "stl": 0.01235,
   "blk": 0.00618,
   "fgm": 0.08647,
   "fga": 0.32119,
   "ftm": 0.06794,
   "fta": 0.0803,
   "tov": 0.03088
  }
 },
 {
  "name": "Ariel Hukporti",
  "team": "NYK",
  "pos": "C",
  "gp": 54,
  "mpg": 9.22,
  "rates": {
   "pts": 0.23493,
   "fg3m": 0.00201,
   "reb": 0.31927,
   "ast": 0.05823,
   "stl": 0.01807,
   "blk": 0.05221,
   "fgm": 0.09036,
   "fga": 0.16064,
   "ftm": 0.05221,
   "fta": 0.06626,
   "tov": 0.06225
  }
 },
 {
  "name": "Chris Youngblood",
  "team": "POR",
  "pos": "SG",
  "gp": 34,
  "mpg": 5.44,
  "rates": {
   "pts": 0.38358,
   "fg3m": 0.09724,
   "reb": 0.15127,
   "ast": 0.06483,
   "stl": 0.02161,
   "blk": 0.01621,
   "fgm": 0.11885,
   "fga": 0.34036,
   "ftm": 0.04862,
   "fta": 0.05402,
   "tov": 0.0108
  }
 },
 {
  "name": "Johnny Juzang",
  "team": "FA",
  "pos": "SG/SF",
  "gp": 21,
  "mpg": 4.18,
  "rates": {
   "pts": 0.4904,
   "fg3m": 0.06843,
   "reb": 0.19388,
   "ast": 0.05702,
   "stl": 0.03421,
   "blk": 0.0114,
   "fgm": 0.18247,
   "fga": 0.43338,
   "ftm": 0.05702,
   "fta": 0.09124,
   "tov": 0.05702
  }
 },
 {
  "name": "Maxi Kleber",
  "team": "LAL",
  "pos": "PF",
  "gp": 42,
  "mpg": 10.98,
  "rates": {
   "pts": 0.18656,
   "fg3m": 0.01302,
   "reb": 0.18222,
   "ast": 0.05857,
   "stl": 0.03905,
   "blk": 0.02386,
   "fgm": 0.07159,
   "fga": 0.15836,
   "ftm": 0.03037,
   "fta": 0.0564,
   "tov": 0.03688
  }
 },
 {
  "name": "Jordan McLaughlin",
  "team": "SAS",
  "pos": "PG",
  "gp": 44,
  "mpg": 6.4,
  "rates": {
   "pts": 0.31603,
   "fg3m": 0.06037,
   "reb": 0.11008,
   "ast": 0.13494,
   "stl": 0.07102,
   "blk": 0.0071,
   "fgm": 0.11718,
   "fga": 0.28052,
   "ftm": 0.02131,
   "fta": 0.02486,
   "tov": 0.05326
  }
 },
 {
  "name": "Alex Morales",
  "team": "ORL",
  "pos": "PG",
  "gp": 4,
  "mpg": 5.9,
  "rates": {
   "pts": 0.33922,
   "fg3m": 0.0,
   "reb": 0.12721,
   "ast": 0.16961,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.12721,
   "fga": 0.29682,
   "ftm": 0.08481,
   "fta": 0.08481,
   "tov": 0.16961
  }
 },
 {
  "name": "Dalano Banton",
  "team": "BOS",
  "pos": "PG/SG/SF",
  "gp": 6,
  "mpg": 10.28,
  "rates": {
   "pts": 0.19465,
   "fg3m": 0.0,
   "reb": 0.0811,
   "ast": 0.17843,
   "stl": 0.03244,
   "blk": 0.0811,
   "fgm": 0.06488,
   "fga": 0.19465,
   "ftm": 0.06488,
   "fta": 0.06488,
   "tov": 0.12976
  }
 },
 {
  "name": "Colby Jones",
  "team": "FA",
  "pos": "SG",
  "gp": 1,
  "mpg": 6.82,
  "rates": {
   "pts": 0.2934,
   "fg3m": 0.0,
   "reb": 0.5868,
   "ast": 0.2934,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.1467,
   "fga": 0.4401,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Isaiah Crawford",
  "team": "HOU",
  "pos": "SF",
  "gp": 14,
  "mpg": 6.58,
  "rates": {
   "pts": 0.30402,
   "fg3m": 0.03257,
   "reb": 0.17372,
   "ast": 0.05429,
   "stl": 0.02172,
   "blk": 0.03257,
   "fgm": 0.10858,
   "fga": 0.26059,
   "ftm": 0.05429,
   "fta": 0.06515,
   "tov": 0.04343
  }
 },
 {
  "name": "Jayson Kent",
  "team": "POR",
  "pos": "SF",
  "gp": 5,
  "mpg": 4.49,
  "rates": {
   "pts": 0.4451,
   "fg3m": 0.04451,
   "reb": 0.22255,
   "ast": 0.0,
   "stl": 0.04451,
   "blk": 0.04451,
   "fgm": 0.17804,
   "fga": 0.31157,
   "ftm": 0.04451,
   "fta": 0.04451,
   "tov": 0.0
  }
 },
 {
  "name": "Trentyn Flowers",
  "team": "FA",
  "pos": "SF",
  "gp": 2,
  "mpg": 2.77,
  "rates": {
   "pts": 0.72072,
   "fg3m": 0.0,
   "reb": 0.18018,
   "ast": 0.18018,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.36036,
   "fga": 0.54054,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.18018
  }
 },
 {
  "name": "Adou Thiero",
  "team": "LAL",
  "pos": "SF",
  "gp": 25,
  "mpg": 5.96,
  "rates": {
   "pts": 0.31565,
   "fg3m": 0.00672,
   "reb": 0.18805,
   "ast": 0.06716,
   "stl": 0.04701,
   "blk": 0.01343,
   "fgm": 0.10745,
   "fga": 0.20819,
   "ftm": 0.09402,
   "fta": 0.14775,
   "tov": 0.06044
  }
 },
 {
  "name": "Sean Pedulla",
  "team": "LAC",
  "pos": "PG",
  "gp": 7,
  "mpg": 4.43,
  "rates": {
   "pts": 0.41935,
   "fg3m": 0.09677,
   "reb": 0.09677,
   "ast": 0.16129,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.16129,
   "fga": 0.48387,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.03226
  }
 },
 {
  "name": "Bobi Klintman",
  "team": "FA",
  "pos": "PF",
  "gp": 12,
  "mpg": 5.95,
  "rates": {
   "pts": 0.3082,
   "fg3m": 0.05604,
   "reb": 0.26617,
   "ast": 0.08405,
   "stl": 0.04203,
   "blk": 0.0,
   "fgm": 0.12608,
   "fga": 0.37824,
   "ftm": 0.0,
   "fta": 0.04203,
   "tov": 0.08405
  }
 },
 {
  "name": "Isaiah Livers",
  "team": "PHO",
  "pos": "PF",
  "gp": 36,
  "mpg": 9.65,
  "rates": {
   "pts": 0.1871,
   "fg3m": 0.03454,
   "reb": 0.17559,
   "ast": 0.06045,
   "stl": 0.03742,
   "blk": 0.02303,
   "fgm": 0.06333,
   "fga": 0.18423,
   "ftm": 0.02591,
   "fta": 0.03454,
   "tov": 0.03454
  }
 },
 {
  "name": "Jahmir Young",
  "team": "MIA",
  "pos": "PG",
  "gp": 14,
  "mpg": 4.16,
  "rates": {
   "pts": 0.42968,
   "fg3m": 0.05156,
   "reb": 0.06875,
   "ast": 0.15468,
   "stl": 0.01719,
   "blk": 0.0,
   "fgm": 0.17187,
   "fga": 0.42968,
   "ftm": 0.03437,
   "fta": 0.03437,
   "tov": 0.05156
  }
 },
 {
  "name": "Cody Martin",
  "team": "FA",
  "pos": "SG",
  "gp": 4,
  "mpg": 13.8,
  "rates": {
   "pts": 0.12685,
   "fg3m": 0.0,
   "reb": 0.2537,
   "ast": 0.03624,
   "stl": 0.07249,
   "blk": 0.03624,
   "fgm": 0.03624,
   "fga": 0.18121,
   "ftm": 0.05436,
   "fta": 0.10873,
   "tov": 0.07249
  }
 },
 {
  "name": "Orlando Robinson",
  "team": "FA",
  "pos": "C",
  "gp": 4,
  "mpg": 6.2,
  "rates": {
   "pts": 0.28207,
   "fg3m": 0.0403,
   "reb": 0.16118,
   "ast": 0.12089,
   "stl": 0.0403,
   "blk": 0.0,
   "fgm": 0.12089,
   "fga": 0.20148,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Brooks Barnhizer",
  "team": "OKC",
  "pos": "SF",
  "gp": 40,
  "mpg": 8.7,
  "rates": {
   "pts": 0.19546,
   "fg3m": 0.02012,
   "reb": 0.2242,
   "ast": 0.06324,
   "stl": 0.03162,
   "blk": 0.01437,
   "fgm": 0.07761,
   "fga": 0.20408,
   "ftm": 0.02012,
   "fta": 0.02874,
   "tov": 0.02874
  }
 },
 {
  "name": "Wendell Moore Jr",
  "team": "DET",
  "pos": "SF",
  "gp": 6,
  "mpg": 9.93,
  "rates": {
   "pts": 0.16793,
   "fg3m": 0.0,
   "reb": 0.10076,
   "ast": 0.06717,
   "stl": 0.03359,
   "blk": 0.03359,
   "fgm": 0.06717,
   "fga": 0.11755,
   "ftm": 0.03359,
   "fta": 0.03359,
   "tov": 0.01679
  }
 },
 {
  "name": "Pacome Dadiet",
  "team": "NYK",
  "pos": "SF",
  "gp": 29,
  "mpg": 4.68,
  "rates": {
   "pts": 0.35359,
   "fg3m": 0.05157,
   "reb": 0.1989,
   "ast": 0.0884,
   "stl": 0.0221,
   "blk": 0.00737,
   "fgm": 0.11786,
   "fga": 0.35359,
   "ftm": 0.0663,
   "fta": 0.08103,
   "tov": 0.0221
  }
 },
 {
  "name": "Jacob Toppin",
  "team": "FA",
  "pos": "SF/PF",
  "gp": 5,
  "mpg": 3.37,
  "rates": {
   "pts": 0.47431,
   "fg3m": 0.0,
   "reb": 0.05929,
   "ast": 0.05929,
   "stl": 0.0,
   "blk": 0.05929,
   "fgm": 0.23715,
   "fga": 0.35573,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Harrison Ingram",
  "team": "SAS",
  "pos": "SF",
  "gp": 7,
  "mpg": 3.73,
  "rates": {
   "pts": 0.42119,
   "fg3m": 0.03829,
   "reb": 0.11487,
   "ast": 0.03829,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.19145,
   "fga": 0.22974,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.03829
  }
 },
 {
  "name": "Mason Plumlee",
  "team": "SAS",
  "pos": "C",
  "gp": 20,
  "mpg": 8.57,
  "rates": {
   "pts": 0.18081,
   "fg3m": 0.0,
   "reb": 0.30913,
   "ast": 0.11665,
   "stl": 0.05833,
   "blk": 0.00583,
   "fgm": 0.06416,
   "fga": 0.08166,
   "ftm": 0.05249,
   "fta": 0.08166,
   "tov": 0.06999
  }
 },
 {
  "name": "Jonathan Mogbo",
  "team": "TOR",
  "pos": "PF",
  "gp": 40,
  "mpg": 6.22,
  "rates": {
   "pts": 0.24508,
   "fg3m": 0.0,
   "reb": 0.2732,
   "ast": 0.10044,
   "stl": 0.04419,
   "blk": 0.03214,
   "fgm": 0.10446,
   "fga": 0.17678,
   "ftm": 0.03616,
   "fta": 0.05625,
   "tov": 0.05625
  }
 },
 {
  "name": "Joe Ingles",
  "team": "MIN",
  "pos": "SF",
  "gp": 27,
  "mpg": 5.66,
  "rates": {
   "pts": 0.26847,
   "fg3m": 0.04584,
   "reb": 0.12441,
   "ast": 0.22263,
   "stl": 0.05893,
   "blk": 0.0131,
   "fgm": 0.10477,
   "fga": 0.1768,
   "ftm": 0.0131,
   "fta": 0.0131,
   "tov": 0.09167
  }
 },
 {
  "name": "Buddy Boeheim",
  "team": "FA",
  "pos": "SF",
  "gp": 4,
  "mpg": 3.75,
  "rates": {
   "pts": 0.4,
   "fg3m": 0.13333,
   "reb": 0.0,
   "ast": 0.0,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.13333,
   "fga": 0.4,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Xavier Tillman",
  "team": "CHA",
  "pos": "PF/C",
  "gp": 30,
  "mpg": 6.13,
  "rates": {
   "pts": 0.23928,
   "fg3m": 0.01631,
   "reb": 0.23384,
   "ast": 0.0707,
   "stl": 0.04894,
   "blk": 0.02719,
   "fgm": 0.10876,
   "fga": 0.25016,
   "ftm": 0.00544,
   "fta": 0.02175,
   "tov": 0.04351
  }
 },
 {
  "name": "Thanasis Antetokounmpo",
  "team": "MIL",
  "pos": "SF",
  "gp": 34,
  "mpg": 4.35,
  "rates": {
   "pts": 0.31771,
   "fg3m": 0.0,
   "reb": 0.20279,
   "ast": 0.1014,
   "stl": 0.08788,
   "blk": 0.04056,
   "fgm": 0.1014,
   "fga": 0.21631,
   "ftm": 0.11492,
   "fta": 0.20279,
   "tov": 0.0676
  }
 },
 {
  "name": "Amari Williams",
  "team": "BOS",
  "pos": "C",
  "gp": 22,
  "mpg": 6.62,
  "rates": {
   "pts": 0.20586,
   "fg3m": 0.0,
   "reb": 0.27447,
   "ast": 0.06862,
   "stl": 0.02059,
   "blk": 0.06862,
   "fgm": 0.06862,
   "fga": 0.13724,
   "ftm": 0.06862,
   "fta": 0.09607,
   "tov": 0.07548
  }
 },
 {
  "name": "TyTy Washington",
  "team": "LAC",
  "pos": "PG",
  "gp": 16,
  "mpg": 5.51,
  "rates": {
   "pts": 0.23828,
   "fg3m": 0.03404,
   "reb": 0.06808,
   "ast": 0.19289,
   "stl": 0.06808,
   "blk": 0.03404,
   "fgm": 0.10212,
   "fga": 0.21558,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.03404
  }
 },
 {
  "name": "Dillon Jones",
  "team": "NYK",
  "pos": "SF",
  "gp": 7,
  "mpg": 5.63,
  "rates": {
   "pts": 0.22852,
   "fg3m": 0.02539,
   "reb": 0.17774,
   "ast": 0.10157,
   "stl": 0.07617,
   "blk": 0.0,
   "fgm": 0.05078,
   "fga": 0.22852,
   "ftm": 0.10157,
   "fta": 0.10157,
   "tov": 0.0
  }
 },
 {
  "name": "Isaac Jones",
  "team": "DET",
  "pos": "PF",
  "gp": 7,
  "mpg": 5.1,
  "rates": {
   "pts": 0.25222,
   "fg3m": 0.0,
   "reb": 0.14012,
   "ast": 0.02802,
   "stl": 0.0,
   "blk": 0.02802,
   "fgm": 0.08407,
   "fga": 0.19617,
   "ftm": 0.08407,
   "fta": 0.1121,
   "tov": 0.02802
  }
 },
 {
  "name": "Nigel Hayes-Davis",
  "team": "FA",
  "pos": "SF",
  "gp": 27,
  "mpg": 7.23,
  "rates": {
   "pts": 0.17418,
   "fg3m": 0.01025,
   "reb": 0.16906,
   "ast": 0.03586,
   "stl": 0.04098,
   "blk": 0.01025,
   "fgm": 0.07684,
   "fga": 0.23566,
   "ftm": 0.01025,
   "fta": 0.02049,
   "tov": 0.04098
  }
 },
 {
  "name": "Colin Castleton",
  "team": "ORL",
  "pos": "C",
  "gp": 4,
  "mpg": 5.35,
  "rates": {
   "pts": 0.23383,
   "fg3m": 0.0,
   "reb": 0.37412,
   "ast": 0.04677,
   "stl": 0.04677,
   "blk": 0.0,
   "fgm": 0.09353,
   "fga": 0.23383,
   "ftm": 0.04677,
   "fta": 0.04677,
   "tov": 0.09353
  }
 },
 {
  "name": "Kyle Lowry",
  "team": "PHI",
  "pos": "PG",
  "gp": 14,
  "mpg": 8.43,
  "rates": {
   "pts": 0.14401,
   "fg3m": 0.03388,
   "reb": 0.07624,
   "ast": 0.09318,
   "stl": 0.01694,
   "blk": 0.01694,
   "fgm": 0.03388,
   "fga": 0.21177,
   "ftm": 0.04235,
   "fta": 0.05083,
   "tov": 0.03388
  }
 },
 {
  "name": "Javonte Cooke",
  "team": "FA",
  "pos": "SG",
  "gp": 19,
  "mpg": 4.93,
  "rates": {
   "pts": 0.24555,
   "fg3m": 0.03203,
   "reb": 0.20285,
   "ast": 0.07473,
   "stl": 0.06406,
   "blk": 0.0,
   "fgm": 0.09609,
   "fga": 0.43772,
   "ftm": 0.02135,
   "fta": 0.02135,
   "tov": 0.09609
  }
 },
 {
  "name": "Trevor Keels",
  "team": "MIA",
  "pos": "SG",
  "gp": 8,
  "mpg": 1.87,
  "rates": {
   "pts": 0.53571,
   "fg3m": 0.13393,
   "reb": 0.13393,
   "ast": 0.0,
   "stl": 0.06696,
   "blk": 0.0,
   "fgm": 0.20089,
   "fga": 0.80357,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Hunter Sallis",
  "team": "FA",
  "pos": "SG",
  "gp": 7,
  "mpg": 3.67,
  "rates": {
   "pts": 0.27273,
   "fg3m": 0.0,
   "reb": 0.03896,
   "ast": 0.15584,
   "stl": 0.0,
   "blk": 0.03896,
   "fgm": 0.11688,
   "fga": 0.19481,
   "ftm": 0.03896,
   "fta": 0.07792,
   "tov": 0.19481
  }
 },
 {
  "name": "Trey Jemison",
  "team": "NYK",
  "pos": "C",
  "gp": 13,
  "mpg": 6.28,
  "rates": {
   "pts": 0.15935,
   "fg3m": 0.0,
   "reb": 0.22063,
   "ast": 0.06129,
   "stl": 0.01226,
   "blk": 0.02451,
   "fgm": 0.07354,
   "fga": 0.12257,
   "ftm": 0.01226,
   "fta": 0.01226,
   "tov": 0.12257
  }
 },
 {
  "name": "Dario Saric",
  "team": "FA",
  "pos": "PF",
  "gp": 5,
  "mpg": 8.25,
  "rates": {
   "pts": 0.12121,
   "fg3m": 0.02424,
   "reb": 0.14545,
   "ast": 0.04848,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.02424,
   "fga": 0.14545,
   "ftm": 0.04848,
   "fta": 0.04848,
   "tov": 0.04848
  }
 },
 {
  "name": "Stanley Umude",
  "team": "FA",
  "pos": "SG/SF",
  "gp": 2,
  "mpg": 3.28,
  "rates": {
   "pts": 0.30457,
   "fg3m": 0.0,
   "reb": 0.0,
   "ast": 0.15228,
   "stl": 0.15228,
   "blk": 0.0,
   "fgm": 0.15228,
   "fga": 0.30457,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Bismack Biyombo",
  "team": "SAS",
  "pos": "C",
  "gp": 25,
  "mpg": 5.65,
  "rates": {
   "pts": 0.16272,
   "fg3m": 0.0,
   "reb": 0.18394,
   "ast": 0.03537,
   "stl": 0.0283,
   "blk": 0.01415,
   "fgm": 0.06367,
   "fga": 0.10612,
   "ftm": 0.03537,
   "fta": 0.04952,
   "tov": 0.0566
  }
 },
 {
  "name": "Johni Broome",
  "team": "PHI",
  "pos": "PF/C",
  "gp": 11,
  "mpg": 4.98,
  "rates": {
   "pts": 0.18265,
   "fg3m": 0.0,
   "reb": 0.29224,
   "ast": 0.07306,
   "stl": 0.05479,
   "blk": 0.03653,
   "fgm": 0.07306,
   "fga": 0.43836,
   "ftm": 0.03653,
   "fta": 0.10959,
   "tov": 0.05479
  }
 },
 {
  "name": "Drew Peterson",
  "team": "FA",
  "pos": "SF",
  "gp": 6,
  "mpg": 10.71,
  "rates": {
   "pts": 0.07778,
   "fg3m": 0.0,
   "reb": 0.14001,
   "ast": 0.03111,
   "stl": 0.04667,
   "blk": 0.01556,
   "fgm": 0.03111,
   "fga": 0.2489,
   "ftm": 0.01556,
   "fta": 0.03111,
   "tov": 0.0
  }
 },
 {
  "name": "Markelle Fultz",
  "team": "FA",
  "pos": "PG/SG",
  "gp": 5,
  "mpg": 7.15,
  "rates": {
   "pts": 0.11184,
   "fg3m": 0.0,
   "reb": 0.02796,
   "ast": 0.22367,
   "stl": 0.05592,
   "blk": 0.0,
   "fgm": 0.05592,
   "fga": 0.30755,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.11184
  }
 },
 {
  "name": "Chris Manon",
  "team": "LAL",
  "pos": "SG",
  "gp": 9,
  "mpg": 5.12,
  "rates": {
   "pts": 0.1519,
   "fg3m": 0.0,
   "reb": 0.217,
   "ast": 0.0651,
   "stl": 0.1085,
   "blk": 0.0434,
   "fgm": 0.0434,
   "fga": 0.1302,
   "ftm": 0.0651,
   "fta": 0.0868,
   "tov": 0.0217
  }
 },
 {
  "name": "Vladislav Goldin",
  "team": "MIA",
  "pos": "C",
  "gp": 9,
  "mpg": 2.66,
  "rates": {
   "pts": 0.29228,
   "fg3m": 0.0,
   "reb": 0.37578,
   "ast": 0.12526,
   "stl": 0.0,
   "blk": 0.12526,
   "fgm": 0.12526,
   "fga": 0.16701,
   "ftm": 0.04175,
   "fta": 0.04175,
   "tov": 0.12526
  }
 },
 {
  "name": "Garrett Temple",
  "team": "TOR",
  "pos": "SG",
  "gp": 22,
  "mpg": 3.32,
  "rates": {
   "pts": 0.23304,
   "fg3m": 0.04112,
   "reb": 0.12337,
   "ast": 0.12337,
   "stl": 0.05483,
   "blk": 0.02742,
   "fgm": 0.05483,
   "fga": 0.20562,
   "ftm": 0.08225,
   "fta": 0.12337,
   "tov": 0.09596
  }
 },
 {
  "name": "N'Faly Dante",
  "team": "FA",
  "pos": "C",
  "gp": 4,
  "mpg": 3.85,
  "rates": {
   "pts": 0.19459,
   "fg3m": 0.0,
   "reb": 0.45405,
   "ast": 0.0,
   "stl": 0.12973,
   "blk": 0.0,
   "fgm": 0.06486,
   "fga": 0.25946,
   "ftm": 0.06486,
   "fta": 0.06486,
   "tov": 0.06486
  }
 },
 {
  "name": "Max Shulga",
  "team": "BOS",
  "pos": "PG/SG",
  "gp": 11,
  "mpg": 3.3,
  "rates": {
   "pts": 0.19293,
   "fg3m": 0.02756,
   "reb": 0.16537,
   "ast": 0.05512,
   "stl": 0.02756,
   "blk": 0.0,
   "fgm": 0.05512,
   "fga": 0.22049,
   "ftm": 0.05512,
   "fta": 0.05512,
   "tov": 0.08268
  }
 },
 {
  "name": "Jahmyl Telfort",
  "team": "FA",
  "pos": "PF",
  "gp": 8,
  "mpg": 4.0,
  "rates": {
   "pts": 0.03122,
   "fg3m": 0.0,
   "reb": 0.09365,
   "ast": 0.03122,
   "stl": 0.03122,
   "blk": 0.0,
   "fgm": 0.0,
   "fga": 0.12487,
   "ftm": 0.03122,
   "fta": 0.12487,
   "tov": 0.03122
  }
 },
 {
  "name": "Noa Essengue",
  "team": "CHI",
  "pos": "PF",
  "gp": 2,
  "mpg": 3.02,
  "rates": {
   "pts": 0.0,
   "fg3m": 0.0,
   "reb": 0.0,
   "ast": 0.0,
   "stl": 0.16575,
   "blk": 0.0,
   "fgm": 0.0,
   "fga": 0.49724,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Chucky Hepburn",
  "team": "TOR",
  "pos": "PG",
  "gp": 2,
  "mpg": 6.62,
  "rates": {
   "pts": 0.0,
   "fg3m": 0.0,
   "reb": 0.07557,
   "ast": 0.15113,
   "stl": 0.07557,
   "blk": 0.0,
   "fgm": 0.0,
   "fga": 0.4534,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.07557
  }
 },
 {
  "name": "Tosan Evbuomwan",
  "team": "CHA",
  "pos": "SF",
  "gp": 5,
  "mpg": 1.54,
  "rates": {
   "pts": 0.0,
   "fg3m": 0.0,
   "reb": 0.25918,
   "ast": 0.0,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.0,
   "fga": 0.12959,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 },
 {
  "name": "Darius Brown II",
  "team": "FA",
  "pos": "PG",
  "gp": 1,
  "mpg": 2.67,
  "rates": {
   "pts": 0.0,
   "fg3m": 0.0,
   "reb": 0.375,
   "ast": 0.0,
   "stl": 0.0,
   "blk": 0.0,
   "fgm": 0.0,
   "fga": 0.375,
   "ftm": 0.0,
   "fta": 0.0,
   "tov": 0.0
  }
 }
];
