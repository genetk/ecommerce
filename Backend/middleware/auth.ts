
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