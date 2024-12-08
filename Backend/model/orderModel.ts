import  { InferSchemaType, Schema, model } from "mongoose";
interface Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  export interface IOrder {
    userId: string;         
    items: Array<string>;      
    amount: number;      
    address: Address;      
    status: string;        
    paymentMethod: string;  
    payment: boolean;       
    date: number;          
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
