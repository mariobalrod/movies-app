import React from 'react';
import TmdbLogo from '../../svg/tmdb.svg';

const Footer = () => {
    return (
        <footer className="bg-dark text-center p-2 mt-5" style={{padding: 0, color: 'white'}}>
            <p className="h6" >&copy;2020 Mario Ballestero</p>
            <br/>
            <img style={{width: 80}} src={`${TmdbLogo}`} alt="logo" />
        </footer>
    );
}

export default Footer;