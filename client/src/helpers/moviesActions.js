const axios = require('axios');

// Todo: Actions for moovies of my API routes

const addMovie = async function(movie_id, user_id, type) {
    const response = await axios({
        method: 'POST',
        url: '/api/movies/add',
        data: {movie_id, user_id, type}
    })
    
    const data = response.data;
    return data;
}

const deleteMovie = async function(mongoId) {
    await axios({
        method: 'DELETE',
        url: `/api/movies/${mongoId}`
    })
    window.location.reload(true);
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

const deleteMoviesByType = async function(type, user) {
    await axios({
        method: 'DELETE',
        url: `/api/movies/${type}/${user}`
    })
}

const updateTypeMovies = async function(user_id, type, newType) {
    await axios({
        method: 'POST',
        url: '/api/movies/types',
        data: {user_id, type, newType}
    });
    
}

module.exports = {
    addMovie,
    deleteMovie,
    getMoviesByType,
    getCountMoviesByType,
    deleteMoviesByType,
    updateTypeMovies
}


