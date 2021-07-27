import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import { banners } from './queries/Banner';
import { articles } from './queries/Article';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      banners,
      articles,
    },
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: {
  //   },
  // }),
});
