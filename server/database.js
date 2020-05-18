const mongoose = require('mongoose');

require('dotenv').config();

const URI = process.env.MONGODB_URI || 'mongodb://localhost/movies-app';

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}) 
    .then(db => console.log('DB connected!'))
    .catch(err => console.error(err));

module.exports = mongoose;