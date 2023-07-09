import { Connection } from '../connection';

describe('Objeto de valor: conexão', () => {
  it('deve ser definido', () => expect(Connection).toBeDefined());

  it('cria uma conexão com o tipo de conexão monofásico', () => {
    const connection = Connection.create('monofasico');

    expect(connection.getValue()).toBe('monofasico');
  });

  it('cria uma conexão com o tipo de conexão bifásico', () => {
    const connection = Connection.create('bifasico');

    expect(connection.getValue()).toBe('bifasico');
  });

  it('cria uma conexão com o tipo de conexão trifásico', () => {
    const connection = Connection.create('trifasico');

    expect(connection.getValue()).toBe('trifasico');
  });

  it('não cria uma conexão com o tipo de conexão inexistente', () => {
    expect(() => Connection.create('invalido')).toThrowError(
      'Tipo de conexão inválido. Valores válidos: monofasico, bifasico, trifasico',
    );
  });
});
