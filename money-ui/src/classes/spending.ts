import { ICategory } from "./category";

export interface ISpending {
  id: number;
  cost: number;
  comment: string;
  category: ICategory;
  expanded: boolean | null | undefined;
}

export interface IUpdateSpending {
  id: number;
  cost: number;
  comment: string;
  categoryId?: number | null;
}
