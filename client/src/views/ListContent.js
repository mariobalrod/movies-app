import React, {useEffect, useState} from 'react';

import { fetchIds, fetchMovieById } from '../helpers/tmdbConfig';

import MoviesContainer from '../components/movies/MoviesConainer';


const ListContent = (props) => {

    const [Movies, setMovies] = useState([]);
    const [Title, setTitle] = useState('');

    useEffect(() => {
        const type = props.match.params.type;
        const user = props.currentUser._id;
        
        establecerTitulo(type);
        fetchMoviesList(type, user)
    }, [props.currentUser._id, props.match.params.type])

    // ==================================================================================================================
    // Obtener todas las Peliculas por Tipo
    const fetchMoviesList = async (type, user) => {
        const idsArray = await fetchIds(type, user);
        const helper = [];
        for(let i =0; i<idsArray.length; i++) {
            const movie = await fetchMovieById(idsArray[i].idM);
            helper.push(movie);
        }
        setMovies(helper);
    }
    
    // ==================================================================================================================
    // Establecer el TITULO
    const establecerTitulo = (type) => {
        if (type === 'favorita') setTitle('Peliculas Favoritas')
        if (type === 'vista') setTitle('Peliculas Vistas')
        if (type === 'pendiente') setTitle('Peliculas Pendientes')
    }

    // ==================================================================================================================
    // Todo: Componente
    return (
            <div>
                <h1 style={{ textAlign: "center" }}>{Title}</h1>
                <MoviesContainer 
                    movies={Movies} 
                    currentUser={props.currentUser} 
                    type={true} 
                    storeToastMessage={props.storeToastMessage} 
                    deleteToast={props.deleteToast} 
                />
            </div>
    );
}

export default ListContent;
