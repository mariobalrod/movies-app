import React, { Component } from 'react';
import axios from 'axios';

import { API_KEY, API_URL } from '../helpers/Config';


import MoviesContainer from '../components/movies/MoviesConainer';

class ListsContent extends Component {
    constructor () {
        super();
        this.state = {
            movies: []
        }
        this.apiKey = API_KEY;
        this.apiUrl = API_URL;
    }

    componentDidMount() {

        if(!this.props.currentUser) {
            this.props.history.push('/');
        }

        const moviesAdded = [];
        
        const type = this.props.match.params.type;
        const user = this.props.currentUser._id;
        
        axios.get(`/api/movies/${type}/${user}`)
            .then (function (data) {
                const ids = data.data.map((movie, index) => {
                    const movie_id = movie.movie_id;
                    return { key: index, movie_id };
                });

                ids.map(function (id) {
                    axios.get(`${this.apiUrl}movie/${id.movie_id}?api_key=${this.apiKey}`)
                        .then(function(movie) {
                            moviesAdded.push(movie.data)
                            this.setState({
                                movies: moviesAdded
                            })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                });
            })
            .catch(err => console.log(err));

    }
    
    render() {
        return(
            <div>
                <MoviesContainer movies={this.state.movies} currentUser={this.props.currentUser} />
            </div>
        );
    }
}

export default ListsContent;