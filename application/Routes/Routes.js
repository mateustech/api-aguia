module.exports = (app) => {
    const ProductController = require('../Controllers/ProductController.js');
    const FileController = require('../Controllers/FileController.js')

    const multer = require('multer')
    const multerConfig = require('../Config/multer')

    app.get('/product', ProductController.showAll);

    app.get('/product/:id', ProductController.show)

    app.delete('/product/:id', ProductController.destroy)

    app.post('/product', ProductController.store);

    app.post('/product/:id/files', multer(multerConfig).single('file'), FileController.store)

    app.get('/', (req, res) => {
        return res.json({ message: 'Api Running' })
    });

}