export interface IGetManyParams {
  limit: number;
  offset: number;
}

export interface IAdvancedSearchString {
  insensitive?: boolean;
  value: string;
  similar?: boolean;
}
export type ConditionalSearch<T> = {
  [K in keyof T]?: T[K] extends string ? string | IAdvancedSearchString : T[K];
};

export type AdvancedSearch<T> = {
  [K in keyof T]?: T[K] extends string ? string | IAdvancedSearchString : T[K];
};
export type ISelection<T> = {
  [K in keyof T]?: boolean;
};
