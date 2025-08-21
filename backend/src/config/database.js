import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DATABASE CONNECTED !!!");
  } catch (error) {
    console.error("ERROR CONNECTING TO DATABASE !!!", error);
    process.exit(1);
  }
};
