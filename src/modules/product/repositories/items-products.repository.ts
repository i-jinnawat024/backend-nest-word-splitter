import { Injectable } from '@nestjs/common'
import { ItemsProductsEntity } from '../entities/items-products.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ItemsProductsRepository extends Repository<ItemsProductsEntity> {
  constructor(
    @InjectRepository(ItemsProductsEntity)
    private readonly repo: Repository<ItemsProductsEntity>
  ) {
    super(repo.target, repo.manager, repo.queryRunner)
  }

  findAll(): Promise<ItemsProductsEntity[]> {
    return this.repo.find()
  }
}
