import { z } from 'zod';

export const AnswerFileQuestionSchema = z.object({
  file: z.string(),
  correctAnswer: z.string(),
});

export type AnswerFileQuestionDto = z.infer<typeof AnswerFileQuestionSchema>;
