import { Link, useLocation } from "react-router-dom";

import './card.styles.css';

function Card({pokemons}) {
  let {name, image, id, types, create}= pokemons;
  let typess = types?.join(", ")

    return (

      <Link to={`/detail/${id}`}> 
        <div className='card-container'>
          <h2 className='titcard'>{name} </h2>
          <h2>{typess} </h2>
          <img className='image' src={image} alt=''/>
          {/* <h2> {id}</h2>
          <h2> {create}</h2> */}
        </div></Link>
      ); 
}

export default Card;