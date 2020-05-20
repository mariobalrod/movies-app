import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = (props) => {
    return (
        <div className="container1">
            
            <div className="container2">
                {                       
                    // List Content (own)
                    (props.type) 
                        ? (
                            props.movies.map((data, i) => {
                                return (
                                    (data.movie.poster_path) 
                                    
                                    ? 
                                        <MovieCard 
                                            key={i} 
                                            mongoId={data.mongoId}
                                            image={data.movie.poster_path} 
                                            id={data.movie.id} 
                                            currentUser={props.currentUser}
                                            type={props.type}
                                            title={data.movie.original_title} 
                                            successToast={props.successToast}
                                            deleteToast={props.deleteToast} 
                                            warningToast={props.warningToast}
                                            auth={props.auth}
                                        /> 
                                    : 
                                        ''
        
                                )
                            })
                        ) : (
                            //Home Page
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
                                            title={movie.original_title} 
                                            successToast={props.successToast}
                                            deleteToast={props.deleteToast} 
                                            warningToast={props.warningToast}
                                            auth={props.auth}
                                        /> 
                                    : 
                                        ''
        
                                )
                            })
                        )
                }
            </div>
        </div>
    );
}

export default MoviesContainer;