const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');

if (navToggle && sidebar) {
  navToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

const revealEls = document.querySelectorAll('.section, .hero, .info-card, .partner-card, .timeline-step, .hero-media');
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

const promoBanner = document.querySelector('.promo-banner');
const promoClose = document.querySelector('.promo-close');

if (promoBanner && promoClose) {
  promoClose.addEventListener('click', () => {
    promoBanner.classList.add('promo-hidden');
  });
}

const eventFloat = document.querySelector('.event-float');
const eventClose = document.querySelector('.event-float-close');

if (eventFloat && eventClose) {
  eventClose.addEventListener('click', () => {
    eventFloat.classList.add('hidden');
  });
}

const adFloat = document.querySelector('.ad-float');
const adClose = document.querySelector('.ad-close');

if (adFloat && adClose) {
  adClose.addEventListener('click', () => {
    adFloat.classList.add('hidden');
  });
}
