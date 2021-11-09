import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('czintylsmt', { schema: 'cli' })
export class Czintylsmt {
  @Column('varchar', { name: 'hspt_cd', comment: '병원코드', length: 20 })
  hsptCd: string;

  @Column('varchar', {
    name: 'frst_rgst_usid',
    comment: '최초등록사용자ID',
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
    comment: '최종수정사용자ID',
    length: 20,
  })
  lastUpdtUsid: string;

  @Column('datetime', {
    name: 'last_uddt',
    comment: '최종수정일시',
    default: () => "'2000-00-06 00:00:00'",
  })
  lastUddt: Date;

  // @PrimaryGeneratedColumn({
  //   name: 'inty_hstr_cd',
  //   comment: '보험유형_이력_pk',
  // })
  // intyHstrCd: string;
  @Column('varchar', {
    primary: true,
    name: 'inty_hstr_cd',
    comment: '보험유형_이력_pk',
    length: 100,
    default: () => 'nextval(`cli`.`seq_cz_inty_hstr_cd`)',
  })
  intyHstrCd: string;

  @Column('varchar', {
    name: 'inty_apdy',
    comment: '보험유형_적용일',
    length: 8,
  })
  intyApdy: string;

  @Column('varchar', {
    name: 'inty_endy',
    comment: '보험유형_종료일',
    length: 8,
  })
  intyEndy: string;

  @Column('varchar', {
    name: 'inty_adms_otpt',
    comment: '보험유형_입원_외래',
    length: 10,
  })
  intyAdmsOtpt: string;

  @Column('varchar', {
    name: 'inty_lcls',
    comment: '보험유형_대분류',
    length: 100,
  })
  intyLcls: string;

  @Column('varchar', {
    name: 'inty_type_asst_1',
    comment: '보험유형_유형보조_1',
    length: 100,
  })
  intyTypeAsst_1: string;

  @Column('varchar', {
    name: 'inty_type_asst_2',
    comment: '보험유형_유형보조_2',
    length: 100,
  })
  intyTypeAsst_2: string;

  @Column('int', {
    name: 'basc_drug_valu_tamt',
    nullable: true,
    comment: '기본본인부담률_약값총액',
    default: () => "'0'",
  })
  bascDrugValuTamt: number | null;

  @Column('int', {
    name: 'basc_rcpy_expn_tamt',
    nullable: true,
    comment: '기본본인부담률_요양급여비용총액',
    default: () => "'0'",
  })
  bascRcpyExpnTamt: number | null;

  @Column('int', {
    name: 'basc_hsin_mnfc',
    nullable: true,
    comment: '기본본인부담률_직접조제',
    default: () => "'0'",
  })
  bascHsinMnfc: number | null;

  @Column('int', {
    name: 'basc_hsin_mnfc_etc',
    nullable: true,
    comment: '기본본인부담률_그외경우',
    default: () => "'0'",
  })
  bascHsinMnfcEtc: number | null;

  @Column('int', {
    name: 'dspp_drug_valu_tamt',
    nullable: true,
    comment: '장애인의료비_약값총액',
    default: () => "'0'",
  })
  dsppDrugValuTamt: number | null;

  @Column('int', {
    name: 'dspp_rcpy_expn_tamt',
    nullable: true,
    comment: '장애인의료비_요양급여비용총액',
    default: () => "'0'",
  })
  dsppRcpyExpnTamt: number | null;

  @Column('int', {
    name: 'dspp_hsin_mnfc',
    nullable: true,
    comment: '장애인의료비_직접조제',
    default: () => "'0'",
  })
  dsppHsinMnfc: number | null;

  @Column('int', {
    name: 'dspp_hsin_mnfc_etc',
    nullable: true,
    comment: '장애인의료비_그외경우',
    default: () => "'0'",
  })
  dsppHsinMnfcEtc: number | null;

  @Column('int', {
    name: 'adfn_drug_valu_tamt',
    nullable: true,
    comment: '의료지원금_약값총액',
    default: () => "'0'",
  })
  adfnDrugValuTamt: number | null;

  @Column('int', {
    name: 'adfn_rcpy_expn_tamt',
    nullable: true,
    comment: '의료지원금_요양급여비용총액',
    default: () => "'0'",
  })
  adfnRcpyExpnTamt: number | null;

  @Column('int', {
    name: 'adfn_hsin_mnfc',
    nullable: true,
    comment: '의료지원금_직접조제',
    default: () => "'0'",
  })
  adfnHsinMnfc: number | null;

  @Column('int', {
    name: 'adfn_hsin_mnfc_etc',
    nullable: true,
    comment: '의료지원금_그외경우',
    default: () => "'0'",
  })
  adfnHsinMnfcEtc: number | null;

  @Column('int', {
    name: 'sprt_spcl_eqpm',
    nullable: true,
    comment: '별도본인부담률_특수장비',
    default: () => "'0'",
  })
  sprtSpclEqpm: number | null;

  @Column('int', {
    name: 'sprt_rwmt_actn',
    nullable: true,
    comment: '별도본인부담률_특수재료_행위료',
    default: () => "'0'",
  })
  sprtRwmtActn: number | null;

  @Column('int', {
    name: 'sprt_hptn_glyc',
    nullable: true,
    comment: '별도본인부담률_고혈압_당뇨지속질료',
    default: () => "'0'",
  })
  sprtHptnGlyc: number | null;

  @Column('int', {
    name: 'sprt_fndg_exmn',
    nullable: true,
    comment: '별도본인부담률_검진후확진검사',
    default: () => "'0'",
  })
  sprtFndgExmn: number | null;

  @Column('int', {
    name: 'sprt_hpv',
    nullable: true,
    comment: '별도본인부담률_HPV_진찰상담진찰료',
    default: () => "'0'",
  })
  sprtHpv: number | null;

  @Column('int', {
    name: 'sprt_psyh_thpy',
    nullable: true,
    comment: '별도본인부담률_정신요법',
    default: () => "'0'",
  })
  sprtPsyhThpy: number | null;

  @Column('int', {
    name: 'sprt_tlcf_mcch',
    nullable: true,
    comment: '별도본인부담률_원격협의진찰료_자문료',
    default: () => "'0'",
  })
  sprtTlcfMcch: number | null;
}
