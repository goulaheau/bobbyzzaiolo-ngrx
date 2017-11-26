import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as ingredientsActions from './ingredients.actions';
import { IngredientsService } from '../../core/services/ingredients.service';
import { AlertService } from '../../core/services/alert.service';
import { Router } from '@angular/router';

@Injectable()
export class IngredientsEffects {
  constructor(private api: IngredientsService,
              private actions$: Actions,
              private alertService: AlertService,
              private router: Router) {}

  @Effect()
  loadAction$: Observable<Action> = this.actions$.ofType(ingredientsActions.ActionTypes.GET_ALL).switchMap(() =>
    this.api
      .getAll()
      .map(res => new ingredientsActions.GetAllCompletedAction({ ingredients: res }))
      .catch(() => Observable.of({ type: ingredientsActions.ActionTypes.GET_ALL_ERROR }))
  );

  @Effect()
  createAction$: Observable<Action> = this.actions$
    .ofType(ingredientsActions.ActionTypes.CREATE)
    .map((action: any) => action.payload.ingredient)
    .switchMap(payload =>
      this.api
        .post(payload)
        .map(ingredient => {
          this.router.navigate(['/admin']);
          this.alertService.emitAlert('alert-success', `L'ingrédient ${ingredient.name} a été créé.`);
          return new ingredientsActions.CreateCompletedAction({ ingredient: null });
        })
        .catch(() => {
          this.alertService.emitAlert('alert-danger', 'Une erreur s\'est produite lors de l\'ajout de l\'ingrédient.');
          return Observable.of({ type: ingredientsActions.ActionTypes.CREATE_ERROR });
        })
    );

  @Effect()
  createdAction$: Observable<Action> =
    this.api.ingredientCreated$
      .switchMap(ingredient => Observable.of(new ingredientsActions.CreateCompletedAction({ ingredient: ingredient })));

  @Effect()
  updateAction$: Observable<Action> = this.actions$
    .ofType(ingredientsActions.ActionTypes.UPDATE)
    .map((action: any) => action.payload)
    .switchMap(payload =>
      this.api
        .patch(payload.ingredientId, payload.ingredient)
        .map(ingredient => {
          this.router.navigate(['/admin']);
          this.alertService.emitAlert('alert-success', `L'ingrédient ${ingredient.name} a été modifié.`);
          return new ingredientsActions.UpdateCompletedAction({ ingredient: null });
        })
        .catch(() => {
          this.alertService.emitAlert('alert-danger', 'Une erreur s\'est produite lors de la modification de l\'ingrédient.');
          return Observable.of({ type: ingredientsActions.ActionTypes.UPDATE_ERROR });
        })
    );

  @Effect()
  updatedAction$: Observable<Action> =
    this.api.ingredientUpdated$
      .switchMap(ingredient => Observable.of(new ingredientsActions.UpdateCompletedAction({ ingredient: ingredient })));

  @Effect()
  removeAction$: Observable<Action> = this.actions$
    .ofType(ingredientsActions.ActionTypes.REMOVE)
    .map((action: any) => action.payload)
    .switchMap(payload =>
      this.api
        .delete(payload.ingredientId)
        .map(ingredient => {
          this.alertService.emitAlert('alert-success', `L'ingrédient ${ingredient.name} a été supprimé.`);
          return new ingredientsActions.RemoveCompletedAction({ ingredient: null });
        })
        .catch(() => {
          this.alertService.emitAlert('alert-danger', 'Une erreur s\'est produite lors de la suppression de l\'ingrédient.');
          return Observable.of({ type: ingredientsActions.ActionTypes.REMOVE_ERROR });
        })
    );

  @Effect()
  removedAction$: Observable<Action> =
    this.api.ingredientRemoved$
      .switchMap(ingredient => Observable.of(new ingredientsActions.RemoveCompletedAction({ ingredient: ingredient })));
}
