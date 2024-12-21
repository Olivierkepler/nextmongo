import mongoose from 'mongoose';

const connectMongo = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("MongoDB connected");
    }
};

export default connectMongo;
