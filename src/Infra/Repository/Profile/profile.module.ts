import { Module } from '@nestjs/common';
import { ProfileProvider } from './profile.provider';
import { ProfileRepository } from './profile.repository';
import { DatabaseModule } from 'src/Infra/Database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ProfileProvider, ProfileRepository],
  exports: [ProfileProvider],
})
export class ProfileModule {}
