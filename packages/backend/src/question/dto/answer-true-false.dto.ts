import { IsBoolean } from 'class-validator';

export class AnswerTrueFalseDto {
  @IsBoolean()
  correctAnswer: boolean;
}
