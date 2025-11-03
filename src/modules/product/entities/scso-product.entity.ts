import { Column, Entity, PrimaryColumn } from 'typeorm'
import { ETable } from '../enums/table.enum'
import { SALEBOT_DATA_TEMP } from '../constants/database.constanst'
import { IScsoProducts } from '../interfaces/scso-products.interface'

@Entity({
  name: ETable.DPLTAX_SCSO_PRODUCT,
  database: SALEBOT_DATA_TEMP,
})
export class ScsoProductEntity {
  @PrimaryColumn({ name: 'IBrand1' })
  iBrand1: string

  @Column({ name: 'IBrand2' })
  iBrand2: string

  @Column({ name: 'IBrand3' })
  iBrand3: string

  @Column({ name: 'IBrand4' })
  iBrand4: string

  @Column({ name: 'ItemG1' })
  itemG1: string

  @Column({ name: 'ItemG2' })
  itemG2: string

  @Column({ name: 'ItemG3' })
  itemG3: string

  @Column({ name: 'ItemG4' })
  itemG4: string

  @Column({ name: 'Item_Number' })
  itemNumber: string

  @Column()
  productName: string

  @Column({ name: 'ItemGroup' })
  itemGroup: string

  @Column({ name: 'Unit' })
  unit: string

  @Column({ name: 'Price' })
  price: number
  @Column({ name: 'Sale_Tax' })
  saleTax: string

  @Column({ name: 'Underdelivery' })
  underdelivery: number

  @Column({ name: 'Overdelivery' })
  overdelivery: number

  @Column({ name: 'Product_ActiveStatus' })
  productActiveStatus: string

  @Column({ name: 'UpdateDate' })
  updatedDate: Date

  @Column({ name: 'CreateDate' })
  createdDate: Date

  @Column({ name: 'Status_SalesBots' })
  statusSalesBots: number

  @Column({ name: 'DPL_newItem' })
  dplNewItem: string

  @Column({ name: 'DPL_ClassId' })
  dplClassId: string

  @Column({ name: 'DPL_StockDay' })
  dplStockDay: number

  @Column({ name: 'DPL_MaximumOrder' })
  dplMaximumOrder: number

  @Column({ name: 'DPL_MinimumOrder' })
  dplMinimumOrder: number

  @Column({ name: 'DPL_ReorderPoint' })
  dplReorderPoint: number

  @Column({ name: 'DPL_DateForOT' })
  dplDateForOT: Date

  @Column({ name: 'DPL_DateForLP' })
  dplDateForLP: Date

  @Column({ name: 'DPL_SB_DESCRIPTION' })
  dplSbDescription: string

  @Column({ name: 'DPL_SB_DESCRIPTIONTHAI' })
  dplSbDescriptionThai: string

  @Column({ name: 'DPL_SB_MODEL' })
  dplSbModel: string

  @Column({ name: 'DPL_SB_BRAND' })
  dplSbBrand: string

  @Column({ name: 'DPL_SB_COLOR' })
  dplSbColor: string

  @Column({ name: 'DPL_SB_COLORTH' })
  dplSbColorth: string

  @Column({ name: 'DPL_SB_PICTURE' })
  dplSbPicture: string

  @Column({ name: 'ITEMNAV' })
  itemNav: string

  @Column({ name: 'DPL_STATUSITEM' })
  dplStatusItem: number

  @Column({ name: 'CHANNEL_ITEM' })
  channelItem: string

  @Column({ name: 'DPL_Major' })
  dplMajor: string

  @Column({ name: 'DPL_Sub' })
  dplSub: string

  @Column({ name: 'TYPE_BRAND' })
  typeBrand: string
}
