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
import { ArticleReactionsEntity } from 'src/Domain/entities/article-reaction.entity';
import { ArticleReactionsService } from 'src/Domain/services/article-reactions.service';
import { CreateArticleReactionDto } from '../dto/ArticleReaction/create-article-reaction.dto';
import { UpdateArticleReactionDto } from '../dto/ArticleReaction/update-article-reaction.dto';

@Controller('article-reactions')
@ApiTags('article-reactions')
export class ArticleReactionsController {
  constructor(
    private readonly articleReactionsService: ArticleReactionsService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleReactionsEntity })
  create(@Body() createArticleReactionDto: CreateArticleReactionDto) {
    return this.articleReactionsService.create(createArticleReactionDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ArticleReactionsEntity, isArray: true })
  findAll() {
    return this.articleReactionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleReactionsEntity })
  findOne(@Param('id') id: string) {
    return this.articleReactionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ArticleReactionsEntity })
  update(
    @Param('id') id: string,
    @Body() updateArticleReactionDto: UpdateArticleReactionDto,
  ) {
    return this.articleReactionsService.update(+id, updateArticleReactionDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleReactionsEntity })
  remove(@Param('id') id: string) {
    return this.articleReactionsService.remove(+id);
  }
}
