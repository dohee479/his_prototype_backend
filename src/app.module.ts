import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EdiModule } from './edi/edi.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EdiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
