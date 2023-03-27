import { Injectable } from '@nestjs/common';
import { CreateFollowDto } from 'src/App/dto/Follow/create-follow.dto';
import { UpdateFollowDto } from 'src/App/dto/Follow/update-follow.dto';
import { FollowRepository } from './follows.repository';

@Injectable()
export class FollowsProvider {
  constructor(private followRepository: FollowRepository) {}

  create(createFollowDto: CreateFollowDto) {
    return this.followRepository.create(createFollowDto);
  }

  findAll() {
    return this.followRepository.findAll();
  }

  findOne(id: number) {
    return this.followRepository.findOne(id);
  }

  update(id: number, updateFollowDto: UpdateFollowDto) {
    return this.followRepository.update(id, updateFollowDto);
  }

  remove(id: number) {
    return this.followRepository.remove(id);
  }
}
