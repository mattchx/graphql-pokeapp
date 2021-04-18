import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemons'
import styled from 'styled-components'

export function PokemonContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 122 },
  });
  console.log(pokemons)
  return (
    <VStack>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
          
        ))}
    </VStack>
  );
}


const VStack = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
`
