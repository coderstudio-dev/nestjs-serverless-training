import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleReactionsEntity } from 'src/Domain/ArticleReaction/article-reaction.entity';
import { ArticleReactionsProvider } from 'src/Infra/Repository/ArticleReaction/article-reactions.provider';
import { CreateArticleReactionDto } from './create-article-reaction.dto';
import { UpdateArticleReactionDto } from './update-article-reaction.dto';

@Controller('article-reactions')
@ApiTags('article-reactions')
export class ArticleReactionsController {
  constructor(
    private readonly articleReactionsProvider: ArticleReactionsProvider,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleReactionsEntity })
  create(@Body() createArticleReactionDto: CreateArticleReactionDto) {
    return this.articleReactionsProvider.create(createArticleReactionDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ArticleReactionsEntity, isArray: true })
  findAll() {
    return this.articleReactionsProvider.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleReactionsEntity })
  findOne(@Param('id') id: string) {
    return this.articleReactionsProvider.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ArticleReactionsEntity })
  update(
    @Param('id') id: string,
    @Body() updateArticleReactionDto: UpdateArticleReactionDto,
  ) {
    return this.articleReactionsProvider.update(+id, updateArticleReactionDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleReactionsEntity })
  remove(@Param('id') id: string) {
    return this.articleReactionsProvider.remove(+id);
  }
}
