export interface PaginationParams {
  skip?: number;
  take?: number;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  skip: number;
  take: number;
  page?: number;
  totalPages?: number;
}
