import { ArticleTags } from '@prisma/client';

export default interface FindByArticleId {
  findByArticleId(articleId: number): Promise<ArticleTags[]>;
}
