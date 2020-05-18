import React, {useEffect, useState} from 'react';

import { fetchIds, fetchMovieById } from '../helpers/tmdbConfig';

import {useHistory, Link} from 'react-router-dom';

import MoviesContainer from '../components/movies/MoviesConainer';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const ListContent = (props) => {

    let history = useHistory();

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
                <div className="mx-auto mb-5" style={{width: 50}}>
                    <Link to="" className="linkList" onClick={() => history.goBack()}><KeyboardBackspaceIcon style={{fontSize: 40}}/></Link>
                </div>
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
