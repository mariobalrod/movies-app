const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MovieSchema = new Schema({
    movie_id: {type: String, required: true},
    user_id: {type: String, required: true},
    type: {type: String, required: true}
});

module.exports = model('Movie', MovieSchema);