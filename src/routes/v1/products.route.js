const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productsController = require('../../controllers/products.controller');

const router = express.Router();

router
  .route('/')
  .get(validate(productValidation.getProducts), productsController.getProducts);

router
  .route('/:productId')
  .get(validate(productValidation.getProduct), productsController.getProduct)
  .patch(
    validate(productValidation.updateProduct),
    productsController.updateProduct
  )
  .delete(
    validate(productValidation.deleteProduct),
    productsController.deleteProduct
  );

module.exports = router;
