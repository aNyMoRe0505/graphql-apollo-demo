import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import { banners } from './queries/Banner';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      banners,
    },
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: {
  //   },
  // }),
});
