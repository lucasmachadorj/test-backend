import { EligibilityService } from '../eligibility-service';
import { buildTestClient } from './client.fixture';

describe('Test the behaviour of the eligibility service', () => {
  let eligibilityService: EligibilityService;

  beforeAll(() => {
    eligibilityService = EligibilityService.create();
  });

  it('deve ser definido', () => {
    expect(EligibilityService).toBeDefined();
  });

  it("retorna 'Classe de consumo não aceita' quando a classe de consumo for rural", () => {
    const client = buildTestClient({
      consumptionCategory: 'rural',
    });

    const response = eligibilityService.evaluate(client);

    expect(response.razoesDeInelegibilidade).toContain(
      'Classe de consumo não aceita',
    );
  });

  it("retorna 'Classe de consumo não aceita' quando a classe de consumo for poderPublico", () => {
    const client = buildTestClient({
      consumptionCategory: 'poderPublico',
    });

    const response = eligibilityService.evaluate(client);

    expect(response.razoesDeInelegibilidade).toContain(
      'Classe de consumo não aceita',
    );
  });

  it("retorna 'Modalidade tarifária não aceita' quando a modalidade tarifária for azul", () => {
    const client = buildTestClient({
      tariffModality: 'azul',
    });

    const response = eligibilityService.evaluate(client);

    expect(response.razoesDeInelegibilidade).toContain(
      'Modalidade tarifária não aceita',
    );
  });

  it("retorna 'Modalidade tarifária não aceita' quando a modalidade tarifária for verde", () => {
    const client = buildTestClient({
      tariffModality: 'verde',
    });

    const response = eligibilityService.evaluate(client);

    expect(response.razoesDeInelegibilidade).toContain(
      'Modalidade tarifária não aceita',
    );
  });

  it("retorna 'Consumo muito baixo para tipo de conexão' se a conexão é Monofásica e o consumo médio é menor que 400 kWh", () => {
    const client = buildTestClient({
      connectionType: 'monofasico',
      consumptionHistory: [
        395, 398, 401, 402, 397, 400, 398, 400, 402, 396, 399, 400,
      ],
    });

    const response = eligibilityService.evaluate(client);

    expect(response.razoesDeInelegibilidade).toContain(
      'Consumo muito baixo para tipo de conexão',
    );
  });
});
