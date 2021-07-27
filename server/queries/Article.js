import { GraphQLList } from 'graphql';

import { articleType } from '../types/Article';

const articleData = [{
  id: 1,
  content: 'yoyoyo',
}, {
  id: 2,
  content: 'hehehe',
}];

export const articles = {
  type: new GraphQLList(articleType),
  resolve: async () => {
    return articleData;
  },
};
