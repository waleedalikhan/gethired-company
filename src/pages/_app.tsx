import React from 'react';
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'
import '../styles/tailwind.css';
import '../styles/global.scss';

// import { ApolloClient, InMemoryCache } from '@apollo/client';
// const client = new ApolloClient({
//   uri: '/api/graphql',
//   cache: new InMemoryCache(),
// });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App;
