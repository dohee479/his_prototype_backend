import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Czintylsmt } from './entities/Czintylsmt';
import { UschController } from './usch.controller';
import { UschService } from './usch.service';

@Module({
  imports: [TypeOrmModule.forFeature([Czintylsmt])],
  controllers: [UschController],
  providers: [UschService],
})
export class UschModule {}
