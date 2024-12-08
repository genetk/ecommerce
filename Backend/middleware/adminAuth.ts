import { Request, Response, NextFunction } from "express";
import  {  verify } from "jsonwebtoken";

const adminAuth = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      console.log('Token:', token);
  
      if (!token) {
        res.status(401).json({ message: 'You are not authorized' });
        return;
      }
  
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in environment variables');
      }
  
      const decodedToken = verify(token, process.env.JWT_SECRET);
  
      // Check if the decoded token is a string or JwtPayload
      if (typeof decodedToken === 'string') {
        res.status(401).json({ message: 'Invalid token format' });
        return;
      }
  
      // Check specific fields inside JwtPayload
      if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
        throw new Error('Environment variables ADMIN_EMAIL or ADMIN_PASSWORD are not defined');
      }
      
      const expectedPayload = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;
      if (decodedToken.sub !== expectedPayload) {
        res.status(401).json({ message: 'Not Authorized. Login Again' });
        return;
      }
  
      next();
    } catch (error: any) {
      res.status(401).json({ message: error.message || 'Authentication failed' });
    }
  };
  
export default adminAuth;
