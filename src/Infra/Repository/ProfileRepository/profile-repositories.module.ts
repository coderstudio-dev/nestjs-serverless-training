import { Module } from '@nestjs/common';
import { ProfileProvider } from './profile-repositories.provider';
import { ProfileRepository } from './profile-repositories.repository';
import { DatabaseModule } from 'src/Infra/Database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ProfileProvider, ProfileRepository],
  exports: [ProfileProvider],
})
export class ProfileModule {}
