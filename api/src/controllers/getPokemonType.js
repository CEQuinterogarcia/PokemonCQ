const axios = require("axios");
const { Type } = require("../db");

const URL = "https://pokeapi.co/api/v2/type"

const getpokemontype = async () =>{

  // busco los tipos de Pokemon en las API  
    let {data} = await axios.get(`${URL}`)
    const typepokemon = data.results.map(async(typ)=>{
        const {data} = await axios.get(`${typ.url}`)
        return{  
            id: data.id,
            name: data.name,
        }    

    })
    typess = await Promise.all(typepokemon);
   //console.log(typess);
   typess.forEach(el => {
    Type.findOrCreate({
        where: { id: el.id,
            name: el.name }
    })
})
const allTypes = await Type.findAll();
if (!allTypes) throw new Error('No hay Types en la DB')
return allTypes


}

module.exports = {getpokemontype};