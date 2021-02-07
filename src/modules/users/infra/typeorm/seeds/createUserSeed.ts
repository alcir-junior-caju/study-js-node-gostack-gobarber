import { Factory, Seeder } from 'typeorm-seeding';

import User from '@modules/users/infra/typeorm/entities/User';

class CreateUserSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().create({
      name: 'Alcir Junior',
      email: 'junior@cajucomunica.com.br'
    });
    await factory(User)().createMany(50);
  }
}

export default CreateUserSeed;
