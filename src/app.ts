import cors from 'cors';
import express, { Application } from 'express'
import { courseRoutes } from './app/modules/course/course.route';
import { categoryRoutes } from './app/modules/category/category.route';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import { reviewRoutes } from './app/modules/review/review.route';
const app:Application = express()

//parsers
app.use(express.json());
app.use(cors());

app.use('/api',courseRoutes)
app.use('/api',categoryRoutes)
app.use('/api',reviewRoutes)

app.use(globalErrorHandler);
app.use(notFound);

export default app