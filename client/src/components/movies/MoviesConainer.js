import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = (props) => {
    return (
        <div className="container1">
            <div className="container2">
                {     
                    props.movies.map((movie, i) => {
                        console.log('LLEGA')
                        return (
                            <MovieCard key={i} image={movie.poster_path} adult={movie.adult} id={movie.id} currentUser={props.currentUser} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MoviesContainer;