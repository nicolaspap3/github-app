import mongoose from "mongoose";
import dotenv from "dotenv";

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
  }
}
