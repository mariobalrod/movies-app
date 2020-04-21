import axios from 'axios';

const moviesActions = {};

moviesActions.addMovie = (data) => {
    axios.post('/api/movies', data)
        .catch(err => console.log(err))
}

moviesActions.getMovies = (type, user) => {
    axios.get(`/api/movies/${type}/${user}`)
        .then(data => {
            const movies = data.data;
            console.log(movies)
            return movies;
        })
        .catch(err => console.log(err))
}

moviesActions.deleteMovie = (data) => {
    axios.delete(`/api/movies/${data}`)
        .catch(err => console.log(err))
}

export default moviesActions;