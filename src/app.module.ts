import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './modules/product/product.module'
import { ApplicationConfigModule } from './common/config/config.module'
import { TypeOrmDatabaseModule } from './common/databases/typeorm/typeorm.module'
import { CoreModule } from './modules/core/core.module'

@Module({
  imports: [ProductModule, ApplicationConfigModule, TypeOrmDatabaseModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
