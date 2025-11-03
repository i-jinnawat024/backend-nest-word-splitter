import { Module } from '@nestjs/common'
import { CoreController } from './core.controller'
import { SplitWordService } from './services/splitWord.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CustomProductManualEntity } from './entities/custom-product-manual.entity'
import { CustomProductManualRepository } from './repositories/custom-product-manual.repository'
import { SplitWordUseCase } from './use-cases/split-word.usecase'

@Module({
  imports: [TypeOrmModule.forFeature([CustomProductManualEntity])],
  controllers: [CoreController],
  providers: [SplitWordUseCase, SplitWordService, CustomProductManualRepository],
})
export class CoreModule {}
