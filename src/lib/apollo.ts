import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ol78jr0f0i01xk1mobbuqp/master',
    cache: new InMemoryCache()
})