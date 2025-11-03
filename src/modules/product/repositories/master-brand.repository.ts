import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { MasterBrandEntity } from '../entities/master-brand.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class MasterBrandRepository extends Repository<MasterBrandEntity> {
  constructor(
    @InjectRepository(MasterBrandEntity)
    private readonly repo: Repository<MasterBrandEntity>
  ) {
    super(repo.target, repo.manager, repo.queryRunner)
  }

  findAll(): Promise<MasterBrandEntity[]> {
    return this.repo.find()
  }
}
