import express from 'express';
import { courseController } from './course.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createCourseValidationSchema, updateCourseValidationSchema } from './course.validation';

const router = express.Router();

router.post('/course',validateRequest(createCourseValidationSchema),courseController.createCourse);
router.put('/courses/:courseId',validateRequest(updateCourseValidationSchema),courseController.updateCourse);
router.get('/courses',courseController.getAllCourses);
router.get('/courses/:courseId/reviews',courseController.getCourseWithReview);
router.get('/course/best',courseController.getBestCourse);

export const courseRoutes = router