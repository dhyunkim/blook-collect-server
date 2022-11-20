import { Injectable, Logger } from '@nestjs/common';

import { ProviderRepository } from './repository';

@Injectable()
export class CollectService {
  private readonly logger = new Logger(CollectService.name);

  constructor(private readonly providerRepository: ProviderRepository) {}

  async collect(providerName: string) {
    const provider = await this.getProvider(providerName);
    if (!provider) {
      return false;
    }

    this.logger.log(`Provider: ${provider.nameKr}`);
  }

  private async getProvider(providerName: string) {
    const provider = await this.providerRepository.getByName(providerName);
    if (!provider) {
      return null;
    }

    return provider;
  }
}
