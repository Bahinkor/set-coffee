const mongoose = require("mongoose");
require("@@/models/comment");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    suitableFor: {
        type: String,
        required: true
    },
    smell: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 5,
        max: 5,
        min: 1
    },
    tags: {
        type: [String]
    },
    comments: {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Comment"
            }
        ]
    }
}, {timestamps: true});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;