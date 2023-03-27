import { Tags } from '@prisma/client';
import { UpdateTagDto } from 'src/App/dto/Tag/update-tag.dto';

export default interface Update {
  update(id: number, updateTagDto: UpdateTagDto): Promise<Tags>;
}
