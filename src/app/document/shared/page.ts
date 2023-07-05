export interface Page<T> {
  items: T;
  totalResults: number;
  size: number;
  page: number;
}
