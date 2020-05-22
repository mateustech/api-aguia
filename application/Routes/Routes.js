module.exports = (app) => {
    const ProductController = require('../Controllers/ProductController.js');


    app.post('/user', ProductController.store);

    // Base
    app.get('/', ProductController.teste);

}