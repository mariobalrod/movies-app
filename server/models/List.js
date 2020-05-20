const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ListSchema = new Schema({
    name: {type: String, required: true},
    user_id: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = model('List', ListSchema);