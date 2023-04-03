import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateFavoriteDto } from 'src/App/dto/Favorite/create-favorite.dto';
import { UpdateFavoriteDto } from 'src/App/dto/Favorite/update-favorite.dto';
import { GetUniqueFavoriteDto } from 'src/App/dto/Favorite/get-unique-favorite.dto';
import { Favorites } from '@prisma/client';

@Injectable()
export class FavoriteRepository {
  constructor(private db: DatabaseService) {}

  create(createFavoriteDto: CreateFavoriteDto): Promise<Favorites> {
    return this.db.favorites.create({ data: createFavoriteDto });
  }

  update(id: number, updateProfileDto: UpdateFavoriteDto): Promise<Favorites> {
    return this.db.favorites.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  findOne(id: number): Promise<Favorites> {
    return this.db.favorites.findUnique({ where: { id } });
  }

  findByProfileId(profileId: number): Promise<Favorites[]> {
    return this.db.favorites.findMany({ where: { profileId } });
  }

  findByArticleId(articleId: number): Promise<Favorites[]> {
    return this.db.favorites.findMany({ where: { articleId } });
  }

  findByProfileIdAndArticleId(
    getUniqueFavoriteDto: GetUniqueFavoriteDto,
  ): Promise<Favorites> {
    const { articleId, profileId } = getUniqueFavoriteDto;
    return this.db.favorites.findUnique({
      where: { profileId_articleId: { profileId, articleId } },
    });
  }

  remove(id: number): Promise<Favorites> {
    return this.db.favorites.delete({ where: { id } });
  }
}
