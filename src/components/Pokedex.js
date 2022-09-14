import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CardPokedex from './CardPokedex';
import { useNavigate } from 'react-router-dom';
import pokedex from '../img/pokedex.png'

const Pokedex = () => {

    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    const [pokemonSearch, setPokemonSearch] = useState("")
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
            .then(res => setPokemons(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setTypes(res.data.results))
    },[])

    const search = () =>{
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterPOkemon = (e) =>{
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    return (
        <div>
            <div className="barrier">
                <div className="red">
                    <div className="tittle">
                        <img className='pokedex' src={pokedex} alt="" />
                    </div>
                </div>
                <div className="black"></div>
            </div>

            <p><b>Bienvenido: {user}</b>, atrápalos a todos!!!</p>
            
            <div className='selectors'>
                <form className='form'>
                    <input
                        type="text"
                        value={pokemonSearch}
                        onChange={e => setPokemonSearch(e.target.value)}
                        placeholder="Busca un Pokemon"
                        />
                    <button onClick={search}>Buscar</button>
                </form>

                <select onChange={filterPOkemon}>
                    <option>selecciona el tipo</option>
                    {
                        types.map(type =>(
                            <option
                                key={type.url}
                                value={type.url}
                            >{type.name}</option>
                        ))
                    }
                </select>

            </div>


            <div className='super-cards'>
                {
                    pokemons.map(pokemon => (
                        
                            <CardPokedex 

                                characterUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}
                                key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}
                            />
                        
                        
                    ))
                }
            </div>
        </div>
    );
};

export default Pokedex;