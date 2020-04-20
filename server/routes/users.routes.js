const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const signToken = require('../config/serverAuth').signToken;
const verifyToken = require('../config/serverAuth').verifyToken;

// Loading input validation
const validateRegisterInput = require("../validator/register");
const validateLoginInput = require("../validator/login");

const User = require('../models/User');

// =============================================================================================

// @route POST /api/users/login
// @desc  Login an User
// @acces PUBLIC
// @return LoginUser and JWT Token

router.post('/login', async (req, res) => {

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

});

// =============================================================================================

// @route POST /api/users/register
// @desc  Register new User
// @acces PUBLIC

router.post('/register', async (req, res) => {

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

});

// =============================================================================================

//Para que  usar Modificar / Obtener / Eliminar tengas que estar verificado
router.use(verifyToken);

// Modificar Usuario
router.put('/:id', async (req, res) => {
    const { username, email, password, newPassword, newConfirmPassword } = req.body;
    const errors = [];

    const user =  await User.findById(req.params.id);
    // * Credenciales Actuales
    const usernameActual = await user.get('username');
    const emailActual = await user.get('email');

    //! Restricciones para Password
    if(user.matchPassword(password)) {
        errors.push({text: 'Password no coincide con la actual!'});
    }

    if(newPassword!=newConfirmPassword) {
        errors.push({text: 'Passwords nuevas no coinciden!'});
    }

    if(newPassword.length < 5){
        errors.push({text: 'Passwords nuevas demasiado breves!'});
    }

    //! Restricciones para email y username
    if(usernameActual!=username) {
        const usernameExistente = await User.findOne({username: username});
        if(usernameExistente) {
            errors.push({text: 'Username ya en uso!'});
        }
    }

    if(emailActual!=email) {
        const emailExistente = await User.findOne({email: email});
        if(emailExistente) {
            errors.push({text: 'Email ya en uso!'});
        }
    }

    //? Estudiamos si podemos modificarlo o no
    if(errors.length > 0) {
        res.json(errors);
    } else {
        //Antes de guardar encrypt pass llamando al metodo creado en User
        newPasswordEncrypted = await user.encryptPassword(newPassword);
        await User.findByIdAndUpdate(req.params.id, { email, username, newPasswordEncrypted});
        res.json(await User.findById(req.params.id));
    }
});

// =============================================================================================

// @route GET /api
// @desc obtener usuarios
// @access PRIVATE
// @return all users (json)
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// @route GET /api/:id
// @desc obtener un usuario
// @access PRIVATE
// @return usuario por id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// @route DELETE /api/:id
// @desc delete un usuario
// @access PRIVATE
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('Deleted!');
});

// =============================================================================================

module.exports = router;