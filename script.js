const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');

if (navToggle && sidebar) {
  navToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

const revealEls = document.querySelectorAll('.section, .hero, .info-card, .partner, .timeline-step, .hero-media');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
