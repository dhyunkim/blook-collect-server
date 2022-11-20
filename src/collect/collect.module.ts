import { Module } from '@nestjs/common';
import { CollectService } from './collect.service';

@Module({
  providers: [CollectService],
})
export class CollectModule {}
