import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks'

function App() {
    const client = new ApolloClient({
        url: "https://graphql-pokemon2.vercel.app/"
    })
  return (
    <ApolloProvider>
        <main>
            Pokemon Container
        </main>
        
    </ApolloProvider>
  );
}

export default App;
