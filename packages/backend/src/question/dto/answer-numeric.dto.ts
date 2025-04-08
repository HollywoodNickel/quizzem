import { IsNumber } from 'class-validator';

export class AnswerNumericDto {
  @IsNumber()
  correctAnswer: number;
}
