import { ArticleReactions } from '@prisma/client';

export default interface FindOne {
  findOne(id: number): Promise<ArticleReactions>;
}
