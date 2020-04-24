const express = require('express');
const router = express.Router();

const {
    getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie
} = require('../controllers/movies.controllers');

// Obtener todos las peliculas
router.get('/', getAllMovies);
// Obtener Una Pelicula por id
router.get('/:id', getMovieById);
// Crear Pelicula
router.post('/', createMovie);
// Modificar Pelicula
router.put('/:id', updateMovie);
// Eliminar Pelicula
router.delete('/:id', deleteMovie);

module.exports = router;