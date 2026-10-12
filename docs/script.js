const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

// Give the hero sculpture a restrained pointer response on devices with a mouse.
const art = document.querySelector('.hero-art');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  art.addEventListener('pointermove', (event) => {
    const bounds = art.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    art.style.setProperty('--pointer-x', `${x * 10}px`);
    art.style.setProperty('--pointer-y', `${y * 10}px`);
  });
  art.addEventListener('pointerleave', () => {
    art.style.setProperty('--pointer-x', '0px');
    art.style.setProperty('--pointer-y', '0px');
  });
}
