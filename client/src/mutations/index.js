import { gql } from 'graphql.macro';
 
export const createArticleMutation = gql`
  mutation CreateArticle(
    $content: String!
    $author: AuthorInputType!
  ) {
    createArticle(
      content: $content
      author: $author
    ) {
      id
      content
      author {
        id
        name
      }
    }
  }
`;

export const editArticleContentMutation = gql`
  mutation EditArticleContent(
    $id: String!
    $content: String!
  ) {
    editArticleContent(
      id: $id
      content: $content
    ) {
      id
      content
      author {
        id
        name
      }
    }
  }
`;

