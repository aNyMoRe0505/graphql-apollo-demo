import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

export const bannerType = new GraphQLObjectType({
  name: 'Banner',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'banenr unique id',
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'banenr desc',
    },
    link: {
      type: GraphQLString,
      description: 'banenr link',
    },
  }),
});
