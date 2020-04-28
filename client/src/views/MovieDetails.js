import React from 'react';

import MovieOverviewCard from '../components/movies/MovieOverviewCard';

const MovieDetails = (props) => {

    return ( 
        <div>
            <h1>Overview</h1>
            <MovieOverviewCard id={props.match.params.id}/>
            <MovieOverviewCard />
            <MovieOverviewCard />
        </div>
    );

}

export default MovieDetails;