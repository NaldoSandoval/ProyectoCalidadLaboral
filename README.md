# Proyecto Calidad Laboral (MVP)

Plataforma inicial para Chile con enfoque de landing marquetera (tipo barómetro) que invita primero a la acción y luego muestra el formulario para recolectar experiencias sobre:
- Proceso de entrevistas.
- Trato de reclutadores.
- Cantidad de rondas.
- Dificultad/potencial abuso de pruebas técnicas.
- Ambiente laboral y remuneración.

## Ejecutar localmente

```bash
npm install
npm start
```

Abrir en `http://localhost:3000`.

## Campos del primer posteo

- Empresa y rubro.
- Tipo de vínculo: trabaja, trabajó o fue entrevistado/a.
- Métricas de 1 a 5 para dificultad, trato, ambiente y remuneración.
- Número de entrevistas.
- Flag de petición técnica abusiva (sí/no).
- Relato de experiencia con tope de 500 caracteres.

## Próximos pasos sugeridos

- Persistencia en base de datos.
- Autenticación y prevención de spam.
- Moderación y anonimización.
- Vistas por rubro, región y categoría.
