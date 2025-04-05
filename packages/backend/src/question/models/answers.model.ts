import { QuizzemModel } from 'src/utils/quizzem.model';
import { Column, Entity } from 'typeorm';

@Entity('answer')
export class AnswerModel extends QuizzemModel {
  @Column({ type: 'jsonb' })
  answer: Record<string, unknown>;
}
