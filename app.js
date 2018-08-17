const Koa = require('koa');
const app = new Koa();

const { ApolloServer, gql } = require('apollo-server-koa');
const schema = require('./GraphqlSchema');

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);

module.exports = app;
