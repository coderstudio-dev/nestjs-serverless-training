import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  //Delete,
  //UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from './create-profile.dto';
import { UpdateProfileDto } from './update-profile.dto';
import { ProfileEntity } from 'src/Domain/Profile/profile.entity';
import { ProfileProvider } from 'src/Infra/Repository/Profile/profile.provider';
//import { AuthGuard } from 'src/App/auth/auth.guard';

@Controller('profiles')
@ApiTags('profiles')
export class ProfileController {
  constructor(private readonly profileProvider: ProfileProvider) {}

  @Post()
  @ApiCreatedResponse({ type: ProfileEntity })
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileProvider.create(createProfileDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: ProfileEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.profileProvider.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ProfileEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileProvider.update(id, updateProfileDto);
  }

  // @Delete(':id')
  // @ApiOkResponse({ type: ArticleEntity })
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.profileProvider.remove(id);
  // }
}
