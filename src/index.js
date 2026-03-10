import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.listen(4001).then(({ url }) => {
  console.log(`Server listening to url ${url}`);
});
