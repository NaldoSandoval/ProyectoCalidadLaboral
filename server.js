const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

const posts = [];

app.post('/api/posts', (req, res) => {
  const {
    empresa,
    rubro,
    vinculo,
    entrevistas,
    dificultad,
    trato,
    ambiente,
    remuneracion,
    abusiva,
    experiencia
  } = req.body;

  if (!empresa || !rubro || !vinculo || !experiencia) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  if (String(experiencia).length > 500) {
    return res.status(400).json({ error: 'La experiencia supera 500 caracteres' });
  }

  const post = {
    id: posts.length + 1,
    empresa,
    rubro,
    vinculo,
    entrevistas: Number(entrevistas),
    dificultad: Number(dificultad),
    trato: Number(trato),
    ambiente: Number(ambiente),
    remuneracion: Number(remuneracion),
    abusiva,
    experiencia,
    createdAt: new Date().toISOString()
  };

  posts.push(post);
  res.status(201).json({ ok: true, post });
});

app.get('/api/posts', (req, res) => {
  res.json({ count: posts.length, posts });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
