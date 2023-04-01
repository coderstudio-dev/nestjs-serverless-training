import { Favorites } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FavoriteEntity implements Favorites {
  @ApiProperty()
  id: number;

  @ApiProperty()
  profileId: number;

  @ApiProperty()
  articleId: number;
}
