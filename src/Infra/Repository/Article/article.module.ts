import { Module } from '@nestjs/common';
import { ArticleProvider } from './article.provider';
import { ArticleRepository } from './article.repository';
import { DatabaseModule } from 'src/Infra/Database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ArticleProvider, ArticleRepository],
  exports: [ArticleProvider],
})
export class ArticleModule {}
