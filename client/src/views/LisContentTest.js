import React, {useLayoutEffect, useState} from 'react';

import { searchMovies, fetchSomeMoviesById } from '../helpers/tmdbConfig';

import SearchBar from '../components/partials/SearchBar';
import MoviesContainer from '../components/movies/MoviesConainer';


const ListContentTest = (props) => {

    const [Movies, setMovies] = useState([]);
    const [Title, setTitle] = useState('');
    const [SearchTerm, setSearchTerm] = useState('');

    useLayoutEffect(() => {
        const type = props.match.params.type;
        const user = props.currentUser._id;

        establecerTitulo();

        const moviesFinded = fetchSomeMoviesById(type, user);

        setMovies([moviesFinded])

    }, [])
    
    // ==================================================================================================================
    // Establecer el TITULO
    const establecerTitulo = () => {
        const type = props.match.params.type;
        if (type === 'favorita') setTitle('Peliculas Favoritas')
        if (type === 'vista') setTitle('Peliculas Vistas')
        if (type === 'pendiente') setTitle('Peliculas Pendientes')
    }
    
    // ==================================================================================================================
    // BUSCADOR
    const handleSubmit = (e) => {
        e.preventDefault();
        const moviesFinded = searchMovies(SearchTerm);
        setMovies([...moviesFinded]);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }


    // ==================================================================================================================
    // Todo: Componente
    return (
            <div>
                <h1 style={{ textAlign: "center" }}>{Title}</h1>
                <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
                <MoviesContainer movies={Movies} currentUser={props.currentUser} type={true} />
            </div>
    );
}

export default ListContentTest;
