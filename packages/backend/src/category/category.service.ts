import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/category/dts/create-category.dto';
import { CategoryModel } from 'src/question/models/category.model';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryModel)
    private readonly categoryRepo: Repository<CategoryModel>,
  ) {}

  async getCategories() {
    return await this.categoryRepo.find({ take: 5 });
  }

  async addCategory(data: CreateCategoryDto) {
    const category = this.categoryRepo.create({
      category: data.category,
    });
    await this.categoryRepo.save(category);
  }
}
