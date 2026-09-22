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

  // Hero integration network — languages & protocols exchanging packets
  (function heroNetwork() {
    const hero = document.getElementById('hero');
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-network';
    canvas.setAttribute('aria-hidden', 'true');
    const well = hero.querySelector('.hero-well');
    if (!well) return;
    well.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const labels = ['Java', 'Spring Boot', 'REST', 'SOAP', 'Go', 'Oracle', 'MQTT', 'Kotlin', 'React',
      'PostgreSQL', 'WebSocket', 'Python', 'RabbitMQ', 'TypeScript', 'Redis', 'OpenAPI', 'OAuth2',
      'Flink', 'Docker', 'e-Fatura', 'LLM', 'Angular', 'SQL'];
    const css = getComputedStyle(document.documentElement);
    const surface = css.getPropertyValue('--bg').trim() || '#E0E5EC';
    const fg = css.getPropertyValue('--fg').trim() || '#3D4852';
    const muted = css.getPropertyValue('--muted').trim() || '#6B7280';
    const accent = css.getPropertyValue('--accent').trim() || '#6C63FF';

    let w = 0, h = 0, nodes = [], edges = [], packets = [], raf = 0, visible = true, lastSpawn = 0;

    function layout() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = w < 380 ? 11 : 14;
      // jittered grid so labels spread across the well instead of clumping
      const cols = Math.max(2, Math.round(Math.sqrt(count * (w / h) * 0.6)));
      const rows = Math.ceil(count / cols);
      const cellW = (w - 130) / cols, cellH = (h - 60) / rows;
      nodes = labels.slice(0, count).map((label, i) => ({
        label,
        x: 30 + (i % cols + 0.2 + Math.random() * 0.6) * cellW,
        y: 30 + ((i / cols | 0) + 0.2 + Math.random() * 0.6) * cellH,
        vx: (Math.random() - .5) * .18,
        vy: (Math.random() - .5) * .18,
        pulse: 0,
      }));
      const seen = new Set();
      edges = [];
      nodes.forEach((n, i) => {
        nodes.map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
          .filter(o => o.j !== i).sort((a, b) => a.d - b.d).slice(0, 2)
          .forEach(({ j }) => {
            const key = Math.min(i, j) + '-' + Math.max(i, j);
            if (!seen.has(key)) { seen.add(key); edges.push([i, j]); }
          });
      });
      packets = [];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(107, 114, 128, 0.22)';
      ctx.beginPath();
      edges.forEach(([a, b]) => { ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); });
      ctx.stroke();

      const dot = (x, y, r, color) => { ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); };

      packets.forEach(p => {
        const a = nodes[p.from], b = nodes[p.to];
        dot(a.x + (b.x - a.x) * p.t, a.y + (b.y - a.y) * p.t, 3, accent);
      });

      ctx.font = '500 11px "Fira Code", monospace';
      ctx.textBaseline = 'middle';
      nodes.forEach(n => {
        if (n.pulse > 0) {
          ctx.strokeStyle = `rgba(108, 99, 255, ${n.pulse * 0.6})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 7 + (1 - n.pulse) * 12, 0, Math.PI * 2);
          ctx.stroke();
        }
        // raised clay bump: dark shadow bottom-right, light top-left, surface on top
        dot(n.x + 2, n.y + 2, 6, 'rgba(163, 177, 198, 0.75)');
        dot(n.x - 2, n.y - 2, 6, 'rgba(255, 255, 255, 0.85)');
        dot(n.x, n.y, 6, surface);
        dot(n.x, n.y, 2.5, n.pulse > 0.3 ? accent : muted);
        ctx.fillStyle = n.pulse > 0.3 ? accent : fg;
        ctx.fillText(n.label, n.x + 12, n.y);
      });
    }

    function step(now) {
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 20 || n.x > w - 100) n.vx *= -1;
        if (n.y < 20 || n.y > h - 20) n.vy *= -1;
        n.pulse = Math.max(0, n.pulse - 0.02);
      });
      if (now - lastSpawn > 260 && edges.length) {
        lastSpawn = now;
        const [a, b] = edges[Math.random() * edges.length | 0];
        const flip = Math.random() < .5;
        packets.push({ from: flip ? a : b, to: flip ? b : a, t: 0, speed: .006 + Math.random() * .01 });
      }
      packets = packets.filter(p => {
        p.t += p.speed;
        if (p.t >= 1) { nodes[p.to].pulse = 1; return false; }
        return true;
      });
      draw();
      raf = visible && !document.hidden ? requestAnimationFrame(step) : 0;
    }

    function start() { if (!raf && !reduceMotion) raf = requestAnimationFrame(step); }

    layout();
    draw();
    if (reduceMotion) return;
    start();

    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); }).observe(hero);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { layout(); draw(); }, 200);
    });
  })();
