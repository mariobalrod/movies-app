const axios = require('axios');

// Todo: Actions Movies with my API routes

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
        .catch(err => console.log(err))
}

module.exports = {
    addMovie,
    deleteMovie
}