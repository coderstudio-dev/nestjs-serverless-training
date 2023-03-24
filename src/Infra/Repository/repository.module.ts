import { Module } from '@nestjs/common';
import { ArticleModule } from './Article/article.module';
import { ArticleReactionsModule } from './ArticleReaction/article-reactions.module';
import { TagsModule } from './Tag/tags.module';
import { FollowsModule } from './Follow/follows.module';
import { ProfileModule } from './Profile/profile.module';

@Module({
  imports: [
    ArticleModule,
    ArticleReactionsModule,
    TagsModule,
    FollowsModule,
    ProfileModule,
  ],
  exports: [
    ArticleModule,
    ArticleReactionsModule,
    TagsModule,
    FollowsModule,
    ProfileModule,
  ],
})
export class RepositoryModule {}
