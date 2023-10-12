const { Router } = require('express');
const express = require("express");

const {
    getPokemonsHandler,
    getPokemonsIdHandler,
    createPokemonsHandler,
} = require('../handlers/pokemonHandler')

const pokemonRouter = Router();

//query
pokemonRouter.get('/', getPokemonsHandler )

//params
pokemonRouter.get('/:id', getPokemonsIdHandler)

//body
pokemonRouter.post('/create',createPokemonsHandler)

module.exports = pokemonRouter;