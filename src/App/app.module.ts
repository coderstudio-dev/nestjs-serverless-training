import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from 'src/Domain/domain.module';

//middlewares
import { LoggerMiddleware } from './middlewares/logger.middleware';

// controllers
import { ArticleController } from './controllers/article.controller';
import { ArticleReactionsController } from './controllers/article-reactions.controller';
import { FollowsController } from './controllers/follows.controller';
import { ProfileController } from './controllers/profile.controller';
import { TagsController } from './controllers/tags.controller';
import { AuthController } from './controllers/auth.controller';
import { FavoriteController } from './controllers/favorite.controller';
import { CommentController } from './controllers/comment.controller';

@Module({
  imports: [DomainModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [
    ArticleController,
    ArticleReactionsController,
    FollowsController,
    ProfileController,
    TagsController,
    AuthController,
    FavoriteController,
    CommentController,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
