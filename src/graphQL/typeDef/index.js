const { gql } = require('@apollo/client/core');

const queryTypeDef = require('./queryType');
const mutationTypeDef = require('./mutationType');

const typeDefs = gql`
  ${queryTypeDef}
  ${mutationTypeDef}
`;

module.exports = typeDefs;
