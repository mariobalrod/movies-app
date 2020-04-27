
const apiUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'cde4373ea73cf275153e270dc7a886c2';

const axios = require('axios');


const fetchMovieById = async function(id) {
    const movie = await axios.get(`${apiUrl}movie/${id}?api_key=${apiKey}&language=en-US`);
    return movie.data;
}

const searchMovies = async function(searchTerm) {
    const movies = await axios.get(`${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&include_adult=false`);
    return movies.data.results;
}

const fetchIds = async function(type, user) {
    const moviesDb = await axios.get(`/api/movies/${type}/${user}`);
    const ids = moviesDb.data.map(movie => {
        const idM = movie.movie_id;
        return {idM}
    });
    return ids;
}

const fetchSomeMoviesByIds = async function(ids) {
    const movies = await ids.map(async id => {
        const movie = await fetchMovieById(id.idM);
        return movie
    });
    return movies;
}

module.exports = {
    searchMovies,
    fetchMovieById,
    fetchIds,
    fetchSomeMoviesByIds
}