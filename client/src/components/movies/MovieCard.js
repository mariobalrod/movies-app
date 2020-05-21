import React from 'react';
import {Link} from 'react-router-dom';

import ZoomInIcon from '@material-ui/icons/ZoomIn';

import MovieNavMenu from './MovieNavMenu';

const MovieCard = (props) => {
    return (
        <div className="cardCustom">
                {
                    (props.auth)
                        ? (
                            <div>
                                <div className="cardMovie animated flipInY">
                                    <MovieNavMenu 
                                        lists={props.lists}
                                        mongoId={props.mongoId}
                                        movie_id={props.id} 
                                        user_id={props.currentUser._id} 
                                        owner={props.type}
                                        successToast={props.successToast}
                                        deleteToast={props.deleteToast} 
                                        warningToast={props.warningToast}
                                        overview={false}
                                    />
                                    <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="portada" />
                                    <Link 
                                        to={{
                                            pathname: `/overview/${props.id}`,
                                            state: {
                                                own: props.type,
                                                mongoId: props.mongoId
                                            }
                                        }}
                                    >
                                        <ZoomInIcon style={{ fontSize: 80 }} className="moreInfo"/>
                                    </Link>
                                </div>
                                <div className="container" style={{width: 150}}>
                                    <Link 
                                        to={{
                                            pathname: `/overview/${props.id}`,
                                            state: {
                                                own: props.type,
                                                mongoId: props.mongoId
                                            }
                                        }}
                                    >
                                        <h6 className="titleMovie">{props.title}</h6>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="cardMovie animated flipInY">
                                    <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="portada" />
                                </div>
                                <div className="container" style={{width: 150}}>
                                    <h6 className="titleMovie">{props.title}</h6>
                                </div>
                            </div>
                        )
                }
                
        </div>
    );

}

export default MovieCard;