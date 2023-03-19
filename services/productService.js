const ProductModel = require("../models/ProductModel");
const ProductRepository = require("../repositories/productRepository")

class ProductService {
    constructor() {
        this.productRepository = new ProductRepository()
    }

    async getProducts() {
        const products = await this.productRepository.getProducts()
        const productList=[]
        products.map((product) => {
            const productModel = new ProductModel()
            productModel.id=product['id'],
            productModel.name=product['name'],
            productModel.categoryId=product['category_id'],
            productModel.price=product['price'],
            productModel.count=product['count'],
            productList.push(productModel)
        })
        console.log(productList)
        return productList;
    }

    async getProductById(id) {
        if (id === null) {
            return console.log("not id")
        } else {
            const product = await this.productRepository.getProductById(id)
            const productModel = new ProductModel()
            productModel.id=product['id']
            productModel.name=product['name']
            productModel.categoryId=product['category_id']
            productModel.price=product['price']
            productModel.count=product['count']
            return productModel;
        }
    }

    async addProduct(product) {
        if (product.name.length > 2 && product.price > 0 && product.count >= 0 && product.categoryId !==null) {
            return await this.productRepository.addProduct(product)
        } else { return console.log("product not add") }
    }
}

module.exports = ProductService