import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

export const colorType = new GraphQLObjectType({
  name: 'Color',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    color: {
      type: new GraphQLNonNull(GraphQLString),
    },
    isPrimary: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  },
});
