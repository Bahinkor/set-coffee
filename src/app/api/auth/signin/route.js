import connectToDB from "@@/configs/db";
import model from "@@/models/user";
import check from "@@/validators/signin";
import {
    verifyPassword,
    generateAccessToken,
    generateRefreshToken,
} from "@/utils/auth";

export const POST = async (req) => {
    try {
        await connectToDB();

        const body = await req.json();

        // validation data
        const isValidData = check(body);

        if (isValidData !== true) {
            return Response.json({
                message: "data validation failed!",
            }, {status: 422});
        }

        // get data form req body
        const {email, password} = body;

        const user = await model.findOne({
            email
        });

        if (!user) {
            return Response.json({
                message: "user is not found!",
            }, {status: 404});
        }

        // check password
        const isValidPassword = await verifyPassword(password, user.password);

        if (!isValidPassword) {
            return Response.json({
                message: "email or password is incorrect!",
            }, {status: 401});
        }

        const accessToken = generateAccessToken({
            email: user.email
        });
        const refreshToken = generateRefreshToken({
            email: user.email
        });

        // set refresh token to db
        await model.findOneAndUpdate({
            email: user.email
        }, {
            $set: {refreshToken}
        });

        // send res
        return Response.json({
            message: "sign in successfully.",
        }, {
            status: 200,
            headers: {"Set-Cookie": `token=${accessToken};path=/;httpOnly=true`},
        });

    } catch (err) {
        console.log("sign in error => ", err);
        // send err to client
        return Response.json({
            message: "internal error error!",
        }, {status: 500});
    }
}