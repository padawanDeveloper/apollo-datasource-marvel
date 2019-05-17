import React from "react";
import { Accounts } from "meteor/accounts-base";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Router from "../../ui/components/router/Router";

const client = new ApolloClient({
  uri: "/graphql",
  request: operation =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken()
      }
    }))
});

export default () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);