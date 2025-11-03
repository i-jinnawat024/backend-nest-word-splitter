import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { CustomProductManualEntity } from '../entities/custom-product-manual.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CustomProductManualRepository extends Repository<CustomProductManualEntity> {
  constructor(
    @InjectRepository(CustomProductManualEntity)
    private readonly repo: Repository<CustomProductManualEntity>
  ) {
    super(repo.target, repo.manager, repo.queryRunner)
  }

  public async findAll(): Promise<CustomProductManualEntity[]> {
    return this.repo.find()
  }
}
