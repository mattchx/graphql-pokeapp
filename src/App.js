import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks'
import {PokemonContainer} from './containers/PokemonContainer'

function App() {
    const client = new ApolloClient({
        url: "https://graphql-pokemon2.vercel.app/"
    })
  return (
    <ApolloProvider client={client}>
        <main>
            <PokemonContainer/>
        </main>
        
    </ApolloProvider>
  );
}

export default App;
