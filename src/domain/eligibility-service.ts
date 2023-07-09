import { EligibilityResponse } from '../application/verify-eligibility/verify-eligibility.response';
import { Client } from './client';

export class EligibilityService {
  private acceptedConsumptionCategories: string[];
  private acceptedTariffModalities: string[];
  private minimumConsumptionPerConnection: Record<string, number>;

  private constructor() {
    this.acceptedConsumptionCategories = [
      'comercial',
      'residencial',
      'industrial',
    ];

    this.acceptedTariffModalities = ['convencional', 'branca'];

    this.minimumConsumptionPerConnection = {
      monofasico: 400,
      bifasico: 500,
      trifasico: 750,
    };
  }

  static create = (): EligibilityService => new EligibilityService();

  evaluate(client: Client): EligibilityResponse {
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

    return {
      elegivel: true,
      economiaAnualDeCO2: this.calculateAnnualCO2Economy(
        client.anualConsumption(),
      ),
    };
  }

  private calculateAnnualCO2Economy(consumption: number): number {
    const co2EmissionFactor = 84 / 1000;
    return Number((consumption * co2EmissionFactor).toFixed(2));
  }
}
