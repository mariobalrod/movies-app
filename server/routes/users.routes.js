const express = require('express');
const router = express.Router();

const verifyToken = require('../config/serverAuth').verifyToken;
const {
    login, 
    registerUser, 
    getUserById, 
    getAllUsers, 
    deleteUser,
    updatePassword, 
    updateDescription,
    getDescription
} = require('../controllers/users.controllers');

router.post('/login', login);
router.post('/register', registerUser);
router.post('/description/:id', updateDescription);
router.get('/description/:id', getDescription)
router.put('/password/:id', verifyToken, updatePassword);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;