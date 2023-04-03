import { Injectable } from '@nestjs/common';
import { CreateTagDto } from 'src/App/dto/Tag/create-tag.dto';
import { UpdateTagDto } from 'src/App/dto/Tag/update-tag.dto';
import { TagsRepository } from '../../Infra/Repository/tags.repository';

@Injectable()
export class TagsService {
  constructor(private tagRepository: TagsRepository) {}

  create(createArticleDto: CreateTagDto) {
    return this.tagRepository.create(createArticleDto);
  }

  findAll() {
    return this.tagRepository.findAll();
  }
  findByName(name: string) {
    return this.tagRepository.findByName(name);
  }

  findOne(id: number) {
    return this.tagRepository.findOne(id);
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagRepository.update(id, updateTagDto);
  }

  remove(id: number) {
    return this.tagRepository.remove(id);
  }
}