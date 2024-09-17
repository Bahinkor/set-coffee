const {Schema, model: mongooseModel, models} = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
        minlength: 1,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        minlength: 11,
        required: true
    },
    password: {
        type: String,
        required: false,
        minlength: 4,
    },
    role: {
        type: String,
        default: "USER"
    },
    refreshToken: String
});

const model = models.User || mongooseModel("User", schema);

export default model;