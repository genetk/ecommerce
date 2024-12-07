import { v2 } from "cloudinary";

const connectCloudinary=async()=>{
   v2.config({
    cloud_name:process.env.CLOUDINARY_API_KEY ,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})
}
export default connectCloudinary