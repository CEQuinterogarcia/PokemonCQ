const axios = require("axios");
const { getpokemons } = require("../controllers/getPokemons");
const { getpokemonbyname } = require("../controllers/getPokemonbyName");
const { getpokemontypehandler } = require("./getPokemonTypehandler");
const { getpokemonDB } = require("../controllers/getPokemonDB");
const { getpokemonbynameDB } = require("../controllers/getPokemonbyNameDB");
const { getpokemonbynamehandler } = require("./getPokemonByNamehandler");
let URL = 'https://pokeapi.co/api/v2/pokemon/'

const getpokemonshandler = async(req,res)=>{
    const{name} = req.query;    
try { 
    if (name) {
        let response = await getpokemonbynamehandler(name);
        if (response===false) {
            return res.status(400).send("NO SE ENCONTRO POKEMON CON ESE NOMBRE");  
        }
        return res.status(200).json([response]); 
    } else {
        let pokemonapi = await getpokemons();
        let pokemondb = await getpokemonDB();
        const responsepoke= [...pokemondb, ...pokemonapi]

        
        res.status(200).json(responsepoke)
    }
   
} catch (error) {
    return res.status(400).send(error.message)
}

}

module.exports = {getpokemonshandler};