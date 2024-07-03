import { ICategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: ICategory) => {
    const result = await Category.create(payload);
    return result;
}

const getAllCategoriesFromDB = async () => {
        const result = await Category.find();
        return result;
}

export const categoryServices = {
    createCategoryIntoDB,
    getAllCategoriesFromDB
}