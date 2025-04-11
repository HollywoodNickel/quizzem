import { IsOptional, IsString } from 'class-validator';

export class UpdateGameRoundActionDto {
  @IsString()
  @IsOptional()
  name: string | null;

  @IsString()
  @IsOptional()
  description: string | null;
}
