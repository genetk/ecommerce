import mongoose from "mongoose";


const connectDB=async()=>{
    if(process.env.DB_CONNECT){
    mongoose.connect(process.env.DB_CONNECT).then((_)=>console.log("Database connected succesfully")
).catch((_)=>console.log("Not Connected, Please try again"))
    }
}

export default connectDB