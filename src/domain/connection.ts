const connectionTypes = ['monofasico', 'bifasico', 'trifasico'];

export class Connection {
  private constructor(private readonly value: string) {}

  static create(value: string): Connection {
    if (!connectionTypes.includes(value)) {
      throw new Error('Invalid connection type');
    }
    return new Connection(value);
  }

  getValue(): string {
    return this.value;
  }
}
