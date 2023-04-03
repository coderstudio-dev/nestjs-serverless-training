import { Module } from '@nestjs/common';
import { ArticleModule } from './Article/article.module';
import { ArticleReactionsModule } from './ArticleReaction/article-reactions.module';
import { TagsModule } from './Tag/tags.module';
import { FollowsModule } from './Follow/follows.module';
import { ArticleTagsModule } from './ArticleTag/article-tags.module';

@Module({
  imports: [
    ArticleModule,
    ArticleReactionsModule,
    ArticleTagsModule,
    TagsModule,
    FollowsModule,
  ],
  exports: [
    ArticleModule,
    ArticleReactionsModule,
    ArticleTagsModule,
    TagsModule,
    FollowsModule,
  ],
})
export class DomainModule {}
