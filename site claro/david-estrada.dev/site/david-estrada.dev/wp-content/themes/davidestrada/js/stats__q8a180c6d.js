// The site's own visit count (WordPress version). One small message per page seen, and only once the
// visitor has accepted measurement in the cookie question (js/consent.js): no cookies, no IP, nothing
// personal. It says which page, whether it opens a visit, which site the visitor came from and the kind
// of device. Logged-in editors and the Studio preview are never counted (the theme leaves DE.stats empty).

(() => {
  const config = window.DE && window.DE.stats;
  if (!config) return;

  let sent = false;
  const send = () => {
    if (sent) return;
    sent = true;
    let visit = 0;
    try {
      if (!sessionStorage.getItem('de-visit')) {
        sessionStorage.setItem('de-visit', '1');
        visit = 1;
      }
    } catch (error) {
      visit = document.referrer.includes(location.host) ? 0 : 1;
    }
    let from = '';
    try {
      const host = document.referrer ? new URL(document.referrer).host : '';
      if (host !== location.host) from = host;
    } catch (error) { /* no referrer */ }
    const width = window.innerWidth;
    const body = JSON.stringify({ t: config.t, id: config.id, v: visit, r: from, d: width < 700 ? 'mobile' : width < 1100 ? 'tablet' : 'desktop' });
    fetch(config.url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true, credentials: 'omit' }).catch(() => {});
  };

  if (window.deConsent) send();
  document.addEventListener('de:consent', (event) => { if (event.detail.analytics) send(); });
})();
