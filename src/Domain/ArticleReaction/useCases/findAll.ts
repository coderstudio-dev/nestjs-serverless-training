import { ArticleReactions } from '@prisma/client';

export default interface FindAll {
  findAll(): Promise<ArticleReactions[]>;
}
