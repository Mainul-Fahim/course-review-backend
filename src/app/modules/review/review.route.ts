import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { reviewController } from './review.controller';
import { createReviewValidationSchema } from './review.validation';

const router = express.Router();

router.post('/reviews',validateRequest(createReviewValidationSchema),reviewController.createReview);

export const reviewRoutes = router