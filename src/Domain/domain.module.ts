import { Module } from '@nestjs/common';
import { InfraModule } from 'src/Infra/infra.module';

//services
import { ArticleService } from './services/article.service';
import { ArticleTagsService } from './services/article-tags.service';
import { ArticleReactionsService } from './services/article-reactions.service';
import { FollowsService } from './services/follows.service';
import { ProfileService } from './services/profile.service';
import { TagsService } from './services/tags.service';
import { ProfileRepositoriesService } from './services/profile-repositories.service';
import { AuthService } from './services/auth.service';
import { Favoriteservice } from './services/favorite.service';
import { CommentService } from './services/comment.service';

@Module({
  imports: [InfraModule],
  providers: [
    ArticleService,
    ArticleTagsService,
    ArticleReactionsService,
    FollowsService,
    ProfileService,
    TagsService,
    ProfileRepositoriesService,
    AuthService,
    Favoriteservice,
    CommentService,
  ],
  exports: [
    ArticleService,
    ArticleTagsService,
    ArticleReactionsService,
    FollowsService,
    ProfileService,
    TagsService,
    ProfileRepositoriesService,
    AuthService,
    Favoriteservice,
    CommentService,
  ],
})
export class DomainModule {}
