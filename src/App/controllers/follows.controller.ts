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
import { FollowsService } from 'src/Domain/services/follows.service';
import { CreateFollowDto } from '../dto/Follow/create-follow.dto';
import { UpdateFollowDto } from '../dto/Follow/update-follow.dto';
import { FollowEntity } from 'src/Domain/entities/follow.entity';
import { AuthGuard } from '../guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('follows')
@ApiTags('follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Post()
  @ApiCreatedResponse({ type: FollowEntity })
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followsService.create(createFollowDto);
  }

  @Get()
  @ApiOkResponse({ type: FollowEntity })
  findAll() {
    return this.followsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FollowEntity })
  findOne(@Param('id') id: string) {
    return this.followsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FollowEntity })
  update(@Param('id') id: string, @Body() updateFollowDto: UpdateFollowDto) {
    return this.followsService.update(+id, updateFollowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followsService.remove(+id);
  }
}
