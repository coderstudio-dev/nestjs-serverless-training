import { Module } from '@nestjs/common';
import { ArticleController } from './Article/article.controller';
import { InfraModule } from 'src/Infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [ArticleController],
})
export class ControllerModule {}
