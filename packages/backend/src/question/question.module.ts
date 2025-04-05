import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerModel } from 'src/question/models/answers.model';
import { QuestionModel } from 'src/question/models/question.model';
import { QuestionController } from 'src/question/question.controller';
import { QuestionService } from 'src/question/question.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerModel, QuestionModel])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
