import catchAsync from "../../utills/catchAsync";
import sendResponse from "../../utills/sendResponse";
import { reviewServices } from "./review.service";

const createReview= catchAsync(async (req, res) => {
    const result = await reviewServices.createReviewIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Review created successfully',
      data: result,
    });
  });

  export const reviewController = {
    createReview
  }