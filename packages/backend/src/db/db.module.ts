import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrePopulateDB } from 'src/db/pre-populate-db';
import { CategoryModel } from 'src/question/models/category.model';
import { IEnvVariables } from 'src/utils/env.types';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<IEnvVariables>) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([CategoryModel]),
  ],
  providers: [PrePopulateDB],
})
export class DbModule implements OnModuleInit {
  constructor(private readonly prePopulateDB: PrePopulateDB) {}

  async onModuleInit() {
    await this.prePopulateDB.run();
  }
}
