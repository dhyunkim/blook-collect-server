import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { readFileSync } from 'fs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectModule } from './collect/collect.module';

@Module({
  imports: [
    CollectModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const ormConfig: TypeOrmModuleOptions = JSON.parse(
          readFileSync(__dirname + '/../ormconfig.json', { encoding: 'utf-8' }),
        );
        return {
          ...ormConfig,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          migrations: [__dirname + '/migration/*.{ts,js}'],
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
