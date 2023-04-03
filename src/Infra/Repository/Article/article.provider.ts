import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from 'src/App/dto/Article/create-article.dto';
import { UpdateArticleDto } from 'src/App/dto/Article/update-article.dto';
import { ArticleRepository } from './article.repository';

@Injectable()
export class ArticleProvider {
  constructor(private articleRepository: ArticleRepository) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.create(createArticleDto);
  }

  findDrafts() {
    return this.articleRepository.findDrafts();
  }

  findAll() {
    return this.articleRepository.findAll();
  }

  findOne(id: number) {
    return this.articleRepository.findOne(id);
  }

  findManyWithTags(id: number) {
    return this.articleRepository.findManyWithTags(id);
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articleRepository.remove(id);
  }
}
