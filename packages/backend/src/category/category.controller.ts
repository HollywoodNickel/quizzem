import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryDto } from 'src/category/dto/category.dto';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { PageableQueryDto } from 'src/utils/pageable/dto/pageable-query.dto';
import { PageableDto } from 'src/utils/pageable/dto/pageable.dto';
import { PageableQuery } from 'src/utils/pageable/pageable.query';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories(
    @PageableQuery() query: PageableQueryDto,
  ): Promise<PageableDto<CategoryDto>> {
    return await this.categoryService.getCategories(query);
  }

  @Post()
  async addCategory(@Body() data: CreateCategoryDto): Promise<void> {
    return await this.categoryService.addCategory(data);
  }
}
