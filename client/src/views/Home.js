import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { API_KEY, API_URL } from '../Config';

// Componentes
/* import MovieForm from '../components/MovieForm'; */
import SearchBar from '../components/SearchBar';
import MoviesContainer from '../components/MoviesConainer';

export default class Home extends Component {

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
        fetch(`${this.apiUrl}trending/movie/day?api_key=${this.apiKey}`)
            .then(data => data.json())
            .then(data => {
                this.setState({ movies: [...data.results] });
            })
            .catch(err => console.log(err))
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

    render () {
        return (
            <div>
                { 
                    (this.props.currentUser)
                    ? (
                        <div>
                            <h1 style={{textAlign: "center"}}>Popular Movies</h1>
                            <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                            <MoviesContainer movies={this.state.movies} />
                            {/* < MovieForm currentUser={this.props.currentUser}/> */}
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