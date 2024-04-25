const axios = require("axios");

const { Pokemon } = require('../db');
const { Type } = require('../db');

const getpokemonbyidDB = async (id) =>{
  //// Busco el primer pokemon con el id en la BD
    try {
        const pokemonidDB = await Pokemon.findOne({
              where: {
                id: id,
              },
             include: [
                {
                  model: Type,                             
                }]
        });

        if (!pokemonidDB) {
            return false
        }    
        //console.log(allpokemonDB);
        let PokemonidDB_N =[]          
        let typesv = []
        pokemonidDB?.Types.map(typ=>
            {
               typesv.push(typ.name)             
            })      
            PokemonidDB_N =
              {
                 id: pokemonidDB.id,
                 name: pokemonidDB.name,
                 image: pokemonidDB.image,
                 hp: pokemonidDB.hp,
                 attack: pokemonidDB.attack,
                 defense: pokemonidDB.defense,
                 speed: pokemonidDB.speed,
                 height: pokemonidDB.height,
                 weight: pokemonidDB.weight,
                 types: typesv,
               
    
              }

         return  PokemonidDB_N
         
        
    } catch (error) {
        return false 
    }

    
}

module.exports = {getpokemonbyidDB};