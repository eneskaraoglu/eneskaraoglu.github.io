let currentLang = localStorage.getItem('portfolio-lang') || 'en';
  let words = translations[currentLang].typedWords;
  let wi = 0, ci = 0, deleting = false, typingTimer;

  function applyLanguage(lang) {
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
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

