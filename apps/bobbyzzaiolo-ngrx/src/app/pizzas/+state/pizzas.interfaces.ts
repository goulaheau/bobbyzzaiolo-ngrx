export interface Pizza {
  _id?: string;
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients: any[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PizzasState {
  readonly pizzas: Pizza[];
}
