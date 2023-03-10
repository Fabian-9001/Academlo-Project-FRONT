export interface CategoriesResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  currentPage: number;
  results: Category[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
