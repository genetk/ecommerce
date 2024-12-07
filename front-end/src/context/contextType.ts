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
    _id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Product description
    price: number; // Price of the product
    image: string[]; // Array of image URLs for the product
    category: string; // Category of the product (e.g., 'electronics', 'clothing', etc.)
    subCategory:string;
    stock: number; // Quantity available in stock
    sizes?: string[]; // Available sizes (optional)
    color?: string[]; // Available colors (optional)
    brand?: string; // Brand of the product (optional)
    rating?: number; // Average rating (optional)
    reviewsCount?: number; // Number of reviews (optional)
    createdAt: string; // Timestamp of when the product was added
    updatedAt: string; // Timestamp of when the product was last updated
    [key: string]: any; // For any additional properties that might be added
  }
  
  export interface Review {
    userId: string; // ID of the user who submitted the review
    rating: number; // Rating given by the user (e.g., 1-5)
    comment?: string; // Optional comment for the review
    createdAt: string; // Date when the review was submitted
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
    fetchCart: () => Promise<CartItems>; // Ensure the type matches the function
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
  