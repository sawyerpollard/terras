import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from '../fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: 'http://localhost:8080/graphql',
      cache: new InMemoryCache({ fragmentMatcher } || {}),
    }),
)