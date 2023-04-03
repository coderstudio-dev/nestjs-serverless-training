import { ArticleTags } from '@prisma/client';

export default interface FindByArticleIdAndTagId {
  findByArticleId({ articleId, tagsId }): Promise<ArticleTags>;
}
