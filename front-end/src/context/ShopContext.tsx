import React,{ ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartItems, Product, ShopContextType } from "./contextType";
import { productList } from "../assets/assets";

export const ShopContext = createContext<ShopContextType | null>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}




const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = process.env.REACT_APP_BACKEND_URL as string;

  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItems>({});
  const [productlist, setProductlist] = useState<Product[]>(productList);
  const [token, setToken] = useState<string>("");
  const navigate = useNavigate();

  const addToCart = async (itemId: string, size: string): Promise<void> => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } });
      } catch (error: any) {
        console.error(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = (): number => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        totalCount += cartItems[items][size] || 0;
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId: string, size: string, quantity: number): Promise<void> => {
    const cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { token } });
      } catch (error: any) {
        console.error(error);
        toast.error(error.message);
      }
    }
  };

  const getCartAmount = (): number => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = productlist.find((product) => product._id === items);
      if (!itemInfo){
        console.warn(`Product with ID ${items} not found. Skipping.`);
       continue;
      }

 
  for (const size in cartItems[items]) {
    const quantity = cartItems[items][size];
    if (quantity > 0) {
      totalAmount += itemInfo.price * quantity;
    }
  }
}

return totalAmount;
};

  const getProductsData = async (): Promise<void> => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProductlist(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token: string): Promise<void> => {
    try {
      const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token } });
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!token && localToken) {
      setToken(localToken);
      getUserCart(localToken);
    }
    if (token) {
      getUserCart(token);
    }
  }, [token]);

  const value = {
    productList,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    getProductsData, 
  
    navigate,
    backendUrl,
    setToken,
    token,
  };

 

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
