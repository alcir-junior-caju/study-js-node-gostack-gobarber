import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const {
      body: { day, month, year },
      params: { id: providerId }
    } = request;

    const listProviderDayAvailabilityService = container.resolve(
      ListProviderDayAvailabilityService
    );

    const availability = await listProviderDayAvailabilityService.execute({
      providerId,
      day,
      month,
      year
    });

    return response.json(availability);
  }
}

export default ProviderDayAvailabilityController;
