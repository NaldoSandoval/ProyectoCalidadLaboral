const form = document.getElementById('postForm');
const experiencia = document.getElementById('experiencia');
const contador = document.getElementById('contador');
const estado = document.getElementById('estado');

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

    if (!res.ok) throw new Error('No se pudo guardar la experiencia');

    estado.textContent = '¡Experiencia publicada con éxito!';
    form.reset();
    contador.textContent = '0';
  } catch (error) {
    estado.textContent = 'Error al publicar. Intenta nuevamente.';
  }
});
