const Product = require('../Models/ProductModel.js')

class ProductController {
    async store(req, res) {
        const data = await Product.create(req.body)
        return res.status(201).json(data)
    }
    teste(req, res) {
        return res.json({ message: 'sucess' })
    }
}

module.exports = new ProductController()