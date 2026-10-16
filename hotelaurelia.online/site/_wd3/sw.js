/* Website Downloader 3.0 — Service Worker de replay.
 *
 * Intercepta TODAS as requisições da página (inclusive para CDNs) e responde com os bytes originais gravados em
 * site/. O que não foi gravado é registrado como "falta" e buscado online (SPEC §6, Q12).
 */
'use strict';

const BASE = new URL('../../', self.location).href;  // raiz da captura: este arquivo fica em site/_wd3/
const ORIGIN = self.location.origin;
const ICONIFY_HOSTS = new Set(['api.iconify.design', 'api.simplesvg.com', 'api.unisvg.com']);
const NULL_BODY = new Set([101, 204, 205, 304]);

// Injetado no começo de cada documento servido:
// 1. impede que o SW do próprio site substitua o nosso;
// 2. documento servido por SW reporta transferSize 0, e sites usam isso para detectar "veio do cache" e pular
//    intros/loaders (ex.: altitude101) — reportamos o tamanho como se tivesse vindo da rede;
// 3. links para outras origens não navegam (Q15).
const INJECT = '<script data-wd3>(function(){try{var c=navigator.serviceWorker;if(c){' +
  'c.register=function(){return Promise.reject(new DOMException("wd3: service worker do site desativado no modo offline","SecurityError"))};' +
  'c.getRegistrations=function(){return Promise.resolve([])};' +
  'c.getRegistration=function(){return Promise.resolve(undefined)};}}catch(e){}' +
  'try{var N=window.PerformanceNavigationTiming,d=Object.getOwnPropertyDescriptor(PerformanceResourceTiming.prototype,"transferSize");' +
  'if(N&&d&&d.get)Object.defineProperty(N.prototype,"transferSize",{configurable:true,enumerable:true,' +
  'get:function(){var v=d.get.call(this);return v>0?v:(this.encodedBodySize||0)+300}});}catch(e){}' +
  'document.addEventListener("click",function(ev){var a=ev.target&&ev.target.closest&&ev.target.closest("a[href]");' +
  'if(!a)return;var u;try{u=new URL(a.href,location.href)}catch(e){return}' +
  'if(/^https?:$/.test(u.protocol)&&u.origin!==location.origin)ev.preventDefault();},true);})();</script>';

let INDEX = null;
let INDEX_HOSTS = [];  // domínios de plataforma cuja mídia fica online por política (Q22)
const misses = new Map();
const iconSets = new Map();

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(loadIndex());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type === 'wd3:get-misses' && event.source) {
    event.source.postMessage({ type: 'wd3:misses', misses: Array.from(misses.values()) });
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.cache === 'only-if-cached' && req.mode !== 'same-origin') return;
  if (!/^https?:/.test(req.url)) return;
  event.respondWith(handle(req));
});

// ---------------------------------------------------------------- índice

function loadIndex() {
  if (!INDEX) {
    INDEX = fetch(new URL('site-index.json', self.location).href, { cache: 'no-store' })
      .then((r) => r.json())
      .then(buildIndex)
      .then((idx) => { INDEX_HOSTS = idx.onlineHosts; return idx; })
      .catch((err) => { INDEX = null; throw err; });
  }
  return INDEX;
}

function buildIndex(data) {
  const volatile = new Set(data.volatileParams || []);
  const exact = new Map();
  const byMethodUrl = new Map();
  const norm = new Map();
  const loose = new Map();
  const variants = new Map();
  for (const e of data.entries) {
    const url = stripHash(e.url);
    setOnce(exact, key(e.method, url, e.bodyHash || null), e);
    push(byMethodUrl, e.method + ' ' + url, e);
    setOnce(norm, e.method + ' ' + normalizeUrl(url, volatile), e);
    if (e.method === 'GET') push(loose, looseKey(url), e);
    if (e.method === 'GET' && e.file && /^image\//i.test(e.contentType || '')) push(variants, variantKey(url), e);
  }
  const entryUrl = new URL(data.entry.url);
  const videos = data.videos || {};
  return {
    data, exact, byMethodUrl, norm, loose, variants, volatile,
    posters: videos.posters || {},
    onlineHosts: videos.onlineHosts || [],
    blocked: (data.blocked || []).map((s) => new RegExp(s)),
    entryOrigin: entryUrl.origin,
    entryPath: trimSlash(data.entry.path || '/'),
    entryTarget: (data.entry.path || '/') + (data.entry.search || ''),
    entryDoc: { url: data.entry.url, file: data.entry.file, contentType: data.entry.contentType, status: 200, headers: {} },
  };
}

function setOnce(map, k, v) { if (!map.has(k)) map.set(k, v); }
function push(map, k, v) { const list = map.get(k); if (list) list.push(v); else map.set(k, [v]); }
function key(method, url, bodyHash) { return method + ' ' + url + (bodyHash ? ' #' + bodyHash : ''); }
function stripHash(u) { const i = u.indexOf('#'); return i === -1 ? u : u.slice(0, i); }
function trimSlash(p) { return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p; }
function looseKey(u) { const x = new URL(u); return x.origin + x.pathname; }

function isVolatile(name, value, volatile) {
  if (volatile.has(name)) return true;
  if (/^\d{10,13}$/.test(value)) return true;           // timestamps (Date.now(), epoch)
  if (/^\d+$/.test(name) && value === '') return true;  // "?1695123123"
  return false;
}

function normalizeUrl(u, volatile) {
  const x = new URL(u);
  const kept = [];
  for (const [k, v] of x.searchParams) if (!isVolatile(k, v, volatile)) kept.push([k, v]);
  kept.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] < b[1] ? -1 : 1));
  x.search = kept.length ? '?' + kept.map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v)).join('&') : '';
  x.hash = '';
  return x.href;
}

// ---------------------------------------------------------------- roteamento

async function handle(req) {
  let idx;
  try {
    idx = await loadIndex();
  } catch (err) {
    return fetch(req);
  }
  const reqUrl = new URL(req.url);
  if (req.mode === 'navigate') return handleNavigate(req, reqUrl, idx);
  if (idx.blocked.some((r) => r.test(req.url))) return blockedResponse(req);

  const target = mapToOriginal(reqUrl, idx);
  const entry = await lookup(req, target, idx);
  if (entry) return serveEntry(req, entry, idx);

  const icons = await iconify(req, target, idx);
  if (icons) return icons;

  const variant = req.method === 'GET' ? imageVariant(target.href, idx) : null;
  if (variant) {
    noteMiss(target.href, req, variant.url);
    return serveEntry(req, variant, idx);
  }

  noteMiss(target.href, req);
  return fallbackOnline(req, target, reqUrl);
}

// ---------------------------------------------------------------- variantes de imagem
// Outra densidade de tela ou largura pede outro tamanho da MESMA imagem (srcset, CDNs de resize, WordPress,
// Webflow, Astro, Shopify). Servimos a maior variante gravada em vez de deixar a imagem quebrar.

const RESIZE_PARAMS = new Set(['w', 'h', 'width', 'height', 'q', 'quality', 'dpr', 'fit', 'auto', 'fm', 'format',
  'crop', 'resize', 'size', 'scale-down-to', 'lossless', 'blur', 'sat', 'rect']);

function variantKey(u) {
  const x = new URL(u);
  let path = x.pathname
    .replace(/-\d{2,5}x\d{2,5}(?=\.\w+$)/, '')     // WordPress: foto-768x430.png
    .replace(/-p-\d{3,4}(?=\.\w+$)/, '')            // Webflow: foto-p-800.jpeg
    .replace(/_\d{2,5}x\d{0,5}(?=\.\w+$)/, '');     // Shopify: foto_800x.jpg
  if (path.includes('/_astro/')) path = path.replace(/_[\w-]{4,}(?=\.\w+$)/, '');  // Astro: nome.hash_transf.webp
  const kept = [];
  for (const [k, v] of x.searchParams) if (!RESIZE_PARAMS.has(k.toLowerCase())) kept.push(k + '=' + v);
  kept.sort();
  return x.origin + path + '?' + kept.join('&');
}

function imageVariant(url, idx) {
  const list = idx.variants.get(variantKey(url));
  if (!list) return null;
  return list.reduce((best, e) => ((e.size || 0) > (best.size || 0) ? e : best));
}

// localhost:PORT/x → https://site-original/x
function mapToOriginal(reqUrl, idx) {
  if (reqUrl.origin !== ORIGIN) return reqUrl;
  return new URL(reqUrl.pathname + reqUrl.search, idx.entryOrigin);
}

async function handleNavigate(req, reqUrl, idx) {
  if (reqUrl.origin === ORIGIN && req.destination === 'document') {
    const path = trimSlash(reqUrl.pathname);
    if (path === idx.entryPath) return serveEntry(req, idx.entryDoc, idx, true);
    if (path === '/' || path === '/index.html') return Response.redirect(idx.entryTarget, 302);
    // Q15: links para outras páginas não fazem nada — 204 mantém a página atual
    return new Response(null, { status: 204 });
  }
  // iframe/frame da mesma origem: serve do arquivo; se faltar, deixa o iframe ir ao original
  const target = mapToOriginal(reqUrl, idx);
  const entry = await lookup(req, target, idx);
  if (entry) return serveEntry(req, entry, idx, true);
  noteMiss(target.href, req);
  return target.href !== reqUrl.href ? Response.redirect(target.href, 302) : fetch(req);
}

async function lookup(req, target, idx) {
  const method = req.method === 'HEAD' ? 'GET' : req.method;
  const url = stripHash(target.href);
  if (method !== 'GET') {
    const body = await req.clone().arrayBuffer();
    const hash = body.byteLength ? await sha256(body) : null;
    const hit = idx.exact.get(key(method, url, hash));
    if (hit) return hit;
    const same = idx.byMethodUrl.get(method + ' ' + url);
    if (same && same.length === 1) return same[0];
    return null;
  }
  const hit = idx.exact.get(key('GET', url, null)) || idx.norm.get('GET ' + normalizeUrl(url, idx.volatile));
  if (hit) return hit;
  const candidates = idx.loose.get(looseKey(url));
  return candidates && candidates.length === 1 ? candidates[0] : null;
}

// ---------------------------------------------------------------- respostas

function fileUrl(file) {
  return BASE + file.split('/').map(encodeURIComponent).join('/');
}

function contentTypeOf(e) {
  const ct = e.contentType || '';
  const path = new URL(e.url).pathname.toLowerCase();
  if (path.endsWith('.wasm')) return 'application/wasm';
  if (/\.m?js$/.test(path) && !/javascript|ecmascript/i.test(ct)) return 'text/javascript';
  if (path.endsWith('.css') && !/css/i.test(ct)) return 'text/css';
  return ct || 'application/octet-stream';
}

function replayHeaders(e) {
  const h = new Headers();
  for (const [k, v] of Object.entries(e.headers || {})) {
    try { h.set(k, v); } catch (err) { /* header inválido */ }
  }
  h.set('content-type', contentTypeOf(e));
  h.set('access-control-allow-origin', '*');
  h.set('cross-origin-resource-policy', 'cross-origin');
  h.set('timing-allow-origin', '*');
  return h;
}

async function serveEntry(req, e, idx, isDocument) {
  if (e.redirect) {
    const status = [301, 302, 303, 307, 308].includes(e.status) ? e.status : 302;
    return Response.redirect(new URL(e.redirect, e.url).href, status);
  }
  const headers = replayHeaders(e);
  const status = e.status >= 200 && e.status <= 599 ? e.status : 200;
  if (!e.file || NULL_BODY.has(status)) return new Response(null, { status: NULL_BODY.has(status) ? status : 200, headers });

  const range = req.headers.get('range');
  const r = await fetch(fileUrl(e.file), range ? { headers: { range } } : undefined);
  if (!r.ok) {
    noteMiss(e.url, req);
    return new Response('', { status: 404 });
  }
  if (isDocument && /html/i.test(headers.get('content-type'))) return documentResponse(r, headers, status, idx);
  if (r.status === 206) {
    headers.set('content-range', r.headers.get('content-range'));
    headers.set('content-length', r.headers.get('content-length'));
    headers.set('accept-ranges', 'bytes');
    return new Response(r.body, { status: 206, headers });
  }
  if (/^(video|audio)\//i.test(headers.get('content-type'))) headers.set('accept-ranges', 'bytes');
  return new Response(req.method === 'HEAD' ? null : r.body, { status, headers });
}

async function documentResponse(r, headers, status, idx) {
  const buf = await r.arrayBuffer();
  const m = /charset=([^;]+)/i.exec(headers.get('content-type') || '');
  let text;
  try { text = new TextDecoder(m ? m[1].trim() : 'utf-8').decode(buf); }
  catch (err) { text = new TextDecoder('utf-8').decode(buf); }
  headers.set('content-type', 'text/html; charset=utf-8');
  return new Response(injectScript(text, postersScript(idx)), { status, headers });
}

// Vídeo de conteúdo auto-hospedado saiu do ZIP (Q22): o <video> ganha o poster gravado (visível offline).
function postersScript(idx) {
  if (!idx || !Object.keys(idx.posters).length) return '';
  const cfg = JSON.stringify({ origin: idx.entryOrigin, posters: idx.posters }).replace(/</g, '\\u003c');
  return '<script data-wd3>(function(){var c=' + cfg + ';function abs(u){try{var x=new URL(u,location.href);' +
    'if(x.origin===location.origin)x=new URL(x.pathname+x.search,c.origin);return x.href}catch(e){return u}}' +
    'function apply(){document.querySelectorAll("video").forEach(function(v){var s=v.currentSrc||v.getAttribute("src");' +
    'if(!s){var so=v.querySelector("source[src]");s=so&&so.getAttribute("src")}if(!s)return;var p=c.posters[abs(s)];' +
    'if(p&&!v.getAttribute("poster"))v.setAttribute("poster",p)})}' +
    'document.addEventListener("DOMContentLoaded",apply);new MutationObserver(apply).observe(document,{childList:true,subtree:true})})();</script>';
}

function injectScript(html, extra) {
  const code = INJECT + (extra || '');
  const head = /<head(\s[^>]*)?>/i.exec(html);
  if (head) return html.slice(0, head.index + head[0].length) + code + html.slice(head.index + head[0].length);
  const root = /<html(\s[^>]*)?>/i.exec(html);
  if (root) return html.slice(0, root.index + root[0].length) + code + html.slice(root.index + root[0].length);
  const doctype = /^\s*<!doctype[^>]*>/i.exec(html);
  if (doctype) return doctype[0] + code + html.slice(doctype[0].length);
  return code + html;
}

function blockedResponse(req) {
  if (req.destination === 'script') return new Response('', { status: 200, headers: { 'content-type': 'text/javascript' } });
  return new Response(null, { status: 204 });
}

async function fallbackOnline(req, target, reqUrl) {
  try {
    if (target.href === reqUrl.href) return await fetch(req);
    const init = { method: req.method, credentials: 'omit', redirect: 'follow',
                   mode: req.mode === 'no-cors' ? 'no-cors' : 'cors' };
    if (req.method !== 'GET' && req.method !== 'HEAD') init.body = await req.clone().arrayBuffer();
    return await fetch(target.href, init);
  } catch (err) {
    return new Response('', { status: 404, statusText: 'wd3: nao capturado' });
  }
}

// substitute: URL da variante servida no lugar (imagem de outro tamanho) — conta como falta "leve"
function noteMiss(url, req, substitute) {
  const m = misses.get(url);
  if (m) { m.count += 1; return; }
  let online = false;
  if (INDEX_HOSTS.length) {
    try { const h = new URL(url).hostname; online = INDEX_HOSTS.some((x) => h === x || h.endsWith('.' + x)); } catch (e) {}
  }
  misses.set(url, { url, destination: req.destination || '', method: req.method, count: 1,
                    substitute: substitute || null, online });
}

async function sha256(buf) {
  const digest = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

// ---------------------------------------------------------------- Iconify
// O cliente do Iconify pede ícones em lotes (?icons=a,b,c) que variam a cada carregamento. Juntamos tudo o que
// foi gravado por coleção e respondemos a qualquer combinação.

async function iconify(req, target, idx) {
  if (req.method !== 'GET' || !ICONIFY_HOSTS.has(target.hostname)) return null;
  const m = /^\/([a-z0-9-]+)\.json$/i.exec(target.pathname);
  if (!m) return null;
  const set = await iconSet(m[1], idx);
  if (!set) return null;
  const wanted = (target.searchParams.get('icons') || '').split(',').filter(Boolean);
  const out = { prefix: set.prefix, icons: {}, aliases: {} };
  for (const k of ['width', 'height', 'lastModified']) if (set[k] !== undefined) out[k] = set[k];
  const notFound = [];
  for (const name of wanted) {
    if (set.icons[name]) out.icons[name] = set.icons[name];
    else if (set.aliases[name]) {
      out.aliases[name] = set.aliases[name];
      const parent = set.aliases[name].parent;
      if (set.icons[parent]) out.icons[parent] = set.icons[parent];
    } else notFound.push(name);
  }
  if (notFound.length) {
    noteMiss(target.href, req);
    try {
      const live = await fetch(target.href, { mode: 'cors', credentials: 'omit' });
      if (live.ok) return live;
    } catch (err) { /* offline: devolve o que temos */ }
    out.not_found = notFound;
  }
  return new Response(JSON.stringify(out), {
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' },
  });
}

async function iconSet(prefix, idx) {
  if (iconSets.has(prefix)) return iconSets.get(prefix);
  const merged = { prefix, icons: {}, aliases: {} };
  let found = false;
  for (const e of idx.data.entries) {
    if (!e.file || e.method !== 'GET') continue;
    const u = new URL(e.url);
    if (!ICONIFY_HOSTS.has(u.hostname) || u.pathname.toLowerCase() !== '/' + prefix.toLowerCase() + '.json') continue;
    try {
      const json = await (await fetch(fileUrl(e.file))).json();
      Object.assign(merged.icons, json.icons || {});
      Object.assign(merged.aliases, json.aliases || {});
      for (const k of ['width', 'height', 'lastModified']) if (json[k] !== undefined) merged[k] = json[k];
      found = true;
    } catch (err) { /* JSON inválido: ignora */ }
  }
  const result = found ? merged : null;
  iconSets.set(prefix, result);
  return result;
}
