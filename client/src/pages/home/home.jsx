import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPokemons } from "../../redux/actions/action";

import Card from '../../components/card/card';
import Cards from '../../components/cards/cards';
import Navbar from '../../components/navbar/navbar';
import './home.styles.css';

function Home() {
   const dispatch = useDispatch();
   const allPokemons= useSelector((state)=> state.allPokemons);
   const [filtered, setfiltered] =  useState(allPokemons)
   const [searchString, setsearchString] =  useState('')

   function handleChange(e) {
    e.preventDefault()
    searchString(e.target.value)
   }

   function handleSubmit() {
    const filtered = allPokemons.filter(poke => poke.name.includes(searchString))
    setfiltered(filtered)
   }



   useEffect(()=>{
     dispatch(clearDetail);
     dispatch(getPokemons());
     
  }, [dispatch])

  
    return (
        <div className='home'>
          <Navbar/>
          <Cards allPokemons={allPokemons}/>
          
          
        </div>
      ); 
}

export default Home;