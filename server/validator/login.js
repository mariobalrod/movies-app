const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput (data) {

    const errors = [];

    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //! Username checks
    if (Validator.isEmpty(data.username)) {
        errors.push({msg: "Username field is required"});
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.push({msg: "Password field is required"});
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};