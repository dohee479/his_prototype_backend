// 그룹수가마스터
import { Column, Entity } from 'typeorm';

@Entity('czgrpsugmt', { schema: 'cli' })
export class Czgrpsugmt {
  @Column('varchar', { name: 'hspt_cd', comment: '병원코드', length: 10 })
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
    name: 'grp_suga_cd',
    comment: '그룹수가코드',
    length: 12,
  })
  grpSugaCd: string;

  @Column('int', { primary: true, name: 'sngl_sqno', comment: '싱글일련번호' })
  snglSqno: number;

  @Column('varchar', {
    name: 'sngl_suga_cd',
    nullable: true,
    comment: '싱글수가코드',
    length: 12,
  })
  snglSugaCd: string | null;

  @Column('int', { name: 'sngl_qty', nullable: true, comment: '싱글수량' })
  snglQty: number | null;

  @Column('varchar', {
    name: 'sngl_suga_cd_apdy',
    nullable: true,
    comment: '싱글수가코드적용일자',
    length: 8,
  })
  snglSugaCdApdy: string | null;

  @Column('varchar', {
    name: 'sngl_suga_cd_endy',
    nullable: true,
    comment: '싱글수가코드종료일자',
    length: 8,
  })
  snglSugaCdEndy: string | null;

  @Column('varchar', {
    name: 'grp_suga_age_dvcd',
    nullable: true,
    comment: '그룹수가연령구분코드',
    length: 1,
  })
  grpSugaAgeDvcd: string | null;

  @Column('int', { name: 'strt_nomn', nullable: true, comment: '시작개월수' })
  strtNomn: number | null;

  @Column('int', { name: 'end_nomn', nullable: true, comment: '종료개월수' })
  endNomn: number | null;

  @Column('varchar', {
    name: 'srdn_dvcd',
    nullable: true,
    comment: '종속구분코드',
    length: 1,
  })
  srdnDvcd: string | null;
}
