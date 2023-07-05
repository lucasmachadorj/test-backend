import { EligibilityResponse } from '../use-case/verify-eligibility/verify-eligibility.response';
import { Client } from './client';

export class EligibilityService {
  static acceptedConsumptionCategories = [
    'comercial',
    'residencial',
    'industrial',
  ];

  static evaluate(client: Client): EligibilityResponse {
    const reasons: string[] = [];

    if (!client.consumptionIsOneOf(this.acceptedConsumptionCategories)) {
      reasons.push('Classe de consumo não aceita');
    }

    if (reasons.length > 0) {
      return {
        elegivel: false,
        razoesDeInelegibilidade: reasons,
      };
    }

    return {
      elegivel: true,
      economiaAnualDeCO2: 0,
    };
  }
}
