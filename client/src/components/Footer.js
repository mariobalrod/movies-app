import React from 'react';
import { colors, withTheme } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className="bg-dark text-center p-2" style={{padding: 0, color: 'white'}}>
            <p className="h6" >&copy;2020 Mario Ballestero</p>
        </footer>
    );
}

export default Footer;