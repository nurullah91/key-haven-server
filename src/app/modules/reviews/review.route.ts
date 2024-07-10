import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { reviewValidations } from "./review.validation";
import { ReviewControllers } from "./review.controller";

const router = express.Router();

router.post(
  "/create-review",
  validateRequest(reviewValidations.createReviewValidationSchema),
  ReviewControllers.createReview
);

router.get("/", ReviewControllers.getAllReviews);
router.get("/:id", ReviewControllers.getSingleReview);
router.put("/:id", ReviewControllers.updateReview);
router.delete("/:id", ReviewControllers.deleteReview);

export const ReviewRoutes = router;
