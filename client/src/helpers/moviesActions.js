const axios = require('axios');

// Todo: Actions for moovies of my API routes

const addMovie = function(movie_id, user_id, type) {
    axios({
        method: 'POST',
        url: '/api/movies/add',
        data: {movie_id, user_id, type}
    })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

const deleteMovie = function(movie_id, user_id) {
    axios({
        method: 'DELETE',
        url: '/api/movies/delete',
        data: {movie_id, user_id}
    })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

const getMoviesByType = async function(type, user) {
    const movies = await axios.get(`/api/movies/${type}/${user}`)
    return movies;
}

const getCountMoviesByType = async function(type, user) {
    const count = await axios.get(`/api/movies/count/${type}/${user}`)
    const data = count.data;
    return data;
}

module.exports = {
    addMovie,
    deleteMovie,
    getMoviesByType,
    getCountMoviesByType
}
