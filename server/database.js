const mongoose = require('mongoose');

const URI = 'mongodb://localhost/movies-app';

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(db => console.log('DB connected!'))
    .catch(err => console.error(err));

module.exports = mongoose;