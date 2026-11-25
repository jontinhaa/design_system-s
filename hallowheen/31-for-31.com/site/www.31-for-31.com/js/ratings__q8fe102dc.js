/* Ratings — like / dislike per film.
   Counts are stored in a free, keyless hit counter (Abacus) so every visitor sees the same totals.
   Each browser gets one vote per film, remembered in localStorage.
   If the counter service is unreachable the UI falls back to local-only counts. */
window.Ratings = (() => {
  const API = "https://abacus.jasoncameron.dev";
  // Change this namespace if you ever want to reset every count at once.
  const NS = "mmc-31-for-31-2026";
  const LS_KEY = "v31_votes";
  const cache = {};   // slug -> { like, dislike }
  const listeners = new Set();

  const votes = (() => { try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; } })();
  const saveVotes = () => { try { localStorage.setItem(LS_KEY, JSON.stringify(votes)); } catch {} };

  // Abacus allows 30 requests per 10 seconds per IP, so requests go through a
  // small queue: one start every 420ms, two in flight, votes jump the line,
  // and a 429 waits for the window to reset before retrying.
  const queue = []; let inflight = 0, lastStart = 0, pausedUntil = 0;
  const GAP = 420, MAX = 2;
  function pump() {
    if (inflight >= MAX || !queue.length) return;
    const now = Date.now(), wait = Math.max(lastStart + GAP - now, pausedUntil - now, 0);
    if (wait > 0) { setTimeout(pump, wait); return; }
    const job = queue.shift(); inflight++; lastStart = Date.now();
    job().finally(() => { inflight--; pump(); });
    pump();
  }
  function request(url, priority) {
    return new Promise(resolve => {
      const job = async () => {
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            const r = await fetch(url, { cache: "no-store" });
            if (r.status === 429) {
              const reset = Number(r.headers.get("ratelimit-reset")) * 1000;
              pausedUntil = reset > Date.now() ? reset + 200 : Date.now() + 10000;
              await new Promise(d => setTimeout(d, pausedUntil - Date.now()));
              continue;
            }
            if (!r.ok) return resolve(null);          // 404: counter does not exist yet
            const j = await r.json();
            return resolve(Number(j.value));
          } catch { return resolve(null); }
        }
        resolve(null);
      };
      priority ? queue.unshift(job) : queue.push(job);
      pump();
    });
  }
  const getCount = async key => (await request(`${API}/get/${NS}/${key}`, false)) || 0;
  const hit = key => request(`${API}/hit/${NS}/${key}`, true);

  function emit(slug) { listeners.forEach(fn => fn(slug, cache[slug], votes[slug])); }

  const pending = {};
  function load(slug) {
    if (cache[slug]) { emit(slug); return Promise.resolve(cache[slug]); }
    if (pending[slug]) return pending[slug];
    pending[slug] = Promise.all([getCount(`${slug}-like`), getCount(`${slug}-dislike`)]).then(([like, dislike]) => {
      cache[slug] = cache[slug] || { like, dislike };   // a vote may have landed while loading
      delete pending[slug];
      emit(slug);
      return cache[slug];
    });
    return pending[slug];
  }

  async function vote(slug, kind) {
    if (votes[slug]) return cache[slug];           // one vote per browser per film
    votes[slug] = kind; saveVotes();
    cache[slug] = cache[slug] || { like: 0, dislike: 0 };
    cache[slug][kind] += 1;                         // optimistic
    emit(slug);
    if (window.track) window.track("vote", { film: slug, kind });
    const v = await hit(`${slug}-${kind}`);
    if (v !== null) { cache[slug][kind] = v; emit(slug); }
    return cache[slug];
  }

  return {
    load, vote,
    myVote: slug => votes[slug] || null,
    get: slug => cache[slug] || null,
    onChange: fn => listeners.add(fn),
  };
})();
