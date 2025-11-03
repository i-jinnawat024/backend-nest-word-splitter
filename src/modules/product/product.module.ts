import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { ProductUsecase } from './use-cases/product.usecase'
import { ProductService } from './services/product.service'
import { ScsoProductRepository } from './repositories/scso-product.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScsoProductEntity } from './entities/scso-product.entity'
import { ItemsProductsEntity } from './entities/items-products.entity'
import { ItemsProductsRepository } from './repositories/items-products.repository'
import { MasterBrandEntity } from './entities/master-brand.entity'
import { MasterBrandRepository } from './repositories/master-brand.repository'
import { SearchReplaceBrandEntity } from './entities/search-replace-brand.entity'
import { SearchReplaceBrandRepository } from './repositories/search-replace-brand.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ScsoProductEntity,
      ItemsProductsEntity,
      MasterBrandEntity,
      SearchReplaceBrandEntity,
    ]),
  ],
  controllers: [ProductController],
  providers: [
    ProductUsecase,
    ProductService,
    ScsoProductRepository,
    ItemsProductsRepository,
    MasterBrandRepository,
    SearchReplaceBrandRepository,
  ],
})
export class ProductModule {}
