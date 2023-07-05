import { Client, ClientProps } from './client';
import { Connection } from './connection';
import { Consumption } from './consumption';
import { Document } from './document';
import { TariffModality } from './tariff-modality';

type TestClientProps = {
  document: string;
  connectionType: string;
  tariffModality: string;
  consumptionCategory: string;
  consumptionHistory: number[];
};

export function buildTestClient(overrides?: Partial<TestClientProps>): Client {
  const defaultValues: TestClientProps = {
    document: '33400689000109',
    connectionType: 'bifasico',
    tariffModality: 'azul',
    consumptionCategory: 'industrial',
    consumptionHistory: [
      3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597,
    ],
  };

  const props: TestClientProps = { ...defaultValues, ...overrides };

  const clientProps: ClientProps = {
    document: Document.create(props.document),
    connectionType: Connection.create(props.connectionType),
    tariffModality: TariffModality.create(props.tariffModality),
    consumption: Consumption.create(
      props.consumptionCategory,
      props.consumptionHistory,
    ),
  };

  return Client.create(clientProps);
}
