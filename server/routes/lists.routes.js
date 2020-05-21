const express = require('express');
const router = express.Router();

const {
    getAllLists,
    getListById,
    createList,
    updateList,
    deleteListById,
    getCountList,
    getLists
} = require('../controllers/lists.controllers');

router.get('/', getAllLists);
router.get('/:id', getListById);
router.get('/own/:user', getLists);
router.post('/create', createList);
router.post('/update/:id', updateList);
router.delete('/:id', deleteListById);
router.get('/count/:user', getCountList);

module.exports = router;