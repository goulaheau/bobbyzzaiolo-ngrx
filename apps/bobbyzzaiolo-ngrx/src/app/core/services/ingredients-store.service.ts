import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import * as actions from '../../ingredients/+state/ingredients.actions';
import { Ingredient } from '../../ingredients/+state/ingredients.interfaces';

@Injectable()
export class IngredientsStoreService {
  ingredients$: Observable<Ingredient[]>;

  constructor(private store: Store<any>) {
    this.ingredients$ = store.select('ingredients') as Observable<Ingredient[]>;
    store.dispatch(new actions.GetAllAction());
  }

  getIngredient(id: string): Observable<Ingredient | null> {
    let found = false;

    return new Observable(observer => {
      this.ingredients$.forEach(ingredients => {
        ingredients.forEach(ingredient => {
          if (ingredient._id === id) {
            found = true;
            observer.next(ingredient);
          }
        });
      });

      if (!found) {
        observer.next(null);
      }
    });
  }

  createIngredient(ingredient: Ingredient) {
    this.store.dispatch(new actions.CreateAction(new actions.IngredientPayload(ingredient)));
  }

  updateIngredient(ingredientId: string, ingredient: Partial<Ingredient>) {
    this.store.dispatch(new actions.UpdateAction(new actions.IngredientUpdatePayload(ingredientId, ingredient)));
  }

  removeIngredient(ingredientId: string) {
    this.store.dispatch(new actions.RemoveAction(new actions.IngredientIdPayload(ingredientId)));
  }
}
