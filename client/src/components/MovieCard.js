import React from 'react'

var MoviesCard = (props) => {

    return (
        <div className="cardMovie animated flipInY">
            <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="portada"/>
        </div>
    )

    /*(props.image != null && props.adult == false) ? <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image"/> : document.removeChild('props.id')*/
}

export default MoviesCard;