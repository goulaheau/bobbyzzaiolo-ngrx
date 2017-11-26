export interface Ingredient {
  _id?: string;
  name: string;
  weight: string;
  price: string;
}

export interface IngredientsState {
  readonly ingredients: Ingredient[];
}
