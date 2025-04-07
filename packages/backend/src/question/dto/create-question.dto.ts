import { UUID } from 'crypto';
import { EQuestionType } from 'src/question/models/question-type.enum';

export class CreateQuestionDto {
  question: string;
  hint: string | null;
  type: EQuestionType;
  timer: number | null;
  answer: Record<string, unknown>;
  categoryId: UUID;
}
