import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EdiController } from './edi.controller';
import { EdiService } from './edi.service';
import { Czedidrpmt } from './entities/Czedidrpmt';
import { Czedisgamt } from './entities/Czedisgamt';

@Module({
  imports: [TypeOrmModule.forFeature([Czedisgamt])],
  controllers: [EdiController],
  providers: [EdiService],
})
export class EdiModule {}
