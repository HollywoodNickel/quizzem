import { z } from 'zod';

export const AnswerMultipleChoicesSchema = z.object({
  choices: z.array(
    z.object({
      text: z.string(),
      correctAnswer: z.boolean(),
    }),
  ),
});

export type AnswerMultipleChoicesDto = z.infer<
  typeof AnswerMultipleChoicesSchema
>;
