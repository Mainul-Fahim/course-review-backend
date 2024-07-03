import { IReview } from "./review.interface";
import { Review } from "./review.model";

const createReviewIntoDB = async (payload: IReview) => {
    const result = await Review.create(payload);
    return result;
}


export const reviewServices = {
    createReviewIntoDB
}