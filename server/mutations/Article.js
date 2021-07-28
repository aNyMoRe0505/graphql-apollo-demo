import fs from 'fs';
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import { articleType } from '../types/Article';
import { authorPayloadType } from '../types/Author';

export const createArticle = {
  type: new GraphQLNonNull(articleType),
  args: {
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(authorPayloadType),
    }
  },
  resolve: (_, { content, author }) => {
    const articleData = JSON.parse(fs.readFileSync(`${process.cwd()}/mocks/Article.json`, 'utf8'));
    const instance = {
      id: `${new Date().valueOf()}`,
      content,
      author: {
        ...author,
        id: `${new Date().valueOf()}`,
      },
    };

    articleData.push(instance);
    fs.writeFileSync(`${process.cwd()}/mocks/Article.json`, JSON.stringify(articleData));

    return instance;
  }
}

export const editArticleContent = {
  type: new GraphQLNonNull(articleType),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_, { id, content }) => {
    let articleData = JSON.parse(fs.readFileSync(`${process.cwd()}/mocks/Article.json`, 'utf8'));
    const target = articleData.find(article => article.id === id);

    articleData = articleData.filter(article => article.id !== id);

    const updatedArticle = {
      ...target,
      content,      
    };

    articleData.push(updatedArticle);

    fs.writeFileSync(`${process.cwd()}/mocks/Article.json`, JSON.stringify(articleData));
    return updatedArticle;
  }
}
