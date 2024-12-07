import mongoose, { InferSchemaType, Schema, model } from "mongoose";
interface Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  export interface IOrder {
    userId: string;         // User's ID (String)
    items: Array<string>;      // Array of items in the order (could be objects with item details)
    amount: number;         // Total amount of the order
    address: Address;      // Address for shipping (address object with multiple fields)
    status: string;         // Status of the order (e.g., "Order Placed")
    paymentMethod: string;  // Payment method (e.g., "Credit Card", "PayPal")
    payment: boolean;       // Whether the order has been paid or not (default: false)
    date: number;           // Date when the order was placed (timestamp)
  }

const orderSchema=new Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, required: true, default:'Order Placed' },
    paymentMethod: { type: String, required: true },
    payment: { type: Boolean, required: true , default: false },
    date: {type: Number, required:true}
})
type Order =InferSchemaType<typeof orderSchema>
const orderModel= model<Order>("order",orderSchema)
export default orderModel
