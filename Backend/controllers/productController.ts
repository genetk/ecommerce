import { Request, Response } from "express";
import  cloudinary  from "cloudinary";
import productModel from "../model/productModel";

interface ProductData {
  name: string;
  description: string;
  category: string;
  price: number;
  subCategory: string;
  bestseller: boolean;
  sizes: string[];
  image: string[];
  date: number;
}
interface Files {
  image1?: Express.Multer.File[];
  image2?: Express.Multer.File[];
  image3?: Express.Multer.File[];
  image4?: Express.Multer.File[];
}
const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    // Destructure form fields from req.body
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // if (!subCategory) {
    //   res.json({ success: false, message: "subCategory is required" });
    //   return 
    // }
    const files = req.files as Files;

    // Access uploaded files from req.files (with type assertions)
    const image1 = files.image1 && files.image1[0];
    const image2 = files.image2 && files.image2[0];
    const image3 = files.image3 && files.image3[0];
    const image4 = files.image4 && files.image4[0];

    // Filter undefined files
    const images = [image1, image2, image3, image4].filter((item) => item !== undefined) as Express.Multer.File[];

    // Upload images to Cloudinary and get URLs
    const imagesUrl: string[] = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.v2.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    // Prepare the product data object
    const productData: ProductData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === 'true'? true:false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    // Save product data to the database
    const product = await productModel.create(productData);
  

    // Send success response
    res.json({ success: true, message: 'Product Added' });

  } catch (error) {
   if(error instanceof Error)
    res.json({ success: false, message: error.message });
  }
};

// Function to list all products
const listProducts = async (req: Request, res: Response):Promise<void> => {
    try {
      const products = await productModel.find({});
       res.json({ success: true, products });
       return
    } catch (error) {
     if(error instanceof Error)
      res.status(500).json({ success: false, message: error.message });
    return 
    }
  };
  
  // Function to remove a product
  const removeProduct = async (req: Request, res: Response):Promise<void> => {
    try {
      const { id } = req.params;
      if (!id) {
         res.status(400).json({ success: false, message: "Product ID is required" });
         return
      }
  
      const deletedProduct = await productModel.findByIdAndDelete(id);
      if (!deletedProduct) {
         res.status(404).json({ success: false, message: "Product not found" });
         return
      }
  
      res.json({ success: true, message: "Product Removed" });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Function to get information about a single product
  const singleProduct = async (req: Request, res: Response):Promise<void> => {
    try {
      const { productId } = req.params;
      if (!productId) {
         res.status(400).json({ success: false, message: "Product ID is required" });
         return
        }
  
      const product = await productModel.findById(productId);
      if (!product) {
         res.status(404).json({ success: false, message: "Product not found" });
         return
        }
  
      res.json({ success: true, product });
    } catch (error) {
    if(error instanceof Error)
       res.status(500).json({ success: false, message: error.message });
    return
}
  };
  
   export { addProduct,listProducts, removeProduct, singleProduct }
  