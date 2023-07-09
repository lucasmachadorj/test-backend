import { TariffModality } from '../tariff-modality';

describe('Modalidade de tarifa', () => {
  it('should be defined', () => expect(TariffModality).toBeDefined());

  it('cria uma modalidade de tarifa convencional ', () => {
    const tariffModality = TariffModality.create('convencional');

    expect(tariffModality.getValue()).toBe('convencional');
  });

  it('cria uma modalidade de tarifa azul', () => {
    const tariffModality = TariffModality.create('azul');

    expect(tariffModality.getValue()).toBe('azul');
  });

  it('cria um amodalide de tarifa branca', () => {
    const tariffModality = TariffModality.create('branca');

    expect(tariffModality.getValue()).toBe('branca');
  });

  it('cria um amodalide de tarifa verde', () => {
    const tariffModality = TariffModality.create('verde');

    expect(tariffModality.getValue()).toBe('verde');
  });

  it('não cria uma modalidade de tarifa inválida', () => {
    expect(() => TariffModality.create('invalido')).toThrowError(
      'Modalidade de tarifa inválida. Valores válidos: azul, branca, verde, convencional',
    );
  });
});
