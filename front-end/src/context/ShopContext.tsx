import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { CartItems, Product, ShopContextType } from "./contextType";
import { productList } from "../assets/assets"


export const ShopContext = createContext<ShopContextType|null>(null);
interface ShopContextProviderProps {
    children: ReactNode;
  }
const ShopContextProvider = ({children}:ShopContextProviderProps) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL||""
    const currency = '$';
    const delivery_fee = 10;
   
    const [search, setSearch] = useState<string>('');
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItems>({});
    const [productlist, setProductlist] = useState<Product[]>(productList);
    const [category, setCategory] = useState<string>(''); 
    const [subCategory, setSubCategory] = useState<string>('')
    const [token, setToken] = useState<string>('')
    const navigate = useNavigate();
    

    const apiClient = axios.create({
        baseURL: backendUrl,
       
      });
      apiClient.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem('token');
          if (token) {
            console.log('Sending token:', token)
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );
      const fetchCart = async (): Promise<CartItems> => {
        try {
          const response = await apiClient.get("/api/cart/get");
          setCartItems(response.data.cart); // Update the local state
          return response.data.cart; // Ensure the function returns CartItems
        } catch (error) {
          if (error instanceof Error) {
            console.error("Error fetching cart data:", error.message);
          }
      
          // Return an empty cart or some fallback value
          return {}; // Example fallback for CartItems, adjust according to your data structure
        }
      };
    
      const addToCart = async (itemId: string,size:string,quantity: number ) => {
       
        try {
          const response = await apiClient.post("/api/cart/add", { itemId, quantity,size });
          setCartItems(response.data.cart); // Update state with the server response
          toast.success("Item added to cart");
        } catch (error) {
          console.error("Error adding to cart:", error);
          toast.error("Error adding to cart");
        }
      };
    
      const updateQuantity = async (itemId: string, size: string, quantity: number) => {
        if (quantity < 1) {
          toast.error("Quantity cannot be less than 1.");
          return;
        }
    
        try {
          const response = await apiClient.put("/api/cart/update", { itemId, size, quantity });
          setCartItems(response.data.cart); // Update state with the server response
          toast.success("Cart updated successfully");
        } catch (error) {
          console.error("Error updating cart:", error);
          toast.error("Error updating cart");
        }
      };
    
      const getProductsData = async () => {
        try {
          const response = await apiClient.get("/api/product/list");
          if (response.data.success) {
            setProductlist(response.data.products.reverse());
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          toast.error("Error fetching products");
        }
      };
    
     
      // Load token and fetch user cart when token changes
      useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken && !token) {
          setToken(savedToken);
        } else if (token) {
          fetchCart();
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
        updateQuantity,
        getProductsData,
        fetchCart,
        getCartCount: () =>
          Object.values(cartItems).reduce(
            (count, sizes) => count + Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
            0
          ),
        getCartAmount: () =>
          Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
            const product = productlist.find((p) => p._id === itemId);
            return (
              total +
              Object.values(sizes).reduce(
                (sum, qty) => sum + (product ? qty * product.price : 0),
                0
              )
            );
          }, 0),
        category,
        setCategory,
        subCategory,
        setSubCategory,
        navigate,
        backendUrl,
        setToken,
        token,
      };
    
      return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
    };
    
    export default ShopContextProvider;