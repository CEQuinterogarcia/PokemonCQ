const axios = require("axios");
let URL = 'https://pokeapi.co/api/v2/pokemon/'

const { Pokemon } = require('../db');
const { Type } = require('../db');

const postpokemon = async (name, image, hp, attack, defense, speed, height, weight, types) =>{
    
///   CREA UN POKEMON EN LA BD
    try {
        let id = 0; 
        const count = await Pokemon.count(); // Cuenta el número de filas en la tabla Pokemon
            if (count === 0) {
               id= 1500;   
            } else {
                id = count+1500
            }
        // Verificar si el nombre del Pokémon ya está en uso
        const pokemonname = await Pokemon.findOne({
            where: {
                name: name,
            }               
         });  

        if (pokemonname) {
        throw new Error("El nombre del Pokémon ya está en uso");
        } else {
            const newpokemon = await Pokemon.create(
                {   id,
                    name,
                    image,
                    hp,
                    attack,
                    defense,
                    speed,
                    height,
                    weight,
        
                })
                console.log(newpokemon);
                console.log(types);
                if(types.length > 0){
                    types.map(async (idd)=>{
                        const typevar = await Type.findByPk(idd) 
                        console.log(typevar);
                        await newpokemon.addType(typevar)});              
                  }    
              // await newpokemon.addType(typeDB);
               const allpokemon = await Pokemon.findAll({
                include: [
                    {
                      model: Type,
                      attributes: ["name"],
                    
                    }]
               })
             return allpokemon
            }  
        
    } catch (error) {
        console.error('Error al verificar si la base de datos está vacía:', error.message); 
        throw error;
    }
   

}

module.exports = {postpokemon};