import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

// Queries
import { banners } from './queries/Banner';
import { article, articles } from './queries/Article';
import { products } from './queries/Product';

// Mutations
import { createArticle, editArticleContent } from './mutations/Article';


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      banners,
      article,
      articles,
      products,
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
