import React, {useState, useEffect} from 'react';

import { fetchMovieById } from '../helpers/tmdbConfig';

import MovieOverviewCard from '../components/movies/MovieOverviewCard';

const MovieDetails = (props) => {

    const [movie, setMovie] = useState({});

    useEffect(() => {
        const id_movie = props.match.params.id;
        fetchMovie(id_movie);
    }, [])

    const fetchMovie = async (id_movie) => {
        const movieF = await fetchMovieById(id_movie);
        setMovie(movieF);
    }

    return ( 
        <div>
            <MovieOverviewCard 
                user={props.currentUser._id}
                id={props.match.params.id} 
                poster_path={movie.poster_path} 
                title={movie.original_title} 
                overview={movie.overview} 
                vote_average={movie.vote_average} 
                vote_count={movie.vote_count} 
                homepage={movie.homepage} 
                popularity={movie.popularity}
                storeToastMessage={props.storeToastMessage} 
            />
        </div>
    );

}

export default MovieDetails;