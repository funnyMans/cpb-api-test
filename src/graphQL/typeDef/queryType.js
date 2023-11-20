const { gql } = require('@apollo/client/core');

const queryTypeDef = gql`
  type Product {
    id: ID!
    title: String!
    description: String
    images: [Image]
    variants: [ProductVariant]
  }

  type Image {
    id: ID!
    src: String
    altText: String
  }

  type ProductVariant {
    id: ID!
    title: String!
    price: MoneyV2!
  }

  type MoneyV2 {
    amount: String!
    currencyCode: String!
  }

  type Query {
    products(first: Int!, after: String): ProductConnection!
  }

  type ProductConnection {
    edges: [ProductEdge]
    pageInfo: PageInfo!
  }

  type ProductEdge {
    cursor: String!
    node: Product
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }
`;

module.exports = queryTypeDef;
