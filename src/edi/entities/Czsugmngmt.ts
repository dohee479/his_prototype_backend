// 수가 마스터
import { Column, Entity } from 'typeorm';

@Entity('czsugmngmt', { schema: 'cli' })
export class Czsugmngmt {
  @Column('varchar', { name: 'hspt_cd', comment: '병원코드', length: 15 })
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

  @Column('varchar', {
    primary: true,
    name: 'suga_cd',
    comment: '수가코드',
    length: 12,
  })
  sugaCd: string;

  @Column('varchar', {
    primary: true,
    name: 'suga_apdy',
    comment: '수가적용일자',
    length: 8,
  })
  sugaApdy: string;

  @Column('varchar', {
    name: 'suga_endy',
    nullable: true,
    comment: '수가종료일자',
    length: 8,
  })
  sugaEndy: string | null;

  @Column('varchar', {
    name: 'suga_enm',
    nullable: true,
    comment: '수가영문명',
    length: 120,
  })
  sugaEnm: string | null;

  @Column('varchar', {
    name: 'suga_hnm',
    nullable: true,
    comment: '수가한글명',
    length: 120,
  })
  sugaHnm: string | null;

  @Column('varchar', {
    name: 'apac_nm',
    nullable: true,
    comment: '준용명',
    length: 120,
  })
  apacNm: string | null;

  @Column('varchar', {
    name: 'grp_sngl_dvcd',
    nullable: true,
    comment: '그룹싱글구분코드',
    length: 1,
  })
  grpSnglDvcd: string | null;

  @Column('varchar', {
    name: 'edi_matl_dvcd',
    nullable: true,
    comment: 'EDI자료구분코드',
    length: 1,
  })
  ediMatlDvcd: string | null;

  @Column('varchar', {
    name: 'edi_cd',
    nullable: true,
    comment: 'EDI코드',
    length: 12,
  })
  ediCd: string | null;

  @Column('decimal', {
    name: 'edi_cnvr_nmvl',
    nullable: true,
    comment: 'EDI환산치',
    precision: 15,
    scale: 8,
  })
  ediCnvrNmvl: string | null;

  @Column('varchar', {
    name: 'suga_clsf_cd',
    nullable: true,
    comment: '수가분류코드',
    length: 6,
  })
  sugaClsfCd: string | null;

  @Column('varchar', {
    name: 'cmpt_clsf_cd',
    nullable: true,
    comment: '산정분류코드',
    length: 8,
  })
  cmptClsfCd: string | null;

  @Column('varchar', {
    name: 'basc_adtn_cd',
    nullable: true,
    comment: '기본가산코드',
    length: 5,
  })
  bascAdtnCd: string | null;

  @Column('varchar', {
    name: 'drg_yn',
    nullable: true,
    comment: 'DRG여부',
    length: 1,
  })
  drgYn: string | null;

  @Column('varchar', {
    name: 'suga_dvcd',
    nullable: true,
    comment: '수가구분코드',
    length: 6,
  })
  sugaDvcd: string | null;

  @Column('varchar', {
    name: 'mtrl_actn_dvcd',
    nullable: true,
    comment: '재료행위구분코드',
    length: 1,
  })
  mtrlActnDvcd: string | null;

  @Column('varchar', {
    name: 'suga_clsf_no',
    nullable: true,
    comment: '수가분류번호',
    length: 40,
  })
  sugaClsfNo: string | null;

  @Column('varchar', {
    name: 'clcl_mthd_dvcd',
    nullable: true,
    comment: '계산방법구분코드',
    length: 1,
  })
  clclMthdDvcd: string | null;

  @Column('varchar', {
    name: 'prsc_psbl_dvcd',
    nullable: true,
    comment: '처방가능구분코드',
    length: 1,
  })
  prscPsblDvcd: string | null;

  @Column('decimal', {
    name: 'min_aply_unit_valu',
    nullable: true,
    comment: '최소적용단위값',
    precision: 5,
    scale: 2,
  })
  minAplyUnitValu: string | null;

  @Column('varchar', {
    name: 'tnfe_ocrr_dvcd',
    nullable: true,
    comment: '수기료발생구분코드',
    length: 2,
  })
  tnfeOcrrDvcd: string | null;

  @Column('varchar', {
    name: 'insn_aply_yn',
    nullable: true,
    comment: '보험적용여부',
    length: 1,
  })
  insnAplyYn: string | null;

  @Column('varchar', {
    name: 'inpy_dvcd',
    nullable: true,
    comment: '보험급여구분코드',
    length: 1,
  })
  inpyDvcd: string | null;

  @Column('varchar', {
    name: 'insn_pnt_aply_dvcd',
    nullable: true,
    comment: '보험점수적용구분코드',
    length: 1,
  })
  insnPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'insn_pnt',
    nullable: true,
    comment: '보험점수',
    precision: 12,
    scale: 2,
  })
  insnPnt: string | null;

  @Column('varchar', {
    name: 'insn_clsf_adtn_yn',
    nullable: true,
    comment: '보험종별가산여부',
    length: 1,
  })
  insnClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'gnrl_aply_yn',
    nullable: true,
    comment: '일반적용여부',
    length: 1,
  })
  gnrlAplyYn: string | null;

  @Column('varchar', {
    name: 'gnrl_pnt_aply_dvcd',
    nullable: true,
    comment: '일반점수적용구분코드',
    length: 1,
  })
  gnrlPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'gnrl_pnt',
    nullable: true,
    comment: '일반점수',
    precision: 12,
    scale: 2,
  })
  gnrlPnt: string | null;

  @Column('varchar', {
    name: 'gnrl_clsf_adtn_yn',
    nullable: true,
    comment: '일반종별가산여부',
    length: 1,
  })
  gnrlClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'mdad_aply_yn',
    nullable: true,
    comment: '의료급여적용여부',
    length: 1,
  })
  mdadAplyYn: string | null;

  @Column('varchar', {
    name: 'mdad_pay_dvcd',
    nullable: true,
    comment: '의료급여급여구분코드',
    length: 1,
  })
  mdadPayDvcd: string | null;

  @Column('varchar', {
    name: 'mdad_pnt_aply_dvcd',
    nullable: true,
    comment: '의료급여점수적용구분코드',
    length: 1,
  })
  mdadPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'mdad_pnt',
    nullable: true,
    comment: '의료급여점수',
    precision: 12,
    scale: 2,
  })
  mdadPnt: string | null;

  @Column('varchar', {
    name: 'mdad_clsf_adtn_yn',
    nullable: true,
    comment: '의료급여종별가산여부',
    length: 1,
  })
  mdadClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'incs_aply_yn',
    nullable: true,
    comment: '산재적용여부',
    length: 1,
  })
  incsAplyYn: string | null;

  @Column('varchar', {
    name: 'incs_pay_dvcd',
    nullable: true,
    comment: '산재급여구분코드',
    length: 1,
  })
  incsPayDvcd: string | null;

  @Column('varchar', {
    name: 'incs_pnt_aply_dvcd',
    nullable: true,
    comment: '산재점수적용구분코드',
    length: 1,
  })
  incsPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'incs_pnt',
    nullable: true,
    comment: '산재점수',
    precision: 12,
    scale: 2,
  })
  incsPnt: string | null;

  @Column('varchar', {
    name: 'incs_clsf_adtn_yn',
    nullable: true,
    comment: '산재종별가산여부',
    length: 1,
  })
  incsClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'indt_aply_yn',
    nullable: true,
    comment: '공상적용여부',
    length: 1,
  })
  indtAplyYn: string | null;

  @Column('varchar', {
    name: 'indt_pay_dvcd',
    nullable: true,
    comment: '공상급여구분코드',
    length: 1,
  })
  indtPayDvcd: string | null;

  @Column('varchar', {
    name: 'indt_pnt_aply_dvcd',
    nullable: true,
    comment: '공상점수적용구분코드',
    length: 1,
  })
  indtPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'indt_pnt',
    nullable: true,
    comment: '공상점수',
    precision: 12,
    scale: 2,
  })
  indtPnt: string | null;

  @Column('varchar', {
    name: 'indt_clsf_adtn_yn',
    nullable: true,
    comment: '공상종별가산여부',
    length: 1,
  })
  indtClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'trai_aply_yn',
    nullable: true,
    comment: '자보적용여부',
    length: 1,
  })
  traiAplyYn: string | null;

  @Column('varchar', {
    name: 'trai_pay_dvcd',
    nullable: true,
    comment: '자보급여구분코드',
    length: 1,
  })
  traiPayDvcd: string | null;

  @Column('varchar', {
    name: 'trai_pnt_aply_dvcd',
    nullable: true,
    comment: '자보점수적용구분코드',
    length: 1,
  })
  traiPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'trai_pnt',
    nullable: true,
    comment: '자보점수',
    precision: 12,
    scale: 2,
  })
  traiPnt: string | null;

  @Column('varchar', {
    name: 'trai_clsf_adtn_yn',
    nullable: true,
    comment: '자보종별가산여부',
    length: 1,
  })
  traiClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'vtrn_aply_yn',
    nullable: true,
    comment: '보훈적용여부',
    length: 1,
  })
  vtrnAplyYn: string | null;

  @Column('varchar', {
    name: 'vtrn_pay_dvcd',
    nullable: true,
    comment: '보훈급여구분코드',
    length: 1,
  })
  vtrnPayDvcd: string | null;

  @Column('varchar', {
    name: 'vtrn_pnt_aply_dvcd',
    nullable: true,
    comment: '보훈점수적용구분코드',
    length: 1,
  })
  vtrnPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'vtrn_pnt',
    nullable: true,
    comment: '보훈점수',
    precision: 12,
    scale: 2,
  })
  vtrnPnt: string | null;

  @Column('varchar', {
    name: 'vtrn_clsf_adtn_yn',
    nullable: true,
    comment: '보훈종별가산여부',
    length: 1,
  })
  vtrnClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'intl_aply_yn',
    nullable: true,
    comment: '국제적용여부',
    length: 1,
  })
  intlAplyYn: string | null;

  @Column('varchar', {
    name: 'intl_pay_dvcd',
    nullable: true,
    comment: '국제급여구분코드',
    length: 1,
  })
  intlPayDvcd: string | null;

  @Column('varchar', {
    name: 'intl_pnt_aply_dvcd',
    nullable: true,
    comment: '국제점수적용구분코드',
    length: 1,
  })
  intlPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'intl_pnt',
    nullable: true,
    comment: '국제점수',
    precision: 12,
    scale: 2,
  })
  intlPnt: string | null;

  @Column('varchar', {
    name: 'intl_clsf_adtn_yn',
    nullable: true,
    comment: '국제종별가산여부',
    length: 1,
  })
  intlClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'emrg_pfan_aply_yn',
    nullable: true,
    comment: '응급대불적용여부',
    length: 1,
  })
  emrgPfanAplyYn: string | null;

  @Column('varchar', {
    name: 'emrg_pfan_pay_dvcd',
    nullable: true,
    comment: '응급대불급여구분코드',
    length: 1,
  })
  emrgPfanPayDvcd: string | null;

  @Column('varchar', {
    name: 'emrg_pfan_pnt_aply_dvcd',
    nullable: true,
    comment: '응급대불점수적용구분코드',
    length: 1,
  })
  emrgPfanPntAplyDvcd: string | null;

  @Column('decimal', {
    name: 'emrg_pfan_pnt',
    nullable: true,
    comment: '응급대불점수',
    precision: 12,
    scale: 2,
  })
  emrgPfanPnt: string | null;

  @Column('varchar', {
    name: 'emrg_pfan_clsf_adtn_yn',
    nullable: true,
    comment: '응급대불종별가산여부',
    length: 1,
  })
  emrgPfanClsfAdtnYn: string | null;

  @Column('varchar', {
    name: 'yeno_cd',
    nullable: true,
    comment: '연번코드',
    length: 8,
  })
  yenoCd: string | null;

  @Column('varchar', {
    name: 'mdpr_cd',
    nullable: true,
    comment: '약품코드',
    length: 12,
  })
  mdprCd: string | null;

  @Column('varchar', {
    name: 'spcm_cd',
    nullable: true,
    comment: '검체코드',
    length: 5,
  })
  spcmCd: string | null;

  @Column('varchar', {
    name: 'anst_chrg_incr_time',
    nullable: true,
    comment: '마취료증가시간',
    length: 8,
  })
  anstChrgIncrTime: string | null;

  @Column('decimal', {
    name: 'anst_chrg_basc_qty',
    nullable: true,
    comment: '마취료기본수량',
    precision: 6,
    scale: 2,
  })
  anstChrgBascQty: string | null;

  @Column('decimal', {
    name: 'anst_chrg_incr_qty',
    nullable: true,
    comment: '마취료증가수량',
    precision: 6,
    scale: 2,
  })
  anstChrgIncrQty: string | null;

  @Column('varchar', {
    name: 'mnfc_co_cd',
    nullable: true,
    comment: '제조회사코드',
    length: 20,
  })
  mnfcCoCd: string | null;

  @Column('varchar', {
    name: 'spfm_excp_resn_cd',
    nullable: true,
    comment: '의약분업예외사유코드',
    length: 2,
  })
  spfmExcpResnCd: string | null;

  @Column('varchar', {
    name: 'acmd_dvcd',
    nullable: true,
    comment: '항암제구분코드',
    length: 2,
  })
  acmdDvcd: string | null;

  @Column('varchar', {
    name: 'exus_drug_nody',
    nullable: true,
    comment: '외용약일수',
    length: 3,
  })
  exusDrugNody: string | null;

  @Column('int', {
    name: 'expv_encr_cost',
    nullable: true,
    comment: '퇴장방지장려비',
  })
  expvEncrCost: number | null;

  @Column('varchar', {
    name: 'ents_inst_rgno',
    nullable: true,
    comment: '위탁기관기호',
    length: 16,
  })
  entsInstRgno: string | null;

  @Column('decimal', {
    name: 'wtav_valu',
    nullable: true,
    comment: '가중평균값',
    precision: 10,
    scale: 2,
  })
  wtavValu: string | null;

  @Column('int', { name: 'uplm_amt', nullable: true, comment: '상한금액' })
  uplmAmt: number | null;

  @Column('varchar', {
    name: 'kd_cd',
    nullable: true,
    comment: 'KD코드',
    length: 12,
  })
  kdCd: string | null;

  @Column('varchar', {
    name: 'suga_memo_cnts',
    nullable: true,
    comment: '수가메모내용',
    length: 2000,
  })
  sugaMemoCnts: string | null;
}
