import { ActionReducer } from '@ngrx/store';
import { ActionTypes, IngredientAction } from './ingredients.actions';
import { Ingredient } from './ingredients.interfaces';

export const ingredientsReducer: ActionReducer<Ingredient[]> = (state: Ingredient[] = [], action: IngredientAction) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_COMPLETED:
      return [...state, ...action.payload.ingredients];

    case ActionTypes.CREATE_COMPLETED:
      if (action.payload.ingredient) {
        return [...state, action.payload.ingredient];
      }
      return state;

    case ActionTypes.UPDATE_COMPLETED:
      if (action.payload.ingredient) {
        return state.map((ingredient: Ingredient) => {
          return ingredient._id === action.payload.ingredient._id ? action.payload.ingredient : ingredient;
        });
      }
      return state;

    case ActionTypes.REMOVE_COMPLETED:
      if (action.payload.ingredient) {
        return state.filter((ingredient: Ingredient) => {
          return ingredient._id !== action.payload.ingredient._id;
        });
      }
      return state;

    default:
      return state;
  }
};
