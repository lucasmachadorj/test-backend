import { Connection } from './connection';
import { Consumption } from './consumption';
import { Document } from './document';
import { TariffModality } from './tariff-modality';

type ClientProps = {
  document: Document;
  connectionType: Connection;
  tariffModality: TariffModality;
  consumption: Consumption;
};

export class Client {
  private props: ClientProps;

  private constructor(props: ClientProps) {
    this.props = props;
  }

  static create(props: ClientProps): Client {
    return new Client(props);
  }
}
