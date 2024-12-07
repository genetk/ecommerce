import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController'

import adminAuth from '../middleware/adminAuth';
import path from "path"
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filename
  }
});

// Set up file upload limits
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
});

// Middleware to handle multiple file uploads (image1, image2, etc.)
const uploadMiddleware = upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
]);

export { uploadMiddleware };

// const upload = multer({ dest: "uploads/" });

// // Pass `upload.fields` middleware for multiple files
// const uploadMiddleware = upload.fields([
//   { name: "image1", maxCount: 1 },
//   { name: "image2", maxCount: 1 },
//   { name: "image3", maxCount: 1 },
//   { name: "image4", maxCount: 1 },
// ]);
const productRouter = express.Router();
productRouter.post('/add',adminAuth,uploadMiddleware ,addProduct);
productRouter.delete('/remove/:id',adminAuth,removeProduct);
productRouter.get('/single/:productId',singleProduct);
productRouter.get('/list',listProducts)

export default productRouter