import React, {useState, useEffect} from 'react';

import { getCountMoviesByType } from '../helpers/moviesActions';
import {fetchDescription} from '../helpers/usersActions';

import ProfileCard from '../components/users/ProfileCard';

const Profile = (props) => {

    const [vistas, setVistas] = useState(0);
    const [pendientes, setPendientes] = useState(0);
    const [favoritas, setFavoritas] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const userId = props.currentUser._id;
        obtenerDescripcion(userId);
        setCounts(userId);
    }, [props.currentUser._id])

    const obtenerDescripcion = async (userId) => {
        const descriptionF = await fetchDescription(userId);
        setDescription(descriptionF);
    }

    const setCounts = async (userId) => {
        const vistasCount = await getCountMoviesByType('vista', userId);
        const pendientesCount = await getCountMoviesByType('pendiente', userId);
        const favoritasCount = await getCountMoviesByType('favorita', userId);

        setVistas(vistasCount);
        setPendientes(pendientesCount);
        setFavoritas(favoritasCount);
    }
    
    return (
        <div className="mt-5">
            <div>
                <h1 style={{textAlign: "center", marginBottom: 120}}>Your Profile</h1>
            </div>
            <div>
                <ProfileCard 
                    currentUser={props.currentUser} 
                    description={description} 
                    vistas={vistas} 
                    pendientes={pendientes} 
                    favoritas={favoritas} 
                />  
            </div>
        </div>
    );

}

export default Profile;
