import { ConsumptionCategory } from './consumption-category';
import { ConsumptionHistory } from './consumption-history';

export class Consumption {
  private category: ConsumptionCategory;
  private history: ConsumptionHistory;

  private constructor(
    category: ConsumptionCategory,
    history: ConsumptionHistory,
  ) {
    this.category = category;
    this.history = history;
  }

  static create(_category: string, _history: number[]): Consumption {
    const category = ConsumptionCategory.create(_category);
    const history = ConsumptionHistory.create(_history);
    return new Consumption(category, history);
  }
}
