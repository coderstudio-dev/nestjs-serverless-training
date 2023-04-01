import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from '../dto/Profile/create-profile.dto';
import { UpdateProfileDto } from '../dto/Profile/update-profile.dto';
import { ProfileEntity } from 'src/Domain/entities/profile.entity';
import { ProfileService } from 'src/Domain/services/profile.service';
import { AuthGuard } from '../guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('profiles')
@ApiTags('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiCreatedResponse({ type: ProfileEntity })
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: ProfileEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ProfileEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update(id, updateProfileDto);
  }

  // @Delete(':id')
  // @ApiOkResponse({ type: ArticleEntity })
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.profileService.remove(id);
  // }
}
