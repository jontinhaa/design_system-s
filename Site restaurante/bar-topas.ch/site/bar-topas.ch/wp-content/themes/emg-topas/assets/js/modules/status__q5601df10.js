/**
 * Statut d'ouverture en direct (fuseau Europe/Zurich), compte à rebours
 * jusqu'au lancement et mise en évidence du jour dans les horaires.
 */
const DAYS = ['', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];
const DAYS_LONG = ['', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const h = (s) => s.replace(':', 'H');
const toMin = (s) => {
	const [a, b] = s.split(':').map(Number);
	return a * 60 + b;
};

/** Jour ISO (1-7) et minutes écoulées, heure suisse. */
function zurichNow(tz) {
	const parts = new Intl.DateTimeFormat('en-GB', {
		timeZone: tz,
		weekday: 'short',
		hour: '2-digit',
		minute: '2-digit',
		hourCycle: 'h23',
	}).formatToParts(new Date());
	const get = (t) => parts.find((p) => p.type === t)?.value;
	const day = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[get('weekday')];
	return { day, min: Number(get('hour')) * 60 + Number(get('minute')) };
}

function compute(data) {
	const hours = data.hours || {};
	const { day, min } = zurichNow(data.tz || 'Europe/Zurich');
	const launch = data.launch ? Date.parse(data.launch) : 0;
	const before = launch && Date.now() < launch;

	if (before) {
		const parts = new Intl.DateTimeFormat('fr-CH', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: data.tz }).formatToParts(new Date(launch));
		const get = (t) => parts.find((p) => p.type === t)?.value;
		const date = `${get('day')}.${get('month')}`;
		const time = `${get('hour')}H${get('minute')}`;
		const narrow = innerWidth < 520;
		return { open: false, today: day, text: narrow ? `¡Abrimos! ${date}` : `¡Abrimos! le ${date} dès ${time}`, k: '', sub: '' };
	}

	// Après le lancement : statut permanent, calculé d'après les horaires.
	const today = hours[day];
	if (today) {
		const [o, c] = today;
		if (min >= toMin(o) && min < toMin(c)) {
			return { open: true, today: day, text: `¡Abierto! jusqu’à ${h(c)}`, k: '¡Abierto!', sub: `jusqu’à ${h(c)} ce soir` };
		}
		if (min < toMin(o)) {
			return { open: false, today: day, text: `Ce soir dès ${h(o)}`, k: '¡Hoy!', sub: `ce soir dès ${h(o)}` };
		}
	}
	for (let i = 1; i <= 7; i++) {
		const d = ((day - 1 + i) % 7) + 1;
		if (hours[d]) {
			const label = i === 1 ? 'Demain' : DAYS_LONG[d].charAt(0).toUpperCase() + DAYS_LONG[d].slice(1);
			return { open: false, today: day, text: `${i === 1 ? 'Demain' : DAYS[d]} dès ${h(hours[d][0])}`, k: '¡Hasta pronto!', sub: `${label} dès ${h(hours[d][0])}` };
		}
	}
	return { open: false, today: day, text: '', k: '', sub: '' };
}

export function initStatus(data) {
	const statusText = document.querySelector('[data-status-text]');
	const counters = [...document.querySelectorAll('[data-countdown]')];
	const launch = data.launch ? Date.parse(data.launch) : 0;
	const pad = (n) => String(Math.max(0, n)).padStart(2, '0');
	const setText = (el, v) => {
		if (el && el.textContent !== v) el.textContent = v;
	};

	const render = () => {
		const s = compute(data);
		setText(statusText, s.text);
		document.documentElement.classList.toggle('is-open', s.open);
		document.querySelectorAll('[data-hours-row]').forEach((row) => {
			const days = row.dataset.days.split(',').map(Number);
			row.classList.toggle('is-today', days.includes(s.today));
		});

		const left = launch - Date.now();
		for (const cd of counters) {
			if (left > 0) {
				const sec = Math.floor(left / 1000);
				setText(cd.querySelector('[data-cd="d"]'), pad(Math.floor(sec / 86400)));
				setText(cd.querySelector('[data-cd="h"]'), pad(Math.floor((sec % 86400) / 3600)));
				setText(cd.querySelector('[data-cd="m"]'), pad(Math.floor((sec % 3600) / 60)));
				setText(cd.querySelector('[data-cd="s"]'), pad(sec % 60));
				continue;
			}
			// Compteur arrivé à zéro : il devient un statut permanent.
			if (!cd.classList.contains('is-live')) {
				cd.classList.add('is-live');
				const label = cd.querySelector('[data-cd-label]');
				if (label) label.textContent = cd.dataset.summary || '';
				const open = cd.querySelector('.countdown__open');
				if (open) open.hidden = false;
			}
			setText(cd.querySelector('[data-open-k]'), s.k || '¡Tòpas!');
			setText(cd.querySelector('[data-open-text]'), s.sub || cd.dataset.summary || '');
		}
	};
	render();
	setInterval(render, 1000);
}
