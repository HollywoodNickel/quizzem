import { z } from 'zod';

export const AnswerFillInTheBlankSchema = z.object({
  correctAnswers: z.array(z.string()),
});

export type AnswerFillInTheBlankDto = z.infer<
  typeof AnswerFillInTheBlankSchema
>;
