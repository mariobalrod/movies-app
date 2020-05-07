const express = require('express');
const router = express.Router();

const verifyToken = require('../config/serverAuth').verifyToken;
const {
    login, 
    registerUser, 
    updatePassword, 
    getUserById, 
    getAllUsers, 
    deleteUser,
    uploadImage
} = require('../controllers/users.controllers');

router.post('/login', login);
router.post('/register', registerUser);
router.put('/upload/:id', verifyToken, uploadImage);
router.put('/change/password/:id', verifyToken, updatePassword);
router.get('/', verifyToken, getAllUsers);
router.get('/:id', verifyToken, getUserById);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;