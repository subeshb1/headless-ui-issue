import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GITHUB_API_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

export default client;
