import { Module } from '@nestjs/common'
import { ConfigModule as BaseConfigModule } from '@nestjs/config'
import dbDplusConfigEnv from './envs/db-dplus.config.env'

@Module({
  imports: [
    BaseConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '.env.dev','.env.development.local'],
      load: [dbDplusConfigEnv],
    }),
  ],
})
export class ApplicationConfigModule {}
