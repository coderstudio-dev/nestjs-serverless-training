import { Module } from '@nestjs/common';
import { ArticleModule } from './Article/article.module';
import { TagsModule } from './Tag/tags.module';

@Module({
  imports: [ArticleModule, TagsModule],
  exports: [ArticleModule, TagsModule],
})
export class RepositoryModule {}
