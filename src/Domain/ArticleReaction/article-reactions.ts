import { Injectable } from '@nestjs/common';
import { ArticleReactionsEntity } from './article-reaction.entity';

@Injectable()
export class ArticleReaction extends ArticleReactionsEntity {}
