import { Injectable } from '@nestjs/common'
import { ScsoProductRepository } from '../repositories/scso-product.repository'
import { ItemsProductsRepository } from '../repositories/items-products.repository'
import { MasterBrandRepository } from '../repositories/master-brand.repository'
import { SearchReplaceBrandRepository } from '../repositories/search-replace-brand.repository'

@Injectable()
export class ProductService {
  constructor(
    private readonly scsoRepo: ScsoProductRepository,
    private readonly itemsProductsRepo: ItemsProductsRepository,
    private readonly masterBrandRepo: MasterBrandRepository,
    private readonly searchReplaceBrandRepo: SearchReplaceBrandRepository
  ) {}

  async getProductsList() {
    return await this.scsoRepo.findAll()
  }

  async getItemsProductsList() {
    return await this.itemsProductsRepo.findAll()
  }

  async getMasterBrandList() {
    return await this.masterBrandRepo.findAll()
  }

  async getSearchReplaceBrandList() {
    return await this.searchReplaceBrandRepo.findAll()
  }
}
