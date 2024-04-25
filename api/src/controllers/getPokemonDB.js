const axios = require("axios");

const { Pokemon } = require('../db');
const { Type } = require('../db');

const getpokemonDB = async () =>{
 //// Busco el todos pokemon con el en la BD
    try {
        const allpokemonDB = await Pokemon.findAll({
            attributes:[
                "id", 
                "name",
                "attack",
                "speed",
                "image"],
            include: [
                {
                  model: Type,
                             
                }]
        });
        //console.log(allpokemonDB);
           let allPokemonDB_N =[]
    
           allpokemonDB.map(poke=>{
             let typesv = []
              poke.Types.map(typ=>{
                 typesv.push(typ.name)             
                })      
              allPokemonDB_N.push
              ({
                 id: poke.id,
                 name: poke.name,
                 image: poke.image,
                 attack: poke.attack,
                 types: typesv,
                 speed: poke.speed,
                 create: "true",
    
              })
           })
         return  allPokemonDB_N
         
        
    } catch (error) {
        
    }

    
}

module.exports = {getpokemonDB};