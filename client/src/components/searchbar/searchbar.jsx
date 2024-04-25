import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsName } from '../../redux/actions/action';


function SearchBar() {
   const dispatch = useDispatch();
   const allPokemons= useSelector((state)=> state.allPokemons);
  // const [filtered, setfiltered] =  useState(allPokemons)
   const [searchString, setsearchString] =  useState('')

   function handleChange(e) {
      e.preventDefault()
      setsearchString(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault()
      dispatch(getPokemonsName(searchString))
     }

   return (
      <div>
         <input type='search' onChange={handleChange}
         placeholder="Ingresa Nombre Pokemon" />
         <button onClick={handleSubmit}>Buscar Pokemon </button> 
      </div>
   );
 
 }
 export default SearchBar