import { EligibilityResponse } from '../use-case/verify-eligibility/verify-eligibility.response';
import { Client } from './client';

export class EligibilityService {
  static acceptedConsumptionCategories = [
    'comercial',
    'residencial',
    'industrial',
  ];

  static acceptedTariffModalities = ['convencional', 'branca'];

  static minimumConsumptionPerConnection: Record<string, number> = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  };

  static evaluate(client: Client): EligibilityResponse {
    const reasons: string[] = [];

    if (!client.consumptionIsOneOf(this.acceptedConsumptionCategories)) {
      reasons.push('Classe de consumo não aceita');
    }

    if (!client.tariffModalityIsOneOf(this.acceptedTariffModalities)) {
      reasons.push('Modalidade tarifária não aceita');
    }

    if (
      client.averageConsumption() <
      this.minimumConsumptionPerConnection[client.connectionType()]
    ) {
      reasons.push('Consumo muito baixo para tipo de conexão');
    }

    if (reasons.length > 0) {
      return {
        elegivel: false,
        razoesDeInelegibilidade: reasons,
      };
    }

    const calculateAnnualCO2Economy = (client: Client): number => {
      const consumption = client.anualConsumption();
      const co2EmissionFactor = 84 / 1000;
      return Number((consumption * co2EmissionFactor).toFixed(2));
    };

    return {
      elegivel: true,
      economiaAnualDeCO2: calculateAnnualCO2Economy(client),
    };
  }
}
