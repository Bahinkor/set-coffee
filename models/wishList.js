const mongoose = require("mongoose");
require("./product");
require("./user");

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true
    }
}, {timestamps: true});

const model = mongoose.models.wishList || mongoose.model("wishList", schema);

export default model;