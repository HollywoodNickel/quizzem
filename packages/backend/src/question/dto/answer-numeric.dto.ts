import { z } from 'zod';

export const AnswerNumericSchema = z.object({
  correctAnswer: z.number(),
});

export type AnswerNumericDto = z.infer<typeof AnswerNumericSchema>;
