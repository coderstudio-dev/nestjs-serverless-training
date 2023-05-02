export abstract class BaseRepository<TPrismaEntity> {
  protected readonly prismaEntityService;

  constructor(protected readonly entityService) {
    this.prismaEntityService = entityService;
  }

  async create({ ...args }: Partial<TPrismaEntity>): Promise<TPrismaEntity> {
    return await this.prismaEntityService.create({ data: args });
  }

  protected async findMany({ ...args }: Partial<TPrismaEntity> = {}): Promise<
    TPrismaEntity[]
  > {
    return await this.prismaEntityService.findMany({ where: args });
  }

  protected async findOne({
    ...args
  }: Partial<TPrismaEntity>): Promise<TPrismaEntity> {
    return await this.prismaEntityService.findUnique({ where: args });
  }

  async update(
    { ...conditions }: Partial<TPrismaEntity>,
    data: Partial<TPrismaEntity>,
  ): Promise<TPrismaEntity> {
    return await this.entityService.update({
      where: conditions,
      data,
    });
  }

  async remove(id: number): Promise<TPrismaEntity> {
    return await this.prismaEntityService.delete({ where: id });
  }
}
