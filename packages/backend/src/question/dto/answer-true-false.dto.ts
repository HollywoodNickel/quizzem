import { z } from 'zod';

export const AnswerTrueFalseSchema = z.object({
  correctAnswer: z.boolean(),
});

export type AnswerTrueFalseDto = z.infer<typeof AnswerTrueFalseSchema>;
