import { Tags } from '@prisma/client';
import { CreateTagDto } from 'src/App/dto/Tag/create-tag.dto';

export default interface Create {
  create(createTagDto: CreateTagDto): Promise<Tags>;
}
