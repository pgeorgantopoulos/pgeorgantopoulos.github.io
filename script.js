// Highlight the current section's nav link while scrolling.
const sections = document.querySelectorAll('main .section[id]');
const navLinks = document.querySelectorAll('.nav a');

if ('IntersectionObserver' in window && sections.length && navLinks.length) {
  const setActive = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.style.color = isActive ? 'var(--ink)' : '';
      link.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}// Smooth scroll navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -66%'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Add subtle animation on scroll
const animatedElements = document.querySelectorAll('.section, .research-item');

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
            elementObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(el => elementObserver.observe(el));

// Keyboard shortcut for smooth navigation
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                break;
            case '2':
                document.querySelector('#research').scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                document.querySelector('#reading').scrollIntoView({ behavior: 'smooth' });
                break;
            case '4':
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});
