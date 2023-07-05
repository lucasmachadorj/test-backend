import { ConsumptionCategory } from './consumption-category';

describe('ConsumptionCategory value object', () => {
  it('deve ser definido', () => expect(ConsumptionCategory).toBeDefined());

  it('cria uma categoria de consumo residencial', () => {
    const consumptionCategory = ConsumptionCategory.create('residencial');

    expect(consumptionCategory.getValue()).toBe('residencial');
  });

  it('cria uma categoria de consumo comercial', () => {
    const consumptionCategory = ConsumptionCategory.create('comercial');

    expect(consumptionCategory.getValue()).toBe('comercial');
  });

  it('cria uma categoria de consumo industrial', () => {
    const consumptionCategory = ConsumptionCategory.create('industrial');

    expect(consumptionCategory.getValue()).toBe('industrial');
  });

  it('cria uma categoria de consumo rural', () => {
    const consumptionCategory = ConsumptionCategory.create('rural');

    expect(consumptionCategory.getValue()).toBe('rural');
  });

  it('cria uma categoria de consumo poder público', () => {
    const consumptionCategory = ConsumptionCategory.create('poderPublico');

    expect(consumptionCategory.getValue()).toBe('poderPublico');
  });

  it('não cria uma categoria de consumo inexistente', () => {
    expect(() => ConsumptionCategory.create('invalido')).toThrowError(
      'Invalid consumption category',
    );
  });
});
