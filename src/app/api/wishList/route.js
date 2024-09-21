import connectToDB from "@@/configs/db";
import wishListModel from "@@/models/wishList";
import userModel from "@@/models/user";
import productModel from "@@/models/product";
import {isValidObjectId} from "mongoose";

export const POST = async (req) => {
    try {
        await connectToDB();

        // get data from req
        const body = await req.json();
        const {user, product} = body;

        // validation
        const isValidUser = isValidObjectId(user);
        const isValidProduct = isValidObjectId(product);

        if (!isValidUser || !isValidProduct) {
            return Response.json({
                message: "user or product not valid!",
            }, {status: 422});
        }

        // validation from db
        const userValidation = await userModel.findOne({
            _id: user
        });
        const productValidation = await productModel.findOne({
            _id: product
        });

        if (!userValidation || !productValidation) {
            return Response.json({
                message: "user or product not found!",
            }, {status: 404});
        }

        await wishListModel.create({
            user,
            product
        });

        // send res
        return Response.json({
            message: "added wish list successfully.",
        });

    } catch (err) {
        console.log("wish list post api error => ", err);
        return Response.json({
            message: "Internal Server Error!"
        }, {status: 500});
    }
};

export const GET = async () => {
    try {
        await connectToDB();

        // get all wish list data from db
        const wishList = await wishListModel.find({});

        // send res
        return Response.json(wishList);

    } catch (err) {
        console.log("wish list get api error => ", err);
        return Response.json({
            message: "Internal Server Error!"
        }, {status: 500});
    }
};