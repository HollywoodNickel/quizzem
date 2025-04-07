import { AnswerModel } from 'src/question/models/answers.model';
import { CategoryModel } from 'src/question/models/category.model';
import { EQuestionType } from 'src/question/models/question-type.enum';
import { QuizzemModel } from 'src/utils/quizzem.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('question')
export class QuestionModel extends QuizzemModel {
  @Column({ type: 'varchar' })
  question: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  hint: string | null;

  @Column({ type: 'enum', enum: EQuestionType, enumName: 'question_type' })
  type: EQuestionType;

  @Column({ type: 'int', nullable: true, default: null })
  timer: number | null;

  // ----------- Relations ----------------

  @OneToOne(() => AnswerModel, (answer) => answer.id)
  @JoinColumn()
  answer: AnswerModel;

  @ManyToOne(() => CategoryModel, (category) => category.question)
  category: CategoryModel;
}
