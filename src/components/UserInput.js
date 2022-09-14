import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import pokedex from '../img/pokedex.png'

const UserInput = () => {

    const [userName, setUserName] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const getUser = () => {
        console.log(userName);
        if(userName !== ""){
            dispatch(changeUser(userName))
            navigate("/pokedex")
        } else{
            navigate("/")
        }
    }
    
    return (
        <div className='home'>
            <img src={pokedex} alt="" />
            <h2>¡Hola entrenador!</h2>
            <h3>Para poder comenzar, dame tu nombre</h3>
            <form className='input'>
                <input
                    placeholder='ingresá tu nombre' 
                    type="text" 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)} 
                />
                <button onClick={getUser}><h3> Comenzar!!!</h3></button>
            </form>

            <div className="barrier">
                <div className="red"></div>
                <div className="black"></div>
            </div>
        </div>
    );
};

export default UserInput;