const axios = require("axios");

const { Pokemon } = require('../db');
const { Type } = require('../db');

const deletePokemon = async (pokemonId) => {
    try {
        // Busca el Pokémon por su ID en la base de datos y lo elimina
        const deletedPokemon = await Pokemon.destroy({
            where: {
                id: pokemonId
            }
        });
        // Comprueba si se eliminó correctamente
        if (deletedPokemon === 1) {
            return { success: true, message: 'Pokémon eliminado correctamente' };
        } else {
            return { success: false, message: 'No se pudo encontrar el Pokémon para eliminar' };
        }
    } catch (err) {
        console.log(err);
        return { success: false, message: 'Error al eliminar el Pokémon' };
    }
}
module.exports = {deletePokemon};