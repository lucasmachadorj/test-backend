const types = [
  'residencial',
  'industrial',
  'comercial',
  'rural',
  'poderPublico',
];

export class ConsumptionCategory {
  private constructor(private readonly _value: string) {}

  static create(value: string): ConsumptionCategory {
    if (!types.includes(value)) {
      throw new Error('Invalid consumption category');
    }
    return new ConsumptionCategory(value);
  }

  get value(): string {
    return this._value;
  }
}
