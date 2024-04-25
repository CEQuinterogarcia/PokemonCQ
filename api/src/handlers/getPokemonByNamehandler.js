const axios = require("axios");
const { getpokemonsbyid } = require("../controllers/getPokemonbyId");
const { getpokemonbyname } = require("../controllers/getPokemonbyName");
const { getpokemonbynameDB } = require("../controllers/getPokemonbyNameDB");

let URL = 'https://pokeapi.co/api/v2/pokemon/'

const getpokemonbynamehandler = async(name)=>{
    
try {
    let response = await getpokemonbyname(name);
    let responseDB = await getpokemonbynameDB(name);

    if (response === false) {
        response =responseDB
    }
  if (response) {
    return response
  }     
    return false

} catch (error) {
    throw new Error(`No se encontró ningún Pokémon con el nombre '${name}'`);
}

}

module.exports = {getpokemonbynamehandler};