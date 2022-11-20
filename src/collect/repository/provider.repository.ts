import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Provider } from '../entity/provider.entity';

export class ProviderRepository {
  constructor(
    @InjectRepository(Provider)
    private repository: Repository<Provider>,
  ) {}

  getByName(name: string) {
    return this.repository.findOne({
      where: {
        name,
      },
    });
  }
}
