import { Document } from './document';

describe('Document value object', () => {
  it('deve ser definido', () => expect(Document).toBeDefined());

  it("cria um documento com o número de cpf '14041737706'", () => {
    const document = Document.create('14041737706');

    expect(document.isCPF()).toBe(true);
  });
});
