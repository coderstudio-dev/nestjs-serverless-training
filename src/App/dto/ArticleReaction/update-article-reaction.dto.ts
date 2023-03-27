import { PartialType } from '@nestjs/swagger';
import { CreateArticleReactionDto } from './create-article-reaction.dto';

export class UpdateArticleReactionDto extends PartialType(
  CreateArticleReactionDto,
) {}
