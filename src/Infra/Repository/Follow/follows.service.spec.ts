import { Test, TestingModule } from '@nestjs/testing';
import { FollowsProvider } from './follows.provider';

describe('FollowsService', () => {
  let service: FollowsProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowsProvider],
    }).compile();

    service = module.get<FollowsProvider>(FollowsProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
