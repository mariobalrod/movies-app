import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = (props) => {
    return (
        <div className="container1">
            <div className="container2">
                {      
                    props.movies.map((movie, i) => {
                        return (
                            (movie.poster_path) 

                            ? 
                                <MovieCard 
                                    key={i} 
                                    image={movie.poster_path} 
                                    id={movie.id} 
                                    currentUser={props.currentUser}
                                    type={props.type}
                                /> 
                            : 
                                ''

                        )
                    })
                }
            </div>
        </div>
    );
}

export default MoviesContainer;