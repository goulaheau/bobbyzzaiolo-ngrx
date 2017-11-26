import { ActionReducer } from '@ngrx/store';
import { ActionTypes, PizzaAction } from './pizzas.actions';
import { Pizza } from './pizzas.interfaces';

export const pizzasReducer: ActionReducer<Pizza[]> = (state: Pizza[] = [], action: PizzaAction) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_COMPLETED:
      return [...state, ...action.payload.pizzas];

    case ActionTypes.CREATE_COMPLETED:
      if (action.payload.pizza) {
        return [...state, action.payload.pizza];
      }
      return state;

    case ActionTypes.UPDATE_COMPLETED:
      if (action.payload.pizza) {
        return state.map((pizza: Pizza) => {
          return pizza._id === action.payload.pizza._id ? action.payload.pizza : pizza;
        });
      }
      return state;

    case ActionTypes.REMOVE_COMPLETED:
      if (action.payload.pizza) {
        return state.filter((pizza: Pizza) => {
          return pizza._id !== action.payload.pizza._id;
        });
      }
      return state;

    default:
      return state;
  }
};
