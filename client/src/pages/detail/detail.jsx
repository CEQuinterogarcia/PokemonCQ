import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import './detail.styles.css';
import { clearDetail, getPokemonsById } from '../../redux/actions/action';

function Detail() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let pokemonId = useSelector((state)=> state.pokemonbyId);
    useEffect(()=>{
      dispatch(getPokemonsById(id));  
    
    }, [dispatch, id])
   // console.log(pokemonId);
    let {attack, defense, height, hp, image, name, speed, types, weight} = pokemonId;
    let typess = pokemonId.types?.join(', ')

    function handleSubmit(e) {
     
      pokemonId = {}
     }

    return (

          <div className='mi-componente-container' >
            <div className='containerbutton'> 
              <button  onClick={() => { handleSubmit(); navigate('/home') }}>HOME</button>
            </div>                             
            <div className='detail-container'>
            
              <div className="detail-container-column" >   
                     
                  <h2  className="titcard ">{name}</h2> 
              
                  {/* <h2>{id}</h2> */}
                  <img className='image1' src={image} alt='' /> 
              </div>

              <div className="detail-container-column1" >
                  <h2>NIVEL DE ATAQUE :</h2>
                  <h2>{attack}</h2>
                  <h2>NIVEL DE DEFENSA : </h2>
                  <h2>{defense}</h2>
                  <h2>NIVEL DE VELOCIDAD:</h2>
                  <h2>{speed}</h2>
                  <h2>NIVEL DE VIDA : </h2>
                  <h2>{hp}</h2>
                  <h2>ALTURA : </h2>
                  <h2>{height}</h2>
                  <h2>PESO : </h2>
                  <h2>{weight}</h2>
                  <h2>TIPO DE POKEMON : </h2>
                  <h2>{typess}</h2>
          </div>
        </div>
        </div>  
      ); 
}

export default Detail;