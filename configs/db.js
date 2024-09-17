const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        if (!mongoose.connection.readyState) {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("MongoDB Connected!");
        }

    } catch (err) {
        console.log("MongoDB connection failed =>", err);
    }
}

export default connectToDB;