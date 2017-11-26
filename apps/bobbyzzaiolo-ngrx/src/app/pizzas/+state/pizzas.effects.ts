import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as pizzasActions from './pizzas.actions';
import { PizzasService } from '../../core/services/pizzas.service';
import { AlertService } from '../../core/services/alert.service';
import { Router } from '@angular/router';

@Injectable()
export class PizzasEffects {
  constructor(private api: PizzasService,
              private actions$: Actions,
              private alertService: AlertService,
              private router: Router) {}

  @Effect()
  loadAction$: Observable<Action> = this.actions$.ofType(pizzasActions.ActionTypes.GET_ALL).switchMap(() =>
    this.api
      .getAll()
      .map(res => new pizzasActions.GetAllCompletedAction({ pizzas: res }))
      .catch(err => Observable.of({ type: pizzasActions.ActionTypes.GET_ALL_ERROR }))
  );

  @Effect()
  createAction$: Observable<Action> = this.actions$
    .ofType(pizzasActions.ActionTypes.CREATE)
    .map((action: any) => action.payload.pizza)
    .switchMap(payload =>
      this.api
        .post(payload)
        .map(() => {
          this.router.navigate(['/admin']);
          return new pizzasActions.CreateCompletedAction({ pizza: null });
        })
        .catch(() => {
          this.alertService.emitAlert('alert-danger', 'Une erreur s\'est produite lors de l\'ajout de la pizza.');
          return Observable.of({ type: pizzasActions.ActionTypes.CREATE_ERROR });
        })
    );

  @Effect()
  createdAction$: Observable<Action> =
    this.api.pizzaCreated$
      .switchMap(pizza => {
        this.alertService.emitAlert('alert-info', `La pizza ${pizza.name} a été ajoutée à la carte !`);
        return Observable.of(new pizzasActions.CreateCompletedAction({ pizza: pizza }));
      });

  @Effect()
  updateAction$: Observable<Action> = this.actions$
    .ofType(pizzasActions.ActionTypes.UPDATE)
    .map((action: any) => action.payload)
    .switchMap(payload =>
      this.api
        .patch(payload.pizzaId, payload.pizza)
        .map(pizza => {
          this.router.navigate(['/admin']);
          this.alertService.emitAlert('alert-success', `La pizza ${pizza.name} a été modifiée.`);
          return new pizzasActions.UpdateCompletedAction({ pizza: pizza });
        })
        .catch(() => {
          this.alertService.emitAlert('alert-danger', 'Une erreur s\'est produite lors de la modification de la pizza.');
          return Observable.of({ type: pizzasActions.ActionTypes.UPDATE_ERROR });
        })
    );

  @Effect()
  updatedAction$: Observable<Action> =
    this.api.pizzaUpdated$
      .switchMap(pizza => Observable.of(new pizzasActions.UpdateCompletedAction({ pizza: pizza })));

  @Effect()
  removeAction$: Observable<Action> = this.actions$
    .ofType(pizzasActions.ActionTypes.REMOVE)
    .map((action: any) => action.payload)
    .switchMap(payload =>
      this.api
        .delete(payload.pizzaId)
        .map(pizza => {
          this.alertService.emitAlert('alert-success', `La pizza ${pizza.name} a été supprimée.`);
          return new pizzasActions.RemoveCompletedAction({ pizza: null });
        })
        .catch(() => {
          this.alertService.emitAlert('alert-danger', 'Une erreur s\'est produite lors de la suppression de la pizza.');
          return Observable.of({ type: pizzasActions.ActionTypes.REMOVE_ERROR });
        })
    );

  @Effect()
  removedAction$: Observable<Action> =
    this.api.pizzaRemoved$
      .switchMap(pizza => Observable.of(new pizzasActions.RemoveCompletedAction({ pizza: pizza })));
}
