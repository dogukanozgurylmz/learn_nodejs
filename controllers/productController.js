const express = require('express');
const ProductService = require('../services/productService');
const productController = express.Router();

const productService = new ProductService()

productController.get('/getAll', async (req, res) => {
    const products = await productService.getProducts()
    res.json(products);
});

productController.get('/:id', async (req, res) => {
    const product = await productService.getProductById(req.params.id)
    res.json(product);
});

productController.post('/add', async (req, res) => {
    const product = await productService.addProduct(req.body)
    res.send(product)
});

module.exports = productController;