/* Watchlist — which films you have seen, which of the 31 you have swapped for a pick of your own, plus your own additions.
   Lives in localStorage and, when window.SYNC_URL is set, syncs to a tiny cloud store
   under an anonymous random ID. Share the sync link to load the same list on another device.
   No accounts: the ID is the key, so treat the link like a house key. */
window.Watchlist = (() => {
  const LS_KEY = "v31_list";
  const SYNC = window.SYNC_URL || null;
  const listeners = new Set();
  let status = SYNC ? "idle" : "local";      // idle | syncing | synced | error | local
  let pushTimer = null;

  const newId = () => {
    const a = "abcdefghjkmnpqrstuvwxyz23456789", b = crypto.getRandomValues(new Uint8Array(12));
    return Array.from(b, x => a[x % a.length]).join("");
  };
  const blank = () => ({ v: 1, id: newId(), updatedAt: 0, watched: {}, swaps: {}, custom: [] });

  let state = (() => {
    try { const s = JSON.parse(localStorage.getItem(LS_KEY) || "null"); if (s && s.id) return { ...blank(), ...s }; } catch {}
    return blank();
  })();

  const save = () => { try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch {} };
  const emit = () => listeners.forEach(fn => fn(state, status));
  const setStatus = s => { status = s; emit(); };
  const touch = () => { state.updatedAt = Date.now(); save(); emit(); schedulePush(); };

  /* ---- sync ---- */
  async function pull() {
    if (!SYNC) return null;
    try {
      const r = await fetch(`${SYNC}/${state.id}`, { cache: "no-store" });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error(r.status);
      return await r.json();
    } catch { setStatus("error"); return undefined; }
  }
  async function push() {
    if (!SYNC) return;
    setStatus("syncing");
    try {
      const r = await fetch(`${SYNC}/${state.id}`, { method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ v: 1, updatedAt: state.updatedAt, watched: state.watched, swaps: state.swaps, custom: state.custom }) });
      if (!r.ok) throw new Error(r.status);
      setStatus("synced");
    } catch { setStatus("error"); }
  }
  function schedulePush() {
    if (!SYNC) return;
    clearTimeout(pushTimer); pushTimer = setTimeout(push, 900);
  }
  const hasContent = s => Object.keys(s.watched || {}).length || Object.keys(s.swaps || {}).length || (s.custom || []).length;

  // On load: the newer copy wins. Remote list missing but local has progress -> push.
  async function init() {
    if (!SYNC) { emit(); return; }
    const remote = await pull();
    if (remote === undefined) return;                                   // network error, stay local
    if (remote && remote.updatedAt > state.updatedAt) { state = { ...state, ...remote, id: state.id }; save(); setStatus("synced"); }
    else if (hasContent(state) && (!remote || remote.updatedAt < state.updatedAt)) push();
    else setStatus("synced");
  }

  // Load another device's list by its ID. Local progress is merged in, then pushed.
  async function adopt(id) {
    id = String(id || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!/^[a-z0-9]{8,24}$/.test(id)) return { ok: false, reason: "That code does not look right." };
    if (!SYNC) return { ok: false, reason: "Sync is not configured on this site." };
    let remote;
    try {
      const r = await fetch(`${SYNC}/${id}`, { cache: "no-store" });
      if (r.status === 404) return { ok: false, reason: "No list found for that code." };
      if (!r.ok) throw new Error(r.status);
      remote = await r.json();
    } catch { return { ok: false, reason: "Could not reach the sync service." }; }
    const merged = { v: 1, id, updatedAt: Date.now(),
      watched: { ...state.watched, ...remote.watched },
      swaps: { ...(state.swaps || {}), ...(remote.swaps || {}) },
      custom: [...(remote.custom || [])] };
    for (const c of state.custom) if (!merged.custom.some(m => m.id === c.id || m.title.toLowerCase() === c.title.toLowerCase())) merged.custom.push(c);
    state = merged; save(); emit(); await push();
    return { ok: true };
  }

  /* ---- public api ---- */
  return {
    init, adopt,
    get: () => state,
    status: () => status,
    syncEnabled: !!SYNC,
    code: () => state.id,
    syncLink: () => `${location.origin}${location.pathname}#sync=${state.id}`,
    isWatched: slug => !!state.watched[slug],
    // swaps: a night of the 31 replaced by the visitor's own film, on their list only. { title, year, at }
    getSwap: slug => (state.swaps || {})[slug] || null,
    swap(slug, title, year) {
      title = String(title || "").trim().slice(0, 120); if (!title) return false;
      state.swaps = state.swaps || {};
      state.swaps[slug] = { title, year: String(year || "").replace(/[^0-9]/g, "").slice(0, 4), at: Date.now() };
      touch(); return true;
    },
    restore(slug) { if (state.swaps && state.swaps[slug]) { delete state.swaps[slug]; touch(); } },
    toggle(slug) { const on = !state.watched[slug]; if (on) state.watched[slug] = Date.now(); else delete state.watched[slug]; touch(); if (window.track) window.track("watched", { film: slug, on }); },
    progress(total) { const done = Object.keys(state.watched).filter(k => !k.startsWith("custom:")).length; return { done, total, pct: total ? Math.round(100 * done / total) : 0 }; },
    addCustom(title, year, note) {
      title = String(title || "").trim().slice(0, 120); if (!title) return null;
      const item = { id: newId().slice(0, 10), title, year: String(year || "").replace(/[^0-9]/g, "").slice(0, 4), note: String(note || "").slice(0, 280), added: Date.now(), watched: null };
      state.custom.unshift(item); touch(); return item;
    },
    toggleCustom(id) { const c = state.custom.find(x => x.id === id); if (c) { c.watched = c.watched ? null : Date.now(); touch(); } },
    removeCustom(id) { state.custom = state.custom.filter(x => x.id !== id); touch(); },
    reset() { state = blank(); save(); setStatus(SYNC ? "idle" : "local"); },
    onChange: fn => listeners.add(fn),
  };
})();
