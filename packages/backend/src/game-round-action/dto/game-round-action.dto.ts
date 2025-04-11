import { QuizzemDto } from 'src/utils/quizzem.dto';

export class GameRoundActionDto extends QuizzemDto {
  name: string;
  description: string | null;
}
