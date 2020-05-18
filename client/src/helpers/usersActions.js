const axios = require('axios');

const changeUserDescription = async function(description, user_id) {
    await axios({
        method: 'POST',
        url: `api/users/description/${user_id}`,
        data: { description }
    });
}

const fetchDescription = async function(user_id) {
    const user = await axios.get(`api/users/description/${user_id}`)
    const description = user.data.description;
    return description;
}

module.exports = {
    changeUserDescription,
    fetchDescription
}