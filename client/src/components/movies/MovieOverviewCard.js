import React from 'react';

const MovieOverwiewCard = (props) => {
    return(
        <div>
            <h1>Card Overview</h1>
            <h4>{props.id}</h4>
            <h4>{props.poster_path}</h4>
            <h4>{props.title}</h4>
            <h4>{props.overview}</h4>
            <h4>{props.vote_average}</h4>
            <h4>{props.homepage}</h4>
            <h4>{props.popularity}</h4>
            <h4>{props.vote_count}</h4>
        </div>
    );
}

export default MovieOverwiewCard;