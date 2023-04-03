import { Module } from '@nestjs/common';
import { ArticleTagsProvider } from './article-tags.provider';
import { ArticleTagsRepository } from './article-tags.repository';
import { DatabaseModule } from 'src/Infra/Database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ArticleTagsProvider, ArticleTagsRepository],
  exports: [ArticleTagsProvider],
})
export class ArticleTagsModule {}
