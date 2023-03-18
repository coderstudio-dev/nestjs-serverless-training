import { Module } from '@nestjs/common';
import { TagsProvider } from 'src/Infra/Repository/Tag/tags.provider';
import { TagsController } from 'src/Interface/Controller/Tag/tags.controller';

@Module({
  controllers: [TagsController],
  providers: [TagsProvider],
})
export class TagsModule {}
