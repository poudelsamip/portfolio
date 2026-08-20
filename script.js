document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = `© ${new Date().getFullYear()}`;
  }

  // Scrollspy nav
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length) {
    const sections = Array.from(navLinks)
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (!link) return;
        navLinks.forEach(l => l.classList.remove('is-current'));
        link.classList.add('is-current');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => spy.observe(section));
  }

});
