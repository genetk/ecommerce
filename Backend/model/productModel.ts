
import { InferSchemaType, Schema, model } from "mongoose";
export interface IProduct {
    name: string;          
    description: string;    
    price: number;          
    image: string[];      
    category: string;       
    subCategory: string;   
    sizes: string[];       
    bestseller?: boolean;  
    date: number;           
  }
const productSchema=new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
})

type Product=InferSchemaType<typeof productSchema>
export  const productModel=model<Product>("products",productSchema)

export default productModel