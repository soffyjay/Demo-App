import React from "react";
import ReactDOM from "react-dom/client";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppWrapper>
    <App />
  </AppWrapper>
);

function AppWrapper({ children }) {
  const httpLink = createHttpLink({
    uri: "https://test-api.sytbuilder.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    fetchOptions: {
      mode: "no-cors",
    },
    cache: new InMemoryCache(),
    // credentials: "include",
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

reportWebVitals();
