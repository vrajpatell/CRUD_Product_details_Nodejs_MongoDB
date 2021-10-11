module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    // Create a new product
    app.post('/products', products.create);

    // Retrieve all prodcuct
    app.get('/products', products.findAll);

    // Retrieve a single Product with pId
    app.get('/products/:productId', products.findOne);

    // Update a Product with pId
    app.put('/products/:productId', products.update);

    // Delete a Product with pId
    app.delete('/products/:productId', products.delete);
}