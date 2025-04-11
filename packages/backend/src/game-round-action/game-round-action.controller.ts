import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UUID } from 'crypto';
import { CreateGameRoundActionDto } from 'src/game-round-action/dto/create-game-round-action.dto';
import { GameRoundActionDto } from 'src/game-round-action/dto/game-round-action.dto';
import { UpdateGameRoundActionDto } from 'src/game-round-action/dto/update-game-round-action.dto';
import { GameRoundActionMapper } from 'src/game-round-action/game-round-action.mapper';
import { PageableQueryDto } from 'src/utils/pageable/dto/pageable-query.dto';
import { PageableDto } from 'src/utils/pageable/dto/pageable.dto';
import { PageableQuery } from 'src/utils/pageable/pageable.query';
import { GameRoundActionService } from './game-round-action.service';

@Controller('game-round-action')
export class GameRoundActionController {
  constructor(
    private readonly gameRoundActionService: GameRoundActionService,
  ) {}

  @Get()
  async findAll(
    @PageableQuery() query: PageableQueryDto,
  ): Promise<PageableDto<GameRoundActionDto>> {
    const actions = await this.gameRoundActionService.findAll(query);
    return {
      ...actions,
      data: GameRoundActionMapper.toDtoList(actions.data),
    };
  }

  @Get(':id')
  async findOneById(@Param('id') id: UUID): Promise<GameRoundActionDto> {
    return await this.gameRoundActionService.findOneById(id);
  }

  @Post()
  async create(@Body() data: CreateGameRoundActionDto): Promise<void> {
    return await this.gameRoundActionService.create(data);
  }

  @Put()
  async update(
    @Param('id') id: UUID,
    data: UpdateGameRoundActionDto,
  ): Promise<void> {
    return await this.gameRoundActionService.update(id, data);
  }

  @Delete()
  async delete(@Param('id') id: UUID): Promise<void> {
    return await this.gameRoundActionService.delete(id);
  }
}
