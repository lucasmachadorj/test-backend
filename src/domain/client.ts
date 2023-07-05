import { Connection } from './connection';
import { Consumption } from './consumption';
import { Document } from './document';
import { TariffModality } from './tariff-modality';

export type ClientProps = {
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

  consumptionIsOneOf(consumptionCategories: string[]): boolean {
    return consumptionCategories.includes(this.props.consumption.getCategory());
  }

  tariffModalityIsOneOf(tariffModalities: string[]): boolean {
    return tariffModalities.includes(this.props.tariffModality.getValue());
  }

  averageConsumption(): number {
    return this.props.consumption.getAverage();
  }

  connectionType(): string {
    return this.props.connectionType.getValue();
  }

  anualConsumption(): number {
    return this.props.consumption.getAnualConsumption();
  }
}
