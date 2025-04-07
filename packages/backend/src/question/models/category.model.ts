import { QuestionModel } from 'src/question/models/question.model';
import { QuizzemModel } from 'src/utils/quizzem.model';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('category')
export class CategoryModel extends QuizzemModel {
  @Column()
  category: string;

  @OneToMany(() => QuestionModel, (question) => question.category)
  question: QuestionModel[];
}
