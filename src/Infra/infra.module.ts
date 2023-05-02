import { Module } from '@nestjs/common';
import { DatabaseModule } from './Database/database.module';

// repositories
import { ArticleRepository } from './Repository/article.repository';
import { ArticleTagsRepository } from './Repository/article-tags.repository';
import { ArticleReactionRepository } from './Repository/article-reactions.repository';
import { FollowRepository } from './Repository/follows.repository';
import { ProfileRepository } from './Repository/profile.repository';
import { ProfileRepositoriesRepository } from './Repository/profile-repositories.repository';
import { TagsRepository } from './Repository/tags.repository';
import { AuthRepository } from './Repository/auth.repository';
import { FavoriteRepository } from './Repository/favorite.repository';
import { CommentRepository } from './Repository/comment.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    ArticleRepository,
    ArticleTagsRepository,
    ArticleReactionRepository,
    FollowRepository,
    ProfileRepository,
    ProfileRepositoriesRepository,
    TagsRepository,
    AuthRepository,
    FavoriteRepository,
    CommentRepository,
  ],
  exports: [
    ArticleRepository,
    ArticleTagsRepository,
    ArticleReactionRepository,
    FollowRepository,
    ProfileRepository,
    ProfileRepositoriesRepository,
    TagsRepository,
    AuthRepository,
    FavoriteRepository,
    CommentRepository,
  ],
})
export class InfraModule {}
