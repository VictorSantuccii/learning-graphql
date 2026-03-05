import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
      stringScalar: String
      intScalar: Int
      floatScalar: Float
      booleanScalar: Boolean!
      idScalar: ID
      arrayString: [String]!
    }
  `,
  resolvers: {
    Query: {
      hello: async () => {
        return 'Hello Again!';
      },
      hi: async () => {
        return 'Hi!';
      },
      stringScalar: async () => {
        return 'Texto de exemplo';
      },
      intScalar: async () => {
        return 42;
      },
      floatScalar: async () => {
        return 3.14;
      },
      booleanScalar: async () => {
        return true;
      },
      idScalar: async () => {
        return '1';
      },
      arrayString: async () => {
        return ['Item 1', 'Item 2', 'Item 3'];
      }
    },
  },
});

server.listen(4001).then(({ url }) => {
  console.log(`Server listening to url ${url}`);
});
