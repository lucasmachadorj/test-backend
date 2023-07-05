import { ConsumptionHistory } from './consumption-history';

describe('Consumption History', () => {
  it('deve ser definido', () => {
    expect(ConsumptionHistory).toBeDefined();
  });

  it('contem uma série temporal de pelo menos 12 meses de consumo de energia elétrica', () => {
    const data = [
      3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
    ];
    const consumptionHistory = ConsumptionHistory.create(data);
    expect(consumptionHistory).toBeDefined();
  });

  it('calcula a média de consumo de energia elétrica em um período', () => {
    const data = [
      3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
    ];
    const consumptionHistory = ConsumptionHistory.create(data);
    expect(consumptionHistory.average(0, 12)).toBe(5509.17);
  });
});
