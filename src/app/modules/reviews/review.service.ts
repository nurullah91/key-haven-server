import { TReview } from "./review.interface";
import Review from "./review.model";

const createReviewIntoDB = async (payload: TReview) => {
  const result = await Review.create(payload);
  return result;
};

const getAllReviewsFromDB = async (email?: string) => {
  let filter = {};
  if (email) {
    filter = { email };
  }
  const result = await Review.find(filter);
  return result;
};

const getSingleReviewFromDB = async (id: string) => {
  const result = await Review.findById(id);

  return result;
};

const updateReviewIntoDB = async (id: string, payload: Partial<TReview>) => {
  const result = await Review.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteReviewFromDB = async (id: string) => {
  const result = await Review.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );

  return result;
};

export const ReviewServices = {
  createReviewIntoDB,
  getAllReviewsFromDB,
  getSingleReviewFromDB,
  updateReviewIntoDB,
  deleteReviewFromDB,
};
