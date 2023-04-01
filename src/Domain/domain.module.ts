import { Module } from '@nestjs/common';
import { InfraModule } from 'src/Infra/infra.module';

//services
import { ArticleService } from './services/article.service';
import { ArticleReactionsService } from './services/article-reactions.service';
import { FollowsService } from './services/follows.service';
import { ProfileService } from './services/profile.service';
import { TagsService } from './services/tags.service';
import { ProfileRepositoriesService } from './services/profile-repositories.service';
import { UserService } from './services/user.service';

@Module({
  imports: [InfraModule],
  providers: [
    ArticleService,
    ArticleReactionsService,
    FollowsService,
    ProfileService,
    TagsService,
    ProfileRepositoriesService,
    UserService,
  ],
  exports: [
    ArticleService,
    ArticleReactionsService,
    FollowsService,
    ProfileService,
    TagsService,
    ProfileRepositoriesService,
    UserService,
  ],
})
export class DomainModule {}
