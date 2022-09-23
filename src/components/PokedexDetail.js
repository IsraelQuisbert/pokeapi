import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokedex from '../img/pokedex.png'


const PokedexDetail = ({characterUrl}) => {

    const [character, setCharacter] = useState({})
    const [movements, setMovements] = useState([])
    const [types, setTypes] = useState([])
    const [abilities, setAbilities] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                setCharacter(res.data)
                setMovements(res.data.moves)
                setTypes(res.data.types)
                setAbilities(res.data.abilities)
            })
    },[characterUrl, id])

    console.log(character);

    return (
        <div className='pokedex-detail'>

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

            <div className='box-detail'>
                <div>
                    <img src={character.sprites?.other.dream_world?.front_default} alt="" width="200px"/>
                </div>
                <div>                    
                    <p className='little'>#{character.id}</p>
                </div>
                <div>
                    <p>{character.name}</p>
                </div>
                
                <div><br /><hr /><br /></div>

                <div className='flex-row'>
                    
                        <p className='little'>Height: <br/> {character.height}</p>
                        <p className='little'>Weight: <br /> {character.weight}</p>
                    
                </div>
                <br />
                <div className='flex-row flex-row2'>
                    <div>
                        <p><b>Types:</b></p>
                        <div className='flex-row'>
                            {
                                types.map(type =>(
                                    <p key={type.type?.name} className='little' >
                                        {type.type?.name}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <p><b>Special ability: </b></p>
                        <div className='flex-row'>
                            {
                                abilities.map(hability => (
                                    <p key={hability.ability?.name} className='little'>
                                        {hability.ability?.name}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div><br /><hr /><br /></div>

                <div className='stats'>
                    <p><b> STATS</b></p>
                    <p><b>HP: </b>{character.stats?.[0].base_stat}</p>
                    <p><b>Attack: </b>{character.stats?.[1].base_stat}</p>
                    <p><b>Defense: </b>{character.stats?.[2].base_stat}</p>
                    <p><b>Speed: </b>{character.stats?.[5].base_stat}</p>
                </div>
            </div>

            <div className="box-detail">
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

            
        </div>
    );
};

export default PokedexDetail;