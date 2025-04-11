import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameRoundActionModel } from 'src/game-round-action/model/game-round-action.model';
import { GameRoundActionController } from './game-round-action.controller';
import { GameRoundActionService } from './game-round-action.service';

@Module({
  imports: [TypeOrmModule.forFeature([GameRoundActionModel])],
  controllers: [GameRoundActionController],
  providers: [GameRoundActionService],
})
export class GameRoundActionModule {}
