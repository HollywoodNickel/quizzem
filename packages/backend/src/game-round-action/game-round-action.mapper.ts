import { GameRoundActionDto } from 'src/game-round-action/dto/game-round-action.dto';
import { GameRoundActionModel } from 'src/game-round-action/model/game-round-action.model';

export class GameRoundActionMapper {
  static toDto(action: GameRoundActionModel): GameRoundActionDto {
    return {
      id: action.id,
      createdAt: action.createdAt,
      name: action.name,
      description: action.description,
    };
  }

  static toDtoList(actions: GameRoundActionModel[]): GameRoundActionDto[] {
    return actions.map((action) => this.toDto(action));
  }
}
