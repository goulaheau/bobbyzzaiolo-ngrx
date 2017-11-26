import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import * as actions from '../../pizzas/+state/pizzas.actions';
import { Pizza } from '../../pizzas/+state/pizzas.interfaces';

@Injectable()
export class PizzasStoreService {
  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<any>) {
    store.dispatch(new actions.GetAllAction());
    this.pizzas$ = store.select('pizzas') as Observable<Pizza[]>;
  }

  getPizza(id: string): Observable<Pizza | null> {
    let found = false;

    return new Observable(observer => {
      this.pizzas$.forEach(pizzas => {
        pizzas.forEach(pizza => {
          if (pizza._id === id) {
            found = true;
            observer.next(pizza);
          }
        });
      });

      if (!found) {
        observer.next(null);
      }
    });
  }

  createPizza(pizza: Pizza) {
    this.store.dispatch(new actions.CreateAction(new actions.PizzaPayload(pizza)));
  }

  updatePizza(pizzaId: string, pizza: Partial<Pizza>) {
    this.store.dispatch(new actions.UpdateAction(new actions.PizzaUpdatePayload(pizzaId, pizza)));
  }

  removePizza(pizzaId: string) {
    this.store.dispatch(new actions.RemoveAction(new actions.PizzaIdPayload(pizzaId)));
  }
}
