import { Module } from '@nestjs/common';
import { ArticleController } from './Article/article.controller';
import { ArticleReactionsController } from './ArticleReaction/article-reactions.controller';
import { TagsController } from './Tag/tags.controller';
import { InfraModule } from 'src/Infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [ArticleController, ArticleReactionsController, TagsController],
})
export class ControllerModule {}
