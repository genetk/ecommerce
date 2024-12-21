import mongoose from "mongoose";

const connectDB = async () => {
  try {
      mongoose.connection.on("connected", () => {
          console.log("DB Connected");
      });

      await mongoose.connect(`${process.env.DB_CONNECT}`);
  } catch (error) {
      console.error("DB Connection Failed:", error.message);
  }
};
 export default connectDB;


