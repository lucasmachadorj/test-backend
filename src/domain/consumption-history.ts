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

  average(start: number, end: number): number {
    const sum = this.props.history.slice(start, end).reduce((a, b) => a + b, 0);
    return Number((sum / (end - start)).toFixed(2));
  }

  cumulative(start: number, end: number): number {
    return this.props.history.slice(start, end).reduce((a, b) => a + b, 0);
  }
}
