const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    description: {type: String, require: false},
    imgUrl: {type: String},
    date: {type: Date, default: Date.now}
});

// Todo: Encrypt Pass and save
UserSchema.methods.encryptPassword = async (password) => {
    const saltGenerated = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, saltGenerated);
};

// Todo: Para comprobar passwords en el login
UserSchema.methods.matchPassword = async (password) => {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);