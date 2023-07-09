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
      throw new Error(
        'Categoria de consumo inválida. Valores válidos: residencial, industrial, comercial, rural, poderPublico',
      );
    }
    return new ConsumptionCategory(value);
  }

  get value(): string {
    return this._value;
  }
}
