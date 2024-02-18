import { ITagItem } from "./tag";

export interface ISpendingItem {
  id: number;
  cost: number;
  comment: string;
  tag: ITagItem;
  expanded: boolean | null | undefined;
}

export interface IUpdateSpending {
  id: number;
  cost: number;
  comment: string;
  tagIds?: number[] | null;
}
