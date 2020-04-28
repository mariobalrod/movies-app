import React from 'react';
import {Link} from 'react-router-dom';

import ZoomInIcon from '@material-ui/icons/ZoomIn';

import MovieNavMenu from './MovieNavMenu';

const MovieCard = (props) => {
    return (
        <div className="cardMovie animated flipInY">
            <MovieNavMenu movie_id={props.id} user_id={props.currentUser._id} owner={props.type}/>
            <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="portada" />
            <Link to={`/overview/${props.id}`} onClick={() => console.log(' overview')}><ZoomInIcon style={{ fontSize: 80 }} className="moreInfo"/></Link>
        </div>
    );

}

export default MovieCard;