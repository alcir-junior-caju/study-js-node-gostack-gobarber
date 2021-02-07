import { hash } from 'bcryptjs';
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import User from '@modules/users/infra/typeorm/entities/User';

define(User, (faker: typeof Faker) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const id = faker.random.uuid();
  const name = `${firstName} ${lastName}`;
  const email = faker.internet.email(
    firstName.toLowerCase(),
    lastName.toLocaleLowerCase()
  );
  const password = hash('123456', 8);

  const user = new User();

  Object.assign(user, {
    id,
    name,
    email,
    password
  });

  return user;
});
