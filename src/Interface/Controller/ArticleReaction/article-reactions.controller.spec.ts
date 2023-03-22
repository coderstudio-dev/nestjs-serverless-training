import { Test, TestingModule } from '@nestjs/testing';
import { ArticleReactionsController } from './article-reactions.controller';
import { ArticleReactionsService } from './article-reactions.provider';

describe('ArticleReactionsController', () => {
  let controller: ArticleReactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleReactionsController],
      providers: [ArticleReactionsService],
    }).compile();

    controller = module.get<ArticleReactionsController>(ArticleReactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
