const app = require('./server');

// Todo: Starting Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});