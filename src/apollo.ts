import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject
} from '@apollo/client';

const uri: string = process.env.URL || 'https://norris-server.herokuapp.com/graphql';

const httpLink: ApolloLink = createHttpLink({
  uri
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
