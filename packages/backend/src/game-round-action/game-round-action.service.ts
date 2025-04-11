import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { CreateGameRoundActionDto } from 'src/game-round-action/dto/create-game-round-action.dto';
import { UpdateGameRoundActionDto } from 'src/game-round-action/dto/update-game-round-action.dto';
import { GameRoundActionModel } from 'src/game-round-action/model/game-round-action.model';
import { PageableQueryDto } from 'src/utils/pageable/dto/pageable-query.dto';
import { PageableDto } from 'src/utils/pageable/dto/pageable.dto';
import { Repository } from 'typeorm';

@Injectable()
export class GameRoundActionService {
  constructor(
    @InjectRepository(GameRoundActionModel)
    private readonly gameRoundActionRepository: Repository<GameRoundActionModel>,
  ) {}

  async findAll(
    query: PageableQueryDto,
  ): Promise<PageableDto<GameRoundActionModel>> {
    const { page, size } = query;

    const count = await this.gameRoundActionRepository.count();
    const data = await this.gameRoundActionRepository.find({
      skip: page * size,
      take: size,
    });

    return new PageableDto({
      data,
      page,
      size,
      totalElements: count,
    });
  }

  async findOneById(id: UUID): Promise<GameRoundActionModel> {
    throw new Error('Method not implemented.');
  }

  async create(data: CreateGameRoundActionDto): Promise<void> {
    const action = this.gameRoundActionRepository.create(data);
    console.log(action);
    await this.gameRoundActionRepository.save(action);
  }

  async update(id: UUID, data: UpdateGameRoundActionDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete(id: UUID): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
