const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    username: {
        type: "string",
    },
    body: {
        type: "string",
        trim: true,
        min: 1
    },
    email: {
        type: "email",
    },
    score: {
        type: "number",
        min: 1,
        max: 5,
        optional: true
    },
    productID: {
        type: "string",
    }
};

const check = v.compile(schema);

export default check;