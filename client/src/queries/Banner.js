import { gql } from 'graphql.macro';
 
export const BannersQuery = gql`
  query Banners {
    banners {
      id
      description
      link
    }
  }
`;