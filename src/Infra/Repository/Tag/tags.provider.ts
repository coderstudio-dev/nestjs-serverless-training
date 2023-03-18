import { Injectable } from '@nestjs/common';
import { CreateTagDto } from 'src/Interface/Controller/Tag/create-tag.dto';
import { UpdateTagDto } from 'src/Interface/Controller/Tag/update-tag.dto';
import { TagsRepository } from './tags.repository';

@Injectable()
export class TagsProvider {
  constructor(private tagRepository: TagsRepository) {}

  create(createArticleDto: CreateTagDto) {
    return this.tagRepository.create(createArticleDto);
  }

  findAll() {
    return this.tagRepository.findAll();
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
