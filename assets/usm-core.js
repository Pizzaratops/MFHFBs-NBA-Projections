// US-Manager (basketball.de) — Projektion, Optimierer, Trade-Finder.
// Braucht: usm-data.js, projected-minutes.js, rookie-projections.js, assets/shared.js
//
// Punkte-Formel des Managers:
//   PTS + REB + 1.5*AST + 2*STL + 2*BLK − 2*TOV − 0.5*(FGA−FGM) − 0.5*(FTA−FTM) − 0.5*PF
//
// Projektion pro Spieler:
//   FP/Min  = echte Manager-FP der letzten zwei Saisons (25-26 voll, 24-25 halb),
//             mit 150 Phantom-Minuten Richtung Liga-Basis geschrumpft.
//             Rookies: aus ROOKIE_PROJECTIONS per Formel umgerechnet, gekappt + leicht abgewertet.
//   Minuten = eigener Override auf dieser Seite > Teams-Seite-Override > projected-minutes.js
//             > Rookie-Projektion > Vorsaison-MPG * 0.9
//   FP/G    = FP/Min * Minuten; in der Saison mit echten FP/G per 15 Phantom-Spielen geblendet
//   EV      = FP/G * Verfügbarkeit (Status-Override > Verletzungs-Seed > Games-Played-Quote)

const USM_BUDGET = 63.0;
const USM_ROSTER_SIZE = 15;
const USM_MIN_POS = { G: 5, F: 5, C: 2 };
const USM_TRADE_COST = 1.5;

const USM_SNAP_KEY = 'mfhfb_usm_snapshots_v1';   // [{date, players:[[name,team,pos,sal,rookie,fp,fpg]]}]
const USM_OVR_KEY = 'mfhfb_usm_overrides_v1';    // {key:{min?, av?}}
const USM_DRAFT_KEY = 'mfhfb_usm_draft_v1';      // [key]
const USM_TEAM_KEY = 'mfhfb_usm_myteam_v1';      // {keys:[key], cash:number}
const USM_SETTINGS_KEY = 'mfhfb_usm_settings_v1';

const USM_PRIOR_FPM = 0.55;
const USM_PRIOR_MIN = 150;
const USM_PHANTOM_GAMES = 15;
const USM_UNKNOWN_FPM = 0.45;

const USM_TEAM_ABBR = {
  'Atlanta Hawks': 'ATL', 'Boston Celtics': 'BOS', 'Brooklyn Nets': 'BKN', 'Charlotte Hornets': 'CHA',
  'Chicago Bulls': 'CHI', 'Cleveland Cavaliers': 'CLE', 'Dallas Mavericks': 'DAL', 'Denver Nuggets': 'DEN',
  'Detroit Pistons': 'DET', 'Golden State Warriors': 'GSW', 'Houston Rockets': 'HOU', 'Indiana Pacers': 'IND',
  'Los Angeles Clippers': 'LAC', 'Los Angeles Lakers': 'LAL', 'Memphis Grizzlies': 'MEM', 'Miami Heat': 'MIA',
  'Milwaukee Bucks': 'MIL', 'Minnesota Timberwolves': 'MIN', 'New Orleans Pelicans': 'NOP', 'New York Knicks': 'NYK',
  'Oklahoma City Thunder': 'OKC', 'Orlando Magic': 'ORL', 'Philadelphia 76ers': 'PHI', 'Phoenix Suns': 'PHX',
  'Portland Trail Blazers': 'POR', 'Sacramento Kings': 'SAC', 'San Antonio Spurs': 'SAS', 'Toronto Raptors': 'TOR',
  'Utah Jazz': 'UTA', 'Washington Wizards': 'WAS', 'Free Agents': 'FA'
};

// Verletzungs-/Status-Seed (Stand 18.10.2026, Covers/FantasyAlarm). Wert = erwartete Verfügbarkeit
// im Trade-Lock bis 15.11. Auf der Seite pro Spieler überschreibbar.
const USM_STATUS_SEED = {
  'moses moody': [0, 'Out (Knie)'], 'jimmy butler': [0, 'Out (ACL)'], 'kristaps porzingis': [0, 'Out (Krankheit)'],
  'shaedon sharpe': [0, 'Out (Meniskus)'], 'mark williams': [0, 'Out (Schulter)'], 'max strus': [0, 'Out (Fuß)'],
  'bradley beal': [0, 'Out (Knie)'], 'brandon ingram': [0, 'Out (Achilles)'], 'donte divincenzo': [0, 'Out (Achilles)'],
  'santi aldama': [0, 'Out (Knie)'], 'dereck lively': [0, 'Out (Fuß)'], 'johnny furphy': [0, 'Out (ACL)'],
  'julian strawther': [0, 'Out (Knie)'], 'noah penda': [0, 'Out (Hamstring)'], 'jordan miller': [0, 'Out (Schulter)'],
  'mouhamed gueye': [0, 'Out (Fuß)'], 'henri veesaar': [0, 'Out (ACL)'], 'ariel hukporti': [0, 'Out (Achilles)'],
  'jamir watkins': [0, 'Out (ACL)'], 'otega oweh': [0, 'Out (Achilles)'], 'tristan vukcevic': [0, 'Out (Hüfte)'],
  'jusuf nurkic': [0.3, 'Out ~4 Wo.'], 'dominick barlow': [0.3, 'Out (Rücken)'],
  'isaiah stewart': [0.5, 'Out ~2 Wo.'], 'dru smith': [0.5, 'Out ~2 Wo.'], 'tacko fall': [0.5, 'Out ~2 Wo.'],
  'spencer jones': [0.5, 'Fraglich'], 'nicolas claxton': [0.55, 'Hamstring'], 'maxime raynaud': [0.6, 'Out 5-6 Sp.'],
  'dylan cardwell': [0.6, 'Out 5-6 Sp.'], 'grant williams': [0.6, 'Hamstring'], 'coby white': [0.75, 'Wade'],
  'irving kyrie': [0.7, 'Comeback'], 'kyrie irving': [0.7, 'Comeback'], 'damian lillard': [0.75, 'Comeback'],
  'dejounte murray': [0.8, 'Zeh'], 'kon knueppel': [0.85, 'Hamstring'], 'aj dybantsa': [0.85, 'Knöchel'],
  'tobias harris': [0.85, 'Wade'], 'adem bona': [0.85, 'Fuß'], 'tyrese haliburton': [0.85, 'Comeback'],
  'franz wagner': [0.9, 'Schulter'], 'anthony black': [0.9, 'Knöchel']
};

// ---------- Helpers ----------
function usmLoad(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch { return fallback; }
}
function usmSave(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}
// "Acuff Jr., Darius" -> "Darius Acuff Jr."
function usmFlipName(name) {
  const i = name.indexOf(',');
  return i < 0 ? name.trim() : (name.slice(i + 1).trim() + ' ' + name.slice(0, i).trim());
}
function usmKey(name) {
  return mfhfbNormalizeName(usmFlipName(name)).replace(/[^a-z ]/g, '').replace(/\s+(jr|sr|ii|iii|iv|v)\b/g, '').replace(/\s+/g, ' ').trim();
}
const usmSquash = k => k.replace(/\s/g, '');
function usmTeamAbbr(team) { return USM_TEAM_ABBR[team] || team; }
function usmFmt(n, d = 1) { return (n == null || !isFinite(n)) ? '–' : n.toFixed(d); }

function usmBuildLookup(obj) {
  const m = new Map();
  if (!obj) return m;
  for (const [k, v] of Object.entries(obj)) {
    const key = usmKey(v && v.name ? v.name : k);
    m.set(usmSquash(key), v);
  }
  return m;
}

// ---------- Snapshots ----------
function usmGetSnapshots() {
  const list = usmLoad(USM_SNAP_KEY, []);
  return Array.isArray(list) ? list.slice().sort((a, b) => a.date.localeCompare(b.date)) : [];
}
function usmAddSnapshot(snap) {
  const list = usmGetSnapshots().filter(s => s.date !== snap.date);
  list.push(snap);
  usmSave(USM_SNAP_KEY, list);
}
function usmDeleteSnapshot(date) {
  usmSave(USM_SNAP_KEY, usmGetSnapshots().filter(s => s.date !== date));
}
// Basis-Snapshot (aus usm-data.js) im Snapshot-Format
function usmBaseSnapshot() {
  return { date: USM_BASE.date, base: true, players: USM_BASE.players.map(p => [p[0], p[1], p[2], p[3], p[4], 0, 0]) };
}
function usmAllSnapshots() {
  const own = usmGetSnapshots();
  const all = own.some(s => s.date === USM_BASE.date) ? own : [usmBaseSnapshot(), ...own];
  return all.sort((a, b) => a.date.localeCompare(b.date));
}
function usmParseImport(text) {
  const obj = JSON.parse(text.trim());
  if (!obj || !Array.isArray(obj.players) || !obj.players.length) throw new Error('Keine Spieler im Import gefunden.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(obj.date || '')) throw new Error('Datum fehlt im Import.');
  const bad = obj.players.find(p => !Array.isArray(p) || p.length < 5 || typeof p[3] !== 'number');
  if (bad) throw new Error('Unerwartetes Format: ' + JSON.stringify(bad).slice(0, 80));
  return { date: obj.date, players: obj.players };
}

// ---------- Rookie-Projektion -> Manager-FP/Min ----------
function usmRookieFpm(r) {
  if (!r || !r.min || !isFinite(r.pts)) return null;
  const fgp = (r.fgpct || 45) / 100, ftp = (r.ftpct || 72) / 100;
  const fga = Math.max(0, (r.pts - (r.fg3m || 0)) / (2 * fgp + 0.28 * ftp));
  const fta = 0.28 * fga;
  const pf = 0.073 * r.min;
  const fp = r.pts + (r.reb || 0) + 1.5 * (r.ast || 0) + 2 * (r.stl || 0) + 2 * (r.blk || 0)
    - 2 * (r.tov || 0) - 0.5 * fga * (1 - fgp) - 0.5 * fta * (1 - ftp) - 0.5 * pf;
  let fpm = fp / r.min;
  if (!isFinite(fpm)) return null;
  // Etliche Rookie-Zeilen haben Stats, die nicht zu den Minuten passen -> kappen + abwerten
  return Math.min(fpm, 0.65) * 0.92;
}

// ---------- Pool bauen ----------
function usmBuildPool() {
  const snaps = usmAllSnapshots();
  const cur = snaps[snaps.length - 1];
  const prev = snaps.length > 1 ? snaps[snaps.length - 2] : null;
  const prevSal = new Map();
  if (prev) for (const p of prev.players) prevSal.set(usmKey(p[0]), p[3]);
  const firstSal = new Map();
  for (const p of snaps[0].players) firstSal.set(usmKey(p[0]), p[3]);

  const baseByKey = new Map();
  for (const p of USM_BASE.players) {
    const k = usmKey(p[0]);
    if (!baseByKey.has(k) || baseByKey.get(k)[1] === 'Free Agents') baseByKey.set(k, p);
  }
  const minLookup = usmBuildLookup(typeof PROJECTED_MINUTES !== 'undefined' ? PROJECTED_MINUTES : null);
  const rookieLookup = usmBuildLookup(typeof ROOKIE_PROJECTIONS !== 'undefined' ? ROOKIE_PROJECTIONS : null);
  const teamOverrides = (typeof mfhfbGetOverrides === 'function') ? mfhfbGetOverrides() : {};
  const teamOvrSquash = new Map(Object.entries(teamOverrides).map(([k, v]) => [usmSquash(usmKey(k)), v]));
  const ovr = usmLoad(USM_OVR_KEY, {});

  const seen = new Map();
  for (const row of cur.players) {
    const [name, team, pos, sal, rookie, fpAct, fpgAct] = row;
    const key = usmKey(name);
    if (seen.has(key) && team === 'Free Agents') continue;
    const sq = usmSquash(key);
    const base = baseByKey.get(key);
    const s25 = base && base[5], s26 = base && base[6];
    const rp = rookieLookup.get(sq);
    const pm = minLookup.get(sq);

    // FP pro Minute
    let fpm = null, fpmSrc = '';
    const MN = (s26 ? s26[1] : 0) + 0.5 * (s25 ? s25[1] : 0);
    if (MN > 0) {
      const FP = (s26 ? s26[2] : 0) + 0.5 * (s25 ? s25[2] : 0);
      fpm = (FP + USM_PRIOR_FPM * USM_PRIOR_MIN) / (MN + USM_PRIOR_MIN);
      fpmSrc = 'hist';
    } else if (rp) {
      fpm = usmRookieFpm(rp); fpmSrc = 'rookie';
    }
    if (fpm == null) { fpm = USM_UNKNOWN_FPM; fpmSrc = 'est'; }

    // Minuten
    let min = null, minSrc = '';
    const o = ovr[key] || {};
    if (o.min != null && o.min !== '') { min = +o.min; minSrc = 'own'; }
    else if (teamOvrSquash.has(sq)) { min = +teamOvrSquash.get(sq); minSrc = 'teams'; }
    else if (pm) { min = pm.min; minSrc = 'proj'; }
    else if (rp && rp.min) { min = rp.min; minSrc = 'rookie'; }
    else if (s26 && s26[0] > 0) { min = 0.9 * s26[1] / s26[0]; minSrc = 'vj'; }
    else { min = 0; minSrc = 'none'; }

    // Verfügbarkeit
    let av = 0.9, avSrc = 'std', status = '';
    const rot = [s26, s25].filter(s => s && s[0] > 0 && s[1] / s[0] >= 24);
    if (rot.length) {
      av = Math.min(0.95, Math.max(0.6, rot.reduce((a, s) => a + s[0], 0) / (rot.length * 80)));
      avSrc = 'gp';
    }
    if (rookie || fpmSrc === 'rookie') { av = Math.min(av, 0.88); }
    const seed = USM_STATUS_SEED[key];
    if (seed) { av = Math.min(av, seed[0]); status = seed[1]; avSrc = 'seed'; }
    if (o.av != null && o.av !== '') { av = +o.av; avSrc = 'own'; }

    const fpgPre = fpm * min;
    let gp = 0, fpg = fpgPre;
    if (fpgAct > 0 && fpAct > 0) {
      gp = Math.round(fpAct / fpgAct);
      fpg = (fpgPre * USM_PHANTOM_GAMES + fpgAct * gp) / (USM_PHANTOM_GAMES + gp);
    }
    const ev = fpg * av;
    const p = {
      key, name, short: usmFlipName(name), team, abbr: usmTeamAbbr(team), pos, sal, c: Math.round(sal * 100),
      rookie: !!rookie, fpm, fpmSrc, min, minSrc, av, avSrc, status, fpgPre, fpgAct: fpgAct || 0, gp, fpg, ev,
      value: sal > 0 ? ev / sal : 0,
      prevSal: prevSal.has(key) ? prevSal.get(key) : null,
      firstSal: firstSal.has(key) ? firstSal.get(key) : null,
      s25, s26
    };
    seen.set(key, p);
  }
  return { players: [...seen.values()], date: cur.date, snapshots: snaps };
}

// ---------- Optimierer ----------
// Exakter Knapsack pro Position (Budget in 0.01 Mio), dann beste Aufteilung G/F/C.
function usmPrune(list, K) {
  // Spieler entfernen, die von >=K billigeren-und-besseren Spielern dominiert werden
  const sorted = list.slice().sort((a, b) => a.c - b.c || b.ev - a.ev);
  const keep = [];
  for (const p of sorted) {
    let dom = 0;
    for (const q of keep) { if (q.c <= p.c && q.ev >= p.ev) { dom++; if (dom >= K) break; } }
    if (dom < K) keep.push(p);
  }
  return keep;
}
function usmKnap(list, K, B) {
  const NEG = -1e9;
  const best = [];
  for (let k = 0; k <= K; k++) best.push(new Float64Array(B + 1).fill(NEG));
  best[0][0] = 0;
  const take = [];
  for (const it of list) {
    const c = it.c, v = it.ev;
    const t = new Uint8Array((K + 1) * (B + 1));
    for (let k = K; k >= 1; k--) {
      const cur = best[k], prev = best[k - 1];
      for (let b = B; b >= c; b--) {
        const nv = prev[b - c] + v;
        if (nv > cur[b]) { cur[b] = nv; t[k * (B + 1) + b] = 1; }
      }
    }
    take.push(t);
  }
  return { best, take, list, B };
}
function usmRecon(D, k, b) {
  const r = [];
  for (let i = D.list.length - 1; i >= 0 && k > 0; i--) {
    if (D.take[i][k * (D.B + 1) + b]) { r.push(D.list[i]); b -= D.list[i].c; k--; }
  }
  return r;
}
function usmPrefixMax(arr) {
  const n = arr.length, v = new Float64Array(n), ix = new Int32Array(n);
  let m = -1e9, mi = -1;
  for (let b = 0; b < n; b++) { if (arr[b] > m) { m = arr[b]; mi = b; } v[b] = m; ix[b] = mi; }
  return { v, ix };
}
// locked: Spieler-Objekte, die fix sind. budget: Gesamtbudget (Mio). Rückgabe: {add, total, cost} | null
function usmOptimizeFill(pool, locked, budget, opts = {}) {
  const minMin = opts.minMin ?? 14;
  const excludeRookies = !!opts.excludeRookies;
  const lockedKeys = new Set(locked.map(p => p.key));
  const usedC = locked.reduce((a, p) => a + p.c, 0);
  const B = Math.round(budget * 100) - usedC;
  const open = USM_ROSTER_SIZE - locked.length;
  if (open <= 0) return { add: [], total: 0, cost: 0 };
  if (B < 0) return null;
  const have = { G: 0, F: 0, C: 0 };
  locked.forEach(p => have[p.pos]++);
  const need = { G: Math.max(0, USM_MIN_POS.G - have.G), F: Math.max(0, USM_MIN_POS.F - have.F), C: Math.max(0, USM_MIN_POS.C - have.C) };
  if (need.G + need.F + need.C > open) return null;

  const cand = pool.filter(p => !lockedKeys.has(p.key) && p.team !== 'Free Agents' && p.ev > 0 && p.min >= minMin
    && p.fpmSrc !== 'est' && !(excludeRookies && p.rookie) && !(opts.exclude && opts.exclude.has(p.key)));
  const D = {};
  for (const pos of ['G', 'F', 'C']) D[pos] = usmKnap(usmPrune(cand.filter(p => p.pos === pos), open), open, B);

  let bt = -1e9, bs = null;
  for (let g = need.G; g <= open; g++) for (let f = need.F; f <= open - g; f++) {
    const c = open - g - f;
    if (c < need.C) continue;
    const G = usmPrefixMax(D.G.best[g]), F = usmPrefixMax(D.F.best[f]), C = usmPrefixMax(D.C.best[c]);
    for (let bc = 0; bc <= B; bc++) {
      if (C.v[bc] < -1e8 || (bc > 0 && C.v[bc] === C.v[bc - 1])) continue;
      const rem = B - bc;
      for (let bg = 0; bg <= rem; bg++) {
        if (G.v[bg] < -1e8 || (bg > 0 && G.v[bg] === G.v[bg - 1])) continue;
        const fv = F.v[rem - bg];
        if (fv < -1e8) continue;
        const t = C.v[bc] + G.v[bg] + fv;
        if (t > bt) { bt = t; bs = { g, f, c, bg: G.ix[bg], bf: F.ix[rem - bg], bc: C.ix[bc] }; }
      }
    }
  }
  if (!bs) return null;
  const add = [...usmRecon(D.G, bs.g, bs.bg), ...usmRecon(D.F, bs.f, bs.bf), ...usmRecon(D.C, bs.c, bs.bc)]
    .sort((a, b) => b.sal - a.sal);
  return { add, total: bt, cost: add.reduce((a, p) => a + p.c, 0) / 100 };
}

// Prüft, ob ein Kader (Teil-Kader) die Positionsregeln noch erfüllen kann
function usmRosterFeasible(players) {
  const have = { G: 0, F: 0, C: 0 };
  players.forEach(p => have[p.pos]++);
  const open = USM_ROSTER_SIZE - players.length;
  const need = Math.max(0, USM_MIN_POS.G - have.G) + Math.max(0, USM_MIN_POS.F - have.F) + Math.max(0, USM_MIN_POS.C - have.C);
  return open >= 0 && need <= open;
}

// ---------- Trade-Finder ----------
// team: Spieler-Objekte (15), cash: Restbudget. Liefert sortierte Vorschläge.
function usmFindTrades(pool, team, cash, opts = {}) {
  const minMin = opts.minMin ?? 14;
  const top = opts.top ?? 25;
  const teamKeys = new Set(team.map(p => p.key));
  const cand = pool.filter(p => !teamKeys.has(p.key) && p.team !== 'Free Agents' && p.ev > 0 && p.min >= minMin);
  const valid = roster => {
    const h = { G: 0, F: 0, C: 0 }; roster.forEach(p => h[p.pos]++);
    return h.G >= USM_MIN_POS.G && h.F >= USM_MIN_POS.F && h.C >= USM_MIN_POS.C;
  };
  const singles = [];
  for (const out of team) {
    const avail = cash + out.sal;
    const rest = team.filter(p => p !== out);
    for (const inn of cand) {
      if (inn.sal > avail + 1e-9) continue;
      const gain = inn.ev - out.ev;
      if (gain <= 0.05) continue;
      if (inn.pos !== out.pos && !valid([...rest, inn])) continue;
      singles.push({ out: [out], in: [inn], gain, cashAfter: avail - inn.sal });
    }
  }
  singles.sort((a, b) => b.gain - a.gain);

  const doubles = [];
  if (opts.doubles !== false) {
    const cand2 = cand.slice().sort((a, b) => b.ev - a.ev).slice(0, 160);
    for (let i = 0; i < team.length; i++) for (let j = i + 1; j < team.length; j++) {
      const o1 = team[i], o2 = team[j];
      const avail = cash + o1.sal + o2.sal;
      const rest = team.filter(p => p !== o1 && p !== o2);
      const outEv = o1.ev + o2.ev;
      let best = null;
      for (let a = 0; a < cand2.length; a++) {
        const x = cand2[a];
        if (x.sal >= avail) continue;
        for (let b = a + 1; b < cand2.length; b++) {
          const y = cand2[b];
          if (x.sal + y.sal > avail + 1e-9) continue;
          const gain = x.ev + y.ev - outEv;
          if (best && gain <= best.gain) continue;
          if (!valid([...rest, x, y])) continue;
          best = { out: [o1, o2], in: [x, y], gain, cashAfter: avail - x.sal - y.sal };
        }
      }
      if (best && best.gain > 0.05) doubles.push(best);
    }
    doubles.sort((a, b) => b.gain - a.gain);
  }
  return { singles: usmDedupeTrades(singles).slice(0, top), doubles: doubles.slice(0, top) };
}
function usmDedupeTrades(list) {
  // pro abgegebenem Spieler max. 3 Vorschläge, damit die Liste nicht von einem Namen dominiert wird
  const cnt = new Map(); const out = [];
  for (const t of list) {
    const k = t.out[0].key; const n = cnt.get(k) || 0;
    if (n >= 3) continue; cnt.set(k, n + 1); out.push(t);
  }
  return out;
}

// ---------- Bookmarklet ----------
// Läuft auf basketball.de (eingeloggt), zieht alle Seiten der Spielerliste und gibt JSON aus.
const USM_BOOKMARKLET_SRC = `(async()=>{try{
if(!/basketball\\.de$/.test(location.hostname)){alert('Bitte auf basketball.de (eingeloggt) ausführen.');return;}
const B='/app/usmanager/top-spieler/?p=';const P=h=>new DOMParser().parseFromString(h,'text/html');
const g=async p=>P(await (await fetch(B+p,{credentials:'include'})).text());
const box=document.createElement('div');box.style.cssText='position:fixed;z-index:2147483647;inset:10px;background:#101116;color:#e9e9ef;font:14px sans-serif;padding:14px;border-radius:12px;display:flex;flex-direction:column;gap:10px;box-shadow:0 10px 40px #000a';
box.innerHTML='<b>MFHFB US-Manager Export</b><div id=mfst>Lade Seite 1…</div>';document.body.appendChild(box);const st=box.querySelector('#mfst');
const f=await g(1);let L=1;f.querySelectorAll('a[href*="p="]').forEach(a=>{const m=a.href.match(/[?&]p=(\\d+)/);if(m)L=Math.max(L,+m[1]);});
const out=[];const n=t=>parseFloat(String(t).replace(/,/g,''))||0;
const grab=d=>{const t=d.querySelector('table');if(!t)return 0;let k=0;[...t.rows].slice(1).forEach(r=>{const c=[...r.cells];if(c.length<7)return;out.push([c[0].textContent.trim(),c[1].textContent.trim(),c[3].textContent.trim(),n(c[4].textContent),c[2].innerHTML.trim()?1:0,n(c[5].textContent),n(c[6].textContent)]);k++;});return k;};
if(!grab(f)){st.textContent='Keine Tabelle gefunden – bist du eingeloggt?';return;}
for(let p=2;p<=L;p++){st.textContent='Lade Seite '+p+'/'+L+'…';grab(await g(p));}
const d=new Date();const ds=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const json=JSON.stringify({v:1,date:ds,players:out});
st.textContent=out.length+' Spieler geladen ('+ds+'). Kopieren und auf manager.html → Import einfügen.';
const ta=document.createElement('textarea');ta.value=json;ta.style.cssText='flex:1;width:100%;background:#191a21;color:#e9e9ef;border:1px solid #2b2d3a;border-radius:8px;font:11px monospace';box.appendChild(ta);
const row=document.createElement('div');row.style.cssText='display:flex;gap:8px;flex-wrap:wrap';
const btn=(t,fn)=>{const b=document.createElement('button');b.textContent=t;b.style.cssText='background:#6c63ff;color:#fff;border:0;border-radius:8px;padding:10px 14px;font-weight:700';b.onclick=fn;row.appendChild(b);};
btn('Kopieren',async()=>{try{await navigator.clipboard.writeText(json);st.textContent='Kopiert ✓ – jetzt auf manager.html einfügen.';}catch(e){ta.select();document.execCommand('copy');st.textContent='Kopiert (Fallback) ✓';}});
btn('Download',()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([json],{type:'application/json'}));a.download='usm-'+ds+'.json';a.click();});
btn('Schließen',()=>box.remove());box.appendChild(row);
}catch(e){alert('Export fehlgeschlagen: '+e.message);}})();`;
function usmBookmarkletHref() {
  return 'javascript:' + encodeURIComponent(USM_BOOKMARKLET_SRC.replace(/\n/g, ''));
}
