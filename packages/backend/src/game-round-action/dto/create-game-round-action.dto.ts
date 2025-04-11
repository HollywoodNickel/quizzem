import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGameRoundActionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string | null;
}
