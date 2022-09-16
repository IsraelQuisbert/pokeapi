import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardPokedex = ({characterUrl}) => {

    const [character, setCharacter] = useState({})
    const [types, setTypes] = useState({})
    const navigate = useNavigate()

    // console.log(character);

    useEffect( () => {
        axios.get(characterUrl)
            .then(res => {
                setCharacter(res.data)
                setTypes(res.data.types?.[0].type?.name)
            })
    },[characterUrl])

    console.log(types);


    // function types() {
        let color = ["card"]

        if(types === "normal"){
            color.push("normal")
        } else if(types === "fighting"){
            color.push("fighting")
        } else if(types === "flying"){
            color.push("flying")
        } else if(types === "poison"){
            color.push("poison")
        } else if(types === "ground"){
            color.push("ground")
        } else if(types === "rock"){
            color.push("rock")
        } else if(types === "bug"){
            color.push("bug")
        } else if(types === "ghost"){
            color.push("ghost")
        } else if(types === "steel"){
            color.push("steel")
        } else if(types === "fire"){
            color.push("fire")
        } else if(types === "water"){
            color.push("water")
        } else if(types === "grass"){
            color.push("grass")
        } else if(types === "electric"){
            color.push("electric")
        } else if(types === "psychic"){
            color.push("psychic")
        } else if(types === "ice"){
            color.push("ice")
        } else if(types === "dragon"){
            color.push("dragon")
        } else if(types === "dark"){
            color.push("dark")
        } else if(types === "fairy"){
            color.push("fairy")
        } else if(types === "shadow"){
            color.push("shadow")
        } else {
            color.push("unknown")
        }

    return (
        <div className={color.join(' ')}>

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
            </div>
        </div>
    );
};

export default CardPokedex;