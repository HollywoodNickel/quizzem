import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { CategoryModel } from 'src/question/models/category.model';
import { PageableQueryDto } from 'src/utils/pageable/dto/pageable-query.dto';
import { PageableDto } from 'src/utils/pageable/dto/pageable.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryModel)
    private readonly categoryRepo: Repository<CategoryModel>,
  ) {}

  async getCategories(
    query: PageableQueryDto,
  ): Promise<PageableDto<CategoryModel>> {
    const { page, size } = query;

    const count = await this.categoryRepo.count();
    const categories = await this.categoryRepo.find({
      take: size,
      skip: page * size,
    });

    return new PageableDto({
      data: categories,
      totalElements: count,
      page,
      size,
    });
  }

  async addCategory(data: CreateCategoryDto) {
    const category = this.categoryRepo.create({
      category: data.category,
    });
    await this.categoryRepo.save(category);
  }
}
