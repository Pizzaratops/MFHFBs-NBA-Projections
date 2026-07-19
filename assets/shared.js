// MFHFBs NBA Projections — Shared Storage & Name Matching
// Wird von index.html (Projections) UND teams.html (Team-Ansicht) geladen.
// Beide Seiten laufen auf demselben Origin -> localStorage ist geteilt.
// Minuten werden auf teams.html eingetragen; index.html liest sie nur noch.

const MFHFB_STORAGE_KEY = 'mfhfb_proj_minutes_v1';
const MFHFB_WEIGHT_KEY = 'mfhfb_proj_weights_v1';

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
    return JSON.parse(localStorage.getItem(MFHFB_WEIGHT_KEY) || 'null') || { w1: 1, w2: 1 };
  } catch {
    return { w1: 1, w2: 1 };
  }
}

function mfhfbSetWeights(weights) {
  localStorage.setItem(MFHFB_WEIGHT_KEY, JSON.stringify(weights));
}

// Gewichtete Pro-Minute-Rate über die eigenen verfügbaren Saisons eines Spielers.
// Die zwei jüngsten Saisons bekommen die Slider-Gewichte, ältere zählen fix 1.
function mfhfbWeightedRates(player, weights) {
  const labels = Object.keys(player.seasons).sort();
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

function mfhfbLatestSeason(player) {
  const labels = Object.keys(player.seasons).sort();
  return player.seasons[labels[labels.length - 1]];
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
