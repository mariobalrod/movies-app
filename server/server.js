const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

// TODO: Inicializando variable APP
const app = express();

// Para importar la base de datos creada y conectada en el fichero database.js
require('./database');

// TODO: SETTINGS
app.set('port', process.env.PORT || 5000);

// TODO: MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// TODO: ROUTES
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/movies', require('./routes/movies.routes'));

module.exports = app;