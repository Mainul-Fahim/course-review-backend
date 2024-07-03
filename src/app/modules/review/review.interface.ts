import { Types } from "mongoose";

export interface IReview {
    courseId: Types.ObjectId;
    rating: number;
    review: string;
}