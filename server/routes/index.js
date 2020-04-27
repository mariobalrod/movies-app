const express = require('express');
const router = express.Router();

const users = require('./users.routes');
const movies = require('./movies.routes');

router.use('/users', users);
router.use('/movies', movies);

module.exports = router;
