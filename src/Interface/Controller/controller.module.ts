import { Module } from '@nestjs/common';
import { ArticleController } from './Article/article.controller';
import { TagsController } from './Tag/tags.controller';
import { InfraModule } from 'src/Infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [ArticleController, TagsController],
})
export class ControllerModule {}
