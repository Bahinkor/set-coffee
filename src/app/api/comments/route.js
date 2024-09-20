import connectToDB from "@@/configs/db";
import commentModel from "@@/models/comment";
import productModel from "@@/models/product";
import check from "@@/validators/comment";
import {isValidObjectId} from "mongoose";

export const POST = async (req) => {
    try {
        await connectToDB();

        const reqBody = await req.json();

        // validation req body data
        const dataValidator = check(reqBody);

        if (dataValidator !== true) {
            return Response.json(dataValidator, {status: 422});
        }

        const isValidProductID = isValidObjectId(reqBody.productID);

        if (!isValidProductID) {
            return Response.json({
                message: "Invalid product ID!",
            }, {status: 422});
        }

        // get data from req body
        const {
            username,
            body,
            email,
            score,
            productID
        } = reqBody;

        // create new comment
        const comment = await commentModel.create({
            username,
            body,
            email,
            score,
            productID
        });

        const updateProduct = await productModel.findOneAndUpdate({
            _id: productID,
        }, {
            $push: {
                comments: comment._id
            }
        });

        // send res
        return Response.json({
            message: "comment created successfully.",
        }, {status: 201});

    } catch (err) {
        console.log("post comment api error => ", err);
        return Response.json({
            message: "internal server error!"
        }, {status: 500});
    }
};

export const GET = async () => {
    try {
        await connectToDB();
        const comments = await commentModel.find({});

        // send res
        return Response.json(comments);

    } catch (err) {
        console.log("get comment api error => ", err);
        return Response.json({
            message: "internal server error!"
        }, {status: 500});
    }
};