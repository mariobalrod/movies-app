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
                                    addMovie(movie_id, user_id, 'pendiente')
                                        .then(data => {
                                            if(data.success) {
                                                props.successToast('Añadida a Pendiente')                                                
                                            } else {
                                                props.warningToast(data.msg)
                                            }
                                        })
                                        .catch(err => console.log(err))
                                }}>
                                    <VisibilityIcon style={{ fontSize: 15 }} className="linkList"/>
                                </Nav.Link>
                            </Nav.Item >

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'vista')
                                        .then(data => {
                                            if(data.success) {
                                                props.successToast('Añadida a Vista')
                                            } else {
                                                props.warningToast(data.msg)
                                            }
                                        })
                                        .catch(err => console.log(err))
                                }}>
                                    <VisibilityOffIcon style={{ fontSize: 15 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'favorita')
                                        .then(data => {
                                            if(data.success) {
                                                props.successToast('Añadida a Favorita')
                                            } else {
                                                props.warningToast(data.msg)
                                            }
                                        })
                                        .catch(err => console.log(err))
                                }}>
                                    <StarIcon style={{ fontSize: 15 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    if(props.overview){
                                        deleteMovie(props.mongoId);
                                        history.goBack();
                                        props.deleteToast();
                                    }else {
                                        deleteMovie(props.mongoId);
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
                                    addMovie(movie_id, user_id, 'pendiente')
                                        .then(data => {
                                            if(data.success) {
                                                props.successToast('Añadida a Pendiente')                                                
                                            } else {
                                                props.warningToast(data.msg)
                                            }
                                        })
                                        .catch(err => console.log(err))
                                }}>
                                    <VisibilityIcon style={{ fontSize: 20 }} className="linkList"/>
                                </Nav.Link>
                            </Nav.Item >

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'vista')
                                        .then(data => {
                                            if(data.success) {
                                                props.successToast('Añadida a Vista')
                                            } else {
                                                props.warningToast(data.msg)
                                            }
                                        })
                                        .catch(err => console.log(err))
                                }}>
                                    <VisibilityOffIcon style={{ fontSize: 20 }} className="linkList" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    addMovie(movie_id, user_id, 'favorita')
                                        .then(data => {
                                            if(data.success) {
                                                props.successToast('Añadida a Favorita')                                                
                                            } else {
                                                props.warningToast(data.msg)
                                            }
                                        })
                                        .catch(err => console.log(err))
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

