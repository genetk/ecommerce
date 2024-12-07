import { Request, Response } from "express";


// Define types for the cart data structure
// type CartData = {
//     [itemId: string]: {
//         [size: string]: number;
//     };
// };

// Add products to user cart
// const addToCart = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const {userId}=req.params
//         const { itemId, size } = req.body as {  itemId: string; size: string };

//         const userData = await userModel.findById(userId);
//         if (!userData) {
//             res.status(404).json({ success: false, message: "User not found" });
//             return;
//         }

//         const cartData: CartData = userData.cartData || {};

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = { [size]: 1 };
//         }

//         await userModel.findByIdAndUpdate(userId, { cartData });

//         res.json({ success: true, message: "Added To Cart" });
//     } catch (error: any) {
//         if(error instanceof Error)
//         res.status(500).json({ success: false, message: error.message });
//     }
// };
// import CartModel, { CartItem, ICart, cartModel } from '../model/cartModel';

// const addToCart = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const  userId  = req.user.id;
//         const { itemId, quantity } = req.body as { itemId: string,quantity:number };

//         // Check if the user's cart exists
//         let cart = await CartModel.findOne({ userId });

//         if (!cart) {
//             // Create a new cart if it doesn't exist
//             cart = await CartModel.create({ userId, items: [{ itemId,  quantity }] });
//              res.status(200).json({ success: true, message: "Cart created and item added" });
//              return
//             }

//         // Find the item in the cart
//         const existingItem = cart.items.find(item => item.itemId.toString() === itemId );

//         if (existingItem) {
//             // Increment the quantity if the item already exists
//             existingItem.quantity += quantity;
//             // Update the cart with the new quantity
           
//         } else {
//             // Add a new item to the cart
//             cart.items.push({ itemId,  quantity });
//             // Update the cart with the new item
//             await cart.save()

//         res.status(200).json({ success: true, message: "Added to cart successfully" });
//     }
//    } catch (error) {
//         res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server Error" });
//     }
// };



// Update user cart
// const updateCart = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const{userId}=req.params
//         const {  itemId, size, quantity } = req.body as {
//             userId: string;
//             itemId: string;
//             size: string;
//             quantity: number;
//         };

//         const userData = await userModel.findById(userId);
//         if (!userData) {
//             res.status(404).json({ success: false, message: "User not found" });
//             return;
//         }

//         const cartData: CartData = userData.cartData || {};

//         if (!cartData[itemId] || !cartData[itemId][size]) {
//             res.status(400).json({ success: false, message: "Item or size not found in cart" });
//             return;
//         }

//         cartData[itemId][size] = quantity;

//         await userModel.findByIdAndUpdate(userId, { cartData });
//         res.json({ success: true, message: "Cart Updated" });
//     } catch (error: any) {
//         if(error instanceof Error)
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// const updateCart = async (req: Request, res: Response):Promise<void> => {
//     const  userId  = req.user.id;
//     const { itemId, size, quantity } = req.body; // Destructure itemId, size, and quantity from the body
  
//     try {
//         // Find the cart by userId
//         let cart = await cartModel.findOne({ userId });
    
//         if (!cart) {
//           res.status(404).json({ success: false, message: "Cart not found" });
//           return;
//         }
    
//         const itemIndex = cart.items.findIndex(
//           (item) => item.itemId.toString() === itemId && item.size === size
//         );
    
//         if (itemIndex >= 0) {
//           cart.items[itemIndex].quantity = quantity; // Update quantity
//         } else {
//           cart.items.push({ itemId, size, quantity }); // Add item if not found
//         }
    
//         const updatedCart = await cart.save();
//         res.status(200).json({ success: true, message: "Cart updated", cart: updatedCart });
//       } catch (error) {
//         console.error("Error updating cart:", error);
//         res.status(500).json({ success: false, message: "Server Error" });
//       }
//     };
    
// Get user cart data
// const getUserCart = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { userId } = req.body; // Extract userId from the request params

//         // Find the user's cart from the database
//         const cart = await CartModel.findOne({ userId }).populate('items.itemId'); // Assuming itemId is a reference to another collection (like Products)

//         if (!cart) {
//             // If the cart doesn't exist for the user
//             res.status(404).json({ success: false, message: "Cart not found" });
//             return;
//         }

//         // Return the cart data
//         res.status(200).json({ success: true, cart });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Server Error" });
//     }
// };

//  const getUserCart = async (req: Request, res: Response): Promise<void> => {
//   try {
//       const userId = req.user.id; // Access userId from the request object (set by middleware)

//       // Fetch the user's cart, populating necessary fields
//       const cart = await CartModel.findOne({user: userId })
//           .populate("items.itemId") 
//           // Fetch only 'items' field from the cart

//       if (!cart) {
//           res.status(404).json({ success: false, message: "Cart not found" });
//           return;
//       }

//       // Return the cart data
//       res.status(200).json({ success: true, cart });
//   } catch (error) {
//       console.error("Error fetching user cart:", error);
//       res.status(500).json({
//           success: false,
//           message: error instanceof Error ? error.message : "An unexpected error occurred",
//       });
//   }
// };

// export { addToCart, updateCart, getUserCart };


import userModel, { IUser } from "../model/userModel"; // Ensure your userModel exports the IUser type

interface CartData {
  [itemId: string]: {
    [size: string]: number;
  };
}

// Add products to user cart
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

    const cartData: CartData = userData.cartData || {};

    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "An unexpected error occurred" });
  }
};

// Update user cart
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

    const cartData: CartData = userData.cartData || {};

    if (!cartData[itemId] || !cartData[itemId][size]) {
      res.status(400).json({ success: false, message: "Item or size not found in cart" });
      return;
    }

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "An unexpected error occurred" });
  }
};

// Get user cart data
const getUserCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.body as { userId: string };

    const userData = await userModel.findById(userId) as IUser;
    if (!userData) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const cartData: CartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : "An unexpected error occurred" });
  }
};

export { addToCart, updateCart, getUserCart };
