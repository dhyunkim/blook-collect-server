import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CollectService } from './collect.service';
import { Provider } from './entity';
import { ProviderRepository } from './repository';

@Module({
  imports: [TypeOrmModule.forFeature([Provider])],
  providers: [CollectService, ProviderRepository],
})
export class CollectModule {}
