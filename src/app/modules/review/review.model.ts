import { Schema, model } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>({
    courseId: { type: Schema.Types.ObjectId, required: true, ref: 'Course' },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String, required: true }
},{ versionKey: false })

export const Review = model<IReview>('Review',reviewSchema)