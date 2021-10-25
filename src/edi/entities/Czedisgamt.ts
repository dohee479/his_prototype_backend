// EDI 수가
import { Column, Entity } from 'typeorm';

@Entity('czedisgamt', { schema: 'cli' })
export class Czedisgamt {
  @Column('varchar', { name: 'hspt_cd', comment: '병원코드', length: 20 })
  hsptCd: string;

  @Column('varchar', {
    name: 'frst_rgst_usid',
    comment: '최초등록사용자id',
    length: 20,
  })
  frstRgstUsid: string;

  @Column('datetime', {
    name: 'frst_rgdt',
    comment: '최초등록일시',
    default: () => "'2000-00-06 00:00:00'",
  })
  frstRgdt: Date;

  @Column('varchar', {
    name: 'last_updt_usid',
    comment: '최종수정사용자id',
    length: 20,
  })
  lastUpdtUsid: string;

  @Column('datetime', {
    name: 'last_uddt',
    comment: '최종수정일시',
    default: () => "'2000-00-06 00:00:00'",
  })
  lastUddt: Date;

  @Column('varchar', {
    primary: true,
    name: 'suga_cd',
    nullable: false,
    comment: '수가코드',
    length: 8,
  })
  sugaCd: string | null;

  @Column('varchar', {
    name: 'apdy',
    nullable: true,
    comment: '적용일자',
    length: 10,
  })
  apdy: string | null;

  @Column('varchar', {
    name: 'clsf_no',
    nullable: true,
    comment: '분류번호',
    length: 17,
  })
  clsfNo: string | null;

  @Column('varchar', {
    name: 'hnm',
    nullable: true,
    comment: '한글명',
    length: 500,
  })
  hnm: string | null;

  @Column('varchar', {
    name: 'enm',
    nullable: true,
    comment: '영문명',
    length: 500,
  })
  enm: string | null;

  @Column('varchar', {
    name: 'tchq_dvsn',
    nullable: true,
    comment: '1-2 구분',
    length: 1,
  })
  tchqDvsn: string | null;

  @Column('varchar', {
    name: 'op_yn',
    nullable: true,
    comment: '수술여부',
    length: 1,
  })
  opYn: string | null;

  @Column('varchar', {
    name: 'clic_unpr',
    nullable: true,
    comment: '의원 단가',
    length: 8,
  })
  clicUnpr: string | null;

  @Column('varchar', {
    name: 'hspt_unpr',
    nullable: true,
    comment: '병원급 이상 단가',
    length: 8,
  })
  hsptUnpr: string | null;

  @Column('varchar', {
    name: 'dnts_unpr',
    nullable: true,
    comment: '치과병의원 단가',
    length: 8,
  })
  dntsUnpr: string | null;

  @Column('varchar', {
    name: 'sntr_inst_unpr',
    nullable: true,
    comment: '보건기관 단가',
    length: 8,
  })
  sntrInstUnpr: string | null;

  @Column('varchar', {
    name: 'mcnt_unpr',
    nullable: true,
    comment: '조산원 단가',
    length: 8,
  })
  mcntUnpr: string | null;

  @Column('varchar', {
    name: 'ormd_unpr',
    nullable: true,
    comment: '한방병원 단가',
    length: 8,
  })
  ormdUnpr: string | null;

  @Column('varchar', {
    name: 'rlvl_pnt',
    nullable: true,
    comment: '상대가치점수',
    length: 9,
  })
  rlvlPnt: string | null;

  @Column('varchar', {
    name: 'usch_rate_50',
    nullable: true,
    comment: '본인부담률 50/100',
    length: 1,
  })
  uschRate_50: string | null;

  @Column('varchar', {
    name: 'usch_rate_80',
    nullable: true,
    comment: '본인부담률 80/100',
    length: 1,
  })
  uschRate_80: string | null;

  @Column('varchar', {
    name: 'usch_rate_90',
    nullable: true,
    comment: '본인부담률 90/100',
    length: 1,
  })
  uschRate_90: string | null;

  @Column('varchar', {
    name: 'rddc_rcgn_yn',
    nullable: true,
    comment: '중복인정여부',
    length: 1,
  })
  rddcRcgnYn: string | null;

  @Column('varchar', {
    name: 'cmpt_nm',
    nullable: true,
    comment: '산정명칭',
    length: 60,
  })
  cmptNm: string | null;

  @Column('varchar', {
    name: 'chapter_dvsn',
    nullable: true,
    comment: '장구분',
    length: 4,
  })
  chapterDvsn: string | null;

  @Column('varchar', {
    name: 'sctn_dvsn',
    nullable: true,
    comment: '절구분',
    length: 2,
  })
  sctnDvsn: string | null;

  @Column('varchar', {
    name: 'detl_clsf',
    nullable: true,
    comment: '세분류',
    length: 20,
  })
  detlClsf: string | null;
}
