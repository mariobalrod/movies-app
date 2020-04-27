const Movie = require('../models/Movie');

async function getAllMovies(req, res) {
    const movies = await Movie.find();
    res.json(movies);
}

async function getMovieById(req, res) {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
}

async function getMoviesByType(req, res) {
    const type = req.params.type;
    const user = req.params.user;
    const movies = await Movie.find({type: type, user_id: user});
    
    res.json(movies);
}

async function createMovie(req, res) {
    const { movie_id, user_id, type } = req.body;

    const newMovie = new Movie({
        movie_id: movie_id,
        user_id: user_id,
        type: type
    });

    newMovie
        .save()
        .then(movie => {
            res.json({success: true, msg: "Pelicula Listada"})
        })
        .catch(err => console.log(err));
}

async function updateMovie(req, res) {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.json({success: true, msg: "Pelicula Actualizada"});
}

async function deleteMovie(req, res) {
    const { movie_id, user_id } = req.body;
    const movie = await Movie.findOne({movie_id: movie_id, user_id: user_id});
    const id = movie._id;
    await Movie.findByIdAndDelete(id);
    res.json({success: true, msg: "Pelicula Eliminada"});
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    getMoviesByType
}