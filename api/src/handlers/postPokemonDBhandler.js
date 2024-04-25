const axios = require("axios");
const { getpokemonsbyid } = require("../controllers/getPokemonbyId");
const { postpokemon } = require("../controllers/postPokemonDB");

let URL = 'https://pokeapi.co/api/v2/pokemon/'

const postpokemondbhandler = async(req,res)=>{

    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

try {

    let crearpokemon= await postpokemon(name, image, hp, attack, defense, speed, height, weight, types);
    console.log(crearpokemon);
    
    res.status(200).json(crearpokemon)
} catch (error) {

    res.status(400).json({ error: error.message });
    
}

}

module.exports = {postpokemondbhandler};