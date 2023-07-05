import { EligibilityService } from './eligibility-service';
import { buildTestClient } from './client.fixture';

describe('Test the behaviour of the eligibility service', () => {
  it('deve ser definido', () => {
    expect(EligibilityService).toBeDefined();
  });

  it("retorna 'Classe de consumo não aceita' quando a classe de consumo for rural", () => {
    const client = buildTestClient({
      consumptionCategory: 'rural',
    });

    const response = EligibilityService.evaluate(client);

    expect(response.razoesDeInelegibilidade).toContain(
      'Classe de consumo não aceita',
    );
  });

  it("retorna 'Classe de consumo não aceita' quando a classe de consumo for poderPublico", () => {
    const client = buildTestClient({
      consumptionCategory: 'poderPublico',
    });

    const response = EligibilityService.evaluate(client);

    expect(response.razoesDeInelegibilidade).toContain(
      'Classe de consumo não aceita',
    );
  });
});
