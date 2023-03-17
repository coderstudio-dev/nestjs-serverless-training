import { Article } from '@prisma/client';

export default interface FindDrafts {
  findDrafts(): Promise<Article[]>;
}
