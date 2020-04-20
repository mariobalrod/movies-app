const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput (data) {

    const errors = [];

    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.confirmPassword) ? data.confirmPassword : "";

    //! Username checks
    if (Validator.isEmpty(data.username)) {
        errors.push({msg: "Username field is required"});
    }

    //! Email checks
    if (Validator.isEmpty(data.email)) {
        errors.push({msg: "Email field is required"});
    } else if (!Validator.isEmail(data.email)) {
        errors.push({msg: "Email no valido"});
    }

    //! Password checks
    if (Validator.isEmpty(data.password)) {
        errors.push({msg: "Password field is required"});
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.push({msg: "Confirm password field is required"});
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.push({msg: "Password must be at least 6 characters"});
    }

    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.push({msg: "Passwords not match"});
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};