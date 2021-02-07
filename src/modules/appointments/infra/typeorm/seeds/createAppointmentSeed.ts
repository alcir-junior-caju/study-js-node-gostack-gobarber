import { Factory, Seeder } from 'typeorm-seeding';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import User from '@modules/users/infra/typeorm/entities/User';

class CreateAppointmentSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const users = await factory(User)().createMany(50);
    const userDefault = await factory(User)().create({
      email: 'provider@gobarber.com.br'
    });

    users.unshift(userDefault);

    const ids = users.map(user => user.id);

    await factory(Appointment)()
      .map(async appointment => {
        const randomId = Math.floor(Math.random() * ids.length);
        Object.assign(appointment, {
          provider_id: ids[randomId]
        });

        return appointment;
      })
      .createMany(250);
  }
}

export default CreateAppointmentSeed;
