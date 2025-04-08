import { z } from 'zod';

export const CreateCategorySchema = z.object({
  category: z.string(),
});

export type CreateCategoryDto = z.infer<typeof CreateCategorySchema>;
