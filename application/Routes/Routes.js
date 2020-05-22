module.exports = (app) => {
    const ProductController = require('../Controllers/ProductController.js');
    const FileController = require('../Controllers/FileController.js')

    const multer = require('multer')
    const multerConfig = require('../Config/multer')

    app.post('/product', ProductController.store);
    app.get('/product/:id', ProductController.show)
    app.post('/product/:id/files', multer(multerConfig).single('file'), FileController.store)

    app.get('/', (req, res) => {
        return res.json({ message: 'Api Running' })
    });

}