
import { InferSchemaType, Schema, model } from "mongoose";
export interface CartItem {
    itemId: Schema.Types.ObjectId; // Product ID
    size: string;   // Size of the product
    quantity: number; // Quantity of the item
}

export interface ICart  {
    userId:Schema.Types.ObjectId; // User ID (who the cart belongs to)
    items: CartItem[]; // Array of items in the cart
    updatedAt: Date; // Timestamp for when the cart was last updated
}



const CartItemSchema = new Schema({
    itemId: { type: Schema.Types.ObjectId,ref: 'Product', required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
});

export const cartSchema=new Schema({
    userId: { type: Schema.Types.ObjectId,ref:'User' ,required: true, unique: true },
    items: { type: [CartItemSchema], default: [] },
    updatedAt: { type: Date, default: Date.now },
})
 type Cart=InferSchemaType<typeof cartSchema>

 export const cartModel=model<Cart>("carts",cartSchema)

 export default cartModel