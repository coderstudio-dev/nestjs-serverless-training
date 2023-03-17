import { Module } from '@nestjs/common';
import { ArticleModule } from './Article/article.module';

@Module({
  imports: [ArticleModule],
  exports: [ArticleModule],
})
export class RepositoryModule {}
