import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

// Queries
import { banners } from './queries/Banner';
import { article, articles } from './queries/Article';

// Mutations
import { createArticle, editArticleContent } from './mutations/Article';


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      banners,
      article,
      articles,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createArticle,
      editArticleContent
    },
  }),
});
