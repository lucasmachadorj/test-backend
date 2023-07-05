type ConsumptionHistoryProps = {
  history: number[];
};

export class ConsumptionHistory {
  private props: ConsumptionHistoryProps;

  private constructor(props: ConsumptionHistoryProps) {
    this.props = props;
  }

  static create(data: number[]): ConsumptionHistory {
    if (data.length < 12) {
      throw new Error('Invalid consumption history');
    }
    const props: ConsumptionHistoryProps = {
      history: data,
    };
    return new ConsumptionHistory(props);
  }
}
