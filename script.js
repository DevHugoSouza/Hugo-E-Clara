// Funcionamento do carrossel. Os textos ficam em momentos.js.
(() => {
  const track = document.getElementById('carousel-track');
  const dots = document.getElementById('dots');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const format = number => String(number).padStart(2, '0');
  let current = 0;
  let frame = 0;

  momentos.forEach((moment, index) => {
    const card = document.createElement('figure');
    card.className = 'photo-card';
    card.setAttribute('aria-label', `Momento ${index + 1} de ${momentos.length}`);
    const img = document.createElement('img');
    img.src = moment.foto;
    img.alt = moment.alt;
    img.style.objectPosition = moment.posicao || 'center';
    img.loading = index === 0 ? 'eager' : 'lazy';
    img.draggable = false;
    card.append(img);
    track.append(card);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Ver momento ${index + 1}: ${moment.titulo}`);
    dot.addEventListener('click', () => goTo(index));
    dots.append(dot);
  });

  const cards = Array.from(track.children);
  function update(index) {
    current = index;
    const moment = momentos[index];
    document.getElementById('episode-label').textContent = `EPISÓDIO ${format(index + 1)}`;
    document.getElementById('episode-title').textContent = moment.titulo;
    document.getElementById('episode-description').textContent = moment.descricao;
    document.getElementById('current-number').textContent = format(index + 1);
    Array.from(dots.children).forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)));
  }
  function stepWidth() {
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }
  function goTo(index) {
    const next = (index + momentos.length) % momentos.length;
    track.scrollTo({ left: next * stepWidth(), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  document.getElementById('episode-total').textContent = `${momentos.length} episódios`;
  document.getElementById('total-number').textContent = format(momentos.length);
  document.getElementById('previous').addEventListener('click', () => goTo(current - 1));
  document.getElementById('next').addEventListener('click', () => goTo(current + 1));
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  track.addEventListener('scroll', () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const index = Math.max(0, Math.min(momentos.length - 1, Math.round(track.scrollLeft / stepWidth())));
      if (index !== current) update(index);
      frame = 0;
    });
  }, { passive: true });
  window.addEventListener('resize', () => track.scrollTo({ left: current * stepWidth(), behavior: 'instant' }));
  update(0);
})();
