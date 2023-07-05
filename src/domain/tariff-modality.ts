const types = ['azul', 'branca', 'verde', 'convencional'];

export class TariffModality {
  private constructor(private readonly value: string) {}

  static create(value: string): TariffModality {
    if (!types.includes(value)) {
      throw new Error('Invalid tariff modality');
    }
    return new TariffModality(value);
  }

  getValue(): string {
    return this.value;
  }
}
