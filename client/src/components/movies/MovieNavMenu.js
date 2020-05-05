import React from 'react';
import {Nav} from 'react-bootstrap'

import { addMovie, deleteMovie } from '../../helpers/moviesActions';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import StarIcon from '@material-ui/icons/Star';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const MovieNavMenu = (props) => {

    const movie_id = props.movie_id;
    const user_id = props.user_id;

    return (
        <div style={{width: 250}}>
                {
                    (props.owner)
                    ? (
                        <Nav className="mr-4">
                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'pendiente');
                                    props.storeToastMessage('Pendiente')
                                }}>
                                    <VisibilityIcon style={{ fontSize: 15 }} className="linkList"/>
                                </Nav.Link>
                            </Nav.Item >

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'vista')
                                    props.storeToastMessage('Vista')
                                }}>
                                    <VisibilityOffIcon style={{ fontSize: 15 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'favorita')
                                    props.storeToastMessage('Favorita')
                                }}>
                                    <StarIcon style={{ fontSize: 15 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => 
                                    deleteMovie(movie_id, user_id)
                                }>
                                    <DeleteForeverIcon className="delete" style={{ fontSize: 15 }} />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    ) : (

                        <Nav className="navigation ml-3">

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'pendiente');
                                    props.storeToastMessage('Pendiente')
                                }}>
                                    <VisibilityIcon style={{ fontSize: 20 }} className="linkList"/>
                                </Nav.Link>
                            </Nav.Item >

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'vista')
                                    props.storeToastMessage('Vista')
                                }}>
                                    <VisibilityOffIcon style={{ fontSize: 20 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'favorita')
                                    props.storeToastMessage('Favorita')
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

