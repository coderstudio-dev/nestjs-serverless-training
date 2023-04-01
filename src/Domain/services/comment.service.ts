import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCommentDto } from 'src/App/dto/Comment/create-comment.dto';
import { UpdateCommentDto } from 'src/App/dto/Comment/update-comment.dto';
import { GetCommentByArticleDto } from 'src/App/dto/Comment/get-comment-by-article.dto';
import { CommentRepository } from 'src/Infra/Repository/comment.repository';
import { Comments } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private commentRepository: CommentRepository) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comments> {
    const { parentId } = createCommentDto;

    const findParent = await this.findOne(parentId);

    if (!findParent.parentId) {
      return this.commentRepository.create(createCommentDto);
    }

    throw new BadRequestException('Comments can only be one level deep.');
  }

  update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comments> {
    return this.commentRepository.update(id, updateCommentDto);
  }

  findByArticle(
    getCommentByArticleDto: GetCommentByArticleDto,
  ): Promise<Comments[]> {
    return this.commentRepository.findByArticle(getCommentByArticleDto);
  }

  findOne(id: number): Promise<Comments> {
    return this.commentRepository.findOne(id);
  }

  remove(id: number): Promise<Comments> {
    return this.commentRepository.remove(id);
  }
}
