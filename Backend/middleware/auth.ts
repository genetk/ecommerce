
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
interface DecodedToken {
    id: string;
    [key: string]: any; // Allow additional properties if present
  }
const authUser = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.token as string;

    if (!token) {
      res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
      return;
    }
  
    try {
      const token_decode = jwt.verify(token, process.env.JWT_SECRET  as string) as DecodedToken ;
  
      // Attach userId to request body
      req.body.userId = token_decode.id;
  
      next();
    } catch (error: any) {
      console.error("Authorization error:", error);
      res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
    }
  };
  
  export default authUser;