const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Obtener Un usuario por id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// Crear Usuario
router.post('/', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    const errors = [];

    //! Restricciones para contraseñas
    if(password!=confirmPassword){
        errors.push({text: 'Passwords no coinciden!'});
    }

    if(password.length < 5){
        errors.push({text: 'Passwords demasiado breve!'});
    }

    //! Restricciones para Usuario y Email
    const emailExistente = await User.findOne({email: email});
    const usernameExistente = await User.findOne({username: username});
    if(emailExistente) {
        errors.push({text: 'Email ya en uso!'});
    }
    
    if(usernameExistente) {
        errors.push({text: 'Username ya en uso!'});
    }

    //? Vemos si podemos registrarlo o no
    if(errors.length > 0) {
        res.json({hay: true, errors: errors});
    } else {
        const newUser = new User({ email, username, password });
        //Antes de guardar encrypt pass llamando al metodo creado en User
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        res.json({hay: false, user: newUser});
    }    
});

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

// Eliminar Usuario
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('Deleted!');
});

module.exports = router;