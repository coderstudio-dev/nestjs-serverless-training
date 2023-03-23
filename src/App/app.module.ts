import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InterfaceModule } from 'src/Interface/interface.module';
import { DomainModule } from 'src/Domain/domain.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    InterfaceModule,
    DomainModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
