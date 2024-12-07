import express from 'express'
import { allOrders, userOrders, updateStatus,verifyStripe, placeOrderStripe} from '../controllers/orderController'
import adminAuth  from '../middleware/adminAuth'
import authUser from '../middleware/auth'

const orderRouter = express.Router()

// Admin Features
orderRouter.get('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features

orderRouter.post('/stripe',authUser,placeOrderStripe)


// User Feature 
orderRouter.post('/userorders',authUser,userOrders)

// verify payment
orderRouter.post('/stripe/verifyStripe',authUser, verifyStripe)


export default orderRouter