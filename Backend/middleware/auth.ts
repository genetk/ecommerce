// import jwt from 'jsonwebtoken'
// import { Request, Response, NextFunction } from "express";
// interface DecodedToken {
//     id: string;
//     [key: string]: any; // This allows for additional properties in the token
// }
// const authUser = async (req:Request, res:Response, next:NextFunction):Promise<void> => {

//     const { token } = req.headers;

//     if (!token) {
//          res.json({ success: false, message: 'Not Authorized Login Again' })
//          return
//     }

//     try {
//       if(process.env.JWT_SECRET){
//         const tokenString = Array.isArray(token) ? token[0] : token;
//         const token_decode = jwt.verify(tokenString, process.env.JWT_SECRET) as DecodedToken
        
//         req.body.userId = token_decode.id
//       }
//         next()

//     } catch (error) {
//       if(error instanceof Error)
//         res.json({ success: false, message: error.message })
//     }

// }

// export default authUser

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authUser = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token

    if (!token) {
        res.status(401).json({ success: false, message: "Unauthorized. Login again." });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Invalid token. Login again." });
    }
};
export default authUser