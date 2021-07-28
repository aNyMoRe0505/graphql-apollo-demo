import { GraphQLList } from 'graphql';

import { productType } from '../types/Product';

export const products = {
  type: new GraphQLList(productType),
  resolve: () => {
    return [{
      id: '1',
      name: '產品一號',
      colors: [{
        id: '1',
        color: 'red',
        isPrimary: true,
      }, {
        id: '2',
        color: 'green',
        isPrimary: false,
      }, {
        id: '3',
        color: 'blue',
        isPrimary: false,
      }],
    }, {
      id: '2',
      name: '產品二號',
      colors: [{
        id: '1',
        color: 'red',
        isPrimary: false,
      }, {
        id: '2',
        color: 'green',
        isPrimary: true,
      }, {
        id: '3',
        color: 'blue',
        isPrimary: false,
      }],
    }];
  },
};
