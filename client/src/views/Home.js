import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { searchMovies, apiKey, apiUrl } from '../helpers/tmdbConfig';

// Componentes
import PaginationCom from '../components/partials/PaginationCom'
import SearchBar from '../components/partials/SearchBar';
import MoviesContainer from '../components/movies/MoviesConainer';

const Home = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint)
    }, []);

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                setMovies([...movies, ...result.results])
                setCurrentPage(result.page)
            })
            .catch(error => console.error('Error:', error))
    }

    const loadMoreItems = () => {
        let endpoint = '';
        console.log('CurrentPage', currentPage)
        endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage + 1}`;
        fetchMovies(endpoint);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const moviesFinded = await searchMovies(searchTerm);
        setMovies([...moviesFinded]);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            { 
                (props.currentUser)
                ? (
                    <div>
                        { false && 'Hello'}
                        <h1 style={{textAlign: "center"}}>Popular Movies</h1>
                        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
                        <MoviesContainer currentUser={props.currentUser} movies={movies} type={false} />
                        <PaginationCom loadMoreItems={loadMoreItems}/>
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

export default Home;