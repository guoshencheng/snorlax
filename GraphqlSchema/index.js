const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'person',
  fields: {
    name: {
      type: GraphQLString,
      resolve: (a) => {
        console.log(a);
        return 'heheheh';
      }
    }
  }
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'root',
  fields: () => ({
    people: {
      type: PersonType,
      resolve: () => ({})
    }
  })
})

module.exports = new GraphQLSchema({
  query: QueryType,
});
