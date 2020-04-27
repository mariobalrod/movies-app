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
            <Nav className="navigation">

                <Nav.Item>
                    <Nav.Link href="#" onClick={() => addMovie(movie_id, user_id, 'pendiente')}>
                        <VisibilityIcon style={{ fontSize: 20 }} className="linkList"/>
                    </Nav.Link>
                </Nav.Item >

                <Nav.Item>
                    <Nav.Link href="#" onClick={() => addMovie(movie_id, user_id, 'vista')} >
                        <VisibilityOffIcon style={{ fontSize: 20 }} className="linkList" />
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="#" onClick={() => addMovie(movie_id, user_id, 'favorita')} >
                        <StarIcon style={{ fontSize: 20 }} className="linkList" />
                    </Nav.Link>
                </Nav.Item>
                {
                    (props.owner)
                    ? (
                        <Nav.Item>
                            <Nav.Link href="#" onClick={() => deleteMovie(movie_id, user_id)} >
                                <DeleteForeverIcon className="delete" style={{ fontSize: 20 }} />
                            </Nav.Link>
                        </Nav.Item>
                    ) : ''
                }
                

            </Nav>
        </div>
    );
}

export default MovieNavMenu;

