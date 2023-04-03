import { Injectable } from '@nestjs/common';
import { CreateArticleTagDto } from 'src/App/dto/ArticleTag/create-article-tag.dto';
import { UpdateArticleTagDto } from 'src/App/dto/ArticleTag/update-article-tag.dto';
import { ArticleTagsRepository } from 'src/Infra/Repository/article-tags.repository';

@Injectable()
export class ArticleTagsService {
  constructor(private articleTagRepository: ArticleTagsRepository) {}

  create(createArticleTagDto: CreateArticleTagDto) {
    return this.articleTagRepository.create(createArticleTagDto);
  }

  findAll() {
    return this.articleTagRepository.findAll();
  }

  findByArticleId(articleId: number) {
    return this.articleTagRepository.findByArticleId(articleId);
  }

  findByTagId(tagsId: number) {
    return this.articleTagRepository.findByTagId(tagsId);
  }

  findByArticleIdAndTagId(articleTagObj) {
    return this.articleTagRepository.findByArticleIdAndTagId(articleTagObj);
  }

  findOne(id: number) {
    return this.articleTagRepository.findOne(id);
  }

  update(id: number, updateArticleTagDto: UpdateArticleTagDto) {
    return this.articleTagRepository.update(id, updateArticleTagDto);
  }

  remove(id: number) {
    return this.articleTagRepository.remove(id);
  }
}
