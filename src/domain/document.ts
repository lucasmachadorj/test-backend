export class Document {
  private constructor(private number: string) {}

  static create(number: string): Document {
    return new Document(number);
  }

  isCPF(): boolean {
    return true;
  }
}
