import connectToDB from "@@/configs/db";

export const GET = async (req) => {
    try {
        await connectToDB();

        return Response.json({
            message: "Welcome.",
            status: 200
        }, {status: 200});

    } catch (err) {
        return Response.json({
            message: "Internal Server Error!",
            status: 500,
        }, {status: 500});
    }
}