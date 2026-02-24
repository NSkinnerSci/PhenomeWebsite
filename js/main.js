// main.js — shared scripts for all pages

/**
 * Highlight the current page's nav link.
 */
(function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.color = '#0070f3';
      link.setAttribute('aria-current', 'page');
    }
  });
})();
