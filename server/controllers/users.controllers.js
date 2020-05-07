const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const fs = require('fs');
const signToken = require('../config/serverAuth').signToken;

// Loading input validation
const validateRegisterInput = require("../validator/register");
const validateLoginInput = require("../validator/login");

const User = require('../models/User');

/**
 * Login an User
 * 
 * @param object req
 * @param object res
 * @return LoginUser and JWT Token
 */
async function login(req, res) {

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        res.json(errors);
    } else {
        //Para seguir con el mismo formato de enviar errores -> array de objetos error
        const errors2 = [];
    
        const { username, password } = req.body;
        
        const user = await User.findOne({ username: username });
        //Check username
        if (!user) {
            errors2.push({ msg: "User not found" });
            res.json(errors2);
        } else {
            //Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User matched
                        // Generate JWT Token
                        const token = signToken(user)
                        res.json({success: true, message: "Token attached.", token})
                    } else {
                        errors2.push({ msg: "Password Incorrect" });
                        res.json(errors2);
                    }
                });
        }
    }

}

// @route POST /api/users/register
// @desc  Register new User
// @acces PUBLIC
async function registerUser(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);
    
    // Check validation
    if (!isValid) {

        res.json(errors);

    } else {

        //Para seguir con el mismo formato de enviar errores -> array de objetos error
        const errors2 = [];

        const emailExistente = await User.findOne({email: req.body.email});
        const usernameExistente = await User.findOne({username: req.body.username});
    
        if (emailExistente) {
            errors2.push({ msg: "Email already exists" });
            res.json(errors2);

        } else if (usernameExistente) {
            errors2.push({ msg: "Username already exists" });
            res.json(errors2);
    
        } else {
    
            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            });
    
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            // once user is created, generate a token to "log in":
                            const token = signToken(user);
                            res.json({success: true, message: "User created. Token attached.", token})
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    }

}

// @route PUT /api/users/change/password/:id
// @desc modificar contraseña
// @return messages on json
async function updatePassword(req, res) {
    const user = await User.findById(req.params.id);
    const { password, newPassword, newConfirmPassword } = req.body;
    const errors = [];
    //Check passwords
    bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
                if (newPassword != newConfirmPassword) {
                    errors.push({ msg: "Nuevas contraseñas no coinciden" })
                    res.json(errors);
                } else if (newPassword.length < 6) {
                    errors.push({ msg: "Contraseñas demasiado breves" })
                    res.json(errors);
                } else {
                    // Todo: Ruta en la que todo es correcto y se puede modificar
                    // Crypt New Password
                    bcrypt.genSalt(10, (err, salt) => {
                        if (err) throw err;
                        bcrypt.hash(newPassword, salt, async (err, hash) => {
                            if (err) throw err;
                            const passwordToSave = hash;
                            await User.findByIdAndUpdate(req.params.id, {passwordToSave})
                            res.json({success: true, message: "Contraseña Cambiada"});
                        });
                    });
                }
            } else {
                errors.push({ msg: "Contraseña Incorrecta" })
                res.json(errors);
            }
        });
}

// @route GET /api
// @desc obtener usuarios
// @access PRIVATE
// @return all users (json)
async function getAllUsers(req, res) {
    const users = await User.find();
    res.json(users);
}

// @route GET /api/:id
// @desc obtener un usuario
// @access PRIVATE
// @return usuario por id
async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    res.json(user);
}

// @route DELETE /api/:id
// @desc delete un usuario
// @access PRIVATE
async function deleteUser(req, res) {
    await User.findByIdAndDelete(req.params.id);
    res.send('Deleted!');
}

// @route PUT /api/users/upload
// @desc upload an image
// @access PRIVATE
async function uploadImage(req, res) {
    const user = await User.findById(req.params.id);
    user.img.data = fs.readFileSync(req.files.userPhoyo.path);
    user.img.contentType = 'image/png';
    await User.findByIdAndUpdate(req.params.id, user);
}


module.exports = {
    login,
    registerUser,
    updatePassword,
    getAllUsers,
    getUserById,
    deleteUser,
    uploadImage
}