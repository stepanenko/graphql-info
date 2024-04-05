const path = require("path");
const { readFileSync } = require("fs");
const { ApolloServer } = require("apollo-server");
const { gql } = require("graphql-tag");

const resolvers = require("./resolvers");

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
