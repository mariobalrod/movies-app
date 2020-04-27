import React from 'react';
import {Nav} from 'react-bootstrap'
import axios from 'axios';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import StarIcon from '@material-ui/icons/Star';

const MovieNavMenu = (props) => {
    return (
        <div>
            <Nav className="navigation">
                <Nav.Item>
                    <Nav.Link href="#" onClick={() => {
                        axios({
                            method: 'POST',
                            url: '/api/movies/add',
                            data: {
                                movie_id: props.movie_id,
                                user_id: props.user_id,
                                type: 'pendiente'
                            }
                        })
                            .catch(err => console.log(err))
                    }}>
                        <VisibilityIcon />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" onClick={() => {
                        axios({
                            method: 'POST',
                            url: '/api/movies/add',
                            data: {
                                movie_id: props.movie_id,
                                user_id: props.user_id,
                                type: 'vista'
                            }
                        })
                            .catch(err => console.log(err))
                    }} >
                        <VisibilityOffIcon />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#" onClick={() => {
                        axios({
                            method: 'POST',
                            url: '/api/movies/add',
                            data: {
                                movie_id: props.movie_id,
                                user_id: props.user_id,
                                type: 'favorita'
                            }
                        })
                            .catch(err => console.log(err))
                    }} >
                        <StarIcon />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default MovieNavMenu;

