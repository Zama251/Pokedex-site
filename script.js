const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach((card) => {
  const toggleFlip = () => {
    card.classList.toggle('is-flipped');
  };

  card.addEventListener('click', toggleFlip);

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFlip();
    }
  });
});

const loreButtons = document.querySelectorAll('.lore-toggle');

loreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const lorePanel = button.nextElementSibling;

    const isOpen = lorePanel.classList.contains('is-open');

    lorePanel.classList.toggle('is-open');

    button.setAttribute('aria-expanded', String(!isOpen));

    const label = button.querySelector('span');
    label.textContent = isOpen ? 'Ver história' : 'Ocultar história';
  });
});
