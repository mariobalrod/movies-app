import React, { Component } from 'react';
import axios from 'axios';

import { API_KEY, API_URL } from '../helpers/Config';

import SearchBar from '../components/partials/SearchBar'
import MoviesContainer from '../components/movies/MoviesConainer';

class ListsContent extends Component {
    constructor () {
        super();
        this.state = {
            movies: [],
            searchTerm: ''
        }
        this.apiKey = API_KEY;
        this.apiUrl = API_URL;
    }

    componentDidMount() {
        if(!this.props.currentUser) {
            this.props.history.push('/');
        }  
    } 

    shouldComponentUpdate(prevProps, prevState) {
        if (this.state.movies!==prevState.movies) {
            return true;
        }else {
            return false;
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state!==prevState) {
            console.log('EEEE')
        }
    }

    setMovies() {
        const moviesLocated = [];
        const type = this.props.match.params.type;
        const user = this.props.currentUser._id;
        
        axios.get(`/api/movies/${type}/${user}`)
            .then(function (data) {
                const ids = data.data.map((movie, index) => {
                    const movie_id = movie.movie_id;
                    return { key: index, movie_id };
                });
                ids.map(function (id) {
                    fetch(`https://api.themoviedb.org/3/movie/${id.movie_id}?api_key=cde4373ea73cf275153e270dc7a886c2`)
                        .then(movie => movie.json())
                        .then(movie => {
                            moviesLocated.push(movie);
                        })
                        .catch(err => console.log(err))
                    return true
                });
            })
            .catch(err => console.log(err));
        this.setState({
            movies: moviesLocated
        })
        console.log('SETMOVIES', this.state.movies)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${this.apiUrl}search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
            .then(data => data.json())
            .then(data => {
                this.setState({ movies: [...data.results] });
            })
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }
    
    render() {
        console.log('Rendering...')
        console.log('RENDER', this.state.movies)

        const type = this.props.match.params.type;
        let title = '';
        if(type==='favorita') title = 'Peliculas Favoritas'
        if(type==='vista') title = 'Peliculas Vistas'
        if(type==='pendiente') title = 'Peliculas Pendientes'

        return (
            <div>
                <h1 style={{ textAlign: "center" }}>{title}</h1>
                <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <MoviesContainer movies={this.state.movies} currentUser={this.props.currentUser} type={true} />
            </div>
        );
    }
}

export default ListsContent;