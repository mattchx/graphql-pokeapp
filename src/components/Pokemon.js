import styled from 'styled-components'


export const Pokemon = ({pokemon}) => {
    console.log(pokemon)
    return (
        <Card>
          <h4>{pokemon.name}</h4>  
          <img alt={pokemon.name} width="33" src={pokemon.image}/>
          <strong>Attacks</strong>
          <ul>
              
              {pokemon && pokemon.attacks.special.map(item => {
                  return <p key={item.name}>{item.name} - {item.type}</p>
                  })}
          </ul>
          </Card>
    )
}

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
width:200px;
height: auto;
padding: 12px;
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 5px;
`
