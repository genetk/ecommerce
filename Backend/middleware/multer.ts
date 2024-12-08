import multer from "multer";
import { Request } from "express";


const storage = multer.diskStorage({
    filename: function (req: Request, file: Express.Multer.File, callback: (error:Error|null, filename: string) => void):void {
       
        callback(null, file.originalname);
    }
});


const upload = multer({ storage });

export default upload;
