import catchAsync from "../../utills/catchAsync";
import sendResponse from "../../utills/sendResponse";
import { categoryServices } from "./category.service";

const createCategory = catchAsync(async (req, res) => {
    const result = await categoryServices.createCategoryIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Category created successfully',
      data: result,
    });
  });

  const getAllCategories = catchAsync(async (req, res) => {
    const result = await categoryServices.getAllCategoriesFromDB();
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Categories retrieved successfully',
      data: result,
    });
  });

  export const categoryController = {
    createCategory,
    getAllCategories
  }