import React, {useState, useEffect} from 'react';

import { getCountMoviesByType } from '../helpers/moviesActions';

import ProfileCard from '../components/users/ProfileCard';

const Profile = (props) => {

    const [vistas, setVistas] = useState(0);
    const [pendientes, setPendientes] = useState(0);
    const [favoritas, setFavoritas] = useState(0);

    useEffect(() => {
        const userId = props.currentUser._id;
        setCounts(userId);
    }, [])

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
                <ProfileCard currentUser={props.currentUser} vistas={vistas} pendientes={pendientes} favoritas={favoritas}/>  
            </div>
        </div>
    );

}

export default Profile;
