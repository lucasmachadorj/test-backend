import { defineFeature, loadFeature } from 'jest-cucumber';
import path from 'path';

import { VerifyEligibilityCommand } from '../use-case/verify-eligibility/verify-eligibility.command';
import { EligibilityResponse } from '../use-case/verify-eligibility/verify-eligibility.response';
import { VerifyEligibility } from '../use-case/verify-eligibility/verify-eligibility.usecase';

const feature = loadFeature(
  path.join(__dirname, './verify-eligibility.feature'),
);

defineFeature(feature, (test) => {
  let verifyEligibilityCommand: VerifyEligibilityCommand;
  let eligibilityResponse: EligibilityResponse;

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
      eligibilityResponse = VerifyEligibility.execute(verifyEligibilityCommand);
    });

    then('o sistema retorna que o usuário é elegível', () => {
      expect(eligibilityResponse.elegivel).toBe(true);
    });

    and('o sistema calcula a economia anual de CO2', () => {
      expect(eligibilityResponse.economiaAnualDeCO2).toBe(5553.24);
    });
  });

  test('Elegibilidade é verificada e negada', ({ given, when, then, and }) => {
    given(
      /^que o usuário apresenta classe de consumo "(.*)" e a modalidade tarifária é "(.*)"$/,
      (classeDeConsumo, modalidadeTarifaria) => {
        verifyEligibilityCommand = {
          numeroDoDocumento: '14041737706',
          tipoDeConexao: 'bifasico',
          classeDeConsumo: classeDeConsumo,
          modalidadeTarifaria: modalidadeTarifaria,
          historicoDeConsumo: [
            3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941,
            4597,
          ],
        };
      },
    );

    when('o sistema verifica a elegibilidade', () => {
      eligibilityResponse = VerifyEligibility.execute(verifyEligibilityCommand);
    });

    then('o sistema retorna que o usuário não é elegível', () => {
      expect(eligibilityResponse.elegivel).toBe(false);
    });

    and('o sistema não calcula a economia anual de CO2', () => {
      expect(eligibilityResponse.economiaAnualDeCO2).toBeUndefined();
    });

    and(/^o sistema retorna a mensagem de erro "(.*)"$/, (message) => {
      expect(eligibilityResponse.razoesDeInelegibilidade).toContain(message);
    });

    and(/^o sistema retorna a mensagem de erro "(.*)"$/, (message) => {
      expect(eligibilityResponse.razoesDeInelegibilidade).toContain(message);
    });
  });
});
