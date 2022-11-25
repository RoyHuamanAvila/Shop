import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(MONGODB_URI as string)
        console.log('Connect to MongoDB')

    } catch (error) {
        console.log('Error connecting to MongoDb ', error)   
    }
}

export default connectDB;
