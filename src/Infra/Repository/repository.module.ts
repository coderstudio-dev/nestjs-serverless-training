import { Module } from '@nestjs/common';
import { ArticleModule } from './Article/article.module';
import { ArticleReactionsModule } from './ArticleReaction/article-reactions.module';
import { TagsModule } from './Tag/tags.module';

@Module({
  imports: [ArticleModule, ArticleReactionsModule, TagsModule],
  exports: [ArticleModule, ArticleReactionsModule, TagsModule],
})
export class RepositoryModule {}
