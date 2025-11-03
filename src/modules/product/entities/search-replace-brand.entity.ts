import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ETable } from '../enums/table.enum'
import { SALEBOT_DATA_TEMP } from '../constants/database.constanst'

@Entity({ name: ETable.DWT_SEARCH_REPLACE_BRAND, database: SALEBOT_DATA_TEMP })
export class SearchReplaceBrandEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  itemNumber: string

  @Column()
  typeBrand: string

  @Column()
  fieldName: string
}
