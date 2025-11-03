import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { SearchReplaceBrandEntity } from '../entities/search-replace-brand.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class SearchReplaceBrandRepository extends Repository<SearchReplaceBrandEntity> {
  constructor(
    @InjectRepository(SearchReplaceBrandEntity)
    private readonly repo: Repository<SearchReplaceBrandEntity>
  ) {
    super(repo.target, repo.manager, repo.queryRunner)
  }

  public async findAll(): Promise<SearchReplaceBrandEntity[]> {
    return await this.repo.find()
  }
}
