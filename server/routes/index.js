const express = require('express');
const router = express.Router();

const users = require('./users.routes');
const movies = require('./movies.routes');
const lists = require('./lists.routes');

router.use('/users', users);
router.use('/movies', movies);
router.use('/lists', lists);

module.exports = router;
