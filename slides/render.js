// Renders a carousel JSON file to 1080x1350 PNGs using the brand tokens.
// Usage: node slides/render.js slides/<file>.json [dark|light]
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const file = process.argv[2];
const theme = process.argv[3] || 'dark';
if (!file) { console.error('Usage: node slides/render.js slides/<file>.json [dark|light]'); process.exit(1); }

const tokens = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'brand', 'tokens.json'), 'utf8'));
const deck = JSON.parse(fs.readFileSync(file, 'utf8'));
const c = {};
for (const t of tokens.color.tokens) c[t.name] = t.value[theme] || t.value.dark;
const fam = tokens.type.families;
const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));

const total = deck.slides.length;
const sun = `<svg class="scene" viewBox="0 0 1080 420" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.sky}"/><stop offset="0.55" stop-color="${c.pink}"/><stop offset="1" stop-color="${c.orange}"/></linearGradient><clipPath id="sun"><circle cx="400" cy="250" r="130"/></clipPath><clipPath id="sk"><rect width="1080" height="290"/></clipPath></defs><rect width="1080" height="420" fill="url(#g)"/><g clip-path="url(#sk)"><circle cx="400" cy="250" r="130" fill="${c.gold}"/><g clip-path="url(#sun)" fill="${c.orange}"><rect x="260" y="212" width="280" height="8"/><rect x="260" y="236" width="280" height="12"/><rect x="260" y="264" width="280" height="16"/></g></g><rect y="290" width="1080" height="130" fill="${c.night}"/><g stroke="${c.cyan}" stroke-width="3" fill="none"><path d="M0 318H1080M0 352H1080M0 392H1080"/><path d="M540 290L0 420M540 290L180 420M540 290L360 420M540 290L540 420M540 290L720 420M540 290L900 420M540 290L1080 420"/></g><g stroke="${c.night}" stroke-width="10" stroke-linecap="round" fill="none"><path d="M900 290Q888 200 906 120"/><path d="M906 120Q850 80 810 130"/><path d="M906 120Q860 110 836 170"/><path d="M906 120Q952 80 1004 126"/><path d="M906 120Q950 114 984 176"/><path d="M906 120Q906 70 888 56"/></g></svg>`;
function photo(s) {
  if (!s.image) return '';
  const f = path.resolve(s.image);
  const mime = f.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const uri = `data:${mime};base64,` + fs.readFileSync(f).toString('base64');
  return `<img class="photo" src="${uri}"><div class="shade"></div>`;
}
function body(s, i) {
  if (s.type === 'cover') return `<h1 class="cover">${esc(s.title)}</h1><p class="sub">${esc(s.sub)}</p>`;
  if (s.type === 'recap') return `<h2>${esc(s.head)}</h2><ol>${s.items.map(x => `<li>${esc(x)}</li>`).join('')}</ol>`;
  if (s.type === 'cta') return `<h2 class="big">${esc(s.head)}</h2><p class="text">${esc(s.body)}</p>`;
  return `<h2>${esc(s.head)}</h2><p class="text">${esc(s.body)}</p>${s.menu ? `<p class="menu">${esc(s.menu)}</p>` : ''}`;
}
const page = (s, i) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@500;700&display=swap">
<style>
*{box-sizing:border-box;margin:0}
body{width:1080px;height:1350px;background:${c.night};color:${c.ink};font-family:${fam.sans};position:relative;overflow:hidden}
.in{position:absolute;inset:120px;display:flex;flex-direction:column;justify-content:center;gap:40px}
h1,h2{font-family:${fam.display};font-weight:400;color:${c.ink};text-wrap:balance;text-transform:uppercase}
h1.cover{font-size:150px;line-height:148px;color:${c.ink}}
h1.cover::first-line{color:${c.pink}}
h2{font-size:104px;line-height:106px;color:${c.pink}}
h2.big{font-size:140px;line-height:140px}
.sub,.text{font-size:44px;line-height:58px;font-weight:500;color:${c.ink}}
.sub{color:${c.muted}}
.menu{font-size:32px;line-height:40px;font-weight:700;color:${c.cyan}}
ol{padding-left:56px;display:flex;flex-direction:column;gap:28px;font-size:44px;line-height:58px;font-weight:500}
li::marker{color:${c.orange};font-weight:700}
.photo{position:absolute;inset:0;width:1080px;height:1350px;object-fit:cover}.shade{position:absolute;inset:0;background:linear-gradient(0deg,${c.night}e6 0%,${c.night}00 16%),linear-gradient(180deg,${c.night}f2 0%,${c.night}d9 45%,${c.night}00 75%)}.shade~.in .sub{color:${c.ink}}.in{z-index:2}.stripes{z-index:3}.meta{z-index:3}
.scene{position:absolute;left:0;bottom:110px;width:1080px;height:420px}.in.cover{inset:120px 120px 560px 120px;justify-content:flex-end}.stripes{position:absolute;left:0;right:0;top:0;height:40px}
.meta{position:absolute;left:120px;right:120px;bottom:48px;display:flex;justify-content:space-between;font-size:32px;line-height:40px;font-weight:500;color:${c.muted}}
.meta b{color:${c.cyan};font-weight:700}
</style></head><body>${photo(s)}<svg class="stripes" viewBox="0 0 1080 40"><rect y="0" width="1080" height="8" fill="${c.pink}"/><rect y="16" width="1080" height="8" fill="${c.orange}"/><rect y="32" width="1080" height="8" fill="${c.gold}"/></svg><div class="in ${s.type}">${body(s, i)}</div>${s.type === 'cover' && !s.image ? sun : ''}
<div class="meta"><b>${esc(deck.handle)}</b><span>${i + 1}/${total}</span></div></body></html>`;

(async () => {
  const out = path.join(__dirname, '..', 'out', path.basename(file, '.json'));
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  for (let i = 0; i < total; i++) {
    await p.setContent(page(deck.slides[i], i), { waitUntil: 'networkidle' }).catch(() => {});
    await p.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
    const f = path.join(out, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await p.screenshot({ path: f });
    console.log(f);
  }
  await browser.close();
})();
