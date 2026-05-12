const form = document.getElementById('postForm');
const formSection = document.getElementById('formSection');
const ctaPost = document.getElementById('ctaPost');
const experiencia = document.getElementById('experiencia');
const contador = document.getElementById('contador');
const estado = document.getElementById('estado');

ctaPost.addEventListener('click', () => {
  formSection.classList.remove('hidden');
  formSection.setAttribute('aria-hidden', 'false');
  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

experiencia.addEventListener('input', () => {
  contador.textContent = experiencia.value.length;
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  estado.textContent = 'Enviando...';

  const data = Object.fromEntries(new FormData(form).entries());
  try {
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error();

    estado.textContent = '¡Experiencia publicada con éxito!';
    form.reset();
    contador.textContent = '0';
  } catch {
    estado.textContent = 'Error al publicar. Intenta nuevamente.';
  }
});
