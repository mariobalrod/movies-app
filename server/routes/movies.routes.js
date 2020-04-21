const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

// Todo: Crear Pelicula y asignarlo a Lista/Categoria
// @route POST /api/movies
// @desc  create movie
// @acces auth PUBLIC
router.post('/', async (req, res) => {
    const { movie_id, user_id, type } = req.body;

    const newMovie = new Movie({
        movie_id: movie_id,
        user_id: user_id,
        type: type
    });

    await newMovie.save();
});

// Todo: Obetener Peliculas por TYPE
// @route GET /api/movies/:type
// @desc  obtener pelis por categoria
// @acces auth PUBLIC
router.get('/:type', async (req, res) => {
    const type = req.params.type;
    const movies = await Movie.find({type: type});

    res.json(movies);
});

// Todo: Eliminar Pelicula mediante Id de Mongodb
// @route GET /api/movies/:type
// @desc  obtener pelis por categoria
// @acces auth PUBLIC
router.delete('/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.send('Deleted!');
});


//===============================================================================================================

//                                   Acciones Generales

//===============================================================================================================

// Todo: Obtener todos las peliculas
router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

// Todo: Obtener Una Pelicula por Id de Mongodb
router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
});


module.exports = router;