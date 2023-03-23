import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FollowsProvider } from 'src/Infra/Repository/Follow/follows.provider';
import { CreateFollowDto } from './create-follow.dto';
import { UpdateFollowDto } from './update-follow.dto';

@Controller('follows')
export class FollowsController {
  constructor(private readonly followsProvider: FollowsProvider) {}

  @Post()
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followsProvider.create(createFollowDto);
  }

  @Get()
  findAll() {
    return this.followsProvider.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followsProvider.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFollowDto: UpdateFollowDto) {
    return this.followsProvider.update(+id, updateFollowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followsProvider.remove(+id);
  }
}
