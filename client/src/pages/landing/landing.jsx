import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './landing.styles.css'
import ima from './fondopoke.png';
import { clearDetail, getPokemons, getTypes } from '../../redux/actions/action';
//import { getPokemons, getTypes } from '../redux/actions/actions';


const LandingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async (event) => {
        event.preventDefault();
        dispatch(clearDetail());
        dispatch(getPokemons());
        dispatch(getTypes());
       // dispatch(getPokemons());
       // dispatch(getTypes());
        navigate('/home')
    }

    return (
        <div className={style.container}>
            <img className='containerimg' src={ima} alt=''></img>
            <h1>Bienvenido a PokeAPi</h1>
            <button onClick={handleClick}>Go Home</button>
        </div>
    );
}

export default LandingPage;