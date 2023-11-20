const { Product } = require('../db/models');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');

const createCollection = async (data) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(data);
  } catch (error) {
    logger.error(error);
  }
};

const queryProducts = async (filter, options) => {
  try {
    const data = await Product.paginate(filter, options);
    return data;
  } catch (error) {
    logger.error(error);
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findBy(id);

    if (!product) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { createCollection, queryProducts, getProductById };
