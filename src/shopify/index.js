const { LATEST_API_VERSION } = require('@shopify/shopify-api');
const Shopify = require('shopify-api-node');
const { productsService } = require('../services');
// const { productsResolver } = require('../graphQL/apollo/resolvers');
const logger = require('../config/logger');

const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN;
const shop = process.env.STORE_NAME;

const storefrontClient = new Shopify({
  shopName: shop,
  accessToken: storefrontAccessToken,
  apiVersion: LATEST_API_VERSION,
});

const getShopifyCollectionAndStoreToDB = async () => {
  try {
    const collection = await storefrontClient.product.list();
    await productsService.createCollection(collection);
    // const collectionGQL = await productsResolver.getProducts();
    // await productsResolver.createCollection(collectionGQL);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  storefrontClient,
  getShopifyCollectionAndStoreToDB,
};
