import { Module } from '@nestjs/common';
import { InterfaceModule } from 'src/Interface/interface.module';
import { DomainModule } from 'src/Domain/domain.module';

@Module({
  imports: [InterfaceModule, DomainModule],
  exports: [InterfaceModule],
})
export class AppModule {}
