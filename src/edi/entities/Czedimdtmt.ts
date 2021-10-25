// EDI 치료재료
import { Column, Entity } from 'typeorm';

@Entity('czedimdtmt', { schema: 'cli' })
export class Czedimdtmt {
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
    name: 'cd',
    nullable: false,
    comment: '코드',
    length: 1000,
  })
  cd: string | null;

  @Column('varchar', {
    name: 'apdy',
    nullable: true,
    comment: '적용일자',
    length: 1000,
  })
  apdy: string | null;

  @Column('varchar', {
    name: 'nogd',
    nullable: true,
    comment: '품명',
    length: 1000,
  })
  nogd: string | null;

  @Column('varchar', {
    name: 'spec',
    nullable: true,
    comment: '규격',
    length: 1000,
  })
  spec: string | null;

  @Column('varchar', {
    name: 'unit',
    nullable: true,
    comment: '단위',
    length: 1000,
  })
  unit: string | null;

  @Column('varchar', {
    name: 'ulam',
    nullable: true,
    comment: '상한금액',
    length: 1000,
  })
  ulam: string | null;

  @Column('varchar', {
    name: 'mnfc_co',
    nullable: true,
    comment: '제조회사',
    length: 1000,
  })
  mnfcCo: string | null;

  @Column('varchar', {
    name: 'qomt',
    nullable: true,
    comment: '재질',
    length: 1000,
  })
  qomt: string | null;

  @Column('varchar', {
    name: 'impt_co',
    nullable: true,
    comment: '수입업소',
    length: 1000,
  })
  imptCo: string | null;

  @Column('varchar', {
    name: 'rmrk',
    nullable: true,
    comment: '비고',
    length: 1000,
  })
  rmrk: string | null;

  @Column('varchar', {
    name: 'mcls',
    nullable: true,
    comment: '중분류',
    length: 1000,
  })
  mcls: string | null;

  @Column('varchar', {
    name: 'mcls_cd',
    nullable: true,
    comment: '중분류코드',
    length: 1000,
  })
  mclsCd: string | null;

  @Column('varchar', {
    name: 'frst_rgdy',
    nullable: true,
    comment: '최초등재일자',
    length: 1000,
  })
  frstRgdy: string | null;
}
