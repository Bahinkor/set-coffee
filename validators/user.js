const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    name: {
        type: "string",
        trim: true,
        min: 1
    },
    email: {
        type: "email",
        trim: true,
        optional: true
    },
    phone: {
        type: "string",
        trim: true,
        min: 11
    },
    password: {
        type: "string",
        trim: true,
        min: 4,
        optional: true
    }
};

const check = v.compile(schema);

export default check;