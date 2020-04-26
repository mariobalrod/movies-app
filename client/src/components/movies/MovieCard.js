import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import StarIcon from '@material-ui/icons/Star';
import ZoomInIcon from '@material-ui/icons/ZoomIn';


const MovieCard = (props) => {
    
    return (
        <div className="cardMovie animated flipInY">
            <div>
                <Nav className="navigation">
                    <Nav.Item>
                        <Nav.Link href="#" onClick={() => {
                                axios({
                                    method: 'POST',
                                    url: '/api/movies/add',
                                    data: {
                                        movie_id: props.id,
                                        user_id: props.currentUser._id,
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
                                        movie_id: props.id,
                                        user_id: props.currentUser._id,
                                        type: 'vista'
                                    }
                                })
                                    .catch(err => console.log(err))
                            }} >
                            <VisibilityOffIcon/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#" onClick={() => {
                                axios({
                                    method: 'POST',
                                    url: '/api/movies/add',
                                    data: {
                                        movie_id: props.id,
                                        user_id: props.currentUser._id,
                                        type: 'favorita'
                                    }
                                })
                                    .catch(err => console.log(err))
                            }} >
                            <StarIcon/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="portada" />
            <Link to="#" onClick={() => console.log(' overview')}><ZoomInIcon style={{ fontSize: 80 }} className="moreInfo"/></Link>
        </div>
    );

}

export default MovieCard;