import handleAsync from "../../utils/handleAsync";
import responseSender from "../../utils/responseSender";
import httpStatus from "http-status";
import { ReviewServices } from "./review.service";

const createReview = handleAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDB(req.body);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review is created Successfully",
    data: result,
  });
});

const getAllReviews = handleAsync(async (req, res) => {
  const email = req.query.email;
  let emailString: string | undefined = undefined;

  if (typeof email === "string") {
    emailString = email;
  }
  const result = await ReviewServices.getAllReviewsFromDB(emailString);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Review are retrieved Successfully",
    data: result,
  });
});

const getSingleReview = handleAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ReviewServices.getSingleReviewFromDB(id);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review is retrieved Successfully",
    data: result,
  });
});

const updateReview = handleAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ReviewServices.updateReviewIntoDB(id, req.body);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review is updated Successfully",
    data: result,
  });
});

const deleteReview = handleAsync(async (req, res) => {
  const { id } = req.params;

  const result = ReviewServices.deleteReviewFromDB(id);
  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review is deleted Successfully",
    data: result,
  });
});

export const ReviewControllers = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
