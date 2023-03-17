import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from 'src/Interface/Controller/Article/create-article.dto';
import { UpdateArticleDto } from 'src/Interface/Controller/Article/update-article.dto';
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

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articleRepository.remove(id);
  }
}