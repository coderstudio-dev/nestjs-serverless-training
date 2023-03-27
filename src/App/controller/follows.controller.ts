import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { FollowsProvider } from 'src/Infra/Repository/Follow/follows.provider';
import { CreateFollowDto } from '../dto/Follow/create-follow.dto';
import { UpdateFollowDto } from '../dto/Follow/update-follow.dto';
import { FollowEntity } from 'src/Domain/Follow/follow.entity';

@Controller('follows')
@ApiTags('follows')
export class FollowsController {
  constructor(private readonly followsProvider: FollowsProvider) {}

  @Post()
  @ApiCreatedResponse({ type: FollowEntity })
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followsProvider.create(createFollowDto);
  }

  @Get()
  @ApiOkResponse({ type: FollowEntity })
  findAll() {
    return this.followsProvider.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FollowEntity })
  findOne(@Param('id') id: string) {
    return this.followsProvider.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FollowEntity })
  update(@Param('id') id: string, @Body() updateFollowDto: UpdateFollowDto) {
    return this.followsProvider.update(+id, updateFollowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followsProvider.remove(+id);
  }
}
