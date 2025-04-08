import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
import { QuestionDto } from 'src/question/dto/question.dto';
import { QuestionMapper } from 'src/question/mappers/question.mapper';
import { QuestionService } from 'src/question/question.service';
import { PageableQueryDto } from 'src/utils/pageable/dto/pageable-query.dto';
import { PageableDto } from 'src/utils/pageable/dto/pageable.dto';
import { PageableQuery } from 'src/utils/pageable/pageable.query';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getQuestions(
    @PageableQuery() query: PageableQueryDto,
  ): Promise<PageableDto<QuestionDto>> {
    const questions = await this.questionService.getQuestions(query);
    return {
      ...questions,
      data: QuestionMapper.toDtoList(questions.data),
    };
  }

  @Post()
  async addQuestion(@Body() body: CreateQuestionDto): Promise<void> {
    return await this.questionService.addQuestion(body);
  }
}
