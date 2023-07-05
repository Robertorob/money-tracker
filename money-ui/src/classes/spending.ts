export interface SpendingCategory {
  id: number;
  name: string;
}

export interface Spending {
  id: number;
  comment: string;
  category: SpendingCategory;
}