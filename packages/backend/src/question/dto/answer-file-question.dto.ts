import { IsString, MinLength } from 'class-validator';

export class AnswerFileQuestionDto {
  @IsString()
  @MinLength(1)
  file: string;

  @IsString()
  @MinLength(1)
  correctAnswer: string;
}
