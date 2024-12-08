import  { InferSchemaType, Schema, model } from "mongoose";
export interface IUser {
    name: string;         
    email: string;        
    password: string;      
    cartData: Record<string, any>;  
   
  }
const userSchema=new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   
    cartData: { type: Object, default: {} }
}, { minimize: false })

type User = InferSchemaType<typeof userSchema>;

export const userModel=model<User>("User",userSchema)
export default userModel