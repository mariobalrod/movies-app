const axios = require('axios');

// Todo: Actions Movies with my API routes

const addMovie = function(movie_id, user_id, type) {
    axios({
        method: 'POST',
        url: '/api/movies/add',
        data: {movie_id, user_id, type}
    })
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

module.exports = {
    addMovie
}