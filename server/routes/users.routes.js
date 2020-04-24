const express = require('express');
const router = express.Router();

const verifyToken = require('../config/serverAuth').verifyToken;
const {
    login, registerUser, updateUser, getUserById, getAllUsers, deleteUser
} = require('../controllers/users.controllers');

router.post('/login', login);
router.post('/register', registerUser);
//Para que  usar Modificar / Obtener / Eliminar tengas que estar verificado
router.use(verifyToken);
router.put('/:id', updateUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

module.exports = router;