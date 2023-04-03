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
import { ArticleEntity } from 'src/Domain/Article/article.entity';
import { ArticleProvider } from 'src/Infra/Repository/Article/article.provider';
import { TagsProvider } from 'src/Infra/Repository/Tag/tags.provider';
import { ArticleTagsProvider } from 'src/Infra/Repository/ArticleTag/article-tags.provider';
import { AuthGuard } from 'src/App/auth/auth.guard';
@Controller('articles')
@ApiTags('articles')
export class ArticleController {
  constructor(
    private readonly articleProvider: ArticleProvider,
    private readonly tagsProvider: TagsProvider,
    private readonly articleTagsProvider: ArticleTagsProvider,
  ) {}

  async articleTagFn(articleId, isExistTag, tagName) {
    let tagId;
    if (!isExistTag) {
      // create record tags
      const tagData = {
        name: tagName,
        tagCount: 1,
      };
      const newTagData = await this.tagsProvider.create(tagData);
      tagId = newTagData.id;
    } else {
      tagId = isExistTag.id;
    }
    // check if exist
    const articleTagsData =
      await this.articleTagsProvider.findByArticleIdAndTagId({
        articleId,
        tagsId: tagId,
      });
    // checker to not duplicate article tags
    if (!articleTagsData.length) {
      // insert to article tags
      await this.articleTagsProvider.create({
        articleId,
        tagsId: tagId,
        createdAt: new Date(),
      });
    }

    // update tagCount
    if (isExistTag && !articleTagsData.length) {
      const newTagCount = isExistTag.tagCount + 1;
      await this.tagsProvider.update(tagId, { tagCount: newTagCount });
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
    const newArticle = await this.articleProvider.create(rawReqBody);
    const articleId = newArticle.id;
    if (reqArticleTags.length > 0) {
      // get tags
      const articleTags = reqArticleTags.includes(',')
        ? reqArticleTags.split(',')
        : reqArticleTags;
      if (Array.isArray(articleTags)) {
        articleTags.forEach(async (t) => {
          const isExistTag = await this.tagsProvider.findByName(t);
          await this.articleTagFn(articleId, isExistTag, t);
        });
      } else {
        const isExistTag = await this.tagsProvider.findByName(articleTags);
        await this.articleTagFn(articleId, isExistTag, articleTags);
      }
    }
    // get tags if exists
    const test = await this.articleProvider.findManyWithTags(articleId);
    console.log(test);
    return test;
    // return this.articleProvider.create(createArticleDto);
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articleProvider.findAll();
  }

  // @UseGuards(AuthGuard)
  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    const articleData = this.articleProvider.findDrafts();
    console.log(articleData);
    return articleData;
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articleProvider.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ArticleEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleProvider.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.articleProvider.remove(id);
  }
}
