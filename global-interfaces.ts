export interface RootState {
  product: {
    searchTerm: string;
    categoryTerm: string;
  };
  user: {
    filter: Filter;
  };
}

export interface Filter {
  type: "search" | "card" | "currency" | "gender";
  value: string;
}

export interface ProductsData {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  brand: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  gender: string;
  bank: Bank;
  email: string;
  phone: string;
  address: Address;
  university: string;
  username: string;
}

export interface Bank {
  cardType: string;
  currency: string;
}

export interface Address {
  city: string;
  state: string;
}
