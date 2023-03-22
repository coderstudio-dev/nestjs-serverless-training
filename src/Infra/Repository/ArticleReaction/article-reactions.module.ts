import { Module } from '@nestjs/common';
import { ArticleReactionsProvider } from './article-reactions.provider';
import { ArticleReactionRepository } from './article-reactions.repository';
import { DatabaseModule } from 'src/Infra/Database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ArticleReactionsProvider, ArticleReactionRepository],
  exports: [ArticleReactionsProvider],
})
export class ArticleReactionsModule {}
