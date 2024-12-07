import { Request, Response } from 'express';
import orderModel, { IOrder } from '../model/orderModel';
import userModel from '../model/userModel';
import Stripe from 'stripe';


// global variables
const currency = '$';
const deliveryCharge = 10;

// gateway initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-11-20.acacia' });


// Placing orders using Stripe Method
const placeOrderStripe = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, items, amount, address } = req.body;
        const  origin = req.headers.origin|| "";

        const orderData:Partial<IOrder> = {
            userId,
            items,
            address,
            amount,
            paymentMethod: 'Stripe',
            payment: false,
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map((item: { name: string; price: number; quantity: number }) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges',
                },
                unit_amount: deliveryCharge * 100,
            },
            quantity: 1,
        });

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: (error as Error).message });
    }
};

// Verify Stripe
const verifyStripe = async (req: Request, res: Response): Promise<void> => {
    const { orderId, success, userId } = req.body;

    try {
        if (success === 'true') {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} });
            res.json({ success: true });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: (error as Error).message });
    }
};





// All Orders data for Admin Panel
const allOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: (error as Error).message });
    }
};

// User Order Data For Frontend
const userOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId }:{ userId: string }  = req.body;

        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: (error as Error).message });
    }
};

// Update order status from Admin Panel
const updateStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const { orderId, status } : { orderId: string; status: string } = req.body;

        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        if(error instanceof Error)
        res.json({ success: false, message: error.message });
    }
};

export {

    verifyStripe,
    placeOrderStripe,
     allOrders,
    userOrders,
    updateStatus,
};
