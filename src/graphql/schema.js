import { gql } from "apollo-server";
import { userTypeDefs } from "./users/typedefs";
import { userResolvers } from "./users/resolvers";

const rootTypeDefs = gql`
 type Query {

     _root: Boolean
    }
`;

const rootResolvers = {
    Query: {
        _root: () => true
    }
};


export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];

