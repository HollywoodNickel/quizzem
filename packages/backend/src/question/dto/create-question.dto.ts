import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { UUID } from 'crypto';
import { EQuestionType } from 'src/question/models/question-type.enum';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsOptional()
  hint: string | null;

  @IsEnum(EQuestionType)
  type: EQuestionType;

  @IsOptional()
  @IsNumber()
  timer: number | null;

  @IsObject()
  answer: Record<string, unknown>;

  @IsUUID()
  categoryId: UUID;
}
