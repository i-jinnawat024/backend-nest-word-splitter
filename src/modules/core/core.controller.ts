import { Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { SplitWordService } from './services/splitWord.service'
import { IProducts } from '../product/interfaces/product.interface'
import { SplitWordUseCase } from './use-cases/split-word.usecase'

@Controller('core')
export class CoreController {
  constructor(private splitWordUseCase: SplitWordUseCase) {}

  @Post('tokenize')
  @UseInterceptors(FileInterceptor('file'))
  tokenizeData(@UploadedFile() file?: Express.Multer.File, @Query() brand?: string) {
    const raw = file?.buffer.toString('utf-8').replace(/^\uFEFF/, '')
    if (!raw && !brand) return 'file or brand is required'
    const data: IProducts[] = JSON.parse(raw ?? '[]')

    return this.splitWordUseCase.execute(data)
  }
}
