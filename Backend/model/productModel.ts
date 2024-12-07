
import { InferSchemaType, Schema, model } from "mongoose";
export interface IProduct {
    name: string;           // Name of the product
    description: string;    // Description of the product
    price: number;          // Price of the product
    image: string[];        // Array of image URLs (or file paths)
    category: string;       // Category of the product (e.g., "Electronics")
    subCategory: string;    // Subcategory of the product (e.g., "Smartphones")
    sizes: string[];       // Array of available sizes (e.g., ["S", "M", "L"])
    bestseller?: boolean;   // Whether the product is a bestseller (optional)
    date: number;           // Date when the product was added (timestamp)
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