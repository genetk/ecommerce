import { Request, Response, NextFunction } from "express";
import  {  verify } from "jsonwebtoken";


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
