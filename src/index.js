import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      name: String!
    }


  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '1',
          name: 'John Doe',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            name: 'John Doe',
          },
          {
            id: '2',
            name: 'Jane Smith',
          }
        ];
      }
    },
  },
});

server.listen(4001).then(({ url }) => {
  console.log(`Server listening to url ${url}`);
});
