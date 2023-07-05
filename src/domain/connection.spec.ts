import { Connection } from './connection';

describe('Connection value object', () => {
  it('deve ser definido', () => expect(Connection).toBeDefined());

  it('cria uma conexão com o tipo de conexão monofásico', () => {
    const connection = Connection.create('monofasico');

    expect(connection.getValue()).toBe('monofasico');
  });
});
