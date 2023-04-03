import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateArticleDto } from '../dto/Article/create-article.dto';
import { CreateArticleFullDto } from '../dto/Article/create-article-full.dto';
import { UpdateArticleDto } from '../dto/Article/update-article.dto';
import { ArticleEntity } from 'src/Domain/entities/article.entity';
import { ArticleService } from 'src/Domain/services/article.service';
import { AuthGuard } from '../guards/auth.guard';
import { TagsService } from 'src/Domain/services/tags.service';
import { ArticleTagsService } from 'src/Domain/services/article-tags.service';
@Controller('articles')
@ApiTags('articles')
export class ArticleController {
  constructor(
    private readonly tagsService: TagsService,
    private readonly articleTagsService: ArticleTagsService,
    private readonly articleService: ArticleService,
  ) {}
  async articleTagFn(articleId, isExistTag, tagName) {
    let tagId;
    if (!isExistTag) {
      // create record tags
      const tagData = {
        name: tagName,
        tagCount: 1,
      };
      const newTagData = await this.tagsService.create(tagData);
      tagId = newTagData.id;
    } else {
      tagId = isExistTag.id;
    }
    // check if exist
    const articleTagsData =
      await this.articleTagsService.findByArticleIdAndTagId({
        articleId,
        tagsId: tagId,
      });
    // checker to not duplicate article tags
    if (!articleTagsData.length) {
      // insert to article tags
      await this.articleTagsService.create({
        articleId,
        tagsId: tagId,
        createdAt: new Date(),
      });
    }

    // update tagCount
    if (isExistTag && !articleTagsData.length) {
      const newTagCount = isExistTag.tagCount + 1;
      await this.tagsService.update(tagId, { tagCount: newTagCount });
    }
  }
  @Post()
  // @ApiCreatedResponse({ type: ArticleEntity })
  async create(@Body() createArticleFullDto: CreateArticleFullDto) {
    const reqBody = JSON.parse(JSON.stringify(createArticleFullDto));
    const rawReqBody = reqBody;
    const dateToday = new Date();
    // set data for article
    let reqArticleTags = '';
    if (rawReqBody.hasOwnProperty('articleTags')) {
      reqArticleTags = rawReqBody.articleTags;
      delete rawReqBody.articleTags;
    }
    const getTitle = rawReqBody.title;
    const rawSlug = getTitle.replace(/[^a-zA-Z0-9 ]/g, '');
    rawReqBody.slug = rawSlug.replace(/\s+/g, '-').toLowerCase();
    rawReqBody.createdAt = dateToday;
    rawReqBody.createdBy = rawReqBody.profileId;
    rawReqBody.updatedAt = dateToday;
    rawReqBody.updatedBy = rawReqBody.profileId;
    // TODO insert new article
    const newArticle = await this.articleService.create(rawReqBody);
    const articleId = newArticle.id;
    if (reqArticleTags.length > 0) {
      // get tags
      const articleTags = reqArticleTags.includes(',')
        ? reqArticleTags.split(',')
        : reqArticleTags;
      if (Array.isArray(articleTags)) {
        articleTags.forEach(async (t) => {
          const isExistTag = await this.tagsService.findByName(t);
          await this.articleTagFn(articleId, isExistTag, t);
        });
      } else {
        const isExistTag = await this.tagsService.findByName(articleTags);
        await this.articleTagFn(articleId, isExistTag, articleTags);
      }
    }
    // get tags if exists
    const test = await this.articleService.findManyWithTags(articleId);
    console.log(test);
    return test;
    // return this.articleService.create(createArticleDto);
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articleService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    return this.articleService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ArticleEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.remove(id);
  }
}
