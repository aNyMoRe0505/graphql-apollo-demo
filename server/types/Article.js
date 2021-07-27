import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

export const articleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
