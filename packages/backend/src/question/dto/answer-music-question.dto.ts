import { z } from 'zod';

export const AnswerMusicQuestionSchema = z.object({
  musicFile: z.string(),
  correctAnswer: z.string(),
});

export type AnswerMusicQuestionDto = z.infer<typeof AnswerMusicQuestionSchema>;
