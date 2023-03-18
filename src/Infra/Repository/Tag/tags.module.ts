import { Module } from '@nestjs/common';
import { TagsProvider } from './tags.provider';
import { TagsRepository } from './tags.repository';
import { DatabaseModule } from 'src/Infra/Database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [TagsProvider, TagsRepository],
  exports: [TagsProvider],
})
export class TagsModule {}
