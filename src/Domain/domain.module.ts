import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { InfraModule } from 'src/Infra/infra.module';

//services
import { ArticleService } from './services/article.service';
import { ArticleTagsService } from './services/article-tags.service';
import { ArticleReactionsService } from './services/article-reactions.service';
import { FollowsService } from './services/follows.service';
import { ProfileService } from './services/profile.service';
import { TagsService } from './services/tags.service';
import { ProfileRepositoriesService } from './services/profile-repositories.service';
import { UserService } from './services/user.service';
import { Favoriteservice } from './services/favorite.service';
import { CommentService } from './services/comment.service';

@Module({
  imports: [
    InfraModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '24h' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    ArticleService,
    ArticleTagsService,
    ArticleReactionsService,
    FollowsService,
    ProfileService,
    TagsService,
    ProfileRepositoriesService,
    UserService,
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
    UserService,
    Favoriteservice,
    CommentService,
  ],
})
export class DomainModule {}
