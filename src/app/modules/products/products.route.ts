import express from "express";
import { ProductControllers } from "./products.controller";
import validateRequest from "../../middleware/validateRequest";
import { productsValidation } from "./products.validation";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(productsValidation.createProductValidationSchema),
  ProductControllers.createProduct
);

router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);
router.put("/:id", ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);

export const ProductRoutes = router;
