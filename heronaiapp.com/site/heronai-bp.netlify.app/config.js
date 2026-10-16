const LOCAL_ORIGIN = 'http://localhost:3000';
const PRODUCTION_MAIN_URL = 'https://heronai-bp.netlify.app/main.js';
const DEV_SESSION_KEY = 'heron-dev-mode';

async function canConnectToDevServer() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 800);

    try {
        const response = await fetch(`${LOCAL_ORIGIN}/@vite/client`, {
            cache: 'no-store',
            signal: controller.signal
        });
        return response.ok;
    } catch {
        return false;
    } finally {
        clearTimeout(timeout);
    }
}

async function loadApp() {
    const hasDevParam = new URLSearchParams(window.location.search).has('dev');
    const isDevRequested = hasDevParam || sessionStorage.getItem(DEV_SESSION_KEY) === 'true';

    if (isDevRequested && await canConnectToDevServer()) {
        sessionStorage.setItem(DEV_SESSION_KEY, 'true');
        window.__VS_DEV__ = true;
        await import(`${LOCAL_ORIGIN}/@vite/client`);
        await import(`${LOCAL_ORIGIN}/src/main.js`);
        return;
    }

    sessionStorage.removeItem(DEV_SESSION_KEY);
    window.__VS_DEV__ = false;
    await import(PRODUCTION_MAIN_URL);
}

window.__HERON_APP_LOADER__ ??= loadApp().catch((error) => {
    console.error('[Heron] Failed to load application bundle.', error);
});
