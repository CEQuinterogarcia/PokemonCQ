const { Router } = require('express');
const { getpokemons } = require('../controllers/getPokemons');
const { getpokemonshandler } = require('../handlers/getPokemonshandler');
const { getpokemonbyidhandler } = require('../handlers/getPokemonByIdhandler');
const { getpokemonbynamehandler } = require('../handlers/getPokemonByNamehandler');
const { getpokemontypehandler } = require('../handlers/getPokemonTypehandler');
const { postpokemondbhandler } = require('../handlers/postPokemonDBhandler');
const { getpokemontype } = require('../controllers/getPokemonType');

const routernew = Router();

routernew.get("/", getpokemonshandler)
routernew.get("/:id", getpokemonbyidhandler)
routernew.post("/", postpokemondbhandler)



module.exports = routernew;