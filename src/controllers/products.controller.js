const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productsService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await productsService.queryProducts(filter, options);

  res.status(httpStatus.OK).json(result);
});

const getProduct = catchAsync(async (req, res) => {
  const product = await productsService.getProductById(req.params.productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.status(httpStatus.OK).send(product);
});

const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.updateProductById(
    req.params.productId,
    req.body
  );
  res.status(httpStatus.OK).send(product);
});

const deleteProduct = catchAsync(async (req, res) => {
  await productIdService.deleteProductById(req.params.productId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
