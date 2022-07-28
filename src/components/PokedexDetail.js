import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexDetail = ({characterUrl}) => {

    const [character, setCharacter] = useState({})
    const [movements, setMovements] = useState({})

    const { id } = useParams()

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                setCharacter(res.data)
                setMovements(res.data.moves)
            })
    },[characterUrl, id])

    console.log(movements);

    return (
        <div>
            {/* <h1>Pokedex Detail</h1>
            <p>Pokemon con id: <b>{id}</b></p> */}
            <img src={character.sprites?.other.home?.front_default} alt="" width="200px"/>
            <p>{character.name}</p>

            <p><b>Types:</b> {character.types?.[0].type?.name}, {character.types?.[1].type?.name}</p>

            <p>Habilidades: {character.abilities?.[0].ability?.name}, {character.abilities?.[1].ability?.name}</p>
            
            <p>Stats</p>
            <p><b>HP: </b>{character.stats?.[0].base_stat}</p>
            <p><b>Attack: </b>{character.stats?.[1].base_stat}</p>
            <p><b>Defense: </b>{character.stats?.[2].base_stat}</p>
            <p><b>Speed: </b>{character.stats?.[5].base_stat}</p>


            <p>Movements:</p>
            {
                movements.map(movement =>(
                    <p key={movement.move?.name}>
                        {movement.move?.name}
                    </p>
                ))
            }
        </div>
    );
};

export default PokedexDetail;