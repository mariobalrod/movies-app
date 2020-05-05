import React from 'react';
import {Link} from 'react-router-dom';

import ZoomInIcon from '@material-ui/icons/ZoomIn';

import MovieNavMenu from './MovieNavMenu';

const MovieCard = (props) => {
    return (
        <div className="cardCustom">
            <div className="cardMovie animated flipInY">
                <MovieNavMenu 
                    movie_id={props.id} 
                    user_id={props.currentUser._id} 
                    owner={props.type}
                    storeToastMessage={props.storeToastMessage}
                />
                <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="portada" />
                <Link to={`/overview/${props.id}`}>
                    <ZoomInIcon style={{ fontSize: 80 }} className="moreInfo"/>
                </Link>
            </div>
            <div className="container" style={{width: 150}}>
                <Link to={`/overview/${props.id}`}>
                    <h6 className="titleMovie">{props.title}</h6>
                </Link>
            </div>
        </div>
    );

}

export default MovieCard;