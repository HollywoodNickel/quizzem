import { z } from 'zod';

export const AnswerImageQuestionSchema = z.object({
  imgFile: z.string(),
  correctAnswer: z.string(),
});

export type AnswerImageQuestionDto = z.infer<typeof AnswerImageQuestionSchema>;
