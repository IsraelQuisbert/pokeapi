import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokedex from '../img/pokedex.png'


const PokedexDetail = ({characterUrl}) => {

    const [character, setCharacter] = useState({})
    const [movements, setMovements] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                setCharacter(res.data)
                setMovements(res.data.moves)
            })
    },[characterUrl, id])

    console.log(character);

    return (
        <div className='pokedex-detail'>
            {/* <h1>Pokedex Detail</h1>
            <p>Pokemon con id: <b>{id}</b></p> */}
            <div className="barrier">
                <div className="red">
                    <div className="tittle">
                        <img className='pokedex' src={pokedex} alt="" />
                    </div>
                </div>
                <div className="black"></div>
            </div>
            <div className="back">
                <button onClick={()=>navigate('/pokedex')}>
                    Volver
                </button>
            </div>


            {/* <img src={character.sprites?.other.home?.front_default} alt="" width="200px"/> */}
            <img src={character.sprites?.other.dream_world?.front_default} alt="" width="200px"/>
            <p>{character.name}</p>

            <p><b>Types:</b> {character.types?.[0].type?.name}, 
            {/* {character.types?.[1].type?.name} */}
            </p>

            <p><b>Special ability: </b>{character.abilities?.[0].ability?.name}
            {/* {character.abilities?.[1].ability?.name} */}
            </p>
            
            <p>Stats</p>
            <p><b>HP: </b>{character.stats?.[0].base_stat}</p>
            <p><b>Attack: </b>{character.stats?.[1].base_stat}</p>
            <p><b>Defense: </b>{character.stats?.[2].base_stat}</p>
            <p><b>Speed: </b>{character.stats?.[5].base_stat}</p>



            <p><b>Movements: </b></p>
            <div className='movements'>
                {
                    movements.map(movement =>(                        
                        <p key={movement.move?.name}>
                            {movement.move?.name}
                        </p>
                    ))
                }
            </div>
            
            
        </div>
    );
};

export default PokedexDetail;