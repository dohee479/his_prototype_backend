import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EdiService } from './edi.service';

@Controller('edi')
export class EdiController {
  constructor(private ediService: EdiService) {}

  @Get()
  async findCondition(
    @Query('chapter') chapter: string,
    @Query('insurance') insurance: string,
    @Query('group') group: string,
    @Query('keyword') keyword: string,
  ) {
    let arrayChapter: string[] = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
    ];
    if (chapter) {
      arrayChapter = chapter.split(',');
    }

    const arrayInsurance = insurance.split(',');
    const arrayGroup = group.split(',');

    return await this.ediService.getEdiCondition(
      arrayChapter,
      arrayInsurance,
      arrayGroup,
      keyword,
    );
  }

  @Get()
  findAll() {
    // const chapterKeyword = JSON.parse(chapter);
    // console.log(chapterKeyword);
    // console.log(JSON.parse(chapter));
    // return this.ediService.findAll();
  }

  @Get('/search')
  async search(@Query('keyword') keyword: string): Promise<any[]> {
    return await this.ediService.search(keyword);
  }
}
