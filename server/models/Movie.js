const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MovieSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    director: {type: String, required: false},
    puntuacion: {type: Number, required: true},
    imgUrl: {type: String},
    dateAdded: {type: Date, default: Date.now}
});

module.exports = model('Movie', MovieSchema);