import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { SplitWordService } from './services/splitWord.service'
import { IProducts } from '../product/interfaces/product.interface'
import { SplitWordUseCase } from './use-cases/split-word.usecase'

@Controller('core')
export class CoreController {
  constructor(private splitWordUseCase: SplitWordUseCase) {}

  @Post('tokenize')
  @UseInterceptors(FileInterceptor('file'))
  tokenizeData(@UploadedFile() file?: Express.Multer.File, @Body('word') word?: string) {
    const raw = file?.buffer.toString('utf-8').replace(/^\uFEFF/, '')
    if (!raw && !word) return 'file or word is required'
    if (!raw && word) return this.splitWordUseCase.execute(word)
    const data: IProducts[] = JSON.parse(raw ?? '[]')

    return this.splitWordUseCase.execute(data)
  }
}
