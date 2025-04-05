import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { answersSchema } from 'src/question/dto/answers-schema';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
import { AnswerModel } from 'src/question/models/answers.model';
import { QuestionModel } from 'src/question/models/question.model';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionModel)
    private readonly questionRepo: Repository<QuestionModel>,
    @InjectRepository(AnswerModel)
    private readonly answerRepo: Repository<AnswerModel>,
  ) {}

  async getQuestions(): Promise<QuestionModel[]> {
    return await this.questionRepo.find({
      relations: ['answer'],
    });
  }

  async addQuestion(body: CreateQuestionDto): Promise<void> {
    const isValid = this.checkCorrectAnswerStructure(body);
    if (!isValid) {
      throw new BadRequestException('Invalid answer structure');
    }

    const question = await this.questionRepo.save({
      question: body.question,
      hint: body.hint,
      type: body.type,
      timer: body.timer,
    });

    await this.answerRepo.save({
      answer: body.answer,
      question,
    });
  }

  checkCorrectAnswerStructure(body: CreateQuestionDto): boolean {
    const schema = answersSchema[body.type];
    if (!schema) return false;

    try {
      schema.parse(body.answer);
      return true;
    } catch {
      return false;
    }
  }
}
