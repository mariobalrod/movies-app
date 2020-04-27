import React, {useEffect, useState} from 'react';

import { searchMovies, fetchIds, fetchMovieById } from '../helpers/tmdbConfig';

import SearchBar from '../components/partials/SearchBar';
import MoviesContainer from '../components/movies/MoviesConainer';


const ListContentTest = (props) => {

    const [Movies, setMovies] = useState([]);
    const [Title, setTitle] = useState('');
    const [SearchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const type = props.match.params.type;
        const user = props.currentUser._id;

        establecerTitulo();

        establecerPeliculas(type, user)
        
    }, [])

    const establecerPeliculas = async (type, user) => {
        const idsArray = await fetchIds(type, user);
        /* const temp = await idsArray.map(async id => {
            const movie = await fetchMovieById(id.idM);
            console.log(movie)
            return movie;
        }) */
        const temp = [];
        for(let i =0; i<idsArray.length; i++) {
            const movie = await fetchMovieById(idsArray[i].idM);
            temp.push(movie);
        }
        setMovies(temp);
        
        console.log(Movies)
    }
    
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const moviesFinded = await searchMovies(SearchTerm);
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
