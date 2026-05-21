const express = require('express');

const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hola mundo');
});
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`escuchando en el puerto ${PORT}`);
});