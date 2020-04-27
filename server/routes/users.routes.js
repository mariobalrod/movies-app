const express = require('express');
const router = express.Router();

const verifyToken = require('../config/serverAuth').verifyToken;
const {
    login, 
    registerUser, 
    updateUser, 
    getUserById, 
    getAllUsers, 
    deleteUser
} = require('../controllers/users.controllers');

router.post('/login', login);
router.post('/register', registerUser);
router.put('/:id', verifyToken, updateUser);
router.get('/', verifyToken, getAllUsers);
router.get('/:id', verifyToken, getUserById);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;