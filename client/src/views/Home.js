import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { searchMovies } from '../helpers/tmdbConfig';

// Componentes
import PaginationCom from '../components/partials/PaginationCom'
import SearchBar from '../components/partials/SearchBar';
import MoviesContainer from '../components/movies/MoviesConainer';

export default class Home extends Component {

    constructor () {
        super();
        this.state = {
            movies: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=cde4373ea73cf275153e270dc7a886c2`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                this.setState({ movies: [...data.results] });
                console.log(this.state.movies)
            })
            .catch(err => console.log(err));
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const moviesFinded = await searchMovies(this.state.searchTerm);
        this.setState({ movies: moviesFinded });
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    render () {
        
        return (
            <div>
                { 
                    (this.props.currentUser)
                    ? (
                        <div>
                            { false && 'Hello'}
                            <h1 style={{textAlign: "center"}}>Popular Movies</h1>
                            <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                            <MoviesContainer currentUser={this.props.currentUser} movies={this.state.movies} type={false} />
                            <PaginationCom />
                        </div>
                    ) : (
                        <Card className="mx-auto my-5 text-center animated flipInY" style={{width: 700}}>
                            <Card.Header><h1>WELCOME</h1></Card.Header>
                            <Card.Body>
                                <Card.Title><h5>Your Best Option</h5></Card.Title>
                                <Card.Text>
                                    Organizes all your Movies with us.
                                </Card.Text>
                                <Link to="/signup"><Button variant="primary">Start</Button></Link>
                            </Card.Body>
                            <Card.Footer className="text-muted">Movies App</Card.Footer>
                        </Card>
                    )

                }
            </div>
        );
    }

}