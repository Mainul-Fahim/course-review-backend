import express from 'express';
import validateRequest from "../../middlewares/validateRequest";
import { createCategoryValidationSchema } from './category.validation';
import { categoryController } from './category.controller';

const router = express.Router();

router.post('/categories',validateRequest(createCategoryValidationSchema),categoryController.createCategory);
router.get('/categories',categoryController.getAllCategories);

export const categoryRoutes = router