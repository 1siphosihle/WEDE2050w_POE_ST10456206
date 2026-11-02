/* OHPiiS Creative Agency - Part 3 behaviour. One file, feature blocks run only when their elements exist. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const D = window.OHPIIS_DATA || { projects: [], categories: [], services: {}, budgets: {} };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const RECIPIENT = 'hello@ohpiis.example'; // contact form email recipient
  const money = n => 'R' + n.toLocaleString('en-ZA').replace(/\s/g, ' ');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- Scroll reveal animation (CSS + IntersectionObserver) ---------- */
  const reveal = $$('.section, .service-card, .work-card, .gallery li');
  reveal.forEach(el => el.setAttribute('data-reveal', ''));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }), { threshold: .12 });
    reveal.forEach(el => io.observe(el));
  } else reveal.forEach(el => el.classList.add('is-visible'));

  /* ---------- Lightbox (native <dialog>) ---------- */
  let lb, lbItems = [], lbIndex = 0, lbOpener = null;
  function buildLightbox() {
    lb = document.createElement('dialog');
    lb.className = 'lightbox';
    lb.setAttribute('aria-label', 'Image viewer');
    lb.innerHTML = '<button class="lb-close" aria-label="Close image viewer">×</button><button class="lb-prev" aria-label="Previous image">←</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-next" aria-label="Next image">→</button>';
    document.body.appendChild(lb);
    $('.lb-close', lb).onclick = () => lb.close();
    $('.lb-prev', lb).onclick = () => showLb(lbIndex - 1);
    $('.lb-next', lb).onclick = () => showLb(lbIndex + 1);
    lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
    lb.addEventListener('close', () => lbOpener && lbOpener.focus());
    lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') showLb(lbIndex - 1); if (e.key === 'ArrowRight') showLb(lbIndex + 1); });
  }
  function showLb(i) {
    lbIndex = (i + lbItems.length) % lbItems.length;
    const a = lbItems[lbIndex], img = $('img', a);
    $('figure img', lb).src = a.href;
    $('figure img', lb).alt = img ? img.alt : '';
    $('figcaption', lb).textContent = a.dataset.caption || '';
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-lightbox]');
    if (!a) return;
    e.preventDefault();
    if (!lb) buildLightbox();
    lbItems = $$('a[data-lightbox="' + a.dataset.lightbox + '"]');
    lbOpener = a;
    showLb(lbItems.indexOf(a));
    lb.showModal();
  });

  /* ---------- Dynamic content: project cards loaded from data.js + category filter ---------- */
  const grid = $('#work-grid');
  if (grid) {
    const bar = $('#work-filters');
    const draw = cat => {
      const list = D.projects.filter(p => cat === 'All' || p.category === cat);
      grid.innerHTML = list.map(p => '<article class="work-card"><a href="images/gallery/' + p.img + '-1200.jpg" data-lightbox="work" data-caption="' + esc(p.title + ' (' + p.category + ', ' + p.year + ')') + '"><img src="images/gallery/' + p.img + '-480.jpg" alt="' + esc(p.alt) + '" width="480" height="320" loading="lazy"></a><div><span class="tag">' + esc(p.category) + '</span><h3>' + esc(p.title) + '</h3><p>' + esc(p.text) + '</p></div></article>').join('');
      $$('.work-card', grid).forEach(c => c.classList.add('is-visible'));
    };
    bar.innerHTML = ['All', ...D.categories].map((c, i) => '<button type="button" class="chip" aria-pressed="' + (i === 0) + '">' + c + '</button>').join('');
    bar.addEventListener('click', e => {
      const b = e.target.closest('.chip'); if (!b) return;
      $$('.chip', bar).forEach(x => x.setAttribute('aria-pressed', x === b));
      draw(b.textContent);
    });
    draw('All');
  }

  /* ---------- Accordion ---------- */
  $$('.accordion').forEach(acc => {
    $$('.acc-trigger', acc).forEach(btn => btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      $('#' + btn.getAttribute('aria-controls')).hidden = open;
    }));
  });

  /* ---------- Tabs (with arrow-key support) ---------- */
  $$('.tabs').forEach(t => {
    const tabs = $$('[role="tab"]', t), panels = $$('[role="tabpanel"]', t);
    const pick = i => tabs.forEach((tab, n) => { const on = n === i; tab.setAttribute('aria-selected', on); tab.tabIndex = on ? 0 : -1; panels[n].hidden = !on; });
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => pick(i));
      tab.addEventListener('keydown', e => {
        const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!k) return;
        const n = (i + k + tabs.length) % tabs.length; pick(n); tabs[n].focus();
      });
    });
  });

  /* ---------- Services: search, filter and sort ---------- */
  const rows = $$('.service-row[data-title]');
  if (rows.length) {
    const q = $('#service-search'), sort = $('#service-sort'), cat = $('#service-category'), count = $('#results-count'), empty = $('#no-results');
    const parent = rows[0].parentElement;
    const run = () => {
      const term = q.value.trim().toLowerCase();
      let list = rows.filter(r => (cat.value === 'all' || r.dataset.category === cat.value) && (r.textContent.toLowerCase().includes(term)));
      const by = { name: (a, b) => a.dataset.title.localeCompare(b.dataset.title), low: (a, b) => a.dataset.price - b.dataset.price, high: (a, b) => b.dataset.price - a.dataset.price, order: (a, b) => rows.indexOf(a) - rows.indexOf(b) }[sort.value];
      list.sort(by);
      rows.forEach(r => r.hidden = !list.includes(r));
      list.forEach(r => parent.appendChild(r));
      count.textContent = list.length + ' of ' + rows.length + ' services shown';
      empty.hidden = list.length > 0;
    };
    [q, sort, cat].forEach(el => el.addEventListener('input', run));
    run();
  }

  /* ---------- Form validation engine ---------- */
  const rules = {
    name: v => !v.trim() ? 'Please enter your full name.' : !/^[A-Za-zÀ-ÿ' -]{2,60}$/.test(v.trim()) ? 'Use 2 to 60 letters only (spaces, hyphens and apostrophes are allowed).' : '',
    email: v => !v.trim() ? 'Please enter your email address.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Enter a valid email address, e.g. name@example.com.' : '',
    phone: v => v.trim() && !/^(\+27|0)[1-9]\d{8}$/.test(v.replace(/[\s-]/g, '')) ? 'Enter a valid South African number, e.g. 082 123 4567 or +27 82 123 4567.' : '',
    organisation: v => v.length > 80 ? 'Keep this under 80 characters.' : '',
    service: v => v ? '' : 'Please select a service.',
    type: v => v ? '' : 'Please select the type of message.',
    start: v => { if (!v) return 'Please choose a preferred start date.'; const d = new Date(v), t = new Date(); t.setHours(0, 0, 0, 0); const max = new Date(t); max.setFullYear(max.getFullYear() + 2); return d < t ? 'The start date cannot be in the past.' : d > max ? 'Choose a date within the next two years.' : ''; },
    message: v => v.trim().length < 20 ? 'Please write at least 20 characters (' + v.trim().length + '/20).' : v.length > 1000 ? 'Please keep this under 1000 characters.' : '',
    consent: (v, el) => el.checked ? '' : 'Please agree before sending.'
  };
  function check(el) {
    const rule = rules[el.name]; if (!rule) return true;
    const msg = rule(el.value, el), err = $('#' + el.id + '-error');
    el.setAttribute('aria-invalid', String(!!msg));
    if (err) err.textContent = msg;
    return !msg;
  }
  function setupForm(form, onValid) {
    const fields = $$('input[name], select[name], textarea[name]', form).filter(f => f.type !== 'hidden');
    const min = $('input[type="date"]', form); if (min) min.min = new Date().toISOString().split('T')[0];
    fields.forEach(f => { f.addEventListener('blur', () => { f.dataset.touched = '1'; check(f); }); f.addEventListener('input', () => { if (f.dataset.touched) check(f); }); });
    const counter = $('.counter', form), msg = $('textarea', form);
    if (counter && msg) msg.addEventListener('input', () => counter.textContent = msg.value.length + ' / 1000');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const bad = fields.filter(f => !check(f));
      const status = $('.form-status', form);
      if (bad.length) { status.className = 'form-status is-error'; status.textContent = 'Please fix ' + bad.length + ' highlighted field' + (bad.length > 1 ? 's' : '') + ' and try again.'; bad[0].focus(); return; }
      const btn = $('button[type="submit"]', form); btn.disabled = true; status.className = 'form-status'; status.textContent = 'Sending…';
      let sent = false;
      try { /* AJAX submission: the form is posted in the background without a page reload */
        const r = await fetch(form.getAttribute('action'), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() });
        sent = r.ok;
      } catch (err) { sent = false; }
      btn.disabled = false;
      status.className = 'form-status ' + (sent ? 'is-ok' : 'is-warn');
      status.textContent = sent ? 'Thank you, your details were received.' : 'Your form is valid. The server could not be reached (normal when testing locally), so your result is shown below.';
      onValid(Object.fromEntries(new FormData(form)), sent);
    });
  }
  function dialog(html) {
    const d = document.createElement('dialog'); d.className = 'result-dialog';
    d.innerHTML = '<button class="lb-close" aria-label="Close">×</button>' + html;
    document.body.appendChild(d); $('.lb-close', d).onclick = () => d.close();
    d.addEventListener('close', () => d.remove()); d.showModal(); return d;
  }

  /* ---------- Enquiry form: process input into a cost and availability response ---------- */
  const enq = $('#enquiry-form');
  if (enq) setupForm(enq, data => {
    const s = D.services[data.service], budget = D.budgets[data.budget];
    const earliest = new Date(); earliest.setDate(earliest.getDate() + s.weeks * 7);
    const wanted = new Date(data.start), ok = wanted >= earliest;
    const fmt = d => d.toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
    let cost = 'Projects in this service start from <strong>' + money(s.from) + '</strong> (estimate, final quote after a brief call).';
    if (budget) cost += budget >= s.from ? ' Your selected budget covers the starting price.' : ' Your selected budget is below the starting price, so we would suggest a reduced scope.';
    dialog('<h2>Thanks, ' + esc(data.name.split(' ')[0]) + '.</h2><p><strong>Service:</strong> ' + esc(data.service) + '</p><p>' + cost + '</p><p><strong>Availability:</strong> our earliest start for this service is <strong>' + fmt(earliest) + '</strong>. ' + (ok ? 'Your preferred date of ' + fmt(wanted) + ' is available.' : 'Your preferred date of ' + fmt(wanted) + ' is too soon, so we would propose the earliest date instead.') + '</p><p>We will reply to ' + esc(data.email) + ' within 2 working days.</p>');
  });

  /* ---------- Contact form: compile an email the visitor can send ---------- */
  const con = $('#contact-form');
  if (con) setupForm(con, data => {
    const subject = '[' + data.type + '] Message from ' + data.name;
    const body = 'Name: ' + data.name + '\nEmail: ' + data.email + '\nPhone: ' + (data.phone || 'not provided') + '\nType of message: ' + data.type + '\n\n' + data.message;
    const href = 'mailto:' + RECIPIENT + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    const d = dialog('<h2>Your email is ready</h2><p><strong>To:</strong> ' + RECIPIENT + '</p><p><strong>Subject:</strong> ' + esc(subject) + '</p><pre>' + esc(body) + '</pre><p><a class="button" href="' + href + '">OPEN IN EMAIL APP <span>↗</span></a> <button type="button" class="button button-ghost" id="copy-email">COPY EMAIL TEXT</button></p>');
    $('#copy-email', d).onclick = e => { navigator.clipboard && navigator.clipboard.writeText('To: ' + RECIPIENT + '\nSubject: ' + subject + '\n\n' + body).then(() => e.target.textContent = 'COPIED'); };
  });

  /* ---------- Interactive map (Leaflet + OpenStreetMap) ---------- */
  const mapEl = $('#map');
  if (mapEl && window.L) {
    const offices = { jhb: { n: 'Johannesburg studio', c: [-26.2041, 28.0473] }, cpt: { n: 'Cape Town studio', c: [-33.9249, 18.4241] } };
    const map = L.map(mapEl, { scrollWheelZoom: false }).setView(offices.jhb.c, 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
    Object.values(offices).forEach(o => L.marker(o.c).addTo(map).bindPopup('<strong>' + o.n + '</strong><br>Visits by appointment'));
    $$('[data-office]').forEach(b => b.addEventListener('click', () => { const o = offices[b.dataset.office]; map.flyTo(o.c, 11, { duration: 1.2 }); $$('[data-office]').forEach(x => x.setAttribute('aria-pressed', x === b)); }));
    const fb = $('#map-fallback'); if (fb) fb.hidden = true;
  }
})();
