import { Request, Response, NextFunction } from "express";
import  {  verify } from "jsonwebtoken";


// Define your JWT secret
const JWT_SECRET = process.env.JWT_SECRET as string

// const adminAuth = (req: Request, res: Response, next: NextFunction):void => {
//     const authHeader = req.headers.authorization;

//     // Check if the Authorization header is present
//     if (!authHeader) {
//         res.status(401).json({ success: false, message: "Not Authorized" });
//         return 
//     }

//     // Extract the token
//     const token = authHeader.split(" ")[1];
//     try {
//         // Verify the token
//         if(JWT_SECRET){
//         const decoded = jwt.verify(token, JWT_SECRET) as JWTContent; 

//         // Attach the decoded user to the request object
//         req.user = decoded ; // Use `as any` to bypass TypeScript's type checking here
//         }
//         next();
//     } catch (error) {
//         res.status(401).json({ success: false, message: "Invalid Token" });
//     }
// };
const adminAuth =(req:Request,res:Response,next:NextFunction)=>{
    try {
        console.log("header:",req.headers);
        const token =req.headers.authorization?.split(' ')[1];
        console.log("token:",token);
        if (!token) {
            res.json({ message: "You are not authorized" });
        } else {
            const result = verify(token, `${process.env.JWT_SECRET}`);
            if (!result) {
                throw new Error("Unable to verify");
            } else {
                req.user = result;
                next();
            }
        }

    } catch (error) {
        next(error);
    }

};
export default adminAuth;
