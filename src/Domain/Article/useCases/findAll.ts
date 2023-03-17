import { Article } from '@prisma/client';

export default interface FindAll {
  findAll(): Promise<Article[]>;
}
