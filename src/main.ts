import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './common/shared/filters/http-exception.filter'
import { Logger } from '@nestjs/common'
import * as express from 'express'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(process.env.PORT ?? 3000)
  Logger.log(`Server is running on port ${process.env.PORT ?? 3000}`)
}
bootstrap()
