import mongoose, { InferSchemaType, Schema, model } from "mongoose";
export interface IUser {
    name: string;           // User's full name
    email: string;          // User's email (unique)
    password: string;       // User's password (hashed)
    cartData: Record<string, any>;  // Cart data (object with dynamic keys)
   
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