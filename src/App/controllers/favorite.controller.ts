import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateFavoriteDto } from '../dto/Favorite/create-favorite.dto';
import { UpdateFavoriteDto } from '../dto/Favorite/update-favorite.dto';
import { GetUniqueFavoriteDto } from '../dto/Favorite/get-unique-favorite.dto';
import { FavoriteEntity } from 'src/Domain/entities/favorite.entity';
import { Favoriteservice } from 'src/Domain/services/favorite.service';
import { AuthGuard } from '../guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('favorites')
@ApiTags('favorites')
export class FavoriteController {
  constructor(private readonly favoriteservice: Favoriteservice) {}

  @Post()
  @ApiCreatedResponse({ type: FavoriteEntity })
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteservice.create(createFavoriteDto);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FavoriteEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFavoriteDto: UpdateFavoriteDto,
  ) {
    return this.favoriteservice.update(id, updateFavoriteDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: FavoriteEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.favoriteservice.findOne(id);
  }

  @Get(':profileId')
  @ApiOkResponse({ type: [FavoriteEntity] })
  findByProfileId(@Param('profileId', ParseIntPipe) profileId: number) {
    return this.favoriteservice.findByProfileId(profileId);
  }

  @Get(':articleId')
  @ApiOkResponse({ type: [FavoriteEntity] })
  findByArticleId(@Param('articleId', ParseIntPipe) articleId: number) {
    return this.favoriteservice.findByArticleId(articleId);
  }

  @Get()
  @ApiOkResponse({ type: FavoriteEntity })
  findByProfileIdAndArticleId(
    @Body() getUniqueFavoriteDto: GetUniqueFavoriteDto,
  ) {
    return this.favoriteservice.findByProfileIdAndArticleId(
      getUniqueFavoriteDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: FavoriteEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.favoriteservice.remove(id);
  }
}
