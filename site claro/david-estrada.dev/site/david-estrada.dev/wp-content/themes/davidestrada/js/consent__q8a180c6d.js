// Cookie consent and analytics loading.
// Nothing from Google is requested until the visitor accepts analytics: Google Consent Mode v2 starts with
// everything denied, and Google Tag Manager itself is only loaded after "Accept". "Reject" is as easy to
// reach as "Accept", the choice is remembered for a year, and the "Cookie settings" link in the footer
// brings the question back at any time.

(() => {
  // In WordPress the theme sets window.DE (container ID, policy links, own visit count); the static site
  // falls back to the constant below
  const CFG = window.DE || {};
  const GTM_ID = CFG.gtm || ''; // static site: paste the ID here, 'GTM-XXXXXXX' or 'G-XXXXXXXXXX'
  const OWN = Boolean(CFG.stats); // the site's own visit count also waits for this answer
  const KEY = 'de-consent';
  const MAX_AGE = 365 * 24 * 60 * 60 * 1000; // ask again after a year

  // Where the cookie policy lives, from this page (the script sits in /js/)
  const base = new URL('..', document.currentScript.src);
  const spanish = document.documentElement.lang === 'es';
  const policy = CFG.policy ? CFG.policy[spanish ? 'es' : 'en'] : new URL(spanish ? 'legal/politica-de-cookies.html' : 'legal/cookie-policy.html', base).href;
  const own = spanish
    ? 'Cuento las visitas de esta web solo si aceptas: sin cookies y sin datos personales.'
    : 'I count visits to this site only if you accept: no cookies and nothing personal.';
  const text = spanish
    ? { body: 'Uso cookies de analítica de Google solo si las aceptas, para saber qué páginas se visitan. Nada más.', more: 'Política de cookies', reject: 'Rechazar', accept: 'Aceptar', label: 'Cookies' }
    : { body: 'I use Google Analytics cookies only if you accept them, to see which pages get visited. Nothing else.', more: 'Cookie policy', reject: 'Reject', accept: 'Accept', label: 'Cookies' };

  if (OWN && !GTM_ID) text.body = own;
  else if (OWN) text.body += ` ${own}`;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });

  const read = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      return saved && Date.now() - saved.at < MAX_AGE ? saved : null;
    } catch (error) {
      return null;
    }
  };
  const write = (analytics) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ analytics, at: Date.now() }));
    } catch (error) { /* private mode: the choice lasts for this page only */ }
  };

  // The ID decides what is loaded: a Tag Manager container (GTM-…) or the Google tag of a GA4 property (G-…)
  let loaded = false;
  const loadTagManager = () => {
    if (loaded || !GTM_ID) return;
    loaded = true;
    const direct = /^G-/.test(GTM_ID);
    if (direct) {
      gtag('js', new Date());
      gtag('config', GTM_ID);
    } else {
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/${direct ? 'gtag/js' : 'gtm.js'}?id=${encodeURIComponent(GTM_ID)}`;
    document.head.append(script);
  };

  // Withdrawing consent also removes the cookies Google Analytics had already set
  const clearAnalyticsCookies = () => {
    const host = location.hostname;
    const domains = [host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
    document.cookie.split(';').map((cookie) => cookie.split('=')[0].trim()).filter((name) => /^_ga/.test(name)).forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
      });
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
  };

  const apply = (analytics) => {
    gtag('consent', 'update', { analytics_storage: analytics ? 'granted' : 'denied' });
    if (analytics) loadTagManager();
    else clearAnalyticsCookies();
    // The site's own visit count (js/stats.js) listens for this
    window.deConsent = analytics;
    document.dispatchEvent(new CustomEvent('de:consent', { detail: { analytics } }));
  };

  // What people do on the site, as Google Analytics events. Only sent once the visitor has accepted
  // analytics: before that nothing is loaded and nothing is queued. Each event says which part of the page
  // it came from (click_section: the id of its section, or hero / site-header / site-footer / menu)
  const track = (name, params) => {
    if (window.deConsent === true) gtag('event', name, params);
  };
  const partOf = (el) => {
    const part = el.closest('section[id], .hero, .site-header, .site-footer, .menu');
    return part ? part.id || part.className.split(' ')[0] : 'page';
  };
  document.addEventListener('click', (event) => {
    const link = event.target.closest ? event.target.closest('a[href]') : null;
    if (!link) return;
    const href = link.getAttribute('href');
    // What the site is for: a click through to Upwork (the profile, or a service's page in its catalog)
    if (/upwork\.com/.test(href)) return track('upwork_click', { click_section: partOf(link) });
    // One of the three services opened, from the home page or from the index of /services
    const service = href.match(/services\/?#([\w-]+)$/) || (link.closest('.services-index') && href.match(/^#([\w-]+)$/));
    if (service) return track('select_service', { service_id: service[1], click_section: partOf(link) });
    // A case study opened
    const work = href.match(/work\/([\w-]+?)(?:\.html|\/)?$/);
    if (work) return track('case_open', { case_slug: work[1], click_section: partOf(link) });
    // An email instead of Upwork
    if (/^mailto:/.test(href)) track('contact_email', { click_section: partOf(link) });
  });
  // A question of a service opened (the questions are <details>, so this also counts the keyboard)
  document.addEventListener('toggle', (event) => {
    const item = event.target;
    if (!item.matches || !item.matches('.faq__item') || !item.open) return;
    const question = item.querySelector('summary').textContent.trim().slice(0, 100);
    track('faq_open', { service_id: partOf(item), faq_question: question });
  }, true);

  let banner = null;
  const close = () => {
    if (!banner) return;
    banner.remove();
    banner = null;
  };
  const choose = (analytics) => {
    write(analytics);
    apply(analytics);
    close();
  };
  const open = () => {
    if (banner) return;
    banner = document.createElement('section');
    banner.className = 'consent';
    banner.setAttribute('aria-label', text.label);
    banner.innerHTML = `
      <p>${text.body} <a href="${policy}">${text.more}</a></p>
      <div class="consent__actions">
        <button type="button" data-consent="reject">${text.reject}</button>
        <button type="button" data-consent="accept">${text.accept}</button>
      </div>`;
    banner.querySelector('[data-consent="reject"]').addEventListener('click', () => choose(false));
    banner.querySelector('[data-consent="accept"]').addEventListener('click', () => choose(true));
    document.body.append(banner);
  };

  const saved = read();
  if (saved) apply(saved.analytics);

  const ready = () => {
    // With nothing to measure there is nothing to consent to, so the question is not asked
    if (!saved && (GTM_ID || OWN)) open();
    document.querySelectorAll('[data-cookie-settings]').forEach((el) => el.addEventListener('click', open));
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
