// src/graphql/queries/userQueries.js
const { gql } = require('@apollo/client/core');

const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          bodyHtml
          image {
            id
            productId
            position
            src
            width
            height
          }
          resourcePublicationOnCurrentPublication {
            publication {
              name
              id
            }
            publishDate
            isPublished
          }
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_ID = gql`
  query GetProductById($productId: ID!) {
    product(id: $productId) {
      id
      title
    }
  }
`;

module.exports = {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
};
