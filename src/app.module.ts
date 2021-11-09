import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EdiModule } from './edi/edi.module';
import { UschModule } from './usch/usch.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EdiModule, UschModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
