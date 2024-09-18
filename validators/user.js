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
        min: 11,
        pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",
        messages: {
            stringPattern: "Phone Number Is Not Valid!"
        }
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