import { UUID } from 'crypto';
import { Column, PrimaryColumn } from 'typeorm';

export abstract class QuizzemModel {
  @PrimaryColumn({ type: 'uuid' })
  id: UUID;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
