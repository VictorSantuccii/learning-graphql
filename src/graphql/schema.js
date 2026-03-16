import { gql } from "apollo-server";
import { userTypeDefs } from "./users/typedefs";
import { userResolvers } from "./users/resolvers";
import { postTypeDefs } from "./post/typedefs";
import { postResolvers } from "./post/resolvers";


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


export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];

