import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from 'src/App/dto/Favorite/create-favorite.dto';
import { UpdateFavoriteDto } from 'src/App/dto/Favorite/update-favorite.dto';
import { GetUniqueFavoriteDto } from 'src/App/dto/Favorite/get-unique-favorite.dto';
import { FavoriteRepository } from 'src/Infra/Repository/favorite.repository';
import { Favorites } from '@prisma/client';

@Injectable()
export class Favoriteservice {
  constructor(private favoriteRepository: FavoriteRepository) {}

  create(createFavoriteDto: CreateFavoriteDto): Promise<Favorites> {
    return this.favoriteRepository.create(createFavoriteDto);
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto): Promise<Favorites> {
    return this.favoriteRepository.update(id, updateFavoriteDto);
  }

  findOne(id: number): Promise<Favorites> {
    return this.favoriteRepository.findOne(id);
  }

  findByProfileId(profileId: number): Promise<Favorites[]> {
    return this.favoriteRepository.findByProfileId(profileId);
  }

  findByArticleId(articleId: number): Promise<Favorites[]> {
    return this.favoriteRepository.findByArticleId(articleId);
  }

  findByProfileIdAndArticleId(
    getUniqueFavoriteDto: GetUniqueFavoriteDto,
  ): Promise<Favorites> {
    return this.favoriteRepository.findByProfileIdAndArticleId(
      getUniqueFavoriteDto,
    );
  }

  remove(id: number): Promise<Favorites> {
    return this.favoriteRepository.remove(id);
  }
}
