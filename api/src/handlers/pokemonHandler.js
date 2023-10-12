const {
    createPokemon,
    getAllPokemons,
    getPokemonsById,
} = require("../controllers/pokemonController.js");

const getPokemonsHandler = async (req, res) => { 
    let { name } = req.query;
    try {
        if (name) {
        const response = await getAllPokemons(name);
        return res.status(200).json(response);
        }
        const response = await getAllPokemons();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
}
};

const getPokemonsIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getPokemonsById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createPokemonsHandler = async (req, res) => {
    const {
        name,
        image,
        hp,
        attack,
        defense,
        speed = null,
        height = null,
        weight = null,
        createdInDb = true, //no es necesario 
        types,
    } = req.body;
    try {
        const pokemon = await createPokemon(
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            createdInDb,
            types
        );
        res.status(200).json({ pokemon });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
getPokemonsHandler,
getPokemonsIdHandler,
createPokemonsHandler,
};