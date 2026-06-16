/* ============================================================
   AMBIENT DECLARATION — Chart.js (loaded via CDN)
   If using a bundler, replace with:
     import type { Chart, ChartConfiguration } from 'chart.js';
============================================================ */
declare class Chart {
    constructor(ctx: CanvasRenderingContext2D, config: object);
    destroy(): void;
}

/* ============================================================
   INTERFACES & TYPES
============================================================ */
interface ChartColorSet {
    accent: string;
    soft: string;
    grid: string;
    label: string;
}

type FileIconKey = 'pdf' | 'img' | 'doc' | 'def';

/* ============================================================
   TS SECTION: THEME TOGGLE
============================================================ */
const SUN: string = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
const MOON: string = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

export const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function toggleTheme(): void {
    const h = document.documentElement;
    const i = document.getElementById('themeIco') as HTMLElement;
    const dark: boolean = h.getAttribute('data-theme') === 'dark';
    h.setAttribute('data-theme', dark ? 'light' : 'dark');
    i.innerHTML = dark ? SUN : MOON;
    rebuildCharts();
}

/* ============================================================
   TS SECTION: SIDEBAR TOGGLE (desktop collapse)
============================================================ */
export function toggleSb(): void {
    const sb = document.getElementById('sidebar') as HTMLElement;
    const c: boolean = sb.classList.toggle('collapsed');
    (document.getElementById('topbar') as HTMLElement).classList.toggle('sc', c);
    (document.getElementById('mainContent') as HTMLElement).classList.toggle('sc', c);
    (document.getElementById('footer') as HTMLElement).classList.toggle('sc', c);
}

/* ============================================================
   TS SECTION: MOBILE SIDEBAR
============================================================ */
export function openMob(): void {
    (document.getElementById('sidebar') as HTMLElement).classList.add('mob-open');
    (document.getElementById('sbOverlay') as HTMLElement).classList.add('show');
}

export function closeMob(): void {
    (document.getElementById('sidebar') as HTMLElement).classList.remove('mob-open');
    (document.getElementById('sbOverlay') as HTMLElement).classList.remove('show');
}

/* ============================================================
   TS SECTION: TOPBAR DROPDOWNS
============================================================ */
export function toggleDD(id: string): void {
    document.querySelectorAll<HTMLElement>('.dd-menu').forEach(m => {
        if (m.id !== id) m.classList.remove('open');
    });
    (document.getElementById(id) as HTMLElement).classList.toggle('open');
}

document.addEventListener('click', (e: MouseEvent): void => {
    const t = e.target as Element | null;
    if (!t?.closest('.dd-wrap') && !t?.closest('.c-dd') && !t?.closest('#csel')) {
        document.querySelectorAll<HTMLElement>('.dd-menu,.c-dd-panel,.csel-panel').forEach(m =>
            m.classList.remove('open')
        );
    }
});

/* ============================================================
   TS SECTION: COMPONENT CARD DROPDOWNS
============================================================ */
export function toggleCDD(id: string): void {
    document.querySelectorAll<HTMLElement>('.c-dd-panel').forEach(p => {
        if (p.id !== id) p.classList.remove('open');
    });
    (document.getElementById(id) as HTMLElement).classList.toggle('open');
}

/* ============================================================
   TS SECTION: SIDEBAR ACTIVE STATE
============================================================ */
export function sbActive(el: HTMLElement): void {
    document.querySelectorAll<HTMLElement>('.sb-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
}

/* ============================================================
   TS SECTION: SEARCHABLE SELECT
============================================================ */
export function toggleCsel(): void {
    const t = document.getElementById('cselTrig') as HTMLElement;
    const p = document.getElementById('cselPanel') as HTMLElement;
    const o: boolean = p.classList.contains('open');
    if (!o) {
        p.classList.add('open');
        t.classList.add('open');
        setTimeout((): void => (document.getElementById('cselQ') as HTMLInputElement).focus(), 40);
    } else {
        p.classList.remove('open');
        t.classList.remove('open');
    }
}

export function filterCsel(): void {
    const q: string = (document.getElementById('cselQ') as HTMLInputElement).value.toLowerCase();
    let vis: number = 0;
    document.querySelectorAll<HTMLElement>('#cselOpts .csel-opt').forEach(o => {
        const m: boolean = (o.textContent ?? '').toLowerCase().includes(q);
        o.classList.toggle('hide', !m);
        if (m) vis++;
    });
    (document.getElementById('cselEmpty') as HTMLElement).style.display = vis ? 'none' : 'block';
}

export function pickCsel(el: HTMLElement, v: string): void {
    document.querySelectorAll<HTMLElement>('#cselOpts .csel-opt').forEach(o => o.classList.remove('sel'));
    el.classList.add('sel');
    const d = document.getElementById('cselDisplay') as HTMLElement;
    d.textContent = v;
    d.classList.remove('ph');
    (document.getElementById('cselPanel') as HTMLElement).classList.remove('open');
    (document.getElementById('cselTrig') as HTMLElement).classList.remove('open');
    (document.getElementById('cselQ') as HTMLInputElement).value = '';
    filterCsel();
}

document.addEventListener('click', (e: MouseEvent): void => {
    if (!(e.target as Element | null)?.closest('#csel')) {
        document.getElementById('cselPanel')?.classList.remove('open');
        document.getElementById('cselTrig')?.classList.remove('open');
    }
});

/* ============================================================
   TS SECTION: FILE DROPZONE
============================================================ */
export function dzOver(e: DragEvent): void {
    e.preventDefault();
    (document.getElementById('dz') as HTMLElement).classList.add('over');
}

export function dzLeave(): void {
    (document.getElementById('dz') as HTMLElement).classList.remove('over');
}

export function dzDrop(e: DragEvent): void {
    e.preventDefault();
    dzLeave();
    if (e.dataTransfer) addFiles([...e.dataTransfer.files]);
}

export function dzSelect(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files) addFiles([...input.files]);
}

const fIco: Record<FileIconKey, string> = {
    pdf: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    img: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    doc: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    def: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`
};

export function getFIco(n: string): string {
    const e: string = n.split('.').pop()?.toLowerCase() ?? '';
    if (['pdf'].includes(e)) return fIco.pdf;
    if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(e)) return fIco.img;
    if (['doc', 'docx', 'txt'].includes(e)) return fIco.doc;
    return fIco.def;
}

export function fmtSz(b: number): string {
    if (b < 1024) return `${b} B`;
    if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
    return `${(b / 1048576).toFixed(1)} MB`;
}

export function addFiles(files: File[]): void {
    const c = document.getElementById('dzFiles') as HTMLElement;
    files.forEach((f: File): void => {
        const id: string = 'f_' + Math.random().toString(36).substr(2, 6);
        const el = document.createElement('div');
        el.className = 'dz-file';
        el.id = id;
        el.innerHTML = `<div class="dz-fname">${getFIco(f.name)}<span title="${f.name}">${f.name}</span></div><span style="font-size:.66rem;color:var(--text-lo);white-space:nowrap">${fmtSz(f.size)}</span><button class="dz-rm" onclick="rmFile('${id}')" title="Remove"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>`;
        c.appendChild(el);
    });
}

export function rmFile(id: string): void {
    document.getElementById(id)?.remove();
}

/* ============================================================
   TS SECTION: CHART THEME COLOURS
============================================================ */
let barC: Chart | null = null;
let lineC: Chart | null = null;

export function chartColors(): ChartColorSet {
    const dk: boolean = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        accent: dk ? '#ffc300' : '#eb5e28',
        soft: dk ? 'rgba(255,195,0,.16)' : 'rgba(235,94,40,.13)',
        grid: dk ? 'rgba(255,195,0,.06)' : 'rgba(64,61,57,.08)',
        label: dk ? '#ffc300' : '#403d39',
    };
}

export function rebuildCharts(): void {
    delay(500);
    if (barC) { barC.destroy(); barC = null; }
    if (lineC) { lineC.destroy(); lineC = null; }
    buildBar();
    buildLine();
}

/* ============================================================
   TS SECTION: BAR CHART — Monthly Revenue
============================================================ */
export function buildBar(): void {
    const c: ChartColorSet = chartColors();
    const ctx = (document.getElementById('barChart') as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    barC = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Revenue ($k)',
                data: [42, 55, 48, 61, 70, 65, 78, 82, 74, 89, 94, 102],
                backgroundColor: c.soft,
                borderColor: c.accent,
                borderWidth: 2,
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: c.accent,
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 10,
                    cornerRadius: 8,
                    callbacks: {
                        label: (x: { parsed: { y: number } }) => ` $${x.parsed.y}k`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: c.grid },
                    ticks: { color: c.label, font: { family: 'DM Mono', size: 10 } }
                },
                y: {
                    grid: { color: c.grid },
                    ticks: {
                        color: c.label,
                        font: { family: 'DM Mono', size: 10 },
                        callback: (v: number | string) => `$${v}k`
                    }
                }
            }
        }
    });
}

/* ============================================================
   TS SECTION: LINE CHART — User Growth
============================================================ */
export function buildLine(): void {
    const c: ChartColorSet = chartColors();
    const ctx = (document.getElementById('lineChart') as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    const g: CanvasGradient = ctx.createLinearGradient(0, 0, 0, 225);
    g.addColorStop(0, c.soft);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    lineC = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Wk1', 'Wk2', 'Wk3', 'Wk4', 'Wk5', 'Wk6', 'Wk7', 'Wk8', 'Wk9', 'Wk10', 'Wk11', 'Wk12'],
            datasets: [{
                label: 'New Users',
                data: [210, 240, 195, 310, 280, 360, 390, 420, 405, 470, 510, 550],
                fill: true,
                backgroundColor: g,
                borderColor: c.accent,
                borderWidth: 2.5,
                pointBackgroundColor: c.accent,
                pointRadius: 3,
                pointHoverRadius: 5,
                tension: 0.42
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: c.accent,
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 10,
                    cornerRadius: 8
                }
            },
            scales: {
                x: {
                    grid: { color: c.grid },
                    ticks: { color: c.label, font: { family: 'DM Mono', size: 10 } }
                },
                y: {
                    grid: { color: c.grid },
                    ticks: { color: c.label, font: { family: 'DM Mono', size: 10 } }
                }
            }
        }
    });
}

/* ============================================================
   TS SECTION: INIT
============================================================ */

async function starterPage(): Promise<void> {
    const h = document.documentElement;
    h.setAttribute('data-theme', 'dark');
    await delay(500);
    buildBar();
    buildLine();
}

window.addEventListener('DOMContentLoaded', (): void => {
    starterPage();
});