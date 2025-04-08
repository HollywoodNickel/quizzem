import { UUID, randomUUID } from 'crypto';
import { UserModel } from 'src/user/model/user.model';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('session')
export class SessionModel {
  @PrimaryColumn({ type: 'uuid' })
  id: UUID = randomUUID();

  @Column()
  expiredAt: Date = new Date();

  @ManyToOne(() => UserModel, (user) => user.sessions)
  user: UserModel;
}
