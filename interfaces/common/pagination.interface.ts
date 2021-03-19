export interface IPagination {
  /**
   * Page index, starts from 0
   */
  page: number;
  /**
   * Number of rows to get
   */
  rows: number;

  totalRows: number;
}
