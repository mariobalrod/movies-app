const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// TODO: SETTINGS
app.set('port', 3000);

// TODO: MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

// TODO: ROUTES
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/movies.routes'));

// TODO: STATIC FILES
app.use(express.static(path.join(__dirname, '../client/public')));


module.exports = app;