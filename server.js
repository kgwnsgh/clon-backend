import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "hiiii ",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(() =>
    console.log(
      "Server is running apollo-server graphql http://localhost:4000/"
    )
  );
