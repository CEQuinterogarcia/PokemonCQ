const axios = require("axios");
const { getpokemons } = require("../controllers/getPokemons");
const { getpokemonbyname } = require("../controllers/getPokemonbyName");
const { getpokemontype } = require("../controllers/getPokemonType");
let URL = 'https://pokeapi.co/api/v2/pokemon/'

const getpokemontypehandler = async(req,res)=>{
   
try {
  
    let response = await getpokemontype();
  
    res.status(200).json(response)
    
   
} catch (error) {
    return res.status(400).send(error.message)
}

}

module.exports = {getpokemontypehandler};