var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductById);

router.put('/:id', productsController.editProduct);

router.delete('/:id', productsController.deleteProduct);

router.post('/', productsController.addNewProduct);

module.exports = router;