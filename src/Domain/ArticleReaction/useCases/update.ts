import { ArticleReactions } from '@prisma/client';
import { UpdateArticleReactionDto } from 'src/Interface/Controller/ArticleReaction/update-article-reaction.dto';

export default interface Update {
  update(
    id: number,
    updateArticleReactionDto: UpdateArticleReactionDto,
  ): Promise<ArticleReactions>;
}
