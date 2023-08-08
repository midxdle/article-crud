import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Article } from './article.entity';
import { ArticlesService } from './article.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async readBy(@Param('id') id, @Body() articleData: Article): Promise<any> {
    articleData.id = Number(id);
    // articleData.readBy = articleData.readBy + user.email;
    return this.articlesService.update(articleData);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() articleData: Article): Promise<any> {
    console.log(articleData);
    return this.articlesService.create(articleData);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/update')
  async update(@Param('id') id, @Body() articleData: Article): Promise<any> {
    articleData.id = Number(id);
    console.log(articleData);
    return this.articlesService.update(articleData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.articlesService.delete(id);
  }
}
