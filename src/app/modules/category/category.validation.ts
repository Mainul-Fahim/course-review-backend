import { z } from "zod";

export const createCategoryValidationSchema = z.object({
    body: z.object({
        name: z.string(),
      }),
  });

  export const categoryValidations = {
    createCategoryValidationSchema
  }