import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { categories } from 'src/db/populate-data';
import { CategoryModel } from 'src/question/models/category.model';
import { Repository } from 'typeorm';

@Injectable()
export class PrePopulateDB {
  constructor(
    @InjectRepository(CategoryModel)
    private readonly categoryRepo: Repository<CategoryModel>,
  ) {}

  async run() {
    if ((await this.categoryRepo.count()) > 0) {
      console.log('Database already populated. Skipping pre-population.');
      return;
    }

    console.log('Pre-populating the database...');
    await Promise.all(
      categories.map(async (categoryName) => {
        const category = this.categoryRepo.create({ category: categoryName });
        await this.categoryRepo.save(category);
      }),
    );
    console.log('Database pre-population completed.');
  }
}
