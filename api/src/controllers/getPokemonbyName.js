const axios = require("axios");
let URL = 'https://pokeapi.co/api/v2/pokemon/'

const getpokemonbyname = async (name) =>{

   //// Busco el primer pokemon con el name en la API
   try {
    const datpoke = await axios.get(`${URL}${name.toLowerCase()}`)
    const pokemonn = datpoke.data
   // console.log(pokemonn.name);
    const pokemonname = {  
         id: pokemonn.id,
         name: pokemonn.name,
         image: pokemonn.sprites.other.dream_world.front_default,
         types: pokemonn.types.map(type=> type.type.name)
        }

     return pokemonname //|| false;
   } catch (error) {
      return false//console.error(error);
      //throw new Error(`No se encontró ningún Pokémon con el nombre '${name}'`);
   } 
   

}

module.exports = {getpokemonbyname};