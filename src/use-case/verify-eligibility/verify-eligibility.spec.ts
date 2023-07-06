import { VerifyEligibilityCommand } from './verify-eligibility.command';
import { VerifyEligibility } from './verify-eligibility.usecase';

describe('Verify eligibility use case behavior', () => {
  let verifyEligibility: VerifyEligibility;
  let command: VerifyEligibilityCommand;

  beforeEach(() => {
    verifyEligibility = new VerifyEligibility();
    command = {
      numeroDoDocumento: '14041737706',
      tipoDeConexao: 'bifasico',
      classeDeConsumo: 'comercial',
      modalidadeTarifaria: 'convencional',
      historicoDeConsumo: [
        3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
      ],
    };
  });

  it('lança um erro se documento é inválido, como 123463', () => {
    command = {
      ...command,
      numeroDoDocumento: '123463',
    };

    expect(() => verifyEligibility.execute(command)).toThrowError();
  });

  it('lança um erro se tipo de conexão é inválido, como xxxx', () => {
    command = {
      ...command,
      tipoDeConexao: 'xxxx',
    };

    expect(() => verifyEligibility.execute(command)).toThrowError();
  });

  it('lança um erro se classe de consumo é inválida, como xxxx', () => {
    command = {
      ...command,
      classeDeConsumo: 'xxxx',
    };

    expect(() => verifyEligibility.execute(command)).toThrowError();
  });

  it('lança um erro se modalidade tarifária é inválida, como xxxx', () => {
    command = {
      ...command,
      modalidadeTarifaria: 'xxxx',
    };

    expect(() => verifyEligibility.execute(command)).toThrowError();
  });

  it('lança um erro se histórico de consumo é inválido, como [1, 2, 3]', () => {
    command = {
      ...command,
      historicoDeConsumo: [1, 2, 3],
    };

    expect(() => verifyEligibility.execute(command)).toThrowError();
  });
});
