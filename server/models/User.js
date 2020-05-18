const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    description: {type: String, trim: true, default: 'Edit your profile to add a description.'},
    img: { data: Buffer, contentType: String},
    date: {type: Date, default: Date.now}
});

module.exports = model('User', UserSchema);