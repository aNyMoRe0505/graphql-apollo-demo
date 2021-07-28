import { GraphQLList } from 'graphql';

import { bannerType } from '../types/Banner';

const bannerData = [{
  id: 1,
  description: 'banner1',
  link: 'https://www.apollographql.com/',
}, {
  id: 2,
  description: 'banner2',
  link: '',
}];

export const banners = {
  type: new GraphQLList(bannerType),
  resolve: async () => {
    return bannerData;
  },
};
