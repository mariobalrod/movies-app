import React from 'react';

const MovieOverwiewCard = (props) => {
    return(
        <div>
            <h1>Card Overview</h1>
            <h4>{props.id}</h4>
        </div>
    );
}

export default MovieOverwiewCard;