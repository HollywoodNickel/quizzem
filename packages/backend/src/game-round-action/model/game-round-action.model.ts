import { QuizzemModel } from 'src/utils/quizzem.model';
import { Column, Entity } from 'typeorm';

@Entity('game_round_action')
export class GameRoundActionModel extends QuizzemModel {
  @Column({ unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;
}
