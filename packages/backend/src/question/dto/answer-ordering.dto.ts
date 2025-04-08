import { ArrayMinSize, IsString } from 'class-validator';

export class AnswerOrderingDto {
  @IsString({ each: true })
  @ArrayMinSize(1)
  correctOrder: string[];
}
