import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from 'src/category/dts/create-category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories(): Promise<any> {
    return await this.categoryService.getCategories();
  }

  @Post()
  async addCategory(@Body() data: CreateCategoryDto): Promise<void> {
    return await this.categoryService.addCategory(data);
  }
}
