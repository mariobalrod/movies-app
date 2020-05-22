const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MovieSchema = new Schema({
    user_id: {type: String, required: true},
    movie_id: {type: String, required: true},
    type: {type: String, required: true}
});

module.exports = model('Movie', MovieSchema);