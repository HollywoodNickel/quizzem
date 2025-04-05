import { z } from 'zod';

export const AnswerVideoQuestionSchema = z.object({
  videoFile: z.string(),
  correctAnswer: z.string(),
});
