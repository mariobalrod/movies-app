import React, {useEffect, useState} from 'react';
import { fetchIds, fetchMovieById } from '../helpers/tmdbConfig';
import {useHistory, Link} from 'react-router-dom';
import MoviesContainer from '../components/movies/MoviesConainer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Empty from '../svg/empty.svg';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

const ListContent = (props) => {

    let history = useHistory();

    const [Movies, setMovies] = useState([]);
    const [Title, setTitle] = useState('');

    useEffect(() => {
        const type = props.match.params.type;
        const user = props.currentUser._id;
        const custom = props.location.state.custom;

        establecerTitulo(type, custom);
        fetchMoviesList(type, user);
    }, [props.currentUser._id, props.match.params.type, props.location.state.custom])

    // ==================================================================================================================
    // Obtener todas las Peliculas por Tipo
    const fetchMoviesList = async (type, user) => {
        const idsArray = await fetchIds(type, user);
        const helper = [];
        for(let i =0; i<idsArray.length; i++) {
            const mongoId = idsArray[i].mongoId
            const movie = await fetchMovieById(idsArray[i].idM);
            helper.push({mongoId, movie});
        }
        setMovies(helper);
    }
    
    // ==================================================================================================================
    // Establecer el TITULO
    const establecerTitulo = (type, custom = false) => {
        if (type === 'favorita') setTitle('Peliculas Favoritas')
        if (type === 'vista') setTitle('Peliculas Vistas')
        if (type === 'pendiente') setTitle('Peliculas Pendientes')
        if (custom) setTitle(type)
    }

    // ==================================================================================================================
    // Todo: Componente
    return (
            <div>
                <div className="mx-auto mb-5" style={{width: 50}}>
                    <Link to="" className="linkList" onClick={() => history.goBack()}><KeyboardBackspaceIcon style={{fontSize: 40}}/></Link>
                </div>
                <h1 style={{ textAlign: "center" }}>{Title}</h1>
                <div className="mx-auto mt-4" style={{width: 25}}>
                    {
                        (props.location.state.custom) ? 
                        (
                            <Link to={{
                                pathname: '/formList',
                                state: {
                                    list_id: props.location.state.list_id
                                }
                            }}>
                                <CreateRoundedIcon />
                            </Link>
                        ) : ''
                    }
                </div>
                <div className="mx-auto mt-4" style={{width: 300}}>
                    {
                        (props.location.state.custom) ? (<p style={{textAlign: "center"}}>{props.location.state.description}</p>) : ' '
                    }
                </div>
                {
                    (Movies.length === 0)
                        ? (
                            <div className="mx-auto" style={{width: 1000, marginTop: 125}}>
                                <img src={`${Empty}`} alt="EmptyImage" />
                            </div>
                        ) : (
                            
                            <MoviesContainer 
                                lists={props.location.state.lists}
                                warningToast={props.warningToast}
                                movies={Movies} 
                                currentUser={props.currentUser} 
                                type={true} 
                                successToast={props.successToast} 
                                deleteToast={props.deleteToast} 
                                auth={true}
                            />
                        )
                }
                
            </div>
    );
}

export default ListContent;
