import { Action } from '@ngrx/store';
import { type } from '../../ngrx/util';
import { Ingredient } from './ingredients.interfaces';

export const ActionTypes = {
  GET_ALL: type('[Ingredient] GET ALL Requested'),
  GET_ALL_COMPLETED: type('[Ingredient] GET ALL Completed'),
  GET_ALL_ERROR: type('[Ingredient] GET ALL Error'),

  GET: type('[Ingredient] GET Requested'),
  GET_COMPLETED: type('[Ingredient] GET Completed'),
  GET_ERROR: type('[Ingredient] GET Error'),

  CREATE: type('[Ingredient] CREATE Requested'),
  CREATE_COMPLETED: type('[Ingredient] CREATE Completed'),
  CREATE_ERROR: type('[Ingredient] CREATE Error'),

  UPDATE: type('[Ingredient] UPDATE Requested'),
  UPDATE_COMPLETED: type('[Ingredient] UPDATE Completed'),
  UPDATE_ERROR: type('[Ingredient] UPDATE Error'),

  REMOVE: type('[Ingredient] REMOVE Requested'),
  REMOVE_COMPLETED: type('[Ingredient] REMOVE Completed'),
  REMOVE_ERROR: type('[Ingredient] REMOVE Error')
};

export class IngredientPayload {
  constructor(public ingredient: Ingredient) {}
}

export class IngredientUpdatePayload {
  constructor(public ingredientId: string, public ingredient: Partial<Ingredient>) {}
}

export class IngredientIdPayload {
  constructor(public ingredientId: string) {}
}

export class IngredientsPayload {
  constructor(public ingredients: Ingredient[]) {}
}

export class GetAllAction implements Action {
  type = ActionTypes.GET_ALL;

  constructor(public payload: any = null) {}
}

export class GetAllCompletedAction implements Action {
  type = ActionTypes.GET_ALL_COMPLETED;

  constructor(public payload: IngredientsPayload) {}
}

export class GetAllErrorAction implements Action {
  type = ActionTypes.GET_ALL_ERROR;

  constructor(public payload: string) {}
}

export class GetAction implements Action {
  type = ActionTypes.GET;

  constructor(public payload: any = null) {}
}

export class GetCompletedAction implements Action {
  type = ActionTypes.GET_COMPLETED;

  constructor(public payload: IngredientsPayload) {}
}

export class GetErrorAction implements Action {
  type = ActionTypes.GET_ERROR;

  constructor(public payload: string) {}
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: IngredientPayload) {}
}

export class CreateCompletedAction implements Action {
  type = ActionTypes.CREATE_COMPLETED;

  constructor(public payload: IngredientPayload) {}
}

export class CreateErrorAction implements Action {
  type = ActionTypes.CREATE_ERROR;

  constructor(public payload: string) {}
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: IngredientUpdatePayload) {}
}

export class UpdateCompletedAction implements Action {
  type = ActionTypes.UPDATE_COMPLETED;

  constructor(public payload: IngredientPayload) {}
}

export class UpdateErrorAction implements Action {
  type = ActionTypes.UPDATE_ERROR;

  constructor(public payload: string) {}
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: IngredientIdPayload) {}
}

export class RemoveCompletedAction implements Action {
  type = ActionTypes.REMOVE_COMPLETED;

  constructor(public payload: IngredientPayload) {}
}

export class RemoveErrorAction implements Action {
  type = ActionTypes.REMOVE_ERROR;

  constructor(public payload: string) {}
}

export type IngredientAction =
  | GetAllAction
  | GetAllCompletedAction
  | GetAllErrorAction
  | GetAction
  | GetCompletedAction
  | GetErrorAction
  | CreateAction
  | CreateCompletedAction
  | CreateErrorAction
  | UpdateAction
  | UpdateCompletedAction
  | UpdateErrorAction
  | RemoveAction
  | RemoveCompletedAction
  | RemoveErrorAction;
