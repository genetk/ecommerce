import { useNavigate } from "react-router-dom";

export interface CartItems {
  [key: string]: {
    [size: string]: number;
  };
}

export interface OrderItem {
  image: string[];
  name: string;
  price: number;
  quantity: number;
  size: string;
  date: string;
  status: string;
  payment: string;
  paymentMethod: string;
}
interface Order {
  status: string;
  payment: string;
  paymentMethod: string;
  date: string;
  items: OrderItem[];
}
export interface OrderResponse {
  success: boolean;
  orders: Order[];
}
  export interface Product {
    _id: string; 
    name: string; 
    description: string; 
    price: number; 
    image: string[];
    category: string; 
    subCategory:string;
    stock: number;
    sizes?: string[];
    color?: string[]; 
    brand?: string; 
    rating?: number; 
    reviewsCount?: number; 
    createdAt: string; 
    updatedAt: string; 
    [key: string]: any; 
  }
  
  export interface Review {
    userId: string; 
    rating: number; 
    comment?: string; 
    createdAt: string; 
  }
  
  
  export interface ShopContextType {
    productList: Product[];
    currency: string;
    delivery_fee: number;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    showSearch: boolean;
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: CartItems;
    setCartItems: React.Dispatch<React.SetStateAction<CartItems>>;
    addToCart: (itemId: string,size:string,  quantity: number) => Promise<void>;
    updateQuantity: (itemId: string, size: string, quantity: number) => Promise<void>;
    getProductsData: () => Promise<void>;
    fetchCart: () => Promise<CartItems>; 
    getCartCount: () => number;
    getCartAmount: () => number;
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    subCategory: string;
    setSubCategory: React.Dispatch<React.SetStateAction<string>>;
    navigate: ReturnType<typeof useNavigate>;
    backendUrl: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    token: string;
  }
  