import axios from 'axios';

// Todo: Actions for moovies of my API routes

const createList = async function(name, description, user_id) {
    const response = await axios({
        method: 'POST',
        url: '/api/lists/create',
        data: {name, description, user_id}
    })
    // Messages
    const data = response.data;
    return data;
}

const deleteList = async function(id) {
    await axios({
        method: 'DELETE',
        url: `/api/lists/${id}`
    })
    window.location.reload(true);
}

const getLists = async function(user) {
    const lists = await axios.get(`/api/lists/${user}`)
    return lists;
}

const getCountList = async function(user) {
    const count = await axios.get(`/api/lists/count/${user}`)
    const data = count.data;
    return data;
}

const updateList = async function(name, description, user_id, id) {
    await axios({
        method: 'POST',
        url: `api/lists/${id}`,
        data: { name, description, user_id }
    });
}

const getCredentials = async function(user) {
    const list = await axios.get(`api/lists/${user_id}`)
    const name = list.data.name;
    const description = list.data.description;
    return {name, description};
}

module.exports = {
    createList,
    deleteList,
    getLists,
    getCountList,
    updateList,
    getCredentials
}