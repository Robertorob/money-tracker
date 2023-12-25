export interface ICategory {
  id: number;
  name: string;
  expanded: boolean | null | undefined;
}

export interface IUpdateCategory {
  id: number;
  name: string;
}
