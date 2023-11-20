const {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} = require('@apollo/client/core');

const config = require('../../../config/config');
const typeDefs = require('../../typeDef');

const link = new HttpLink({
  uri: config.storeURL,
  headers: {
    'X-Shopify-Storefront-Access-Token': config.shopifyAccessToken,
  },
  fetchOptions: {
    mode: 'no-cors',
  },
  credentials: 'include',
});

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  typeDefs,
  defaultOptions: {
    query: {
      context: {
        headers: {
          'X-Shopify-Storefront-Access-Token': config.shopifyAccessToken,
        },
      },
    },
    mutate: {
      context: {
        headers: {
          'X-Shopify-Storefront-Access-Token': config.shopifyAccessToken,
        },
      },
    },
  },
});

module.exports = apolloClient;
