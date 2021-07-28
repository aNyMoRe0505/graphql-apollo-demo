import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import { colorType } from './Color';

export const productType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    colors: {
      type: new GraphQLList(colorType),
    }
  },
});
