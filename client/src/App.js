import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql' // establishing a link to GraphQL server at its /graphql endpoint; URI = Uniform Resource Identifier
});
const client = new ApolloClient({ // instantiate Apollo Client instance and create connection to API endpoint
  link: httpLink,
  cache: new InMemoryCache(), // instantiate a new cache object 
});
function App() {
  return (
   <ApolloProvider client={client}>
     <div className="flex-column justify-flex-start min-100-vh">
       <Header />
       <div className="container">
         <Home />
       </div>
       <Footer />
     </div>
   </ApolloProvider>
  );
}

export default App;
