// import mongoose from "mongoose";

// const connect = async () => {
//     if (mongoose.connections[0].readyState) return;
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         mongoose.Promise = global.Promise;
//         console.log("Mongo Connection successfully established.");
//     } catch (error) {
//         throw new Error("Error connecting to Mongoose");
//     } finally {
//         await mongoose.connection.close();
//     }
// }; 

// export default connect;
import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    )
}


let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { con: null, promise: null }
}

const connect = async () => {
    if (cached.conn) {
        return cached.conn;
    }


    // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default connect;