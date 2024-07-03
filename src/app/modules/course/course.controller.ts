import catchAsync from "../../utills/catchAsync";
import sendResponse from "../../utills/sendResponse";
import { courseServices } from "./course.service";

const createCourse = catchAsync(async (req, res) => {
    const result = await courseServices.createCourseIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Course created successfully',
      data: result,
    });
  });

  const getAllCourses = catchAsync(async (req, res) => {
    const result = await courseServices.getAllCoursesFromDB(req.query);
    // console.log(req.query);
    
    // sendResponse(res, {
    //   statusCode: 200,
    //   success: true,
    //   message: 'Courses retrieved successfully',
    //   data: result.data,
    // });

    if (result) {
           
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Courses retrieved successfully',
        meta:result.meta,
        data: result.data,
      });
    }
  });

  const updateCourse = catchAsync(async (req, res) => {
    const id = req.params.courseId
    const result = await courseServices.updateCourseIntoDB(id,req.body);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Course updated successfully',
      data: result,
    });
  });

  const getCourseWithReview = catchAsync(async (req, res) => {
    const id = req.params.courseId
    console.log(id);
    const result = await courseServices.getCourseWithReviewFromDB(id);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Courses and Reviews Retrieved successfully',
      data: result,
    });
  });

  const getBestCourse = catchAsync(async (req, res) => {
    const result = await courseServices.getBestCourseFromDB();
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Best course retrieved successfully',
      data: result,
    });
  });

  export const courseController = {
    createCourse,
    getAllCourses,
    updateCourse,
    getCourseWithReview,
    getBestCourse
  }