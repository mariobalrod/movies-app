import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { searchMovies, apiKey, apiUrl } from '../helpers/tmdbConfig';

// Componentes
import PaginationCom from '../components/partials/PaginationCom'
import NavOptions from '../components/partials/NavOptions';
import SearchBar from '../components/partials/SearchBar';
import MoviesContainer from '../components/movies/MoviesConainer';

const Home = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [option, setOption] = useState('movie/popular');
    const [title, setTitle] = useState('Popular Movies')
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const endpoint = `${apiUrl}${option}?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }, []);

    // ========================================================================================================
    // Options Functions
    const changeToPopular= () => {  
        setOption('movie/popular');
        setTitle('Popular Movies');
        let endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }

    const changeToRated = () => {
        setOption('movie/top_rated');
        setTitle('Top Rated Movies');
        let endpoint = `${apiUrl}movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }

    const changeToUpcoming = () => {
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
                setTotalPages(result.total_pages);
            })
            .catch(error => console.error('Error:', error))
    }

    // ========================================================================================================
    // Pagination functions
    const prevPage = () => {
        let endpoint = '';
        if(currentPage>1){
            endpoint = `${apiUrl}${option}?api_key=${apiKey}&language=en-US&page=${currentPage - 1}`;
            fetchMovies(endpoint);
        }
    }

    const nextPage = () => {
        let endpoint = '';
        if(currentPage<totalPages){
            endpoint = `${apiUrl}${option}?api_key=${apiKey}&language=en-US&page=${currentPage + 1}`;
            fetchMovies(endpoint);
        }
    }

    const lastPage = () => {
        let endpoint = '';
        endpoint = `${apiUrl}${option}?api_key=${apiKey}&language=en-US&page=${totalPages}`;
        fetchMovies(endpoint);
    }

    const firstPage = () => {
        let endpoint = '';
        endpoint = `${apiUrl}${option}?api_key=${apiKey}&language=en-US&page=${1}`;
        fetchMovies(endpoint);
    }

    // ========================================================================================================
    // Buscador
    const handleSubmit = async (e) => {
        e.preventDefault();
        const moviesFinded = await searchMovies(searchTerm);
        setMovies([...moviesFinded]);
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
                        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
                        <NavOptions changeToPopular={changeToPopular} changeToRated={changeToRated} changeToUpcoming={changeToUpcoming}/>
                        <MoviesContainer currentUser={props.currentUser} movies={movies} type={false} storeToastMessage={props.storeToastMessage}/>
                        <PaginationCom prevPage={prevPage} nextPage={nextPage} firstPage={firstPage} lastPage={lastPage}/>
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