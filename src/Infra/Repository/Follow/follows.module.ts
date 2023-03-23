import { Module } from '@nestjs/common';
import { FollowsProvider } from './follows.provider';
import { FollowRepository } from './follows.resository';
import { DatabaseModule } from 'src/Infra/Database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [FollowsProvider, FollowRepository],
  exports: [FollowsProvider],
})
export class FollowsModule {}
