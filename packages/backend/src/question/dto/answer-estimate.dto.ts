import { z } from 'zod';

export const AnswerEstimateSchema = z.object({
  correctAnswer: z.number(),
});

export type AnswerEstimateDto = z.infer<typeof AnswerEstimateSchema>;
