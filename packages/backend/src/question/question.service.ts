import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { answersSchema } from 'src/question/answers-schema';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
import { AnswerModel } from 'src/question/models/answers.model';
import { QuestionModel } from 'src/question/models/question.model';
import { PageableQueryDto } from 'src/utils/pageable/dto/pageable-query.dto';
import { PageableDto } from 'src/utils/pageable/dto/pageable.dto';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionModel)
    private readonly questionRepo: Repository<QuestionModel>,
    @InjectRepository(AnswerModel)
    private readonly answerRepo: Repository<AnswerModel>,
  ) {}

  async getQuestions(
    query: PageableQueryDto,
  ): Promise<PageableDto<QuestionModel>> {
    const { page, size } = query;

    const count = await this.questionRepo.count();
    const questions = await this.questionRepo.find({
      relations: ['answer', 'category'],
      skip: page * size,
      take: size,
    });

    return new PageableDto({
      data: questions,
      page,
      size,
      totalElements: count,
    });
  }

  async addQuestion(body: CreateQuestionDto): Promise<void> {
    const isValid = this.checkCorrectAnswerStructure(body);
    if (!isValid) {
      throw new BadRequestException('Invalid answer structure');
    }

    const answer = this.answerRepo.create({
      answer: body.answer,
    });
    await this.answerRepo.save(answer);

    const question = this.questionRepo.create({
      question: body.question,
      hint: body.hint,
      type: body.type,
      timer: body.timer,
      answer,
    });
    await this.questionRepo.save(question);
  }

  checkCorrectAnswerStructure(body: CreateQuestionDto): boolean {
    const SchemaClass = answersSchema[body.type];
    if (!SchemaClass) return false;

    const instance = plainToInstance(SchemaClass, body.answer);
    const errors = validateSync(instance, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    return errors.length === 0;
  }
}
