const express = require('express');
const router = express.Router();

const {
    getAllMovies, 
    getMovieById, 
    createMovie, 
    updateMovie, 
    deleteMovie,
    getMoviesByType,
    deleteMovieById,
    getCountMoviesByType
} = require('../controllers/movies.controllers');

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.get('/:type/:user', getMoviesByType);
router.post('/add', createMovie);
router.put('/:id', updateMovie);
router.delete('/delete', deleteMovie);
router.delete('/:id', deleteMovieById);
router.get('/count/:type/:user', getCountMoviesByType);

module.exports = router;