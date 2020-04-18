const express = require('express');
const router = express.Router();

const User = require('../models/User');

// =============================================================================================

// @route POST /api/users/register
// @desc  Register new User
// @acces PUBLIC
// @return { type: ( true || false ), msg: 'text' }
router.post('/register', async (req, res) => {

    const { username, email, password, confirmPassword } = req.body;

    const messages = [];
    
    //! Restricciones para contraseñas
    if(password!=confirmPassword) messages.push({type: false, msg: 'Passwords no coinciden'});
    if(password.length < 5) messages.push({type: false, msg: 'Passwords demasiado breve'});

    //! Restricciones para Usuario y Email
    const emailExistente = await User.findOne({email: email});
    const usernameExistente = await User.findOne({username: username});
    if(emailExistente) messages.push({type: false, msg: 'Email ya en uso'});
    if(usernameExistente) messages.push({type: false, msg: 'Username ya en uso'});

    // * No hay errores
    if(messages.length==0) {
        //? Tras cumplir condiciones lo registramos en la base de datos
        const newUser = new User({ email, username, password });
        //Antes de guardar encrypt pass llamando al metodo creado en User
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        messages.push({type: true, msg: 'Registrado con éxito'});
    }

    res.json(messages);
});

// =============================================================================================


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

// Eliminar Usuario
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('Deleted!');
});

// =============================================================================================

module.exports = router;