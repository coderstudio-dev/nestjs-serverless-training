import { Injectable } from '@nestjs/common';
import { CreateArticleReactionDto } from 'src/Interface/Controller/ArticleReaction/create-article-reaction.dto';
import { UpdateArticleReactionDto } from 'src/Interface/Controller/ArticleReaction/update-article-reaction.dto';
import { ArticleReactionRepository } from './article-reactions.repository';

@Injectable()
export class ArticleReactionsProvider {
  constructor(private articleReactionRepository: ArticleReactionRepository) {}

  create(createArticleReactionDto: CreateArticleReactionDto) {
    return this.articleReactionRepository.create(createArticleReactionDto);
  }

  findAll() {
    return this.articleReactionRepository.findAll();
  }

  findOne(id: number) {
    return this.articleReactionRepository.findOne(id);
  }

  update(id: number, updateArticleReactionDto: UpdateArticleReactionDto) {
    return this.articleReactionRepository.update(id, updateArticleReactionDto);
  }

  remove(id: number) {
    return this.articleReactionRepository.remove(id);
  }
}
