const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    name: {
        type: "string",
        min: 1
    },
    price: {
        type: "number",
        min: 0
    },
    shortDescription: {
        type: "string",
    },
    longDescription: {
        type: "string",
    },
    weight: {
        type: "number",
        min: 0
    },
    suitableFor: {
        type: "string",
    },
    smell: {
        type: "string",
    },
    tags: {
        type: "array",
    }
};

const check = v.compile(schema);

export default check;