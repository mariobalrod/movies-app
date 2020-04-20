import React from 'react';
import Movies from './MovieCard';

const MoviesContainer = (props) => {
    return (
        <div className="container1">
            <div className="container2">
                {
                    props.movies.map((movie, i) => {
                        if(movie.poster_path !== null && movie.adult === false){
                            return (
                                <Movies key={i} image={movie.poster_path} adult={movie.adult}/>
                                /* poster_path -> para obtener la imagen (Codigo API) */
                            )
                        } else {
                            return false;
                        }
                    })
                }
            </div>
        </div>
    );
}

export default MoviesContainer;