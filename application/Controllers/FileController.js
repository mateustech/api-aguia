const File = require('../Models/FilesModel.js')
const Product = require('../Models/ProductModel')

class FileController {
    async store(req, res) {
        const { id } = req.params
        const produto = await Product.findById(id)
        const file = await File.create({
            url: req.file.path
        })
        produto.files.push(file)
        await produto.save()
        return res.json(file)
    }
}

module.exports = new FileController()