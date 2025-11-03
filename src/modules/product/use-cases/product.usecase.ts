import { Injectable, Logger } from '@nestjs/common'
import { ProductService } from '../services/product.service'
import { groupBy } from 'lodash'
import { ItemsProductsEntity } from '../entities/items-products.entity'
import { writeFileSync, mkdirSync } from 'fs'
import * as path from 'path'

@Injectable()
export class ProductUsecase {
  private readonly logger = new Logger(ProductUsecase.name)
  constructor(private readonly productService: ProductService) {}
  async execute() {
    const [scsoProducts, itemsProducts, masterBrand, searchReplaceBrand] = await Promise.all([
      this.productService.getProductsList(),
      this.productService.getItemsProductsList(),
      this.productService.getMasterBrandList(),
      this.productService.getSearchReplaceBrandList(),
    ])
    const grouped = groupBy(itemsProducts, 'itemNumber')

    const result = Object.values(grouped).map((group: ItemsProductsEntity[]) => {
      const first = group[0]
      const vip = group.find((i) => i.customerPriceGroup === 'VIP')
      const premium = group.find((i) => i.customerPriceGroup === 'Premium')
      const exclusive = group.find((i) => i.customerPriceGroup === 'Exclusive')
      const list = group.find((i) => i.customerPriceGroup === 'LISTPRICE')

      const brand = masterBrand.find((b) => b.name === first.iBrand1)
      const tempProduct = scsoProducts.find((p) => p.itemNumber === first.itemNumber)
      const replace = searchReplaceBrand.find((r) => r.itemNumber === first.itemNumber)

      return {
        ...first,
        brand,
        tempProduct,
        replace,
        vipPrice: vip?.price ?? 0,
        premiumPrice: premium?.price ?? 0,
        exclusivePrice: exclusive?.price ?? 0,
        listPrice: list?.price ?? 0,
      }
    })
    const finalResult = result.map((item) => ({
      brand: item.dplBrand,
      channel: item.channel,
      color: item.color,
      colorTh: item.colorTh,
      createdDate: item.createdDate,
      description: item.description,
      descriptionTh: item.descriptionThai,
      dpltBrand: item.dplBrand,
      dpltMajor: item.dplMajor,
      dpltModel: item.dplModel,
      dpltSub: item.dplSub,
      groupId: item.groupId,
      ibrand1: item.iBrand1,
      ibrand2: item.iBrand2,
      ibrand3: item.iBrand3,
      ibrand4: item.iBrand4,
      image: item.picture,
      itemNumber: item.itemNumber,
      itemG2: item.itemG2,
      itemG3: item.itemG3,
      itemG4: item.itemG4,
      exclusivePrice: item.exclusivePrice,
      premiumPrice: item.premiumPrice,
      listPrice: item.listPrice,
      vipPrice: item.vipPrice,
      productName: item.productName,
      startDateListPrice: item.startDateListprice,
      startDateOther: item.startDateOther,
      startDateAcc: item.startDateAcc,
      filterSub: item.typeBrand === 'FILM' && !item.itemNumber ? item.dplModel : item.dplSub,
      typeBrand: item.typeBrand,
    }))
    const rootDir = path.resolve(__dirname, '../../../')
    const exportDir = path.join(rootDir, 'exports')
    mkdirSync(exportDir, { recursive: true })
    const filePath = path.join(exportDir, 'productsList.json')
    writeFileSync(filePath, JSON.stringify(finalResult, null, 2), 'utf-8')
    return { result: finalResult, filePath }
  }
}
