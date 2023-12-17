export interface ISpendingCategory {
  id: number;
  name: string;
}

export interface ISpending {
  id: number;
  cost: number;
  comment: string;
  category: ISpendingCategory;
  expanded: boolean | null | undefined;
}

export interface IUpdateSpending {
  id: number;
  cost: number;
  comment: string;
  categoryId: number;
}
