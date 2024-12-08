import { Request, Response } from "express";


import userModel, { IUser } from "../model/userModel"; 
interface CartData {
  [itemId: string]: {
    [size: string]: number;
  };
}


const addToCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, itemId, size } = req.body as {
      userId: string;
      itemId: string;
      size: string;
    };

    const userData = await userModel.findById(userId) as IUser;
    if (!userData) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const cartData: CartData = {...userData.cartData}

   
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;


    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    if(error instanceof Error)
    res.status(500).json({ success: false, message: error.message  });
  }
};


const updateCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, itemId, size, quantity } = req.body as {
      userId: string;
      itemId: string;
      size: string;
      quantity: number;
    };

    const userData = await userModel.findById(userId) as IUser;
    if (!userData) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const cartData: CartData ={...userData.cartData }

   
    if (!cartData[itemId] || !(size in cartData[itemId])) {
      res.status(400).json({ success: false, message: 'Item not in cart' });
      return;
    }

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    if(error instanceof Error)
    res.status(500).json({ success: false, message:  error.message })
};

}
const getUserCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.body as { userId: string };

    const userData = await userModel.findById(userId) as IUser;
    if (!userData) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const cartData: CartData = userData.cartData ;
    res.json({ success: true, cartData });
  } catch (error) {
  if(error instanceof Error)

    res.status(500).json({ success: false, message: error.message  });
  }
};

export { addToCart , updateCart, getUserCart };
