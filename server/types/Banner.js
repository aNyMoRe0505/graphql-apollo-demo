import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

export const bannerType = new GraphQLObjectType({
  name: 'Banner',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    link: {
      type: GraphQLString,
    },
  },
});
