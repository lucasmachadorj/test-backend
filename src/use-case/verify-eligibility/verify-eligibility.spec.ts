import { defineFeature, loadFeature } from 'jest-cucumber';
import path from 'path';

import { VerifyEligibilityCommand } from './verify-eligibility.command';
import { EligibilityResponse } from './verify-eligibility.response';
import { VerifyEligibility } from './verify-eligibility.usecase';

const feature = loadFeature(
  path.join(__dirname, './verify-eligibility.feature'),
);

defineFeature(feature, (test) => {
  let verifyEligibilityCommand: VerifyEligibilityCommand;
  let eligibilityResponse: EligibilityResponse;
  let verifyEligibility: VerifyEligibility;

  beforeEach(() => {
    verifyEligibility = new VerifyEligibility();
  });

  test('Elegibilidade é verificada e aprovada', ({
    given,
    when,
    then,
    and,
  }) => {
    given(
      'que o usuário preencheu todos os requisitos de elegibilidade',
      () => {
        verifyEligibilityCommand = {
          numeroDoDocumento: '14041737706',
          tipoDeConexao: 'bifasico',
          classeDeConsumo: 'comercial',
          modalidadeTarifaria: 'convencional',
          historicoDeConsumo: [
            3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941,
            4597,
          ],
        };
      },
    );

    when('o sistema verifica a elegibilidade', () => {
      eligibilityResponse = verifyEligibility.execute(verifyEligibilityCommand);
    });

    then('o sistema retorna que o usuário é elegível', () => {
      expect(eligibilityResponse.elegivel).toBe(true);
    });

    and('o sistema calcula a economia anual de CO2', () => {
      expect(eligibilityResponse.economiaAnualDeCO2).toBe(5553.24);
    });
  });
});
