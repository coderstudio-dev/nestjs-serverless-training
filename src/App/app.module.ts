import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { InfraModule } from 'src/Infra/infra.module';

// controllers
import { ArticleController } from './controller/article.controller';
import { ArticleReactionsController } from './controller/article-reactions.controller';
import { FollowsController } from './controller/follows.controller';
import { ProfileController } from './controller/profile.controller';
import { TagsController } from './controller/tags.controller';

@Module({
  imports: [InfraModule, AuthModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [
    ArticleController,
    ArticleReactionsController,
    FollowsController,
    ProfileController,
    TagsController,
  ],
})
export class AppModule {}
