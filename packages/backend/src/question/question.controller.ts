import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
import { QuestionDto } from 'src/question/dto/question.dto';
import { QuestionMapper } from 'src/question/mappers/question.mapper';
import { QuestionService } from 'src/question/question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getQuestions(): Promise<QuestionDto[]> {
    const questions = await this.questionService.getQuestions();
    return QuestionMapper.toDtoList(questions);
  }

  @Post()
  async addQuestion(@Body() body: CreateQuestionDto): Promise<void> {
    return await this.questionService.addQuestion(body);
  }
}
