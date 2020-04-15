const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

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
//app.use(require('./routes/index.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/movies', require('./routes/movies.routes'));

/* // TODO: Para Despliegue
if (process.env.NODE_ENV === "production"){
    // STATIC FILE
    //app.use(express.static(path.join(__dirname, '../client/public')));
    app.use(express.static("client/build"));
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
    });
} */

module.exports = app;