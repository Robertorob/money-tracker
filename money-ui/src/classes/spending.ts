import { ITag } from "../components/spendings/spending-form";

export interface ISpendingItem {
  id: number;
  cost: number;
  comment: string;
  tags: ITag[];
  expanded: boolean | null | undefined;
}

export interface IUpdateSpending {
  id: number;
  cost: number;
  comment: string;
  tagIds?: number[] | null;
}
