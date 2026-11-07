document.addEventListener('DOMContentLoaded', () => {

  // === MENU MOBILE ===
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => { 
    navMenu.classList.toggle("open");
  });

  // === SCROLL TO TOP ===
  const scrollTopBtn = document.getElementById('scrollTop');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // === TEMA DARK / LIGHT ===
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
      document.documentElement.style.setProperty('--bg','#f4f7fb');
      document.documentElement.style.setProperty('--panel','#ffffff');
      document.documentElement.style.setProperty('--panel-2','#f1f3f6');
      document.documentElement.style.setProperty('--text','#0b1220');
      document.documentElement.style.setProperty('--muted','#56616a');
      document.documentElement.style.setProperty('--accent','#083a66');
      document.documentElement.style.setProperty('--accent-strong','#1b6fb0');
    }  
    else {
      document.documentElement.style.setProperty('--bg','#0b0f12');
      document.documentElement.style.setProperty('--panel','#0f1112');
      document.documentElement.style.setProperty('--panel-2','#141617');
      document.documentElement.style.setProperty('--text','#e9eef3');
      document.documentElement.style.setProperty('--muted','#b4bdc4');
      document.documentElement.style.setProperty('--accent','#0a66a3');
      document.documentElement.style.setProperty('--accent-strong','#1ea0ff');
    }
  });

  // === ANIMAÇÃO DOS TÍTULOS ===
  const titles = document.querySelectorAll('.shine-title');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  titles.forEach(title => observer.observe(title));

});