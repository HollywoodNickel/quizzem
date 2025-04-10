import { EQuestionType } from 'src/question/models/question-type.enum';
import { QuizzemDto } from 'src/utils/quizzem.dto';

export class QuestionDto extends QuizzemDto {
  question: string;
  hint: string | null;
  type: EQuestionType;
  timer: number | null;
  answer: Record<string, unknown>;
  category: string;
}
