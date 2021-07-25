import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';

import schema from './schema';

async function startApolloServer() {
  const server = new ApolloServer({ schema });
  await server.start();

  const app = new Koa();
  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();

