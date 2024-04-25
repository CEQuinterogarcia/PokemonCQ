const axios = require("axios");
let URL = 'https://pokeapi.co/api/v2/pokemon/'
const URL2 = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200'  // hasta 200 poekemon
const PAGE = 5;

const getpokemons = async () =>{

   //// Busco el todos pokemon con el en la API
  
   let vectpokemons = []
   let pokemonsprincipal =[];

    let {data} = await axios.get(`${URL2}`)
      const pokemo = data.results.map(async (pokemon)=>{
            const datpoke = await axios.get(`${pokemon.url}`)
            const pokemonn = datpoke.data
           // console.log(pokemonn.name);
            return{  
                 id: pokemonn.id,
                 name: pokemonn.name,
                 image: pokemonn.sprites.other.dream_world.front_default,
                 attack: pokemonn.stats[1].base_stat,
                 types: pokemonn.types.map(type=> type.type.name),
                 speed: pokemonn.stats[5].base_stat,
                 create: "false",
                }
             
       
        })        
       // URL = data.next;
        vectpokemons = await Promise.all(pokemo);   
        pokemonsprincipal = vectpokemons
   
   
   console.log(pokemonsprincipal);
  return pokemonsprincipal
}
module.exports = {getpokemons};