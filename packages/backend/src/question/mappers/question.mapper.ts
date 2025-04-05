import { QuestionDto } from 'src/question/dto/question.dto';
import { QuestionModel } from 'src/question/models/question.model';

export class QuestionMapper {
  static toDto(question: QuestionModel): QuestionDto {
    return {
      id: question.id,
      createdAt: question.createdAt,
      question: question.question,
      hint: question.hint,
      type: question.type,
      timer: question.timer,
      answer: question.answer.answer,
    };
  }

  static toDtoList(questions: QuestionModel[]): QuestionDto[] {
    return questions.map((question) => this.toDto(question));
  }
}
