import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Spinner } from 'react-bootstrap';

import { apiKey, apiUrl } from '../helpers/tmdbConfig';

// Componentes
import NavOptions from '../components/partials/NavOptions';
import SearchBar from '../components/partials/SearchBar';
import MoviesContainer from '../components/movies/MoviesConainer';

const Home = (props) => {

    const buttonRef = useRef(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [option, setOption] = useState('movie/popular');
    const [title, setTitle] = useState('Popular Movies')
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setSearchTerm('');
        const endpoint = `${apiUrl}${option}?api_key=${apiKey}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }, [option]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

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
    // Scroll System

    const handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight - 1) {
            buttonRef.current.click();
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
                        <MoviesContainer currentUser={props.currentUser} movies={movies} type={false} storeToastMessage={props.storeToastMessage}/>
                        {Loading ? 
                            <div className="mx-auto" style={{width: 80, marginTop: 100}}>
                                <Spinner animation="border" /> 
                            </div>
                            : ''}
                        <Button onClick={loadMoreItems} style={{width: 200, marginTop: 100}} className="mx-auto" variant="primary" ref={buttonRef} block>
                            Load more items
                        </Button>
                        {/* <PaginationCom prevPage={prevPage} nextPage={nextPage} firstPage={firstPage} lastPage={lastPage}/> */}
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