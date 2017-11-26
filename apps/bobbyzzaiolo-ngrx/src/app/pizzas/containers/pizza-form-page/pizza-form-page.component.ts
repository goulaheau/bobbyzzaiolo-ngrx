import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../../+state/pizzas.interfaces';
import { PizzasStoreService } from '../../../core/services/pizzas-store.service';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from '../../../ingredients/+state/ingredients.interfaces';
import { IngredientsStoreService } from '../../../core/services/ingredients-store.service';

@Component({
  selector   : 'app-pizza-form-page',
  templateUrl: './pizza-form-page.component.html',
  styleUrls  : ['./pizza-form-page.component.css']
})
export class PizzaFormPageComponent implements OnInit {
  pizza$: Observable<Pizza | null>;
  ingredients$: Observable<Ingredient[]>;

  constructor(private route: ActivatedRoute,
              private pizzasStoreService: PizzasStoreService,
              private ingredientsStoreService: IngredientsStoreService) {}

  ngOnInit(): void {
    this.ingredients$ = this.ingredientsStoreService.ingredients$;
    const id          = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pizza$ = this.pizzasStoreService.getPizza(id);
    } else {
      this.pizza$ = null;
    }
  }

  onCreatePizza(pizza: Pizza): void {
    this.pizzasStoreService.createPizza(pizza);
  }

  onUpdatePizza(values: { id: string; pizza: Pizza }): void {
    this.pizzasStoreService.updatePizza(values.id, values.pizza);
  }
}
