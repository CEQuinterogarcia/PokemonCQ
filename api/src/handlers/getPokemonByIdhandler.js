const axios = require("axios");
const { getpokemonsbyid, getpokemonbyidhan } = require("../controllers/getPokemonbyId");
const { getpokemontypehandler } = require("./getPokemonTypehandler");

let URL = 'https://pokeapi.co/api/v2/pokemon/'

const getpokemonbyidhandler = async(req,res)=>{

    const { id } = req.params;
    //console.log(id);
try {
    
    let response = await getpokemonbyidhan(id);
    if (response) {
      return  res.status(200).json(response)
    }
    return res.status(400).send("NO SE ENCONTRO")

} catch (error) {
    return res.status(400).send(error.message)
}

}

module.exports = {getpokemonbyidhandler};