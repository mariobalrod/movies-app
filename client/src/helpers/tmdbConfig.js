
const apiUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'cde4373ea73cf275153e270dc7a886c2';

const axios = require('axios');


async function fetchMovieById (id) {
    fetch(`${apiUrl}movie/${id}?api_key=${apiKey}&language=en-US`)
        .then(data => data.json())
        .then(data =>  {
            return data;
        })
        .catch(err => console.log(err));
}

async function searchMovies(searchTerm) {
    const movies = [];
    axios.get(`${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}
            &language=en-US&include_adult=false`)
        .then(data => {
            console.log(data.data.results)
            movies.push(data.data.results);
        })
        .catch(err => console.log(err));
    return movies;
}

async function fetchSomeMoviesById(type, user) {

    // Search own mongodb -> return Array(Movies)
    const moviesDb = await axios.get(`/api/movies/${type}/${user}`);

    // Extract movies_id of moviesDb Array
    const ids = moviesDb.data.map(movie => {
        return movie.id_movie
    });

    // Get movies list
    const movies = ids.map(id => {
        const movie = fetchMovieById(id);
        return {movie};
    });

    return movies;
}

module.exports = {
    fetchMovieById,
    searchMovies,
    fetchSomeMoviesById
}