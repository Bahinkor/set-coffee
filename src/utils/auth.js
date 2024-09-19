import {hash, compare} from "bcryptjs";
import {sign, verify} from "jsonwebtoken";
import {cookies} from "next/headers";
import connectToDB from "@@/configs/db";
import model from "@@/models/user";

const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword)
    return isValid;
};

const generateAccessToken = (data) => {
    const accessToken = sign({...data}, process.env.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: "7d",
    });
    return accessToken;
};

const verifyAccessToken = (token) => {
    try {
        const tokenPaylod = verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
        return tokenPaylod;
    } catch (err) {
        console.log("Access Token Error => ", err);
        return false;
    }
};

const generateRefreshToken = (data) => {
    const refreshToken = sign({...data}, process.env.REFRESH_TOKEN_SECRET_KEY, {
        expiresIn: "30d",
    });
    return refreshToken;
};

const authUser = async () => {
    // get access token cookie
    const cookie = cookies();
    const token = cookie.get("token");
    let user = null;

    // validation access token
    if (token) {
        const tokenPayload = verifyAccessToken(token.value);
        if (tokenPayload) {
            await connectToDB();
            user = await model.findOne({
                email: tokenPayload.email
            });
        }
    }

    return user;
}

export {
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    authUser
};