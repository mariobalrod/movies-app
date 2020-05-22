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

    const movie = await Movie.findOne({movie_id, user_id, type});

    if(movie) {
        res.json({success: false, msg: 'Already exist'});
    } else {
        const newMovie = new Movie({
            movie_id: movie_id,
            user_id: user_id,
            type: type
        });
    
        newMovie
            .save()
            .then(movieSaved => {
                res.json({success: true, msg: "Guardada"})
            })
            .catch(err => console.log(err));
    }
}

async function updateMovie(req, res) {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.json({success: true, msg: "Pelicula Actualizada"});
}

async function deleteMovie(req, res) {
    const { movie_id, user_id } = req.body;
    await Movie.findOneAndDelete({movie_id: movie_id, user_id: user_id});
    res.json({success: true, msg: "Pelicula Eliminada"});
}

async function deleteMovieById(req, res) {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({success: true, msg: "Pelicula Eliminada"});
}

async function getCountMoviesByType(req, res) {
    const type = req.params.type;
    const user = req.params.user;
    const count = await Movie.countDocuments({type: type, user_id: user});
    res.json(count);
}

async function deleteMoviesByType(req, res) {
    const type = req.params.type;
    const user = req.params.user;
    await Movie.find({type: type, user_id: user}).remove();
    
    res.json({success: true, msg: "Peliculas Eliminadas"});
}

async function updateTypeMovies(req, res) {
    const {user_id, type, newType} = req.body;
    const movies = await Movie.find({type: type, user_id: user_id});
    movies.forEach(async movie => {
        await Movie.findByIdAndUpdate(movie.id, {type: newType})
    })
    res.json({success: true, msg: "Type Update"});
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    getMoviesByType,
    deleteMovieById,
    getCountMoviesByType,
    deleteMoviesByType,
    updateTypeMovies
}

