import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { ScsoProductEntity } from '../entities/scso-product.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ScsoProductRepository extends Repository<ScsoProductEntity> {
  constructor(
    @InjectRepository(ScsoProductEntity)
    private readonly repo: Repository<ScsoProductEntity>
  ) {
    super(repo.target, repo.manager, repo.queryRunner)
  }

  public async findAll() {
    return await this.repo.find()
  }
}
