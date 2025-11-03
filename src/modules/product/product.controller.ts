import { BadRequestException, Controller, Get, Logger, Res } from '@nestjs/common'
import { ProductUsecase } from './use-cases/product.usecase'
import * as fs from 'fs'
import { Response } from 'express'

@Controller('products')
export class ProductController {
  constructor(private readonly productUsecase: ProductUsecase) {}

  @Get()
  async getProducts(@Res() res: Response) {
    const { filePath } = await this.productUsecase.execute()

    if (!fs.existsSync(filePath)) {
      throw new BadRequestException('File not found')
    }
    res.setHeader('Content-Disposition', 'attachment; filename=productsList.json')
    res.setHeader('Content-Type', 'application/json')
    res.download(filePath)
  }
}
