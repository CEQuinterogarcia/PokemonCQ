const axios = require("axios");

const { Pokemon } = require('../db');
const { Type } = require('../db');
const { getpokemonbyname } = require("./getPokemonbyName");
const { getpokemonDB } = require("./getPokemonDB");

const getpokemonbynameDB = async (name) =>{

  //// Busco el primer pokemon con el name en la BD
   try {
   const allpoke = await getpokemonDB();
   const response = allpoke.find(e=>e.name.toLowerCase() === name.toLowerCase()) 
   if(response){
       return response
   }
   } catch (error) {
     return false
   }
   

}

module.exports = {getpokemonbynameDB};