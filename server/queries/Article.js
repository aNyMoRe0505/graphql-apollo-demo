import fs from 'fs';
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';

import { articleType } from '../types/Article';

export const article = {
  type: articleType,
  args: {
    articleId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (parent, args) => {
    const articleData = JSON.parse(fs.readFileSync(`${process.cwd()}/mocks/Article.json`, 'utf8'));
    return articleData.find(article => article.id === args.articleId);
  },
};

export const articles = {
  type: new GraphQLList(articleType),
  resolve: () => {
    const articleData = JSON.parse(fs.readFileSync(`${process.cwd()}/mocks/Article.json`, 'utf8'));
    return articleData;
  },
};
