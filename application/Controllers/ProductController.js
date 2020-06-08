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
    async showAll(req, res) {
        const product = await Product.find().sort('-createdAt')

        return res.json(product)
    }
    async destroy(req, res) {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        return res.send("Deletado");
    }

}

module.exports = new ProductController()