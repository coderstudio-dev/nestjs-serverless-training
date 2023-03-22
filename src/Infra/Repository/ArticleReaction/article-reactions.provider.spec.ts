import { Test, TestingModule } from '@nestjs/testing';
import { ArticleReactionsProvider } from './article-reactions.provider';

describe('ArticleReactionsProvider', () => {
  let service: ArticleReactionsProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleReactionsProvider],
    }).compile();

    service = module.get<ArticleReactionsProvider>(ArticleReactionsProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
