const Product = require('../Models/ProductModel.js')

class ProductController {
    async store(req, res) {
        const response = req.body
        const data = await Product.create(response)
        return res.json(data)
    }
    async show(req, res) {
        const { id } = req.params
        const product = await Product.findById(id)

        return res.json(product)
    }
}

module.exports = new ProductController()