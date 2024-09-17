const {Schema, model, models} = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "USER"
    },
    refreshToken: String
});

const userModel = models.User || model("User", userSchema);

export default userModel;