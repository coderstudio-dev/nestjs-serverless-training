import { Injectable } from '@nestjs/common';
import { ArticleEntity } from './article.entity';

@Injectable()
export class Article extends ArticleEntity {}
