export interface RootState {
  product: {
    searchTerm: string;
    categoryTerm: string;
  };
}

export interface ProductsData {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  brand: string;
}
