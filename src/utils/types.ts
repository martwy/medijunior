export type TagProps = {
  items: {
    count: number;
    name: string;
  }[];
};

export enum Order {
  desc = "desc",
  asc = "asc",
}

export enum Sort {
  popular = "popular",
  activity = "activity",
  name = "name",
}

export type SortProps = {
  sort: Sort | undefined;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
};

export type OrderProps = {
  order: Order | undefined;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
};
export type TextProps = {
  page: number | 1;
  label: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
