const mongoose = require("mongoose");
require("@@/models/product");

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    body: {
        type: String,
        minLength: 1,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        immutable: false
    },
    productID: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }
}, {timestamps: true});

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

export default model;