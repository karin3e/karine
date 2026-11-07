(() => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) closeMenu();
  });
})();


// Visualização ampliada de certificados e cartas sem sair da página
(() => {
  const modal = document.getElementById('documentModal');
  const image = document.getElementById('documentModalImage');
  const title = document.getElementById('documentModalTitle');
  if (!modal || !image || !title) return;
  const open = (button) => {
    image.src = button.dataset.image;
    image.alt = button.dataset.title || 'Documento ampliado';
    title.textContent = button.dataset.title || 'Documento';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.document-modal-close')?.focus();
  };
  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    image.removeAttribute('src');
  };
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => open(button)));
  modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('is-open')) close(); });
})();
