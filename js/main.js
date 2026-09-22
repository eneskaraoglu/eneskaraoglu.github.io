let currentLang = localStorage.getItem('portfolio-lang') || 'en';
  let words = translations[currentLang].typedWords;
  let wi = 0, ci = 0, deleting = false, typingTimer;
  let i18nVersion = 0;

  function applyLanguage(lang) {
    i18nVersion++;
    currentLang = translations[lang] ? lang : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    const dictionary = translations[currentLang];

    document.documentElement.lang = currentLang;
    document.title = dictionary.metaTitle;
    document.querySelector('meta[name="description"]').setAttribute('content', dictionary.metaDescription);

    document.querySelectorAll('[data-i18n]').forEach(node => {
      node.textContent = dictionary[node.dataset.i18n] || node.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(node => {
      node.innerHTML = dictionary[node.dataset.i18nHtml] || node.innerHTML;
    });
    document.querySelectorAll('.lang-btn').forEach(button => {
      button.classList.toggle('active', button.dataset.lang === currentLang);
      button.setAttribute('aria-pressed', String(button.dataset.lang === currentLang));
    });

    words = dictionary.typedWords;
    wi = 0;
    ci = 0;
    deleting = false;
    clearTimeout(typingTimer);
    const typed = document.getElementById('typed');
    if (typed) typed.textContent = '';
    typingTimer = setTimeout(type, 500);
  }

  function type() {
    const typed = document.getElementById('typed');
    if (!typed) return;
    const word = words[wi];
    if (!deleting) {
      typed.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; typingTimer = setTimeout(type, 1800); return; }
    } else {
      typed.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    typingTimer = setTimeout(type, deleting ? 55 : 90);
  }

  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });
  applyLanguage(currentLang);

  async function updateVisitCounter() {
    const target = document.getElementById('visit-count');
    if (!target) return;

    try {
      const response = await fetch('https://counterapi.com/api/eneskaraoglu.github.io/view/home?unique=true');
      if (!response.ok) throw new Error('Counter request failed');

      const data = await response.json();
      target.textContent = Number(data.value).toLocaleString();
    } catch {
      target.closest('.visit-counter')?.remove();
    }
  }
  updateVisitCounter();

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  function setMenu(open) {
    links.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Title decode effect — characters resolve from code glyphs
  const glyphs = '01<>/{}[]=;:$#_*+&|';
  function decode(node) {
    const target = node.textContent;
    const version = i18nVersion;
    const start = performance.now();
    const duration = 650;
    function frame(now) {
      if (version !== i18nVersion) return;
      const progress = Math.min((now - start) / duration, 1);
      const shown = Math.floor(progress * target.length);
      let out = target.slice(0, shown);
      for (let i = shown; i < target.length; i++) {
        out += target[i] === ' ' ? ' ' : glyphs[Math.random() * glyphs.length | 0];
      }
      node.textContent = progress < 1 ? out : target;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (!reduceMotion) {
    const titleObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { decode(e.target); titleObserver.unobserve(e.target); } });
    }, { threshold: 0.4 });
    document.querySelectorAll('.section-title').forEach(el => titleObserver.observe(el));
  }

  // Skill tags — stagger index per group
  document.querySelectorAll('.skill-group').forEach((group, g) => {
    group.querySelectorAll('.skill-tag').forEach((tag, i) => {
      tag.style.setProperty('--g', g);
      tag.style.setProperty('--i', Math.min(i, 12));
    });
  });

  // Marquees — duplicate the track for a seamless loop
  document.querySelectorAll('.marquee-track').forEach(track => { track.innerHTML += track.innerHTML; });

  // Active section → nav link + logo path
  const navPath = document.getElementById('nav-path');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      navPath.textContent = id === 'hero' ? '' : '/' + id;
      links.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

  // Scroll-driven build progress + timeline graph
  const progressBar = document.getElementById('nav-progress');
  const timeline = document.querySelector('.timeline');
  let scrollTicking = false;
  function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    if (timeline && !reduceMotion) {
      const rect = timeline.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - rect.top) / rect.height));
      timeline.style.setProperty('--progress', p.toFixed(3));
    }
    scrollTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // Route transition — a terminal "request" plays between sections
  const routeLines = {
    hero:       ['$ cd ~/enes', '> cat README.md', '<b>ok</b> · welcome back'],
    about:      ['import com.enes.about.*;', '> new Developer("Enes").describe()', '<b>ok</b> · Java · Spring · ERP'],
    projects:   ['$ curl -X GET /api/v1/projects', '> Accept: application/json', '<b>200 OK</b> · 13 items'],
    experience: ['$ git log --author="enes" --oneline', '> HEAD -> main, origin/career', '<b>ok</b> · since 2008'],
    contact:    ['$ curl -X POST /api/v1/contact', '> Content-Type: message/hello', '<b>201 Created</b> · awaiting reply'],
  };
  const overlay = document.createElement('div');
  overlay.className = 'route-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<div class="route-box"><p class="route-path"></p><pre class="route-log"></pre><div class="route-bar"><span></span></div></div>';
  document.body.appendChild(overlay);
  const routePath = overlay.querySelector('.route-path');
  const routeLog = overlay.querySelector('.route-log');
  let routing = false;

  function routeTo(target) {
    routing = true;
    const lines = routeLines[target.id] || ['$ open #' + target.id, '<b>ok</b>'];
    routePath.innerHTML = '~/enes<span>/' + (target.id === 'hero' ? '' : target.id) + '</span>';
    routeLog.innerHTML = '';
    overlay.classList.add('active');
    lines.forEach((line, i) => setTimeout(() => { routeLog.innerHTML += line + '\n'; }, 160 + i * 150));

    setTimeout(() => {
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      history.pushState(null, '', '#' + target.id);
      overlay.classList.add('leaving');
    }, 820);

    setTimeout(() => {
      overlay.style.transition = 'none';
      overlay.classList.remove('active', 'leaving');
      void overlay.offsetWidth;
      overlay.style.transition = '';
      routing = false;
    }, 1250);
  }

  if (!reduceMotion) {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', event => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        if (!routing) routeTo(target);
      });
    });
  }

  // Hero patch bay — cables re-patch between integration ports, signals travel along them
  (function patchBay() {
    const hero = document.getElementById('hero');
    const bay = document.getElementById('patch-bay');
    if (!bay) return;

    const NS = 'http://www.w3.org/2000/svg';
    const make = (tag, attrs = {}) => {
      const el = document.createElementNS(NS, tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    };

    // pairings taken from real projects (ERP, MES, condoctor, DeskIQ…)
    const pool = [
      ['spring', 'rest'], ['spring', 'oracle'], ['java', 'soap'], ['go', 'rest'],
      ['mqtt', 'redis'], ['redis', 'ws'], ['react', 'ws'], ['react', 'rest'],
      ['spring', 'rabbitmq'], ['rabbitmq', 'ws'], ['llm', 'rest'], ['go', 'oracle'],
      ['java', 'oracle'], ['soap', 'oracle'], ['mqtt', 'java'], ['llm', 'redis'],
    ];
    const colors = ['#ff4757', '#e0e5ec', '#f5c518', '#4a5568', '#ff4757'];
    const ACTIVE = 5;

    const jacks = {};
    bay.querySelectorAll('.jack').forEach(j => { jacks[j.dataset.port] = j; });

    const svg = make('svg', { class: 'rack-cables' });
    const cableLayer = make('g');
    const packetLayer = make('g');
    svg.append(cableLayer, packetLayer);
    bay.appendChild(svg);

    let cables = [], colorIndex = 0, raf = 0, visible = true, swapTimer = 0;

    function socketCenter(port) {
      const socket = jacks[port].querySelector('.jack-socket');
      const r = socket.getBoundingClientRect(), b = bay.getBoundingClientRect();
      return { x: r.left + r.width / 2 - b.left, y: r.top + r.height / 2 - b.top };
    }

    // gravity: cables hang below the lower of the two jacks
    function pathFor(a, b) {
      const p = socketCenter(a), q = socketCenter(b);
      const dx = q.x - p.x;
      const sag = Math.min(80, 22 + Math.hypot(dx, q.y - p.y) * 0.3);
      const low = Math.max(p.y, q.y) + sag;
      return { d: `M${p.x},${p.y} C${p.x + dx * 0.12},${low} ${q.x - dx * 0.12},${low} ${q.x},${q.y}`, p, q };
    }

    function shape(cable) {
      const { d, p, q } = pathFor(cable.a, cable.b);
      cable.paths.forEach(path => path.setAttribute('d', d));
      cable.len = cable.body.getTotalLength();
      [[cable.plugA, p], [cable.plugB, q]].forEach(([plug, c]) => plug.setAttribute('transform', `translate(${c.x},${c.y})`));
    }

    function plug(color) {
      const g = make('g', { class: 'plug' });
      g.append(
        make('circle', { r: 10, fill: '#1e2527', stroke: color, 'stroke-width': 3 }),
        make('circle', { r: 3.5, cx: -2.5, cy: -2.5, fill: 'rgba(255,255,255,.35)' }),
      );
      return g;
    }

    function connect(a, b, animate) {
      const color = colors[colorIndex++ % colors.length];
      const g = make('g', { class: 'cable' });
      const shadow = make('path', { fill: 'none', stroke: 'rgba(0,0,0,.5)', 'stroke-width': 7, 'stroke-linecap': 'round', transform: 'translate(2,4)' });
      const body = make('path', { fill: 'none', stroke: color, 'stroke-width': 5, 'stroke-linecap': 'round' });
      const shine = make('path', { fill: 'none', stroke: 'rgba(255,255,255,.35)', 'stroke-width': 1.5, 'stroke-linecap': 'round', transform: 'translate(-1,-1.5)' });
      const plugA = plug(color), plugB = plug(color);
      g.append(shadow, body, shine, plugA, plugB);
      cableLayer.appendChild(g);

      const cable = { a, b, g, body, paths: [shadow, body, shine], plugA, plugB, len: 0, packets: [], next: 0, light: color !== '#ff4757' };
      shape(cable);
      jacks[a].classList.add('is-plugged');
      jacks[b].classList.add('is-plugged');

      if (animate) {
        // the cable is pulled out from the first jack and seated in the second
        cable.paths.forEach(path => {
          path.style.strokeDasharray = cable.len;
          path.animate([{ strokeDashoffset: cable.len }, { strokeDashoffset: 0 }],
            { duration: 700, easing: 'cubic-bezier(.175,.885,.32,1.275)' })
            .finished.then(() => { path.style.strokeDasharray = ''; });
        });
        plugB.animate([{ opacity: 0, transform: `${plugB.getAttribute('transform')} scale(1.6)` },
                       { opacity: 1, transform: `${plugB.getAttribute('transform')} scale(1)` }],
          { duration: 300, delay: 600, fill: 'backwards', easing: 'cubic-bezier(.175,.885,.32,1.275)' });
      }
      cables.push(cable);
    }

    function disconnect(cable) {
      cables = cables.filter(c => c !== cable);
      cable.packets.forEach(pk => pk.el.remove());
      jacks[cable.a].classList.remove('is-plugged');
      jacks[cable.b].classList.remove('is-plugged');
      cable.g.style.opacity = '0';
      setTimeout(() => cable.g.remove(), 260);
    }

    const used = () => new Set(cables.flatMap(c => [c.a, c.b]));
    function freePairs() {
      const busy = used();
      return pool.filter(([a, b]) => !busy.has(a) && !busy.has(b));
    }

    function swap() {
      if (!cables.length) return;
      disconnect(cables[Math.random() * cables.length | 0]);
      const options = freePairs();
      if (options.length) { const [a, b] = options[Math.random() * options.length | 0]; setTimeout(() => connect(a, b, true), 320); }
    }

    function step(now) {
      cables.forEach(c => {
        if (now > c.next && c.len) {
          c.next = now + 900 + Math.random() * 1600;
          const el = make('circle', { r: 3, class: 'packet', fill: c.light ? '#ff4757' : '#ffffff' });
          packetLayer.appendChild(el);
          c.packets.push({ el, t: 0, reverse: Math.random() < .5, speed: 1.4 + Math.random() });
        }
        c.packets = c.packets.filter(pk => {
          pk.t += pk.speed;
          if (pk.t >= c.len) {
            pk.el.remove();
            const dest = jacks[pk.reverse ? c.a : c.b];
            dest.classList.add('is-flash');
            setTimeout(() => dest.classList.remove('is-flash'), 180);
            return false;
          }
          const pt = c.body.getPointAtLength(pk.reverse ? c.len - pk.t : pk.t);
          pk.el.setAttribute('cx', pt.x);
          pk.el.setAttribute('cy', pt.y);
          return true;
        });
      });
      raf = visible && !document.hidden ? requestAnimationFrame(step) : 0;
    }

    function start() {
      if (reduceMotion) return;
      if (!raf) raf = requestAnimationFrame(step);
      if (!swapTimer) swapTimer = setInterval(() => { if (visible && !document.hidden) swap(); }, 3200);
    }

    // initial patch: pick non-overlapping pairs
    const shuffled = pool.slice().sort(() => Math.random() - .5);
    for (const [a, b] of shuffled) {
      if (cables.length >= ACTIVE) break;
      const busy = used();
      if (!busy.has(a) && !busy.has(b)) connect(a, b, false);
    }

    // re-route cables whenever the bay reflows (resize, fonts loading)
    new ResizeObserver(() => cables.forEach(shape)).observe(bay);

    // hovering a jack highlights the cables patched into it
    Object.entries(jacks).forEach(([port, jack]) => {
      jack.addEventListener('mouseenter', () => cables.forEach(c => c.g.classList.toggle('is-hot', c.a === port || c.b === port)));
      jack.addEventListener('mouseleave', () => cables.forEach(c => c.g.classList.remove('is-hot')));
    });

    if (reduceMotion) return;
    start();
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); }).observe(hero);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });
  })();
