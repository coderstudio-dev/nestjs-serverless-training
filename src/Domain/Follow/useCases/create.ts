import { ProfileFollows } from '@prisma/client';
import { CreateFollowDto } from 'src/App/dto/Follow/create-follow.dto';

export default interface Create {
  create(createFollowDto: CreateFollowDto): Promise<ProfileFollows>;
}
