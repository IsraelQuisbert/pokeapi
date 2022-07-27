import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardPokedex = ({characterUrl}) => {

    const [character, setCharacter] = useState({})
    const navigate = useNavigate()

    console.log(character);

    useEffect( () => {
        axios.get(characterUrl)
            .then(res => setCharacter(res.data))
    },[characterUrl])


    // function types() {

    

    return (
        <div className='card'>

            <div onClick={() => navigate(`/pokedex/${character.id}`)}>
                <p className='name'>                    
                    {character.name}
                </p>
                <div className='card-total'>
                    
                    <div className='details'>
                        <p><b>Types:</b> {character.types?.[0].type?.name}</p>
                        <p><b>HP: </b>{character.stats?.[0].base_stat}</p>
                        <p><b>Attack: </b>{character.stats?.[1].base_stat}</p>
                        <p><b>Defense: </b>{character.stats?.[2].base_stat}</p>
                        <p><b>Speed: </b>{character.stats?.[5].base_stat}</p>
                    </div>

                    <div className="icons">                    
                        <img src={character.sprites?.other.home?.front_default} alt="" width="300px"/>
                    </div>

                </div>
                

                {/* {character.types?.[1].type?.name} */}

            </div>
        </div>
    );
};

export default CardPokedex;