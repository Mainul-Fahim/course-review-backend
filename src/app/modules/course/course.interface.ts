import { Types } from "mongoose";

export interface ITags{
    name: string;
    isDeleted: boolean;
}

export interface ICourse{
    title: string;
    instructor: string;
    categoryId: Types.ObjectId;
    price: number;
    tags: [ITags];
    startDate: string;
    endDate: string;
    language: string;
    provider: string;
    durationInWeeks: number;
    details: {
        level: string;
        description: string;
    }

}