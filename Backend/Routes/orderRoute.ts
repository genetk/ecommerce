import express from "express";
import {
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  placeOrderStripe,
} from "../controllers/orderController";
import adminAuth from "../middleware/adminAuth";
import authUser from "../middleware/auth";

const orderRouter = express.Router();

orderRouter.get("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/stripe", authUser, placeOrderStripe);

orderRouter.post("/userorders", authUser, userOrders);

orderRouter.post("/stripe/verifyStripe", authUser, verifyStripe);

export default orderRouter;
