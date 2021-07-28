import { gql } from 'graphql.macro';
 
export const BannerArticleQuery = gql`
  query BannerArticle {
    articles {
      id
      content
      author {
        id
        name
      }
    }
    banners {
      id
      description
    }
  }
`;

export const ArticleQuery = gql`
  query Article($articleId: String!) {
    article(articleId: $articleId) {
      id
      content
      author {
        id
        name
      }
    }
  }
`;

export const ProductQuery = gql`
  query Products {
    products {
      id
      name
      colors {
        id
        color
        isPrimary
      }
    }
  }
`;