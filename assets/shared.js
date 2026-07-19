// MFHFBs NBA Projections — Shared Storage & Name Matching
// Wird von index.html (Projections) UND teams.html (Team-Ansicht) geladen.
// Beide Seiten laufen auf demselben Origin -> localStorage ist geteilt.
// Minuten werden auf teams.html eingetragen; index.html liest sie nur noch.

const MFHFB_STORAGE_KEY = 'mfhfb_proj_minutes_v1';
const MFHFB_WEIGHT_KEY = 'mfhfb_proj_weights_v1';
const MFHFB_CATWEIGHT_KEY = 'mfhfb_cat_weights_v1';

const MFHFB_DEFAULT_SEASON_WEIGHTS = { w1: 1.5, w2: 1.75 };
const MFHFB_DEFAULT_CATEGORY_WEIGHTS = {
  pts: 0.9, reb: 1, ast: 1, stl: 0.75, blk: 0.75, fg3m: 0.75,
  tov: 0.25, ftpct: 0.9, fgpct: 1,
};

// Namen aus unterschiedlichen Quellen (BBM-Export vs. ESPN) normalisieren,
// damit z.B. "Nikola Jokić" (ESPN) und "Nikola Jokic" (BBM) gematcht werden.
function mfhfbNormalizeName(name) {
  return (name || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Akzente entfernen
    .toLowerCase()
    .replace(/[.'-]/g, '')      // Punkte, Apostrophe, Bindestriche
    .replace(/\s+jr$/, '')      // "Jr." am Ende ignorieren
    .replace(/\s+ii+$/, '')     // "II"/"III" am Ende ignorieren
    .replace(/\s+/g, ' ')
    .trim();
}

// Baut eine Lookup-Map normalisierter Name -> Spieler-Objekt aus PLAYER_RATES.
function mfhfbBuildNameIndex(playerRates) {
  const idx = new Map();
  for (const p of playerRates) {
    idx.set(mfhfbNormalizeName(p.name), p);
  }
  return idx;
}

function mfhfbGetOverrides() {
  try {
    return JSON.parse(localStorage.getItem(MFHFB_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function mfhfbSetMinutes(playerName, minutes) {
  const key = mfhfbNormalizeName(playerName);
  const overrides = mfhfbGetOverrides();
  overrides[key] = minutes;
  localStorage.setItem(MFHFB_STORAGE_KEY, JSON.stringify(overrides));
  return overrides;
}

function mfhfbResetMinutes(playerName) {
  const key = mfhfbNormalizeName(playerName);
  const overrides = mfhfbGetOverrides();
  delete overrides[key];
  localStorage.setItem(MFHFB_STORAGE_KEY, JSON.stringify(overrides));
  return overrides;
}

function mfhfbResetAllMinutes() {
  localStorage.setItem(MFHFB_STORAGE_KEY, JSON.stringify({}));
  return {};
}

function mfhfbGetWeights() {
  try {
    return JSON.parse(localStorage.getItem(MFHFB_WEIGHT_KEY) || 'null') || { ...MFHFB_DEFAULT_SEASON_WEIGHTS };
  } catch {
    return { ...MFHFB_DEFAULT_SEASON_WEIGHTS };
  }
}

function mfhfbSetWeights(weights) {
  localStorage.setItem(MFHFB_WEIGHT_KEY, JSON.stringify(weights));
}

function mfhfbGetCategoryWeights() {
  try {
    const stored = JSON.parse(localStorage.getItem(MFHFB_CATWEIGHT_KEY) || 'null');
    return stored ? { ...MFHFB_DEFAULT_CATEGORY_WEIGHTS, ...stored } : { ...MFHFB_DEFAULT_CATEGORY_WEIGHTS };
  } catch {
    return { ...MFHFB_DEFAULT_CATEGORY_WEIGHTS };
  }
}

function mfhfbSetCategoryWeights(weights) {
  localStorage.setItem(MFHFB_CATWEIGHT_KEY, JSON.stringify(weights));
}

// Liste nur der tatsächlich gespielten Saisons eines Spielers (ohne "missed").
function mfhfbPlayedSeasonLabels(player) {
  return Object.keys(player.seasons).filter(l => !player.seasons[l].missed).sort();
}

// GP der letzten bis zu 3 bekannten Saisons (neueste zuerst), z.B. "0/73/69"
// wenn die aktuellste Saison komplett verpasst wurde (0 GP), gefolgt von den
// beiden Saisons davor. "-" nur, wenn der Spieler zu dem Zeitpunkt noch gar
// nicht in der Liga war (vor seinem Debüt).
function mfhfbRecentGP(player) {
  const labels = SEASON_LABELS.slice(-3).reverse();
  return labels.map((l) => {
    const s = player.seasons[l];
    if (!s) return '-';
    return s.missed ? '0' : String(s.gp);
  }).join('/');
}

// Gewichtete Pro-Minute-Rate über die tatsächlich gespielten Saisons eines
// Spielers ("missed"-Saisons mit 0 GP fließen NICHT in die Rate ein, sonst
// würde eine Verletzungssaison die Projektion künstlich auf 0 drücken).
// Die zwei jüngsten GESPIELTEN Saisons bekommen die Slider-Gewichte,
// ältere zählen fix 1.
function mfhfbWeightedRates(player, weights) {
  const labels = mfhfbPlayedSeasonLabels(player);
  const n = labels.length;
  const sums = {};
  let wsum = 0;
  labels.forEach((label, i) => {
    let w = 1;
    if (i === n - 1) w = weights.w2;
    else if (i === n - 2) w = weights.w1;
    const rates = player.seasons[label].rates;
    for (const key in rates) sums[key] = (sums[key] || 0) + rates[key] * w;
    wsum += w;
  });
  const out = {};
  for (const key in sums) out[key] = sums[key] / wsum;
  return out;
}

// Letzte tatsächlich GESPIELTE Saison (überspringt "missed"-Einträge) —
// Basis für Standard-Projektionsminuten und Team/Pos-Anzeige.
function mfhfbLatestSeason(player) {
  const labels = mfhfbPlayedSeasonLabels(player);
  return player.seasons[labels[labels.length - 1]];
}

// Realwerte für die insgesamt jüngste geladene Saison (z.B. 2025-26) —
// getrennt von mfhfbLatestSeason, weil die jeweils AKTUELLSTE Saison bei
// verletzten/inaktiven Spielern eine "missed"-Saison sein kann. In dem
// Fall soll die Projections-Seite das auch so anzeigen, nicht still die
// Vorjahreszahlen unterschieben.
function mfhfbNewestSeasonActual(player) {
  const newestLabel = SEASON_LABELS[SEASON_LABELS.length - 1];
  const s = player.seasons[newestLabel];
  if (!s || s.missed) {
    return { min: 0, pts: 0, reb: 0, ast: 0, fg3m: 0, missed: true, label: newestLabel };
  }
  return {
    min: s.mpg,
    pts: s.rates.pts * s.mpg,
    reb: s.rates.reb * s.mpg,
    ast: s.rates.ast * s.mpg,
    fg3m: s.rates.fg3m * s.mpg,
    missed: false,
    label: newestLabel,
  };
}

function mfhfbComputeProjection(player, minutes, weights) {
  const r = mfhfbWeightedRates(player, weights);
  const fgm = r.fgm * minutes, fga = r.fga * minutes;
  const ftm = r.ftm * minutes, fta = r.fta * minutes;
  return {
    min: minutes,
    pts: r.pts * minutes,
    reb: r.reb * minutes,
    ast: r.ast * minutes,
    stl: r.stl * minutes,
    blk: r.blk * minutes,
    fg3m: r.fg3m * minutes,
    tov: r.tov * minutes,
    fgpct: fga > 0 ? (fgm / fga) * 100 : 0,
    ftpct: fta > 0 ? (ftm / fta) * 100 : 0,
  };
}

const MFHFB_POOL_KEY = 'mfhfb_zscore_pool_v1';

function mfhfbGetPoolSize() {
  return localStorage.getItem(MFHFB_POOL_KEY) || 'all'; // 'all' | '200' | '400'
}

function mfhfbSetPoolSize(v) {
  localStorage.setItem(MFHFB_POOL_KEY, v);
}

// Excel-artige bedingte Formatierung: interpoliert zwischen Rot (schlecht)
// und Grün (gut) je nach Position von `value` zwischen `min` und `max`.
// invert=true für Kategorien, bei denen weniger besser ist (z.B. TOV).
function mfhfbHeatStyle(value, min, max, invert) {
  if (max === min || !isFinite(min) || !isFinite(max)) return '';
  let t = (value - min) / (max - min);
  if (invert) t = 1 - t;
  t = Math.max(0, Math.min(1, t));
  const hue = Math.round(t * 120); // 0 = rot, 120 = grün
  return `background-color:hsla(${hue},70%,45%,0.22);color:hsl(${hue},75%,78%);`;
}

const MFHFB_THEME_KEY = 'mfhfb_theme_v1';

function mfhfbGetTheme() {
  return localStorage.getItem(MFHFB_THEME_KEY) || 'dark';
}

function mfhfbSetTheme(theme) {
  localStorage.setItem(MFHFB_THEME_KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);
}

// Baut den Theme-Toggle-Button auf (Text + Klick-Handler). Der data-theme-
// Attribut-Wert selbst wird schon per Inline-Script im <head> gesetzt,
// damit es beim Laden nicht kurz "flackert".
function mfhfbInitThemeToggle(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  const updateLabel = () => {
    btn.textContent = mfhfbGetTheme() === 'light' ? '🌙 Dark' : '☀️ Light';
  };
  updateLabel();
  btn.addEventListener('click', () => {
    mfhfbSetTheme(mfhfbGetTheme() === 'light' ? 'dark' : 'light');
    updateLabel();
  });
}
