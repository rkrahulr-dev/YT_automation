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
const sun = `<svg class="sun" viewBox="0 0 200 200" aria-hidden="true"><defs><clipPath id="k"><circle cx="100" cy="100" r="90"/></clipPath></defs><circle cx="100" cy="100" r="90" fill="${c.orange}"/><g clip-path="url(#k)" fill="${c.night}"><rect x="0" y="108" width="200" height="6"/><rect x="0" y="124" width="200" height="9"/><rect x="0" y="143" width="200" height="12"/><rect x="0" y="165" width="200" height="16"/></g></svg>`;

function body(s, i) {
  if (s.type === 'cover') return `<h1 class="cover">${esc(s.title)}</h1><p class="sub">${esc(s.sub)}</p>${sun}`;
  if (s.type === 'recap') return `<h2>${esc(s.head)}</h2><ol>${s.items.map(x => `<li>${esc(x)}</li>`).join('')}</ol>`;
  if (s.type === 'cta') return `<h2 class="big">${esc(s.head)}</h2><p class="text">${esc(s.body)}</p>`;
  return `<h2>${esc(s.head)}</h2><p class="text">${esc(s.body)}</p>${s.menu ? `<p class="menu">${esc(s.menu)}</p>` : ''}`;
}
const page = (s, i) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@800&family=DM+Sans:wght@500;700&display=swap">
<style>
*{box-sizing:border-box;margin:0}
body{width:1080px;height:1350px;background:${c.night};color:${c.ink};font-family:${fam.sans};position:relative;overflow:hidden}
.in{position:absolute;inset:120px;display:flex;flex-direction:column;justify-content:center;gap:40px}
h1,h2{font-family:${fam.display};font-weight:800;color:${c.ink};text-wrap:balance}
h1.cover{font-size:120px;line-height:120px;color:${c.ink}}
h1.cover::first-line{color:${c.pink}}
h2{font-size:72px;line-height:80px;color:${c.pink}}
h2.big{font-size:96px;line-height:104px}
.sub,.text{font-size:44px;line-height:58px;font-weight:500;color:${c.ink}}
.sub{color:${c.muted}}
.menu{font-size:32px;line-height:40px;font-weight:700;color:${c.cyan}}
ol{padding-left:56px;display:flex;flex-direction:column;gap:28px;font-size:44px;line-height:58px;font-weight:500}
li::marker{color:${c.orange};font-weight:700}
.sun{position:absolute;right:-60px;top:-60px;width:340px;height:340px}
.meta{position:absolute;left:120px;right:120px;bottom:48px;display:flex;justify-content:space-between;font-size:32px;line-height:40px;font-weight:500;color:${c.muted}}
.meta b{color:${c.cyan};font-weight:700}
</style></head><body><div class="in">${body(s, i)}</div>
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
