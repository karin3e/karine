(() => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
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
  }
})();

// Visualização de certificados e cartas — delegação de eventos para funcionar
// também em elementos que forem renderizados depois do carregamento da página.
(() => {
  const modal = document.getElementById('documentModal');
  const image = document.getElementById('documentModalImage');
  const title = document.getElementById('documentModalTitle');

  if (!modal || !image || !title) return;

  const openDocument = (button) => {
    const file = button.getAttribute('data-image');
    if (!file) return;

    image.src = file;
    image.alt = button.getAttribute('data-title') || 'Documento ampliado';
    title.textContent = button.getAttribute('data-title') || 'Documento';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    const closeButton = modal.querySelector('.document-modal-close');
    if (closeButton) closeButton.focus();
  };

  const closeDocument = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    image.removeAttribute('src');
  };

  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-image]');
    if (trigger) {
      event.preventDefault();
      openDocument(trigger);
      return;
    }

    if (event.target.closest('[data-close-modal]')) {
      event.preventDefault();
      closeDocument();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeDocument();
    }
  });

  image.addEventListener('error', () => {
    title.textContent = 'Não foi possível carregar este documento';
  });
})();
