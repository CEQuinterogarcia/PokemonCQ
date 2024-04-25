const axios = require("axios");
const { getpokemonbyidDB } = require("./getPekemonbyIdDB");
let URL = 'https://pokeapi.co/api/v2/pokemon/'

const getpokemonsbyid = async (id) =>{

    //// Busco el primer pokemon con el id en la API
    try {
        const datpoke = await axios.get(`${URL}${id}`)
    const pokemonn = datpoke.data
   // console.log(pokemonn.name);
    const pokemonid = {  
         id: pokemonn.id,
         name: pokemonn.name,
         image: pokemonn.sprites.other.dream_world.front_default,
         hp: pokemonn.stats[0].base_stat,
         attack: pokemonn.stats[1].base_stat,
         defense: pokemonn.stats[2].base_stat,
         speed: pokemonn.stats[5].base_stat,
         height: pokemonn.height,
         weight: pokemonn.weight,
         types: pokemonn.types.map(type=> type.type.name)
        }

     return pokemonid 
        
    } catch (error) {
        return false
    }  

}

const getpokemonbyidhan = async(id)=>{
    
    try {
        let response = await getpokemonsbyid(id);
        let responseDB = await getpokemonbyidDB(id); 
        if (response === false) {
            response =responseDB
        }
        if (response) {
        return response
        }     
        return false
    
    } catch (error) {
        throw new Error(`No se encontró ningún Pokémon con el nombre '${id}'`);
    }
    
    }
    
   

module.exports = {getpokemonsbyid, getpokemonbyidhan};