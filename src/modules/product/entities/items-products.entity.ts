import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ETable } from '../enums/table.enum'
import { SALEBOT_DATA_TEMP } from '../constants/database.constanst'

@Entity({ name: ETable.DPLTSB_TABLE_ITEMS_PRODUCTIONS, database: SALEBOT_DATA_TEMP })
export class ItemsProductsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'Item_Number' })
  itemNumber: string

  @Column({ name: 'ProductName' })
  productName: string

  @Column({ name: 'Description' })
  description: string

  @Column({ name: 'DescriptionThai' })
  descriptionThai: string

  @Column({ name: 'Brand' })
  brand: string

  @Column({ name: 'Color' })
  color: string

  @Column({ name: 'ColorTH' })
  colorTh: string

  @Column({ name: 'Picture' })
  picture: string

  @Column({ name: 'IBrand1' })
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

  @Column({ name: 'ItemGroup' })
  itemGroup: string

  @Column({ name: 'Price' })
  price: number

  @Column({ name: 'Quantity' })
  quantity: number

  @Column({ name: 'ITEMNAV' })
  itemNav: string

  @Column({ name: 'Customer_Price_Group' })
  customerPriceGroup: string

  @Column({ name: 'PriceGroup' })
  priceGroup: string

  @Column({ name: 'start_date_Other' })
  startDateOther: Date

  @Column({ name: 'start_date_Listprice' })
  startDateListprice: Date

  @Column({ name: 'Product_ActiveStatus' })
  productActiveStatus: string

  @Column({ name: 'UpdateDate' })
  updatedDate: Date

  @Column({ name: 'CreateDate' })
  createdDate: Date

  @Column({ name: 'start_date_acc' })
  startDateAcc: Date

  @Column({ name: 'status_item' })
  statusItem: number

  @Column({ name: 'block_item' })
  blockItem: string

  @Column({ name: 'status_brand' })
  statusBrand: number

  @Column({ name: 'status_brand_web' })
  statusBrandWeb: number

  @Column({ name: 'status_brand_show' })
  statusBrandShow: number

  @Column({ name: 'outofStock_Almost' })
  outofStockAlmost: number

  @Column({ name: 'outofStock' })
  outofStock: number

  @Column({ name: 'Channel' })
  channel: string

  @Column({ name: 'DPL_Major' })
  dplMajor: string

  @Column({ name: 'DPL_Sub' })
  dplSub: string

  @Column({ name: 'groupId' })
  groupId: string

  @Column({ name: 'DPL_Brand' })
  dplBrand: string

  @Column({ name: 'DPL_Model' })
  dplModel: string

  @Column({ name: 'TYPE_BRAND' })
  typeBrand: string
}
