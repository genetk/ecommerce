import validator from "validator";
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken";
import { userModel } from "../model/userModel";
import { Request, Response } from 'express';



const createToken = (id: string): string => {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return Jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  };

const loginUser = async (req: Request, res: Response) => {
    try {
        
        const { email, password }: { email: string; password: string } = req.body;
      
        const user = await userModel.findOne({ email });
        console.log("User found:", user);

        if (!user) {
            res.json({ success: false, message: "User doesn't exist" });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id.toString());
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }

    } catch (error) {
        if(error instanceof Error)
        res.json({ success: false, message: error.message });
    }
}


const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name="", email="", password="" }: { name: string; email: string; password: string } = req.body;
    
if (!name || typeof name !== "string") {
    res.status(400).json({ success: false, message: "Name is required and must be a string." });
    return;
}

if (!email || typeof email !== "string") {
    res.status(400).json({ success: false, message: "Email is required and must be a string." });
    return;
}

if (!password || typeof password !== "string") {
    res.status(400).json({ success: false, message: "Password is required and must be a string." });
    return;
}
       
        const exists = await userModel.findOne({ email });
        if (exists) {
            res.json({ success: false, message: "User already exists" });
            return;
        }

      
        if (!validator.isEmail(email)) {
            res.json({ success: false, message: "Please enter a valid email" });
            return;
        }
        if (password.length < 8) {
            res.json({ success: false, message: "Please enter a strong password" });
            return;
        }

        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id.toString());

        res.json({ success: true, token });

    } catch (error) {
        if(error instanceof Error)
        res.json({ success: false, message: error.message });
    }
}


const adminLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password }: { email: string; password: string } = req.body;
        
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = Jwt.sign(email + password, process.env.JWT_SECRET as string);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
     if(error instanceof Error)
        res.json({ success: false, message: error.message });
    }
}

export { loginUser, registerUser, adminLogin };
