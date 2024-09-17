import connectToDB from "@@/configs/db";
import model from "@@/models/user";
import {roles} from "@/utils/constants";
import check from "@@/validators/user";
import {hashPassword, generateAccessToken} from "@/utils/auth";

export const POST = async (req) => {
    try {
        await connectToDB();

        const body = await req.json();

        // validation req body data
        const dataValidator = check(body);

        // send res error to client
        if (dataValidator !== true) {
            return Response.json(dataValidator, {status: 422});
        }

        // get data from req body
        const {name, email, phone, password} = body;

        const isUserExist = await model.findOne({
            $or: [{phone}, {email}]
        });

        if (isUserExist) {
            return Response.json({
                message: "User already exist!",
                status: 422
            }, {status: 422});
        }

        const hashedPassword = await hashPassword(password);
        const accessToken = generateAccessToken({phone});

        // get all users from db
        const users = await model.find({});

        // create new user
        await model.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role: users.length > 0 ? roles.user : roles.admin
        });

        // send res
        return Response.json({
            message: "User created successfully.",
            status: 201
        }, {
            status: 201,
            headers: {"Set-Cookie": `token=${accessToken};path:/;httpOnly=true`},
        });

    } catch (err) {
        return Response.json({
            message: "Internal Server Error!",
            status: 500,
        }, {status: 500});
    }
}