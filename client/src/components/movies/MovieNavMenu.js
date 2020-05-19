import React from 'react';
import {Nav} from 'react-bootstrap'

import { addMovie, deleteMovie } from '../../helpers/moviesActions';

import {useHistory} from 'react-router-dom';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import StarIcon from '@material-ui/icons/Star';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const MovieNavMenu = (props) => {

    let history = useHistory();

    const movie_id = props.movie_id;
    const user_id = props.user_id;

    return (
        <div style={{width: 220}}>
                {
                    (props.owner)
                    ? (
                        <Nav className="navigation mr-3">
                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'pendiente');
                                    window.location.reload(true);
                                    props.successToast('Añadida a Pendiente')
                                }}>
                                    <VisibilityIcon style={{ fontSize: 15 }} className="linkList"/>
                                </Nav.Link>
                            </Nav.Item >

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'vista')
                                    window.location.reload(true);
                                    props.successToast('Añadida a Vista')
                                }}>
                                    <VisibilityOffIcon style={{ fontSize: 15 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'favorita')
                                    window.location.reload(true);
                                    props.successToast('Añadida a Favorita')
                                }}>
                                    <StarIcon style={{ fontSize: 15 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    if(props.overview){
                                        deleteMovie(movie_id, user_id);
                                        history.goBack();
                                        props.deleteToast();
                                    }else {
                                        deleteMovie(movie_id, user_id);
                                        props.deleteToast();
                                    }
                                    
                                }}>
                                    <DeleteForeverIcon className="delete" style={{ fontSize: 15 }} />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    ) : (

                        <Nav className="navigation ml-3">

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'pendiente');
                                    props.successToast('Añadida a Pendiente')
                                }}>
                                    <VisibilityIcon style={{ fontSize: 20 }} className="linkList"/>
                                </Nav.Link>
                            </Nav.Item >

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'vista')
                                    props.successToast('Añadida a Vista')
                                }}>
                                    <VisibilityOffIcon style={{ fontSize: 20 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'favorita')
                                    props.successToast('Añadida a Favorita')
                                }}>
                                    <StarIcon style={{ fontSize: 20 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>
                        
                    )
                }
                

        </div>
    );
}

export default MovieNavMenu;

