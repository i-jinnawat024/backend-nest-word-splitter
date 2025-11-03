import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { join } from 'path'
import {
  DBSB40_SERVER,
  ENV_DB_DPLUS_DATABASE,
  ENV_DB_DPLUS_PASSWORD,
  ENV_DB_DPLUS_USERNAME,
} from 'src/common/config/envs/db-dplus.config.env'
import { ApplicationConfigModule } from 'src/common/config/config.module'

const rootPath = __dirname + '../../../../modules'
const entities = [join(rootPath, '**', 'entities', '*.entity.{ts,js}')]

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ApplicationConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mssql',
          host: configService.getOrThrow(DBSB40_SERVER),
          username: configService.getOrThrow(ENV_DB_DPLUS_USERNAME),
          password: configService.getOrThrow(ENV_DB_DPLUS_PASSWORD),
          database: configService.getOrThrow(ENV_DB_DPLUS_DATABASE),
          requestTimeout: 30000,
          entities,
          synchronize: false,
          options: {
            enableArithAbort: true,
            encrypt: false,
          },
          logging: false,
        }
      },
    }),
  ],
})
export class TypeOrmDatabaseModule {}
