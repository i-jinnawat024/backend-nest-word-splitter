import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ETable } from '../enums/table.enum'
import { SALEBOT_DATA_TEMP } from '../constants/database.constanst'

@Entity({ name: ETable.DPLTSB_TABLE_MASTER_BRAND_DPLUS_WEPLUS, database: SALEBOT_DATA_TEMP })
export class MasterBrandEntity {
  @PrimaryGeneratedColumn({ name: 'id_brand' })
  id: number

  @Column({ name: 'name_brand' })
  name: string

  @Column({ name: 'logo_brand' })
  logo: string

  @Column({ name: 'remark_brand' })
  remark: string

  @Column({ name: 'detail_brand' })
  detail: string

  @Column({ name: 'status_brand' })
  status: number

  @Column({ name: 'pic_url' })
  picUrl: string

  @Column({ name: 'type_brand' })
  type: string

  @Column({ name: 'nearly_out_of_stock' })
  nearlyOutOfStock: number

  @Column({ name: 'out_of_stock' })
  outOfStock: number

  @Column({ name: 'status_brand_web' })
  statusBrandWeb: number

  @Column()
  channel: string

  @Column({ name: 'point_Index' })
  pointIndex: number

  @Column()
  groupId: number

  @Column()
  company: string

  @Column({ name: 'main_brand' })
  mainBrand: boolean
}
