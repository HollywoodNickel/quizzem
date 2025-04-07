import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { DbModule } from 'src/db/db.module';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(process.cwd(), '../..', '.env.development'),
    }),
    DbModule,
    QuestionModule,
    CategoryModule,
  ],
})
export class AppModule {}
