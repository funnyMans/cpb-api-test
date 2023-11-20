const apolloClient = require('../client');
const logger = require('../../../config/logger');
const { Product } = require('../../../db/models');
const { GET_PRODUCTS } = require('../../query/productQuery');

async function getProducts() {
  try {
    const response = await apolloClient.query({
      query: GET_PRODUCTS,
    });

    return response.data;
  } catch (error) {
    logger.error('Error fetching data:', error);
  }
}

const createCollection = async (data) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(data);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  getProducts,
  createCollection,
};
