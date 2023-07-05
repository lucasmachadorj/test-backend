import { defineFeature, loadFeature } from 'jest-cucumber';
import path from 'path';

const feature = loadFeature(
  path.join(__dirname, './verify-eligibility.feature'),
);

defineFeature(feature, (test) => {
  test('Elegibilidade é verificada e aprovada', ({ given, when, then }) => {
    let verifyEligibilityCommand: VerifyEligibilityCommand;
    let eligibilityResponse: EligibilityResponse;

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

    when('o sistema verifica a elegibilidade', async () => {
      eligibilityResponse = await checkEligibility(verifyEligibilityCommand);
    });

    then('o sistema retorna que o usuário é elegível', () => {
      expect(eligibilityResponse.elegivel).toBe(true);
    });

    then('o sistema calcula a economia anual de CO2', () => {
      expect(eligibilityResponse.economiaAnualDeCO2).toBeGreaterThanOrEqual(0);
    });
  });
});
