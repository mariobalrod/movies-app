const Movie = require('../models/Movie');

async function getAllMovies(req, res) {
    const movies = await Movie.find();
    res.json(movies);
}

async function getMovieById(req, res) {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
}

async function createMovie(req, res) {
    const { title, description, director, puntuacion, imgUrl } = req.body;

    if(director) {
        if(imgUrl) {
            // Las dos
            const newMovie = new Movie({ title, description, director, puntuacion, imgUrl });
            await newMovie.save();
            res.json(newMovie);
        } else {
            // Solo director
            const newMovie = new Movie({ title, description, director, puntuacion });
            await newMovie.save();
            res.json(newMovie);
        }
    } else {
        if(imgUrl) {
            // Solo imagen
            const newMovie = new Movie({ title, description, puntuacion, imgUrl });
            await newMovie.save();
            res.json(newMovie);
        } else {
            // Ninguna
            const newMovie = new Movie({ title, description, puntuacion });
            await newMovie.save();
            res.json(newMovie);
        }
    }

}

async function updateMovie(req, res) {
    const { title, description, director, puntuacion, imgUrl } = req.body;

    if(director) {
        if(imgUrl) {
            // Las dos
            await Movie.findByIdAndUpdate(req.params.id, { title, description, director, puntuacion, imgUrl });
        } else {
            // Solo director
            await Movie.findByIdAndUpdate(req.params.id, { title, description, director, puntuacion });
        }
    } else {
        if(imgUrl) {
            // Solo imagen
            await Movie.findByIdAndUpdate(req.params.id, { title, description, puntuacion, imgUrl });
        } else {
            // Ninguna
            await Movie.findByIdAndUpdate(req.params.id, { title, description, puntuacion });
        }
    }

    res.json(await Movie.findById(req.params.id));
}

async function deleteMovie(req, res) {
    await Movie.findByIdAndDelete(req.params.id);
    res.send('Deleted!');
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
}