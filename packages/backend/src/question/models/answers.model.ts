import { QuestionModel } from 'src/question/models/question.model';
import { QuizzemModel } from 'src/utils/quizzem.model';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('answer')
export class AnswerModel extends QuizzemModel {
  @Column({ type: 'jsonb' })
  answer: Record<string, unknown>;

  // ----------- Relations ----------------

  @OneToOne(() => QuestionModel, (question) => question.answer)
  question: QuestionModel;
}
