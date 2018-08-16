const Router = require('koa-router');
const router = new Router();
const MyGraphQLSchema = require('../GraphqlSchema');

const graphqlHTTP = require('koa-graphql');

router.all('/graphql', graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}));

module.exports = router;
