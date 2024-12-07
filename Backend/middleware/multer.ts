import multer from "multer";
import { Request, Response } from "express";

// Define storage engine
const storage = multer.diskStorage({
    filename: function (req: Request, file: Express.Multer.File, callback: (error:Error|null, filename: string) => void):void {
       
        callback(null, file.originalname);
    }
});

// Initialize multer with the storage engine
const upload = multer({ storage });

export default upload;
