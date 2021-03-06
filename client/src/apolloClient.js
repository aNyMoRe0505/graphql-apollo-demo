import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});

export default client;

