import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from 'src/Domain/domain.module';

//middlewares
import { LoggerMiddleware } from './middlewares/logger.middleware';

// controllers
import { ArticleController } from './controller/article.controller';
import { ArticleReactionsController } from './controller/article-reactions.controller';
import { FollowsController } from './controller/follows.controller';
import { ProfileController } from './controller/profile.controller';
import { TagsController } from './controller/tags.controller';
import { UserController } from './controller/user.controller';

@Module({
  imports: [DomainModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [
    ArticleController,
    ArticleReactionsController,
    FollowsController,
    ProfileController,
    TagsController,
    UserController,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
