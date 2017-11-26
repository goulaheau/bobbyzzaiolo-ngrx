import { Action } from '@ngrx/store';
import { type } from '../../ngrx/util';
import { Pizza } from './pizzas.interfaces';

export const ActionTypes = {
  GET_ALL: type('[Pizza] GET ALL Requested'),
  GET_ALL_COMPLETED: type('[Pizza] GET ALL Completed'),
  GET_ALL_ERROR: type('[Pizza] GET ALL Error'),

  GET: type('[Pizza] GET Requested'),
  GET_COMPLETED: type('[Pizza] GET Completed'),
  GET_ERROR: type('[Pizza] GET Error'),

  CREATE: type('[Pizza] CREATE Requested'),
  CREATE_COMPLETED: type('[Pizza] CREATE Completed'),
  CREATE_ERROR: type('[Pizza] CREATE Error'),

  UPDATE: type('[Pizza] UPDATE Requested'),
  UPDATE_COMPLETED: type('[Pizza] UPDATE Completed'),
  UPDATE_ERROR: type('[Pizza] UPDATE Error'),

  REMOVE: type('[Pizza] REMOVE Requested'),
  REMOVE_COMPLETED: type('[Pizza] REMOVE Completed'),
  REMOVE_ERROR: type('[Pizza] REMOVE Error')
};

export class PizzaPayload {
  constructor(public pizza: Pizza) {}
}

export class PizzaUpdatePayload {
  constructor(public pizzaId: string, public pizza: Partial<Pizza>) {}
}

export class PizzaIdPayload {
  constructor(public pizzaId: string) {}
}

export class PizzasPayload {
  constructor(public pizzas: Pizza[]) {}
}

export class GetAllAction implements Action {
  type = ActionTypes.GET_ALL;

  constructor(public payload: any = null) {}
}

export class GetAllCompletedAction implements Action {
  type = ActionTypes.GET_ALL_COMPLETED;

  constructor(public payload: PizzasPayload) {}
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

  constructor(public payload: PizzasPayload) {}
}

export class GetErrorAction implements Action {
  type = ActionTypes.GET_ERROR;

  constructor(public payload: string) {}
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: PizzaPayload) {}
}

export class CreateCompletedAction implements Action {
  type = ActionTypes.CREATE_COMPLETED;

  constructor(public payload: PizzaPayload) {}
}

export class CreateErrorAction implements Action {
  type = ActionTypes.CREATE_ERROR;

  constructor(public payload: string) {}
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: PizzaUpdatePayload) {}
}

export class UpdateCompletedAction implements Action {
  type = ActionTypes.UPDATE_COMPLETED;

  constructor(public payload: PizzaPayload) {}
}

export class UpdateErrorAction implements Action {
  type = ActionTypes.UPDATE_ERROR;

  constructor(public payload: string) {}
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: PizzaIdPayload) {}
}

export class RemoveCompletedAction implements Action {
  type = ActionTypes.REMOVE_COMPLETED;

  constructor(public payload: PizzaPayload) {}
}

export class RemoveErrorAction implements Action {
  type = ActionTypes.REMOVE_ERROR;

  constructor(public payload: string) {}
}

export type PizzaAction =
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
