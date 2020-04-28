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
            <h1>Overview</h1>
            <MovieOverviewCard 
                id={props.match.params.id} 
                poster_path={movie.path} 
                title={movie.title} 
                overview={movie.overview} 
                vote_average={movie.vote_average} 
                vote_count={movie.vote_count} 
                homepage={movie.homepage} 
                popularity={movie.popularity}
            />
        </div>
    );

}

export default MovieDetails;