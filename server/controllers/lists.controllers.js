const List = require('../models/List');

async function getAllLists(req, res) {
    const lists = await List.find();
    res.json(lists)
}

async function getListById(req, res) {
    const list = await List.findById(req.params.id);
    res.json(list)
}

async function getLists(req, res) {
    const user_id = req.params.user;
    const lists = await List.find({user_id});
    res.json(lists);
}

async function createList(req, res) {
    const {name, description, user_id} = req.body;
    const list = await List.findOne({name, user_id});
    if(list){
        res.json({succes: false, msg: 'List name already exist'});
    }else if(!name){
        res.json({succes: false, msg: 'Name Required'});
    }else if(!description){
        res.json({succes: false, msg: 'Description Required'});
    } else {
        const newList = new List({
            name: name, 
            description: description, 
            user_id: user_id
        });
        await newList.save();
        res.json({succes: true, msg: 'Lista Creada'});
    }
}

async function updateList(req, res) {
    const {name, description, user_id} = req.body;
    const list = await List.findOne({name, user_id});
    if(list){
        res.json({succes: false, msg: 'List name already exist'});
    }else if(!name){
        res.json({succes: false, msg: 'Name Required'});
    }else if(!description){
        res.json({succes: false, msg: 'Description Required'});
    } else {
        await List.findByIdAndUpdate(req.params.id, {name, description, user_id});
        res.json({succes: true, msg: 'Lista Actualizada'});
    }
}

async function deleteListById(req, res) {
    await List.findByIdAndDelete(req.params.id);
    res.json({success: true, msg: "Lista Eliminada"});
}

async function getCountList(req, res) {
    const user_id = req.params.user;
    const count = await List.countDocuments({user_id: user_id});
    res.json(count);
}


module.exports = {
    getAllLists,
    getListById,
    createList,
    updateList,
    deleteListById,
    getCountList,
    getLists
}