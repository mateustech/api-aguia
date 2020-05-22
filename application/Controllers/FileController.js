const File = require('../Models/FilesModel.js')
const Product = require('../Models/ProductModel')

class FileController {
    async store(req, res) {
        const { id } = req.params
        const produto = await Product.findById(id)

        const { originalname: name, size, key, location: url = "" } = req.file;
        const file = await File.create({
            name,
            size,
            key,
            url
        });
        produto.files.push(file.url)
        await produto.save()
        return res.json(file)
    }
}

module.exports = new FileController()