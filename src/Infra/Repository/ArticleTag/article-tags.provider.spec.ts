import { Test, TestingModule } from '@nestjs/testing';
import { TagsProvider } from './article-tags.provider';

describe('TagsService', () => {
  let service: TagsProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagsProvider],
    }).compile();

    service = module.get<TagsProvider>(TagsProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
