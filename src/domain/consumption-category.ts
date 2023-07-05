const types = [
  'residencial',
  'industrial',
  'comercial',
  'rural',
  'poderPublico',
];

export class ConsumptionCategory {
  private constructor(private readonly value: string) {}

  static create(value: string): ConsumptionCategory {
    if (!types.includes(value)) {
      throw new Error('Invalid consumption category');
    }
    return new ConsumptionCategory(value);
  }

  getValue(): string {
    return this.value;
  }
}
