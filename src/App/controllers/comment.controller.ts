import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { CommentService } from 'src/Domain/services/comment.service';
import { CreateCommentDto } from '../dto/Comment/create-comment.dto';
import { UpdateCommentDto } from '../dto/Comment/update-comment.dto';
import { GetCommentByArticleDto } from '../dto/Comment/get-comment-by-article.dto';
import { CommentEntity } from 'src/Domain/entities/comment.entity';
import { AuthGuard } from '../guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('comments')
@ApiTags('comments')
export class CommentController {
  constructor(private readonly commentsService: CommentService) {}

  @Post()
  @ApiCreatedResponse({ type: CommentEntity })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get('article/:articleId')
  @ApiCreatedResponse({ type: [CommentEntity] })
  findByArticle(@Body() getCommentByArticleDto: GetCommentByArticleDto) {
    return this.commentsService.findByArticle(getCommentByArticleDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: CommentEntity })
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CommentEntity })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
