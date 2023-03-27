import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TagsEntity } from 'src/Domain/Tag/tag.entity';
import { TagsProvider } from 'src/Infra/Repository/Tag/tags.provider';
import { CreateTagDto } from '../dto/Tag/create-tag.dto';
import { UpdateTagDto } from '../dto/Tag/update-tag.dto';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsProvider) {}

  @Post()
  @ApiCreatedResponse({ type: TagsEntity })
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  @ApiOkResponse({ type: TagsEntity, isArray: true })
  findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TagsEntity })
  findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TagsEntity })
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(+id, updateTagDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TagsEntity })
  remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
