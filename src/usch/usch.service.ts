import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Czintylsmt } from './entities/Czintylsmt';
import _ from 'lodash';

@Injectable()
export class UschService {
  constructor(
    @InjectRepository(Czintylsmt)
    private czintylsmtRepository: Repository<Czintylsmt>,
  ) {}
  // CONCAT(CZINTYLSMT.inty_lcls, '/', CZINTYLSMT.inty_type_asst_1, '/', CZINTYLSMT.inty_type_asst_2) AS inty`,
  async getIntyList(): Promise<any> {
    const intyList = await this.czintylsmtRepository
      .createQueryBuilder(`CZINTYLSMT`)
      .select(
        `
        CZINTYLSMT.inty_lcls,
        CZINTYLSMT.inty_type_asst_1,
        CZINTYLSMT.inty_type_asst_2,
        JSON_OBJECT('inty_lcls', CZINTYLSMT.inty_lcls, 'inty_type_asst_1', CZINTYLSMT.inty_type_asst_1, 'inty_type_asst_2', CZINTYLSMT.inty_type_asst_2) AS inty`,
      )
      .distinct(true)
      .getRawMany();

    console.log('intyList', intyList);
    const intyListGrid = {
      selectedItem: '',
      list: [],
    };

    let id = 1;
    intyList.map((data) => {
      if (data.inty_type_asst_2) {
        intyListGrid.list.push({
          CODE: data.inty_lcls,
          NAME: data.inty_lcls,
          ID: id++,
        });
        intyListGrid.list.push({
          CODE: data.inty_type_asst_1,
          NAME: data.inty_type_asst_1,
          PARENT: data.inty_lcls,
          ID: id++,
        });
        intyListGrid.list.push({
          CODE: data.inty_type_asst_2,
          NAME: data.inty_type_asst_2,
          PARENT: data.inty_type_asst_1,
          FULLNAME: data.inty,
          ID: id++,
        });
      } else {
        intyListGrid.list.push({ CODE: data.inty_lcls, NAME: data.inty_lcls });
        intyListGrid.list.push({
          CODE: data.inty_type_asst_1,
          NAME: data.inty_type_asst_1,
          PARENT: data.inty_lcls,
        });
      }
    });

    console.log('intyListGrid.list', intyListGrid.list);
    const newList = _.uniqBy(intyListGrid.list, function (elem) {
      return [elem.CODE, elem.PARENT].join();
    });

    console.log('newList', newList);

    intyListGrid.list = newList;
    return intyListGrid;
  }

  // 검색
  async search(keyword: string): Promise<any> {
    const searchIntyData = await this.czintylsmtRepository
      .createQueryBuilder(`CZINTYLSMT`)
      .select(
        `CZINTYLSMT.inty_lcls,
      CZINTYLSMT.inty_type_asst_1,
      CZINTYLSMT.inty_type_asst_2`,
      )
      .where(`CZINTYLSMT.inty_lcls like :keyword`, { keyword: `%${keyword}%` })
      .orWhere(`CZINTYLSMT.inty_type_asst_1 like :keyword`, {
        keyword: `%${keyword}%`,
      })
      .orWhere(`CZINTYLSMT.inty_type_asst_2 like :keyword`, {
        keyword: `%${keyword}%`,
      })
      .distinct(true)
      .getRawMany();
    return searchIntyData;
  }

  // 한 보험 유형의 데이터 가져오기
  async getIntyDetail(
    lcls: string,
    asst_1: string,
    asst_2: string,
  ): Promise<Czintylsmt[]> {
    const detailData = await this.czintylsmtRepository
      .createQueryBuilder(`CZINTYLSMT`)
      .select(
        `*,
      CONCAT(DATE_FORMAT(STR_TO_DATE(CZINTYLSMT.inty_apdy, '%Y%m%d'),'%Y-%m-%d'), ' ~ ', DATE_FORMAT(STR_TO_DATE(CZINTYLSMT.inty_endy, '%Y%m%d'),'%Y-%m-%d')) AS period`,
      )
      .where(`CZINTYLSMT.inty_lcls = :lcls`, { lcls })
      .andWhere(`CZINTYLSMT.inty_type_asst_1 = :asst_1`, { asst_1 })
      .andWhere(`CZINTYLSMT.inty_type_asst_2 = :asst_2`, { asst_2 })
      // .orderBy('CZINTYLSMT.inty_endy', 'DESC')
      .orderBy(`STR_TO_DATE(CZINTYLSMT.inty_endy, '%Y%m%d')`, 'DESC')
      .getRawMany();

    console.log(detailData);
    return detailData;
  }

  // 보험유형 이력 업데이트(추가)
  async updateIntyDetail(updateData) {
    console.log('service updateData', updateData);
    await this.czintylsmtRepository
      .createQueryBuilder('CZINTYLSMT')
      .insert()
      .values({
        hsptCd: '10230084',
        frstRgstUsid: 'ADMIN',
        lastUpdtUsid: 'ADMIN',
        intyApdy: updateData.inty_apdy,
        intyEndy: updateData.inty_endy,
        intyAdmsOtpt: '외래',
        intyLcls: updateData.inty_lcls,
        intyTypeAsst_1: updateData.inty_type_asst_1,
        intyTypeAsst_2: updateData.inty_type_asst_2,
        bascDrugValuTamt: updateData.basc_drug_valu_tamt,
        bascRcpyExpnTamt: updateData.basc_rcpy_expn_tamt,
        bascHsinMnfc: updateData.basc_hsin_mnfc,
        bascHsinMnfcEtc: updateData.basc_hsin_mnfc_etc,
        dsppDrugValuTamt: updateData.dspp_drug_valu_tamt,
        dsppRcpyExpnTamt: updateData.dspp_rcpy_expn_tamt,
        dsppHsinMnfc: updateData.dspp_hsin_mnfc,
        dsppHsinMnfcEtc: updateData.dspp_hsin_mnfc_etc,
        adfnDrugValuTamt: updateData.adfn_drug_valu_tamt,
        adfnRcpyExpnTamt: updateData.adfn_rcpy_expn_tamt,
        adfnHsinMnfc: updateData.adfn_hsin_mnfc,
        adfnHsinMnfcEtc: updateData.adfn_hsin_mnfc_etc,
        sprtSpclEqpm: updateData.sprt_spcl_eqpm,
        sprtRwmtActn: updateData.sprt_rwmt_actn,
        sprtHptnGlyc: updateData.sprt_hptn_glyc,
        sprtFndgExmn: updateData.sprt_fndg_exmn,
        sprtHpv: updateData.sprt_hpv,
        sprtPsyhThpy: updateData.sprt_psyh_thpy,
        sprtTlcfMcch: updateData.sprt_tlcf_mcch,
      })
      .execute();
  }
}
