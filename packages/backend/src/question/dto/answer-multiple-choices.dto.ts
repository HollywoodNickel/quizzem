import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsBoolean,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class AnswerMultipleChoicesDto {
  @ValidateNested({ each: true })
  @Type(() => MultipleChoiceDto)
  @ArrayMinSize(2)
  choices: MultipleChoiceDto[];
}

class MultipleChoiceDto {
  @IsString()
  @MinLength(1)
  text: string;
  @IsBoolean()
  correctAnswer: boolean;
}
