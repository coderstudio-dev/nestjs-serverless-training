import { ArticleReactions } from '@prisma/client';
import { CreateArticleReactionDto } from 'src/Interface/Controller/ArticleReaction/create-article-reaction.dto';

export default interface Create {
  create(
    createArticleReactionDto: CreateArticleReactionDto,
  ): Promise<ArticleReactions>;
}
