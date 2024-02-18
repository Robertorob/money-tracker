export interface ITagItem {
  id: number;
  name: string;
  expanded: boolean | null | undefined;
}

export interface IUpdateTag {
  id: number;
  name: string;
}
