import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from '../../../ingredients/+state/ingredients.interfaces';
import { Pizza } from '../../../pizzas/+state/pizzas.interfaces';

import { IngredientsStoreService } from '../../../core/services/ingredients-store.service';
import { PizzasStoreService } from '../../../core/services/pizzas-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;
  pizzas$: Observable<Pizza[]>;

  constructor(
    private ingredientsStoreService: IngredientsStoreService,
    private pizzasStoreService: PizzasStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ingredients$ = this.ingredientsStoreService.ingredients$;
    this.pizzas$ = this.pizzasStoreService.pizzas$;
  }

  onAddIngredient(): void {
    this.router.navigate(['ingredients/form']);
  }

  onEditIngredient(ingredient: Ingredient): void {
    this.router.navigate([`ingredients/form/${ingredient._id}`]);
  }

  onDeleteIngredient(ingredients: Ingredient | Ingredient[]): void {
    if (!(ingredients instanceof Array)) {
      ingredients = [ingredients];
    }

    ingredients.forEach(ingredient => this.ingredientsStoreService.removeIngredient(ingredient._id));
  }

  onAddPizza(): void {
    this.router.navigate(['pizzas/form']);
  }

  onEditPizza(pizza: Pizza): void {
    this.router.navigate([`pizzas/form/${pizza._id}`]);
  }

  onDeletePizza(pizzas: Pizza | Pizza[]): void {
    if (!(pizzas instanceof Array)) {
      pizzas = [pizzas];
    }

    pizzas.forEach(pizza => this.pizzasStoreService.removePizza(pizza._id));
  }
}
