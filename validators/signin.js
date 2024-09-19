const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    email: {
        type: "email",
        trim: true
    },
    password: {
        type: "string",
        trim: true,
        min: 4
    }
};

const check = v.compile(schema);

export default check;