import { ArticleReactions } from '@prisma/client';

export default interface Remove {
  remove(id: number): Promise<ArticleReactions>;
}
