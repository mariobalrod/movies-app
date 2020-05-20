import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Spinner } from 'react-bootstrap';

import { apiKey, apiUrl } from '../helpers/tmdbConfig';

// Componentes
import NavOptions from '../components/partials/NavOptions';
import SearchBar from '../components/partials/SearchBar';
import MoviesContainer from '../components/movies/MoviesConainer';

const Home = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [option, setOption] = useState('movie/popular');
    const [title, setTitle] = useState('Popular Movies')
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const endpoint = `${apiUrl}${option}?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }, [option]);

    // ========================================================================================================
    // Options Functions
    const changeToPopular= () => {  
        setSearchTerm('');
        setOption('movie/popular');
        setTitle('Popular Movies');
        let endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }

    const changeToRated = () => {
        setSearchTerm('');
        setOption('movie/top_rated');
        setTitle('Top Rated Movies');
        let endpoint = `${apiUrl}movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }

    const changeToUpcoming = () => {
        setSearchTerm('');
        setOption('movie/upcoming');
        setTitle('Upcoming Movies');
        let endpoint = `${apiUrl}movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }

    // ========================================================================================================
    // Movies
    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                setMovies(result.results);
                setCurrentPage(result.page);
            }, setLoading(false))
            .catch(error => console.error('Error:', error))
    }

    const fetchMoreMovies = (endpoint) => {
        setLoading(true);
        setTimeout(() => {
            fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                setMovies([...movies, ...result.results]);
                setCurrentPage(result.page);
            }, setLoading(false))
            .catch(error => console.error('Error:', error))
        }, 1000)       
    }

    // ========================================================================================================
    // Load More Movies (new Pagination)

    const loadMoreItems = () => {
        let endpoint = '';
        if(searchTerm){
            endpoint = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=${currentPage + 1}&include_adult=false`;
            fetchMoreMovies(endpoint);
        }else{
            endpoint = `${apiUrl}${option}?api_key=${apiKey}&language=en-US&page=${currentPage + 1}`;
            fetchMoreMovies(endpoint);
        }
    }

    // ========================================================================================================
    // Buscador
    const handleSubmit = async (e) => {
        e.preventDefault();
        let endpoint = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
        fetchMovies(endpoint);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    // ========================================================================================================
    // Component
    return (
        <div>
            { 
                (props.currentUser)
                ? (
                    <div>
                        <h1 style={{textAlign: "center"}}>{title}</h1>
                        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} searchTerm={searchTerm}/>
                        <NavOptions changeToPopular={changeToPopular} changeToRated={changeToRated} changeToUpcoming={changeToUpcoming}/>
                        <MoviesContainer currentUser={props.currentUser} movies={movies} type={false} auth={true} successToast={props.successToast} warningToast={props.warningToast}/>
                        {Loading ? 
                            <div className="mx-auto" style={{width: 80, marginTop: 100}}>
                                <Spinner animation="border" /> 
                            </div>
                            : ''}
                        <Button onClick={loadMoreItems} style={{width: 200, marginTop: 100}} className="mx-auto" variant="primary" block>
                            Load more items
                        </Button>
                    </div>
                ) : (
                        <div>
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
                            <h1 style={{textAlign: "center"}}>{title}</h1>
                            <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} searchTerm={searchTerm}/>
                            <NavOptions changeToPopular={changeToPopular} changeToRated={changeToRated} changeToUpcoming={changeToUpcoming}/>
                            <MoviesContainer movies={movies} type={false} auth={false}/>
                            {Loading ? 
                                <div className="mx-auto" style={{width: 80, marginTop: 100}}>
                                    <Spinner animation="border" /> 
                                </div>
                                : ''}
                            <Button onClick={loadMoreItems} style={{width: 200, marginTop: 100}} className="mx-auto" variant="primary" block>
                                Load more items
                            </Button>
                        </div>
                )

            }
        </div>
    );
}

export default Home;