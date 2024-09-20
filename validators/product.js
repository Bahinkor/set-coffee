const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    name: {
        type: "string",
    },
    price: {
        type: "number",
    },
    shortDescription: {
        type: "string",
    },
    longDescription: {
        type: "string",
    },
    weight: {
        type: "number",
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