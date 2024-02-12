import { ITag } from "./tag";

export interface ISpending {
  id: number;
  cost: number;
  comment: string;
  tag: ITag;
  expanded: boolean | null | undefined;
}

export interface IUpdateSpending {
  id: number;
  cost: number;
  comment: string;
  tagId?: number | null;
}
