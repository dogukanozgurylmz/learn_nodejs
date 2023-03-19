const ProductModel = require('../models/ProductModel.js');
const { client } = require("./database.js");

class ProductRepository {
  async getProducts() {
    const connect = await client.connect();
    try {
      const result = await connect.query('SELECT * FROM products');
      return result.rows;
    } finally {
      connect.release();
    }
  }

  async getProductById(id) {
    const connect = await client.connect();

    try {
      const result = await connect.query('SELECT * FROM products WHERE id = $1', [id]);
      return result.rows[0];
    } finally {
      connect.release();
    }
  }

  async addProduct(product) {
    const connect = await client.connect();

    try {
      const result = await connect.query(
        'INSERT INTO products (name, category_id, count, price) VALUES ($1, $2, $3, $4) RETURNING *',
        [product.name, product.categoryId, product.count, product.price]
      );
      console.log(result.rows[0])
      return result.rows[0];
    } finally {
      connect.release();
    }
  }
}
module.exports = ProductRepository;


