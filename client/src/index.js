import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './styles/main.css';
import './styles/profileCard.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

ReactDOM.render(
    <Router><App/></Router>,
    document.getElementById('root')
);

