import express, { Request,Response,NextFunction } from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb'
import connectCloudinary from './config/cloudinary'
import userRouter from './Routes/userRoute'
import productRouter from './Routes/productRoute'
import cartRouter from './Routes/cartRoute'
import orderRouter from './Routes/orderRoute'
import helmet from 'helmet'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
app.use(helmet());
// middlewares
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))


// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  });

app.listen(port, ()=> console.log('Server started on PORT : '+ port))