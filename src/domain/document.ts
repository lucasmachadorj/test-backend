type DocumentType = 'CPF' | 'CNPJ';

export class Document {
  private constructor(private number: string, private type: DocumentType) {}

  static create(number: string): Document {
    if (this.validateCPF(number)) {
      return new Document(number, 'CPF');
    }

    if (this.validateCNPJ(number)) {
      return new Document(number, 'CNPJ');
    }

    throw new Error('Documento inválido. Insira cpf ou cnpj');
  }

  static validateCPF(number: string): boolean {
    const cpfRegex = /^\d{11}$/;
    return cpfRegex.test(number);
  }

  static validateCNPJ(number: string): boolean {
    const cnpjRegex = /^\d{14}$/;
    return cnpjRegex.test(number);
  }

  isCPF(): boolean {
    return this.type === 'CPF';
  }
}
