import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SALEBOT_DATA_TEMP } from '../constants/database.constant'
import { ETable } from '../enums/table.enum'

@Entity({
  name: ETable.DWT_SEARCH_CUSTOM_MANUAL,
  database: SALEBOT_DATA_TEMP,
})
export class CustomProductManualEntity {
  @PrimaryGeneratedColumn({ name: 'customModelID' })
  id: number

  @Column({ name: 'item_number' })
  itemNumber: string

  @Column({ name: 'custom_model' })
  customModel: string
}
