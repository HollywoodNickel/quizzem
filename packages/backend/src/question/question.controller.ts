import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDto } from 'src/question/dto/create-question.dto';
import { QuestionService } from 'src/question/question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async addQuestion(@Body() body: CreateQuestionDto): Promise<void> {
    return await this.questionService.addQuestion(body);
  }
}
