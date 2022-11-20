import * as config from 'config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { CollectModule } from './collect/collect.module';
import { CollectService } from './collect/collect.service';
import { Logger } from '@nestjs/common';

const logger = new Logger('bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const collectService = app
    .select(CollectModule)
    .get(CollectService, { strict: true });

  if (process.env.COLLECTOR) {
    try {
      await collectService.collect(process.env.COLLECTOR);
    } catch (e) {
      logger.error(e);
    } finally {
      await app.close();
      logger.log('App close');
    }
  }

  await app.listen(config.get('port'));
}
bootstrap();
