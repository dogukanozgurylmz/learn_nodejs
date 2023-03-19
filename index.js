const express = require('express');
const productController = require('./controllers/productController.js');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Ana sayfa');
});

app.use('/product', productController);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});