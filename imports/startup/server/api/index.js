import { ApolloServer } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";
import merge from "lodash/merge";

import UserSchema from "../../../api/users/User.graphql";
import UserResolvers from "../../../api/users/resolvers";

import SerieSchema from "../../../../imports/api/markets/Serie.graphql";
import SerieResolvers from "../../../api/markets/resolvers";

import MarvelAPI from "../../../api/data-sources/marvel";

const typeDefs = [UserSchema, SerieSchema];
const resolvers = merge(UserResolvers, SerieResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      MarvelAPI: new MarvelAPI()
    };
  },
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql"
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    console.log('get')
    res.end();
  }
});
