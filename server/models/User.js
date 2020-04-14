const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    description: {type: String, require: false},
    imgUrl: {type: String},
    date: {type: Date, default: Date.now}
});

module.exports = model('User', UserSchema);