export interface SpendingCategory {
  id: number;
  name: string;
}

export interface Spending {
  id: number;
  cost: number;
  comment: string;
  category: SpendingCategory;
}

export interface UpdateSpending {
  id: number;
  cost: number;
  comment: string;
  categoryId: number;
}
