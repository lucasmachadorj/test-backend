import { Document } from '../document';

describe('Objeto de valor: documento', () => {
  it('deve ser definido', () => expect(Document).toBeDefined());

  it("cria um documento com o número de cpf '14041737706'", () => {
    const document = Document.create('14041737706');

    expect(document.isCPF()).toBe(true);
  });

  it("cria um documento com o número de cnpj '33400689000109'", () => {
    const document = Document.create('33400689000109');

    expect(document.isCPF()).toBe(false);
  });

  it('lança um erro se documento é inválido, como 123463', () => {
    expect(() => Document.create('123463')).toThrowError();
  });
});
