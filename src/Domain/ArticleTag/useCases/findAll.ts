import { ArticleTags } from '@prisma/client';

export default interface FindAll {
  findAll(): Promise<ArticleTags[]>;
}
