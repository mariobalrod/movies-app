import React, { Component } from 'react';
import axios from 'axios';

import { API_KEY, API_URL } from '../Config';


import MoviesContainer from '../components/MoviesConainer';

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
        const moviesAdded = [];
        
        const type = this.props.match.params.type;
        const user = this.props.currentUser._id;
        
        axios.get(`/api/movies/${type}/${user}`)
            .then (data => {
                const ids = data.data.map((movie, index) => {
                    const movie_id = movie.movie_id;
                    return { key: index, movie_id }
                });

                ids.map(id => {
                    axios.get(`${this.apiUrl}movie/${id.movie_id}?api_key=${this.apiKey}`)
                        .then(movie => {
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