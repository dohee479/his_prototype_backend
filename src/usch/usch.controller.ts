import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Czintylsmt } from './entities/Czintylsmt';
import { UschService } from './usch.service';

@Controller('usch')
export class UschController {
  constructor(private uschService: UschService) {}

  @Get()
  async getIntyList(): Promise<any> {
    return await this.uschService.getIntyList();
  }

  @Get('/search')
  async searchInty(@Query('keyword') keyword: string): Promise<any> {
    return await this.uschService.search(keyword);
  }

  @Get(':lcls/:asst_1/:asst_2')
  async getIntyDetail(
    @Param('lcls') lcls: string,
    @Param('asst_1') asst_1: string,
    @Param('asst_2') asst_2: string,
  ): Promise<Czintylsmt[]> {
    return await this.uschService.getIntyDetail(lcls, asst_1, asst_2);
  }

  @Post()
  async updateIntyDetail(@Body() updateData) {
    await this.uschService.updateIntyDetail(updateData);
  }
}
