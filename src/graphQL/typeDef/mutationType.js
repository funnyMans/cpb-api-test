const { gql } = require('@apollo/client/core');

const mutationTypeDef = gql`
  type Mutation {
    deleteProduct(id: ID!): Boolean
  }
`;

module.exports = mutationTypeDef;
