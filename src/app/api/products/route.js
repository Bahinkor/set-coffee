import connectToDB from "@@/configs/db";
import model from "@@/models/product";

export const POST = async (req) => {
    try {
        await connectToDB();

        // get data from req body
        const body = await req.json();
        const {
            name,
            price,
            shortDescription,
            longDescription,
            weight,
            suitableFor,
            smell,
            tags
        } = body;

        // create new product
        const product = await model.create({
            name,
            price,
            shortDescription,
            longDescription,
            weight,
            suitableFor,
            smell,
            tags
        });

        return Response.json({
            message: "product created successfully.",
        }, {status: 201});


    } catch (err) {
        console.log("post product api error => ", err);
        return Response.json({
            message: "internal server error!"
        }, {status: 500});
    }
}

export const GET = async () => {
    try {
        await connectToDB();

        // get all products from db
        const products = await model.find({}, "-__v -updatedAt").populate("comments");

        // send res to client
        return Response.json(products, {
            status: 200
        });

    } catch (err) {
        console.log("get all products api error => ", err);
        return Response.json({
            message: "internal server error!"
        }, {status: 500});
    }
}