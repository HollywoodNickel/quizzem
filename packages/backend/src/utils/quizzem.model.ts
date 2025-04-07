import { randomUUID, UUID } from 'crypto';
import { Column, PrimaryColumn } from 'typeorm';

export abstract class QuizzemModel {
  @PrimaryColumn({ type: 'uuid' })
  id: UUID = randomUUID();

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

export abstract class QuizzemDto {
  id: UUID;
  createdAt: Date;
}
