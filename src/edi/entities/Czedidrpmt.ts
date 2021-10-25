// EDI 약가정보
import { Column, Entity } from 'typeorm';

@Entity('czedidrpmt', { schema: 'cli' })
export class Czedidrpmt {
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
    name: 'mdpr_cd',
    nullable: false,
    comment: '약품코드',
    length: 9,
  })
  mdprCd: string | null;

  @Column('varchar', {
    name: 'aply_stdy',
    nullable: true,
    comment: '적용시작일자',
    length: 10,
  })
  aplyStdy: string | null;

  @Column('varchar', {
    name: 'pay_bass',
    nullable: true,
    comment: '급여기준',
    length: 4,
  })
  payBass: string | null;

  @Column('varchar', {
    name: 'ulam',
    nullable: true,
    comment: '상한가',
    length: 10,
  })
  ulam: string | null;

  @Column('varchar', {
    name: 'adtn_amt',
    nullable: true,
    comment: '가산금',
    length: 3,
  })
  adtnAmt: string | null;

  @Column('varchar', {
    name: 'aomd_path',
    nullable: true,
    comment: '투여경로',
    length: 2,
  })
  aomdPath: string | null;

  @Column('varchar', {
    name: 'nogd',
    nullable: true,
    comment: '품명',
    length: 500,
  })
  nogd: string | null;

  @Column('varchar', {
    name: 'spec',
    nullable: true,
    comment: '규격',
    length: 10,
  })
  spec: string | null;

  @Column('varchar', {
    name: 'unit',
    nullable: true,
    comment: '단위',
    length: 15,
  })
  unit: string | null;

  @Column('varchar', {
    name: 'co_nm',
    nullable: true,
    comment: '업소명',
    length: 100,
  })
  coNm: string | null;

  @Column('varchar', {
    name: 'clsf_no',
    nullable: true,
    comment: '분류번호',
    length: 3,
  })
  clsfNo: string | null;

  @Column('varchar', {
    name: 'main_ingr_cd',
    nullable: true,
    comment: '주성분코드',
    length: 9,
  })
  mainIngrCd: string | null;

  @Column('varchar', {
    name: 'spsb_gnrl',
    nullable: true,
    comment: '전문/일반',
    length: 5,
  })
  spsbGnrl: string | null;

  @Column('varchar', {
    name: 'expv',
    nullable: true,
    comment: '퇴장방지',
    length: 5,
  })
  expv: string | null;

  @Column('varchar', {
    name: 'mdsl_eqlt',
    nullable: true,
    comment: '의약품동등성',
    length: 8,
  })
  mdslEqlt: string | null;

  @Column('varchar', {
    name: 'lwpr_sbst_adtn_yn',
    nullable: true,
    comment: '저가대체가산여부',
    length: 6,
  })
  lwprSbstAdtnYn: string | null;

  @Column('varchar', {
    name: 'excp_mdsl_dvsn',
    nullable: true,
    comment: '예외의약품구분',
    length: 12,
  })
  excpMdslDvsn: string | null;

  @Column('varchar', {
    name: 'rndm_comd_impb_item',
    nullable: true,
    comment: '임의조제불가항목',
    length: 8,
  })
  rndmComdImpbItem: string | null;

  @Column('varchar', {
    name: 'notc_date',
    nullable: true,
    comment: '고시일자',
    length: 10,
  })
  notcDate: string | null;

  @Column('varchar', {
    name: 'mesr_cd',
    nullable: true,
    comment: '대응코드',
    length: 9,
  })
  mesrCd: string | null;

  @Column('varchar', {
    name: 'rrns_mdsl_dvsn',
    nullable: true,
    comment: '희귀의약품구분',
    length: 5,
  })
  rrnsMdslDvsn: string | null;

  @Column('varchar', {
    name: 'sale_prar_dd',
    nullable: true,
    comment: '판매예정일',
    length: 10,
  })
  salePrarDd: string | null;

  @Column('varchar', {
    name: 'smns_mdsl',
    nullable: true,
    comment: '동일 의약품',
    length: 9,
  })
  smnsMdsl: string | null;

  @Column('varchar', {
    name: 'clam_spec',
    nullable: true,
    comment: '청구규격',
    length: 10,
  })
  clamSpec: string | null;

  @Column('varchar', {
    name: 'usch_rate_d',
    nullable: true,
    comment: '본인부담률d(30%)여부',
    length: 1,
  })
  uschRateD: string | null;

  @Column('varchar', {
    name: 'usch_rate_a',
    nullable: true,
    comment: '본인부담률a(50%)여부',
    length: 1,
  })
  uschRateA: string | null;

  @Column('varchar', {
    name: 'usch_rate_b',
    nullable: true,
    comment: '본인부담률b(80%)여부',
    length: 1,
  })
  uschRateB: string | null;

  @Column('varchar', {
    name: 'scng_pay_yn',
    nullable: true,
    comment: '선별급여여부',
    length: 1,
  })
  scngPayYn: string | null;

  @Column('varchar', {
    name: 'chng_prv_mdpr_cd',
    nullable: true,
    comment: '변경이전 약품코드',
    length: 9,
  })
  chngPrvMdprCd: string | null;

  @Column('varchar', {
    name: 'chng_af_mdpr_cd',
    nullable: true,
    comment: '변경이후 약품코드',
    length: 9,
  })
  chngAfMdprCd: string | null;
}
