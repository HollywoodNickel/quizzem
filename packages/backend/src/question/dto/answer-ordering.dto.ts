import { z } from 'zod';

export const AnswerOrderingSchema = z.object({
  correctOrder: z.array(z.string()),
});

export type AnswerOrderingDto = z.infer<typeof AnswerOrderingSchema>;
