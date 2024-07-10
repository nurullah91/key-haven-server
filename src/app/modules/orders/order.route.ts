import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { orderValidations } from "./order.validation";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post(
  "/create-order",
  validateRequest(orderValidations.createOrderValidationSchema),
  OrderControllers.createOrder
);

router.get("/", OrderControllers.getAllOrders);
router.get("/:id", OrderControllers.getSingleOrder);
router.put("/:id", OrderControllers.updateOrder);
router.delete("/:id", OrderControllers.deleteOrder);

export const OrderRoutes = router;
