import express from "express"
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Horned Beasts API de Sheryl');
});
app.get('/test', (req, res) => {
  res.json({
    "name": "[TuNombre]",
    "date": "2024-10-28",
    "timestamp": 1730258872
  })
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
