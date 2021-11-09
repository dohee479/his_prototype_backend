import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Czedisgamt } from './entities/Czedisgamt';
import { Czsugmngmt } from './entities/Czsugmngmt';

@Injectable()
export class EdiService {
  constructor(
    @InjectRepository(Czedisgamt)
    private czedisgamtRepository: Repository<Czedisgamt>,
  ) {}

  async findAll(): Promise<any[]> {
    const getLibraryList = await this.czedisgamtRepository
      .createQueryBuilder('CZEDISGAMT')
      .select(
        `CZEDISGAMT.apdy AS 고시일자,
        CZSUGMNGMT.edi_cd AS EDI코드,
        CZEDISGAMT.hnm AS 한글명,
        fn_get_commname('20210831', 'CLB201', CZSUGMNGMT.inpy_dvcd) AS 보험구분,
        fn_get_commname('20210831', 'TEST01', CZEDISGAMT.tchq_dvsn) AS 기재,
        CZEDISGAMT.enm AS 영문명,
        CZEDISGAMT.clic_unpr AS 단가,
        CZEDISGAMT.rlvl_pnt AS 상대가치점수`,
      )
      .from(Czsugmngmt, 'CZSUGMNGMT')
      .where(`CZEDISGAMT.suga_cd = CZSUGMNGMT.suga_cd`)
      .andWhere(`CZSUGMNGMT.suga_endy = '29991231'`)
      // .andWhere(`CZEDISGAMT.chapter_dvsn = '공상'`)
      .limit(10)
      .getRawMany();

    // console.log(getLibraryList);
    return getLibraryList;
  }

  async search(keyword: string): Promise<any[]> {
    const getSearchList = await this.czedisgamtRepository
      .createQueryBuilder('CZEDISGAMT')
      .select(
        `CZEDISGAMT.apdy AS 고시일자,
      CZSUGMNGMT.edi_cd AS EDI코드,
      CZEDISGAMT.hnm AS 한글명,
      fn_get_commname('20210831', 'CLB201', CZSUGMNGMT.inpy_dvcd) AS 보험구분,
      fn_get_commname('20210831', 'TEST01', CZEDISGAMT.tchq_dvsn) AS 기재,
      CZEDISGAMT.enm AS 영문명,
      CZEDISGAMT.clic_unpr AS 단가,
      CZEDISGAMT.rlvl_pnt AS 상대가치점수`,
      )
      .from(Czsugmngmt, 'CZSUGMNGMT')
      .where(`CZEDISGAMT.suga_cd = CZSUGMNGMT.suga_cd`)
      .andWhere(`CZSUGMNGMT.suga_endy = '29991231'`)
      .andWhere(`CZEDISGAMT.suga_cd like :name`, { name: `%${keyword}%` })
      .limit(10)
      .getRawMany();

    // console.log(getSearchList);
    return getSearchList;
  }

  async getEdiCondition(
    chapter: string[],
    insurance: string[],
    group: string[],
    keyword: string,
  ): Promise<any[]> {
    const ediList = await Promise.all(
      insurance.map(async (isr) => {
        const data = await this.czedisgamtRepository
          .createQueryBuilder('CZEDISGAMT')
          .select(
            `CZEDISGAMT.apdy AS 고시일자,
      CZSUGMNGMT.edi_cd AS EDI코드,
      CZEDISGAMT.hnm AS 한글명,
      fn_get_commname('20210831', 'CLB201', ${isr}) AS 보험구분,
      fn_get_commname('20210831', 'TEST01', CZEDISGAMT.tchq_dvsn) AS 기재,
      CZEDISGAMT.enm AS 영문명,
      CZEDISGAMT.clic_unpr AS 단가,
      CZEDISGAMT.rlvl_pnt AS 상대가치점수,
      CZEDISGAMT.chapter_dvsn AS 장구분,
      CZSUGMNGMT.grp_sngl_dvcd AS 그룹싱글`,
          )
          .from(Czsugmngmt, 'CZSUGMNGMT')
          .where(`CZEDISGAMT.suga_cd = CZSUGMNGMT.suga_cd`)
          .andWhere(`CZSUGMNGMT.suga_endy = '29991231'`)
          .andWhere(`CZEDISGAMT.chapter_dvsn IN (:chapter)`, { chapter })
          .andWhere(`CZSUGMNGMT.grp_sngl_dvcd IN (:group)`, { group })
          .andWhere(`CZEDISGAMT.suga_cd like :name`, { name: `%${keyword}%` })
          .limit(10)
          .getRawMany();
        return data;
      }),
    );
    // Array.prototype.concat.apply([], ediList);
    // console.log(Array.prototype.concat.apply([], ediList));
    // console.log(ediList);
    return ediList.flat();
  }
}
