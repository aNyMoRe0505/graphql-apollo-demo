import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';

export const authorType = new GraphQLObjectType({
  name: 'Author',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export const authorPayloadType = new GraphQLInputObjectType({
  name: 'AuthorInputType',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
})
