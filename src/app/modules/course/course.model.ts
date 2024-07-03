import { Schema, model } from "mongoose";
import { ICourse, ITags } from "./course.interface";

const tagSchema = new Schema<ITags>({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: true }
},{_id: false})

const courseSchema = new Schema<ICourse>({
    title: { type: String, required: true, unique: true },
    instructor: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, required: true, ref: 'Category' },
    price: { type: Number, required: true },
    tags: [tagSchema],
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    language: { type: String, required: true },
    provider: { type: String, required: true },
    durationInWeeks: { type: Number },
    details: {
        level: { type: String, required: true },
        description: { type: String, required: true },
    }

}, { versionKey: false });

courseSchema.pre('save', function (next) {
    const date1 = new Date(`${this.startDate}`);
    const date2 = new Date(`${this.endDate}`);
    const durationInMilliseconds = date2.getTime() - date1.getTime();
    const durationInWeeks = durationInMilliseconds / (1000 * 60 * 60 * 24 * 7);
    this.durationInWeeks = Math.ceil(durationInWeeks);
    next();
});

export const Course = model<ICourse>('Course', courseSchema);